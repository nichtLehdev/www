'use client'

import Image from 'next/image'
import { useState } from 'react'

/** Shows bike image with a neutral placeholder if the file is missing. */
export default function BikeImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-200 dark:bg-slate-800/80 text-slate-500 ${className ?? ''}`}
        aria-hidden
      >
        <span className="text-sm">Add photo to public/biking/{src}</span>
      </div>
    )
  }

  return (
    <div className={`relative min-h-[200px] overflow-hidden ${className ?? ''}`}>
      <Image
        src={`/biking/${src}`}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setError(true)}
        sizes="(max-width: 672px) 100vw, 672px"
        unoptimized
      />
    </div>
  )
}
