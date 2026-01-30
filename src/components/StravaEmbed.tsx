'use client'

import { useEffect, useRef } from 'react'

/**
 * Renders the Strava "Share your Activities" feed if athleteId is set.
 * Get your ID from your Strava profile URL: .../athletes/12345 → 12345.
 * Set NEXT_PUBLIC_STRAVA_ATHLETE_ID in .env.local.
 */
export default function StravaEmbed({ athleteId }: { athleteId: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!athleteId || !containerRef.current) return
    const script = document.createElement('script')
    script.src = 'https://strava-embeds.com/embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      script.remove()
    }
  }, [athleteId])

  if (!athleteId) return null

  return (
    <div ref={containerRef} className="w-full overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800/40">
      <div
        className="strava-embed-placeholder min-h-[200px] w-full"
        data-embed-type="athlete"
        data-embed-id={athleteId}
        data-style="standard"
      />
    </div>
  )
}
