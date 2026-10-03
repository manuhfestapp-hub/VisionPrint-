const features = [
  {
    title: 'AI-Powered Design',
    desc: 'Our AI creates a unique, beautiful vision board from just a description — no design skills needed.',
    icon: '🤖',
  },
  {
    title: 'Your Likeness, Your Vision',
    desc: 'See yourself living your dreams with likeness-matched AI that puts you in the picture.',
    icon: '🪞',
  },
  {
    title: 'Gallery-Quality Print',
    desc: 'Premium 18×24 or 24×36 prints on archival paper with vibrant, long-lasting colors.',
    icon: '🖼️',
  },
  {
    title: 'Fast, Free Shipping',
    desc: 'Printed and shipped within days. Delivered free to your door, ready to hang.',
    icon: '🚚',
  },
];

export default function Features() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center section-title">Why VisionPrint</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="card flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600/20 text-2xl">
                {f.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
