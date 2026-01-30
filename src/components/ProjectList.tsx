import type { Project } from '@/app/software/projects'

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="space-y-10">
      {projects.map((project) => (
        <li key={project.id} className="relative">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            {project.period && (
              <span className="font-mono text-sm text-slate-500 dark:text-slate-500">
                {project.period}
              </span>
            )}
            {project.tag && (
              <span className="text-sm text-slate-500 dark:text-slate-500">{project.tag}</span>
            )}
          </div>
          <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-slate-200 dark:bg-slate-800/80 px-2.5 py-1 font-mono text-xs text-slate-700 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
          {(project.href || project.repo) && (
            <div className="mt-4 flex flex-wrap gap-4">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 underline decoration-slate-400 dark:decoration-slate-500 underline-offset-2 hover:text-slate-900 dark:hover:text-white hover:decoration-slate-600 dark:hover:decoration-slate-400 transition-colors"
                >
                  Live →
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 underline decoration-slate-400 dark:decoration-slate-500 underline-offset-2 hover:text-slate-900 dark:hover:text-white hover:decoration-slate-600 dark:hover:decoration-slate-400 transition-colors"
                >
                  Repo →
                </a>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
