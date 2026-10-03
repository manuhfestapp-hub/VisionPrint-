'use client';

import { useState } from 'react';
import Link from 'next/link';

const themes = [
  { emoji: '✈️', label: 'Travel & Wealth' },
  { emoji: '🌿', label: 'Wellness & Family' },
  { emoji: '🚀', label: 'Career & Success' },
];

export default function QuickStart() {
  const [theme, setTheme] = useState(1);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
          10-second start
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-white">
          See your future self in 10 seconds
        </h2>
        <p className="mt-3 text-center text-gray-400">
          Upload a selfie, pick a theme, and we&apos;ll generate your AI vision
          board instantly — free to start, no payment until you approve your design.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Step 1 */}
          <div className="card text-center">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold">
              1
            </div>
            <h3 className="font-semibold text-white">Upload a selfie</h3>
            <div className="mt-4 rounded-xl border-2 border-dashed border-white/15 p-6 text-center">
              <p className="text-sm text-gray-500">Tap to upload a selfie</p>
              <p className="mt-1 text-xs text-gray-600">
                Clear, front-facing photo works best
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="card text-center">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold">
              2
            </div>
            <h3 className="font-semibold text-white">Pick your theme</h3>
            <div className="mt-4 space-y-2">
              {themes.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => setTheme(i)}
                  className={`flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition ${
                    theme === i
                      ? 'border-brand-500 bg-brand-600/20 text-white'
                      : 'border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  <span className="text-lg">{t.emoji}</span>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div className="card flex flex-col items-center text-center">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold">
              3
            </div>
            <h3 className="font-semibold text-white">Generate</h3>
            <p className="mt-2 text-sm text-gray-500">
              Your AI vision board appears instantly
            </p>
            <Link href="/register?returnTo=/ai-studio" className="btn-primary mt-4 w-full">
              Generate my vision board
            </Link>
            <p className="mt-3 text-xs text-gray-600">
              Free preview — no payment until you approve your design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
