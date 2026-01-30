'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'biking', title: 'Biking' },
  { id: 'photography', title: 'Photography' },
  { id: 'software', title: 'Software' },
  { id: 'career', title: 'Career' },
  { id: 'trumpet', title: 'Trumpet' },
] as const

export default function Nav() {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    )
    if (els.length === 0) return
    const obs = new IntersectionObserver(
      (entries) => {
        let best: { id: string; ratio: number } | null = null
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = entry.target.id
          if (!best || entry.intersectionRatio > best.ratio) {
            best = { id, ratio: entry.intersectionRatio }
          }
        }
        if (best) setActiveId(best.id)
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    els.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
      <Link
        href="/"
        className="text-lg font-semibold text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
      >
        Lars
      </Link>
      <ul className="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`transition-colors hover:text-slate-800 dark:hover:text-slate-200 ${
                activeId === s.id ? 'text-slate-900 dark:text-white font-medium' : ''
              }`}
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
