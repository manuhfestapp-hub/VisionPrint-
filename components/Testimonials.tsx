const testimonials = [
  {
    quote:
      "I've never seen anything like this. My vision board has my face in my dream home — I look at it every morning and it's already becoming reality.",
    name: 'Sarah M.',
    role: 'Entrepreneur',
    initial: 'S',
  },
  {
    quote:
      'The AI understood exactly what I wanted. The print quality is stunning — it looks like gallery art. Worth every penny.',
    name: 'James T.',
    role: 'Designer',
    initial: 'J',
  },
  {
    quote:
      'Designed mine in 5 minutes, approved it, and it was at my door in a week. The likeness feature blew my mind.',
    name: 'Maya R.',
    role: 'Teacher',
    initial: 'M',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center section-title">Loved by Dreamers</h2>
        <p className="text-center section-sub">Join thousands who&apos;ve turned their vision into reality.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="card flex flex-col">
              <div className="text-gold">★★★★★</div>
              <p className="mt-3 flex-1 text-sm text-gray-300">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-bold text-white">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
