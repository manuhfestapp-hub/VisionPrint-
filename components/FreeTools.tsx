import Link from 'next/link';

const tools = [
  {
    title: 'Fate Board',
    desc: 'Roll a random AI fate — free',
    href: '/fate-board',
    emoji: '🎲',
  },
  {
    title: 'Honest Board',
    desc: 'If vision boards were honest',
    href: '/honest-vision-board',
    emoji: '🪞',
  },
  {
    title: 'Free Lockscreen',
    desc: 'AI wallpaper in 60 seconds',
    href: '/free-lockscreen',
    emoji: '📱',
  },
];

export default function FreeTools() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <p className="text-center text-sm text-gray-500">
          Free to play with — no account needed
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {tools.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="card group flex flex-col items-center text-center transition hover:border-brand-500/50 hover:bg-white/10"
            >
              <span className="text-3xl">{t.emoji}</span>
              <h3 className="mt-3 font-semibold text-white group-hover:text-brand-200">
                {t.title}
              </h3>
              <p className="mt-1 text-sm text-gray-400">{t.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
