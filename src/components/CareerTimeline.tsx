import type { CareerEvent } from '@/app/career/careerEvents'

const TYPE_LABELS: Record<NonNullable<CareerEvent['type']>, string> = {
  job: 'Job',
  'dual study': 'Education & Job',
  internship: 'Internship',
  education: 'Education',
  award: 'Award',
  project: 'Project',
  other: 'Other',
}

export default function CareerTimeline({ events }: { events: CareerEvent[] }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-[8px] top-2 bottom-2 w-px bg-slate-300 dark:bg-slate-600/50"
        aria-hidden
      />

      <ul className="space-y-0">
        {events.map((event) => (
          <li key={event.id} className="relative flex gap-6 pb-12 last:pb-0">
            {/* Dot */}
            <div
              className="relative z-10 mt-1.5 h-4 w-4 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500/70"
              aria-hidden
            />

            {/* Content block - minimal, no card */}
            <div className="min-w-0 flex-1 pt-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-sm text-slate-500 dark:text-slate-500">
                  {event.date}
                </span>
                {event.type && (
                  <span className="text-xs text-slate-500 dark:text-slate-500">
                    {TYPE_LABELS[event.type]}
                  </span>
                )}
              </div>
              <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-white">
                {event.title}
              </h2>
              {event.organization && (
                <p className="mt-0.5 text-slate-600 dark:text-slate-400">{event.organization}</p>
              )}
              {event.description && (
                <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {event.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
