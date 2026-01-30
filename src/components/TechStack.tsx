import type { TechCategory } from '@/app/software/techStack'

export default function TechStack({ categories }: { categories: TechCategory[] }) {
  return (
    <div className="space-y-8">
      {categories.map((cat) => (
        <div key={cat.id}>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
            {cat.label}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2" role="list">
            {cat.items.map((item) => (
              <li
                key={item}
                className="rounded-md border border-slate-300 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800/40 px-3 py-1.5 font-mono text-sm text-slate-700 dark:text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
