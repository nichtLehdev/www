import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = join(__dirname, '../..')
const SPIELTAGE_DIR = join(PROJECT_ROOT, 'src/app/biking/wm-challenge/spieltage')
const INDEX_FILE = join(SPIELTAGE_DIR, 'index.ts')

// ── helpers ──────────────────────────────────

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

function esc(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function getSpieltagFiles(): string[] {
  return readdirSync(SPIELTAGE_DIR)
    .filter((f) => /^spieltag-\d+\.ts$/.test(f))
    .sort()
}

function getSpieltagIds(): number[] {
  return getSpieltagFiles().map((f) => parseInt(f.match(/spieltag-(\d+)/)![1], 10))
}

interface SpieltagData {
  id: number
  date: string
  basedOn: string
  type: 'bike' | 'walk'
  isWalkConversion: boolean
  target: number
  covered: number
  status: 'done' | 'partial' | 'banked' | 'pending'
  matches: {
    homeTeam: string
    homeFlag: string
    awayTeam: string
    awayFlag: string
    homeScore: number
    awayScore: number
  }[]
  strava: {
    title: string
    km: number
    elevation?: number
    kcal?: number
    prs?: number
    note?: string
    url?: string
  }[]
  note?: string
}

function parseSpieltagFile(filePath: string): SpieltagData {
  const content = readFileSync(filePath, 'utf-8')
  const objectStr = content
    .replace(/^import\s.*$/gm, '')
    .replace(/export\s+const\s+\w+:\s*Spieltag\s*=\s*/, '')
    .trim()
    .replace(/;?\s*$/, '')
  return new Function(`return ${objectStr}`)() as SpieltagData
}

function generateSpieltagFile(data: SpieltagData): string {
  const varName = `spieltag${pad(data.id)}`

  const matchLines = data.matches
    .map(
      (m) =>
        `    { homeTeam: '${esc(m.homeTeam)}', homeFlag: '${m.homeFlag}', awayTeam: '${esc(m.awayTeam)}', awayFlag: '${m.awayFlag}', homeScore: ${m.homeScore}, awayScore: ${m.awayScore} },`,
    )
    .join('\n')

  const stravaLines = data.strava
    .map((a) => {
      const parts: string[] = [`title: '${esc(a.title)}'`, `km: ${a.km}`]
      if (a.elevation != null) parts.push(`elevation: ${a.elevation}`)
      if (a.kcal != null) parts.push(`kcal: ${a.kcal}`)
      if (a.prs != null) parts.push(`prs: ${a.prs}`)
      if (a.note) parts.push(`note: '${esc(a.note)}'`)
      if (a.url) parts.push(`url: '${esc(a.url)}'`)
      return `    { ${parts.join(', ')} },`
    })
    .join('\n')

  const noteField = data.note ? `\n  note: '${esc(data.note)}',` : ''

  return `import type { Spieltag } from '../types'

export const ${varName}: Spieltag = {
  id: ${data.id},
  date: '${esc(data.date)}',
  basedOn: '${esc(data.basedOn)}',
  type: '${data.type}',
  isWalkConversion: ${data.isWalkConversion},
  target: ${data.target},
  covered: ${data.covered},
  status: '${data.status}',
  matches: [
${matchLines}
  ],
  strava: [
${stravaLines}
  ],${noteField}
}
`
}

function regenerateIndex(): void {
  const ids = getSpieltagIds()

  const imports = ids
    .map((id) => `import { spieltag${pad(id)} } from './spieltag-${pad(id)}'`)
    .join('\n')

  const entries = ids.map((id) => `  spieltag${pad(id)},`).join('\n')

  const content = `${imports}
import type { Spieltag } from '../types'

export const spieltage: Spieltag[] = [
${entries}
]
`
  writeFileSync(INDEX_FILE, content, 'utf-8')
}

function gitCommitAndPush(spieltagId: number, isNew: boolean): string {
  const action = isNew ? 'add' : 'update'
  const msg = `${action} spieltag ${spieltagId}`
  try {
    execSync('git add src/app/biking/wm-challenge/spieltage/', { cwd: PROJECT_ROOT, stdio: 'pipe' })
    execSync(`git commit -m "${msg}"`, { cwd: PROJECT_ROOT, stdio: 'pipe' })
    execSync('git push', { cwd: PROJECT_ROOT, stdio: 'pipe' })
    return `Committed and pushed: "${msg}"`
  } catch (e) {
    const err = e as Error & { stderr?: Buffer }
    return `Git error: ${err.stderr?.toString() ?? err.message}`
  }
}

// ── zod schemas ──────────────────────────────

const MatchSchema = z.object({
  homeTeam: z.string(),
  homeFlag: z.string(),
  awayTeam: z.string(),
  awayFlag: z.string(),
  homeScore: z.number().int().min(0),
  awayScore: z.number().int().min(0),
})

const StravaSchema = z.object({
  title: z.string(),
  km: z.number(),
  elevation: z.number().optional(),
  kcal: z.number().optional(),
  prs: z.number().int().optional(),
  note: z.string().optional(),
  url: z.string().optional(),
})

const SpieltagSchema = z.object({
  id: z.number().int().min(1),
  date: z.string(),
  basedOn: z.string(),
  type: z.enum(['bike', 'walk']),
  isWalkConversion: z.boolean(),
  target: z.number(),
  covered: z.number(),
  status: z.enum(['done', 'partial', 'banked', 'pending']),
  matches: z.array(MatchSchema).min(1),
  strava: z.array(StravaSchema),
  note: z.string().optional(),
})

// ── server ───────────────────────────────────

const server = new McpServer({
  name: 'wm-challenge',
  version: '1.0.0',
})

server.tool(
  'list_spieltage',
  'List all existing Spieltage with summary info (id, date, type, target, covered, status)',
  {},
  async () => {
    const files = getSpieltagFiles()
    const summaries = files.map((f) => {
      const data = parseSpieltagFile(join(SPIELTAGE_DIR, f))
      return {
        id: data.id,
        date: data.date,
        type: data.type,
        target: data.target,
        covered: data.covered,
        status: data.status,
      }
    })

    const totalCovered = summaries.reduce((s, d) => s + d.covered, 0)
    const totalBanked = summaries.reduce((s, d) => {
      const diff = d.target - d.covered
      return diff > 0 ? s + diff : s
    }, 0)

    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify(
            { spieltage: summaries, totalCovered: Math.round(totalCovered), totalBanked: Math.round(totalBanked) },
            null,
            2,
          ),
        },
      ],
    }
  },
)

server.tool(
  'get_spieltag',
  'Get full data for a specific Spieltag by ID',
  { id: z.number().int().min(1).describe('Spieltag number (e.g. 1, 2, 13)') },
  async ({ id }) => {
    const filePath = join(SPIELTAGE_DIR, `spieltag-${pad(id)}.ts`)
    if (!existsSync(filePath)) {
      return {
        content: [{ type: 'text' as const, text: `Spieltag ${id} does not exist.` }],
        isError: true,
      }
    }
    const data = parseSpieltagFile(filePath)
    return {
      content: [{ type: 'text' as const, text: JSON.stringify(data, null, 2) }],
    }
  },
)

server.tool(
  'save_spieltag',
  'Create or update a Spieltag file. Provide the full Spieltag data. Automatically updates the index, commits, and pushes.',
  SpieltagSchema.shape,
  async (data) => {
    const filePath = join(SPIELTAGE_DIR, `spieltag-${pad(data.id)}.ts`)
    const isNew = !existsSync(filePath)
    const fileContent = generateSpieltagFile(data as SpieltagData)
    writeFileSync(filePath, fileContent, 'utf-8')
    regenerateIndex()

    const gitResult = gitCommitAndPush(data.id, isNew)

    return {
      content: [
        {
          type: 'text' as const,
          text: `Spieltag ${data.id} ${isNew ? 'created' : 'updated'} at spieltag-${pad(data.id)}.ts. Index regenerated.\n${gitResult}`,
        },
      ],
    }
  },
)

server.tool(
  'get_next_spieltag_id',
  'Returns the next available Spieltag ID (max existing + 1)',
  {},
  async () => {
    const ids = getSpieltagIds()
    const next = ids.length > 0 ? Math.max(...ids) + 1 : 1
    return {
      content: [{ type: 'text' as const, text: String(next) }],
    }
  },
)

const transport = new StdioServerTransport()
await server.connect(transport)
