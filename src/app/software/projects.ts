export interface Project {
  id: string
  title: string
  description: string
  /** Short tagline or role, e.g. "Personal site" or "Full‑stack app" */
  tag?: string
  /** Tech used (displayed as tags) */
  tech: string[]
  /** Live URL */
  href?: string
  /** Repo URL */
  repo?: string
  /** Optional year or date range */
  period?: string
}

/** Add your projects here. Order as you like (e.g. newest or favourite first). */
export const projects: Project[] = [
  {
    id: '1',
    title: 'Posaunenwerk Rheinland',
    tag: 'Full-stack · Web platform',
    description:
      'Full-stack web platform for a regional brass music association. The public site offers an event calendar, course listings, news, and organizational information. A role-based dashboard lets staff manage content (events, courses, posts), handle course registrations, and run an approval workflow (draft → pending → approved) with different permission levels (admin, regional, district). Includes Docker-based deployment, RSS and iCal feeds, and optional two-factor authentication.',
    tech: [
      'Next.js 16 (App Router)',
      'TypeScript',
      'tRPC',
      'Prisma',
      'PostgreSQL',
      'Better Auth',
      'Tailwind CSS',
      'Docker',
      'RSS',
      'iCal',
      '2FA',
    ],
    href: 'https://pwr.lehdev.de',
    repo: 'https://github.com/nichtLehdev/pwr-web',
    period: '2025 - present',
  },
  {
    id: '2',
    title: 'Deutsche Bahn data mining',
    tag: 'Big data · Data mining',
    description:
      'Data-mining project around Deutsche Bahn: collecting and processing railway data for delayed stops, changed platforms, and related real-time or historical changes. Built to explore and analyze DB data at scale.',
    tech: ['Python', 'Data mining', 'APIs', 'PostgreSQL'],
    href: undefined,
    repo: undefined,
    period: '05/2025 - present',
  },
]
