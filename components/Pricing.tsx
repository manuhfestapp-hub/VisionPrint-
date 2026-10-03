import Link from 'next/link';

const tiers = [
  {
    name: 'Digital',
    price: '$14.99',
    tagline: 'Instant delivery, no shipping.',
    features: [
      'High-resolution printable PDF',
      'Phone & desktop wallpapers',
      'Email delivery',
      'Unlimited revisions before download',
    ],
    popular: false,
  },
  {
    name: 'Standard Poster',
    price: '$39.99',
    tagline: '18×24 matte fine art print.',
    features: [
      '18×24 archival-quality poster',
      'Digital bundle included',
      'Free shipping to your door',
      'Unlimited revisions before printing',
    ],
    popular: true,
  },
  {
    name: 'Premium Framed',
    price: '$99.99',
    tagline: '24×36 framed, priority production.',
    features: [
      '24×36 canvas or solid wood frame',
      'Priority production & shipping',
      'Digital bundle included',
      'Likeness matching — see yourself in your dreams',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center section-title">Simple, Transparent Pricing</h2>
        <p className="text-center section-sub">
          Three ways to bring your vision to life. No subscriptions.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`card relative flex flex-col ${
                tier.popular ? 'border-brand-500 ring-1 ring-brand-500/50' : ''
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-white">{tier.name}</h3>
              <p className="mt-1 text-sm text-gray-400">{tier.tagline}</p>
              <p className="mt-4 text-3xl font-bold text-white">
                {tier.price}
                <span className="text-sm font-normal text-gray-500"> one-time</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-0.5 text-brand-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/register?returnTo=/ai-studio"
                className={`mt-6 w-full ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}
              >
                Create Yours
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Use code <span className="font-bold text-blush">DREAM15</span> for 15% off your first order.
        </p>
      </div>
    </section>
  );
}
