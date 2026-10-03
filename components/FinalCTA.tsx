import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
          Start manifesting today
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Ready to see your dreams on your wall?
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Join thousands turning their vision into reality. Design yours in minutes.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/register?returnTo=/ai-studio" className="btn-primary">
            Start Designing — Free
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          No charge until you approve your design.
        </p>
      </div>
    </section>
  );
}
