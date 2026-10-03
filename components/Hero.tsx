import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          Vision Board Posters
        </p>
        <p className="mt-1 text-sm text-gray-400">
          AI-designed · Printed &amp; shipped to your door
        </p>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          See your{' '}
          <span className="text-brand-200">future</span>{' '}
          <span className="text-blush">self</span>{' '}
          every morning
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
          AI designs a personalized vision board from your dreams and photos —
          printed and shipped to your door. Free to start, no payment until you
          approve.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/register?returnTo=/ai-studio" className="btn-primary w-full sm:w-auto">
            Make mine in 60 seconds — free to start →
          </Link>
          <Link href="/register?returnTo=/templates" className="btn-secondary w-full sm:w-auto">
            Browse Templates
          </Link>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <div className="relative aspect-[16/10] bg-gradient-to-br from-ink-700 to-ink-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2 p-6">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-20 w-28 rounded-lg bg-gradient-to-br from-brand-500/40 to-blush/30 sm:h-24 sm:w-32"
                  />
                ))}
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-lg font-bold tracking-wide text-white/90">MY 2025 VISION BOARD</p>
              <p className="mt-1 text-sm text-white/70">DREAM BIG. BELIEVE. ACHIEVE.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
          <span className="text-gold">★★★★★</span>
          <span>Loved by 2,000+ dreamers · Free shipping on all prints</span>
        </div>
      </div>
    </section>
  );
}
