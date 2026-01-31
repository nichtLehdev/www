'use client'

import Link from 'next/link'
import { useEffect } from 'react'

const SUBPAGES = [
  { href: '/software', label: 'Software' },
  { href: '/career', label: 'Career' },
  { href: '/biking', label: 'Biking' },
  { href: '/photography', label: 'Photography' },
  { href: '/trumpet', label: 'Trumpet' },
] as const

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (!open) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:bg-transparent md:backdrop-blur-none ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-[#0f172a] border-r border-slate-200 dark:border-slate-800/60 shadow-xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Subpages"
      >
        <div className="flex items-center justify-end px-6 py-4 border-b border-slate-200 dark:border-slate-800/60">
          <button
            type="button"
            onClick={onClose}
            className="p-2 -m-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800/60 transition-colors"
            aria-label="Close sidebar"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                onClick={onClose}
                className="block px-4 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800/60 transition-colors"
              >
                Home
              </Link>
            </li>
            <hr className="my-4 border-slate-200 dark:border-slate-800/60" />
            {SUBPAGES.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className="block px-4 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800/60 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}
