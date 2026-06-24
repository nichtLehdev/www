import Link from 'next/link'
import SubpageLayout from '@/components/SubpageLayout'
import BikeImage from '@/components/BikeImage'
import { bikes, STRAVA_PROFILE_URL } from './bikes'
import { galleryImages } from './gallery'

export default function BikingPage() {
  return (
    <SubpageLayout
      title="Biking"
      subtitle="Road biking, routes, gear."
    >
      <p className="mb-12 text-slate-600 dark:text-slate-400 leading-relaxed">
        I&apos;ve been riding bikes my whole life and have been into road biking
        for about 5–6 years. I also enjoy a bit of mountain biking now and then.
      </p>

      {/* WM Challenge link */}
      <Link
        href="/biking/wm-challenge"
        className="mb-12 block overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/40 transition-colors hover:border-slate-400 dark:hover:border-slate-500"
      >
        <div className="p-4 md:p-5">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            WM Challenge 2026
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            One World Cup. 38 match days. Every km counts.
          </p>
        </div>
      </Link>

      {/* Strava link — embed removed: Strava widgets show 4EC / "content unavailable" since Jan 2026; re-add StravaEmbed when fixed */}
      <div className="mb-12">
        <a
          href={STRAVA_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800/60 px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200 transition-colors hover:border-orange-500/80 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
        >
          <StravaIcon className="h-5 w-5" />
          Visit my Strava
        </a>
      </div>

      {/* Bikes */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Bikes
        </h2>
        <ul className="space-y-10">
          {bikes.map((bike) => (
            <li key={bike.id} className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/40">
              <BikeImage
                src={bike.image}
                alt={bike.name}
                className="aspect-3/2 w-full"
              />
              <div className="p-4 md:p-5">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{bike.name}</h3>
                  {bike.type && (
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-500">
                      {bike.type}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {bike.spec}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Photo gallery */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Photos
        </h2>
        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {galleryImages.map((img, i) => (
              <figure
                key={i}
                className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/40"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/biking/${img.src}`}
                  alt={img.alt ?? ''}
                  className="aspect-4/3 w-full object-cover"
                />
                {img.alt && (
                  <figcaption className="p-3 text-sm text-slate-500 dark:text-slate-500">
                    {img.alt}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        ) : (
          <p className="rounded-lg border border-dashed border-slate-300 dark:border-slate-600/80 bg-slate-100 dark:bg-slate-800/30 p-6 text-center text-slate-500 text-sm">
            Add images to <code className="rounded bg-slate-200 dark:bg-slate-700/60 px-1.5 py-0.5 font-mono">public/biking/gallery/</code> and list them in{' '}
            <code className="rounded bg-slate-200 dark:bg-slate-700/60 px-1.5 py-0.5 font-mono">src/app/biking/gallery.ts</code>.
          </p>
        )}
      </section>
    </SubpageLayout>
  )
}

function StravaIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
    </svg>
  )
}
