import HeaderWithSidebar from '@/components/HeaderWithSidebar'
import Footer from '@/components/Footer'
import GlitchText from '@/components/GlitchText'
import CycleTagline from '@/components/CycleTagline'

const SUB_NAMES = 'lars.dev · lehdev · nichtLehdev'
const ROLES = 'developer · musician · photographer'

const birthDate = new Date('2002-04-08')

function getAge() {
  return Math.floor(
    (new Date().getTime() - birthDate.getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
  )
}

export default function Home() {
  const age = getAge()
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#0f172a] dark:text-slate-200 font-(--font-geist-sans) flex flex-col">
      <HeaderWithSidebar />

      <main className="flex-1 flex items-center justify-center px-6">
        <section className="text-center animate-hero-in w-full max-w-2xl">
          <h1 className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white md:text-8xl">
            Lars
          </h1>
          <CycleTagline
            lineA={
              <GlitchText
                text={SUB_NAMES}
                intervalMs={10000}
                glitchDurationMs={1500}
                glitchTickMs={100}
                glitchCount={10}
              />
            }
            lineB={
              <GlitchText
                text={ROLES}
                intervalMs={10000}
                glitchDurationMs={1000}
                glitchTickMs={100}
                glitchCount={10}
              />
            }
            durationA={15000}
            durationB={10000}
            className="mt-4 font-mono text-slate-500 dark:text-slate-400 text-xl md:text-2xl"
          />
          <p className="mt-10 max-w-md mx-auto text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            Hi, I&apos;m Lars - a {age}-year-old software engineer from Germany.
            Welcome to my corner of the web. Here you&apos;ll find some of my
            work and the things I do for fun.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
