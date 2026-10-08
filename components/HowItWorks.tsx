const steps = [
  {
    num: 'STEP 1',
    title: 'Describe Your Vision',
    desc: 'Tell our AI what you want to manifest — travel, career, family, dreams. Or start from a template.',
    icon: '✍️',
  },
  {
    num: 'STEP 2',
    title: 'Make It Yours',
    desc: 'Upload your own photos and customize the layout. Upgrade to Premium to see yourself living your dreams with AI likeness matching.',
    icon: '🎨',
  },
  {
    num: 'STEP 3',
    title: 'Approve & Print',
    desc: "Review your design, check out securely, and we'll print your poster and ship it to your door.",
    icon: '📦',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center section-title">How It Works</h2>
        <p className="text-center section-sub">Three simple steps to your custom vision board.</p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/20 text-2xl">
                {s.icon}
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-300">
                {s.num}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
