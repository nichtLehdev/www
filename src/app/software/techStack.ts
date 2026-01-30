export interface TechCategory {
  id: string
  label: string
  items: string[]
}

/** Edit categories and items to match your real stack. */
export const techStack: TechCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Vite',
      'React Query',
      'Vue.js',
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    items: [
      'Node.js',
      'Express',
      'REST',
      'GraphQL',
      'tRPC',
      'FastAPI',
      'Quarkus',
      'Keycloak',
    ],
  },
  {
    id: 'data',
    label: 'Data & Infra',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS'],
  },
  {
    id: 'tools',
    label: 'Tools & Practices',
    items: ['Git', 'CI/CD', 'Agile', 'Scrum'],
  },
]
