'use client';

import Link from 'next/link';
import { useState } from 'react';

const goals = [
  'Buy my dream home', 'Become financially free', 'Start my own business',
  'Land my dream job', 'Build passive income', 'Pay off all debt',
  'Travel the world', 'Get in the best shape of my life', 'Learn a new language',
  'Find my soulmate', 'Write a book', 'Run a marathon',
];

export default function FreeLockscreenPage() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [tab, setTab] = useState<'Goals' | 'Affirmations'>('Goals');

  const toggle = (g: string) => {
    if (selected.includes(g)) {
      setSelected(selected.filter((s) => s !== g));
    } else if (selected.length < 6) {
      setSelected([...selected, g]);
    }
  };

  return (
    <main className="min-h-screen pt-20">
      <div className="mx-auto max-w-md px-4 py-12">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
          100% Free — no account needed
        </p>
        <h1 className="mt-4 text-center text-3xl font-bold">AI Dream Life Lockscreen</h1>

        {/* Progress */}
        <div className="mt-8 flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full ${
                s <= step ? 'bg-brand-500' : 'bg-white/10'
              }`}
            />
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-gray-500">
          Step {step} of 5 — {step === 1 ? 'Choose your goals' : step === 2 ? 'Pick a style' : step === 3 ? 'Upload a selfie' : step === 4 ? 'Preview' : 'Download'}
        </p>

        {step === 1 && (
          <div className="mt-8">
            <div className="flex justify-center gap-2">
              {(['Goals', 'Affirmations'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded-lg px-4 py-1.5 text-sm transition ${
                    tab === t ? 'bg-brand-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Phone preview */}
            <div className="mx-auto mt-6 w-48 rounded-2xl border-4 border-gray-700 bg-gradient-to-b from-ink-700 to-ink-900 p-3">
              <p className="text-center text-[10px] font-bold text-white/80">2027 GOALS</p>
              <div className="mt-2 space-y-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded px-2 py-1 text-[9px] ${
                      selected[i] ? 'bg-brand-600/30 text-white' : 'bg-white/5 text-gray-600'
                    }`}
                  >
                    {selected[i] ?? '—'}
                  </div>
                ))}
              </div>
              <p className="mt-2 text-center text-[8px] text-gray-500">visionboardprint.com</p>
            </div>

            <p className="mt-6 text-center text-sm text-gray-400">Pick 6 goals</p>
            <p className="text-center text-xs text-gray-600">{selected.length} of 6 selected</p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {goals.map((g) => (
                <button
                  key={g}
                  onClick={() => toggle(g)}
                  className={`rounded-lg border px-3 py-1.5 text-sm transition ${
                    selected.includes(g)
                      ? 'border-brand-500 bg-brand-600/20 text-white'
                      : 'border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={selected.length < 6}
              className="btn-primary mt-6 w-full disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        )}

        {step > 1 && step < 5 && (
          <div className="mt-8 text-center">
            <div className="card">
              <p className="text-gray-400">
                {step === 2 && '🎨 Choose your lockscreen style'}
                {step === 3 && '📸 Upload a selfie for AI personalization'}
                {step === 4 && '👀 Preview your AI lockscreen'}
              </p>
              <div className="mt-6 aspect-[9/16] max-w-[200px] mx-auto rounded-2xl bg-gradient-to-b from-brand-600/20 to-ink-900" />
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStep(step - 1)} className="btn-secondary flex-1">Back</button>
              <button onClick={() => setStep(step + 1)} className="btn-primary flex-1">Continue</button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="mt-8 text-center">
            <div className="card">
              <p className="text-lg font-semibold text-white">Your lockscreen is ready! 🎉</p>
              <p className="mt-2 text-sm text-gray-400">Download your AI-generated wallpaper.</p>
              <div className="mt-6 aspect-[9/16] max-w-[200px] mx-auto rounded-2xl bg-gradient-to-b from-brand-600/30 to-blush/20" />
            </div>
            <button className="btn-primary mt-6 w-full">Download Free Wallpaper</button>
            <Link href="/" className="mt-4 inline-block text-sm text-gray-400 hover:text-white">
              ← Back to home
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
