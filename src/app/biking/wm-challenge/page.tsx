import SubpageLayout from '@/components/SubpageLayout'
import { spieltage } from './spieltage'
import type { Spieltag, Match, StravaActivity } from './types'

const totalTarget = spieltage.reduce((s, d) => s + d.target, 0)
const totalCovered = spieltage.reduce((s, d) => s + d.covered, 0)
const totalBanked = spieltage.reduce((s, d) => {
  const diff = d.target - d.covered
  return diff > 0 ? s + diff : s
}, 0)
const totalPRs = spieltage.reduce(
  (s, d) => s + d.strava.reduce((a, r) => a + (r.prs ?? 0), 0),
  0,
)
const daysCompleted = spieltage.filter((d) => d.status === 'done').length

function matchKm(m: Match, walkConversion: boolean): number {
  if (walkConversion) {
    return parseFloat(`${m.homeScore}.${m.awayScore}`)
  }
  return parseInt(`${m.homeScore}${m.awayScore}`, 10)
}

const STATUS_CONFIG: Record<Spieltag['status'], { label: string; banner: string; badge: string }> = {
  done: {
    label: 'Done',
    banner: 'bg-emerald-500 dark:bg-emerald-500',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  },
  partial: {
    label: 'Partial',
    banner: 'bg-amber-500 dark:bg-amber-500',
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  },
  banked: {
    label: 'Banked',
    banner: 'bg-red-500 dark:bg-red-500',
    badge: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  },
}

export default function WmChallengePage() {
  return (
    <SubpageLayout
      title="WM Challenge 2026"
      subtitle="One World Cup. 38 match days. Every km counts."
    >
      {/* Stats overview */}
      <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Covered" value={`~${Math.round(totalCovered)} km`} />
        <StatCard label="Banked" value={`${Math.round(totalBanked)} km`} />
        <StatCard label="Days done" value={`${daysCompleted} / ${spieltage.length}`} />
        <StatCard label="Strava PRs" value={String(totalPRs)} />
      </div>

      {/* Progress bar */}
      <div className="mb-12">
        <div className="mb-2 flex items-baseline justify-between text-sm">
          <span className="text-slate-600 dark:text-slate-400">
            {Math.round(totalCovered)} / {Math.round(totalTarget)} km target
          </span>
          <span className="font-mono text-slate-500">
            {Math.round((totalCovered / totalTarget) * 100)}%
          </span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700/60">
          <div
            className="h-full rounded-full bg-emerald-500 dark:bg-emerald-400 transition-all"
            style={{ width: `${Math.min((totalCovered / totalTarget) * 100, 100)}%` }}
          />
        </div>
      </div>

      {/* Rules summary */}
      <details className="mb-12 rounded-lg border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/40">
        <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 select-none">
          How it works
        </summary>
        <div className="border-t border-slate-200 dark:border-slate-700/80 px-4 py-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed space-y-2">
          <p>
            Each day&apos;s km target comes from the previous day&apos;s World Cup scores.
            Scores are concatenated as digits: <strong>1:0</strong> = 10 km, <strong>7:1</strong> = 71 km.
          </p>
          <p>
            On walk days the score is read as a decimal instead: <strong>1:1</strong> = 1.1 km.
          </p>
          <p>
            Unfinished km are <em>banked</em> and must be cleared on a future day.
          </p>
        </div>
      </details>

      {/* Spieltag log */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Spieltag Log
        </h2>
        <ul className="space-y-6">
          {spieltage.map((day) => (
            <SpieltagCard key={day.id} day={day} />
          ))}
        </ul>
      </section>
    </SubpageLayout>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/40 p-4">
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  )
}

function SpieltagCard({ day }: { day: Spieltag }) {
  const config = STATUS_CONFIG[day.status]
  const totalMatchKm = day.matches.reduce((s, m) => s + matchKm(m, day.isWalkConversion), 0)

  return (
    <li className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/40">
      {/* Status banner */}
      <div className={`flex items-center gap-3 px-4 py-2 ${config.banner}`}>
        <span className={`rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${config.badge}`}>
          {config.label}
        </span>
        <span className="font-semibold text-white text-sm">
          Spieltag {day.id}
        </span>
        <span className="font-mono text-xs text-white/70">
          {day.date}
        </span>
      </div>

      {/* Km summary bar */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700/80 px-4 py-3">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold tabular-nums text-slate-900 dark:text-white">
            {day.covered}
          </span>
          <span className="text-sm text-slate-500">/</span>
          <span className="text-lg font-semibold tabular-nums text-slate-500 dark:text-slate-400">
            {day.target} km
          </span>
          {day.status === 'partial' && (
            <span className="ml-2 rounded-full bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-400">
              +{Math.round(day.target - day.covered)} banked
            </span>
          )}
          {day.status === 'banked' && (
            <span className="ml-2 rounded-full bg-red-100 dark:bg-red-900/30 px-2 py-0.5 text-xs font-medium text-red-700 dark:text-red-400">
              +{day.target} banked
            </span>
          )}
        </div>
        <span className="text-xl">
          {day.type === 'bike' ? '🚴' : '🚶'}
        </span>
      </div>

      {/* Scoreboard */}
      <div className="border-b border-slate-200 dark:border-slate-700/80">
        <div className="divide-y divide-slate-100 dark:divide-slate-700/40">
          {day.matches.map((m, i) => {
            const km = matchKm(m, day.isWalkConversion)
            return (
              <div key={i} className="grid grid-cols-[1fr_auto_1fr_auto] items-center gap-x-2 px-4 py-2">
                <div className="flex items-center gap-2 justify-end text-sm">
                  <span className="text-slate-700 dark:text-slate-300 truncate text-right">
                    {m.homeTeam}
                  </span>
                  <span className="text-base">{m.homeFlag}</span>
                </div>
                <div className="flex items-center gap-1 px-2">
                  <span className="w-6 text-center font-mono text-base font-bold tabular-nums text-slate-900 dark:text-white">
                    {m.homeScore}
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 text-xs font-medium">-</span>
                  <span className="w-6 text-center font-mono text-base font-bold tabular-nums text-slate-900 dark:text-white">
                    {m.awayScore}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-base">{m.awayFlag}</span>
                  <span className="text-slate-700 dark:text-slate-300 truncate">
                    {m.awayTeam}
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500 w-12 text-right tabular-nums">
                  {day.isWalkConversion ? km.toFixed(1) : km} km
                </span>
              </div>
            )
          })}
        </div>
        <div className="flex justify-end border-t border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 px-4 py-1.5">
          <span className="font-mono text-xs font-medium text-slate-600 dark:text-slate-400 tabular-nums">
            = {day.isWalkConversion ? totalMatchKm.toFixed(1) : totalMatchKm} km
          </span>
        </div>
      </div>

      {/* Strava activities */}
      {day.strava.length > 0 && (
        <div className="space-y-2 px-4 py-3">
          {day.strava.map((a, i) => (
            <StravaCard key={i} activity={a} />
          ))}
        </div>
      )}

      {/* Note */}
      {day.note && (
        <div className="border-t border-slate-100 dark:border-slate-700/40 px-4 py-2.5">
          <p className="text-xs text-slate-500 dark:text-slate-500 italic">
            {day.note}
          </p>
        </div>
      )}
    </li>
  )
}

function StravaCard({ activity: a }: { activity: StravaActivity }) {
  const Title = a.url ? 'a' : 'span'
  const titleProps = a.url
    ? { href: a.url, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <div className="flex items-start gap-3 rounded-md bg-slate-50 dark:bg-slate-800/60 px-3 py-2.5">
      <StravaIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
      <div className="min-w-0 flex-1">
        <Title
          {...titleProps}
          className={`text-sm font-medium ${
            a.url
              ? 'text-orange-600 dark:text-orange-400 hover:underline'
              : 'text-slate-800 dark:text-slate-200'
          }`}
        >
          {a.title}
        </Title>
        {a.note && (
          <span className="ml-2 text-xs text-slate-500 dark:text-slate-500">
            {a.note}
          </span>
        )}
        <div className="mt-1.5 flex flex-wrap gap-2">
          <StatPill label={`${a.km} km`} />
          {a.elevation != null && <StatPill label={`${a.elevation}m`} icon="↑" />}
          {a.kcal != null && <StatPill label={`${a.kcal} kcal`} />}
          {a.prs != null && a.prs > 0 && <StatPill label={`${a.prs} PRs`} highlight />}
        </div>
      </div>
    </div>
  )
}

function StatPill({ label, icon, highlight }: { label: string; icon?: string; highlight?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 font-mono text-xs tabular-nums ${
        highlight
          ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 font-medium'
          : 'bg-slate-200/70 text-slate-600 dark:bg-slate-700/60 dark:text-slate-400'
      }`}
    >
      {icon && <span>{icon}</span>}
      {label}
    </span>
  )
}

function StravaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
    </svg>
  )
}
