import SubpageLayout from '@/components/SubpageLayout'
import ProjectList from '@/components/ProjectList'
import TechStack from '@/components/TechStack'
import { projects } from './projects'
import { techStack } from './techStack'

export default function SoftwarePage() {
  return (
    <SubpageLayout
      title="Software"
      subtitle="Projects, tech stack, and what I build with."
    >
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Projects
        </h2>
        <ProjectList projects={projects} />
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Tech stack
        </h2>
        <TechStack categories={techStack} />
      </section>
    </SubpageLayout>
  )
}
