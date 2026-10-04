'use client';

import Link from 'next/link';
import { useState } from 'react';

const templates = [
  { name: 'Travel & Wealth', emoji: '✈️', color: 'from-blue-500/30 to-teal-500/20' },
  { name: 'Wellness & Family', emoji: '🌿', color: 'from-green-500/30 to-emerald-500/20' },
  { name: 'Career & Success', emoji: '🚀', color: 'from-orange-500/30 to-red-500/20' },
  { name: 'Love & Relationships', emoji: '💖', color: 'from-pink-500/30 to-rose-500/20' },
  { name: 'Health & Fitness', emoji: '💪', color: 'from-yellow-500/30 to-orange-500/20' },
  { name: 'Spiritual Growth', emoji: '🧘', color: 'from-purple-500/30 to-indigo-500/20' },
];

export default function AIStudioPage() {
  const [prompt, setPrompt] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const generate = () => {
    setGenerating(true);
    setGenerated(false);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 3000);
  };

  return (
    <main className="min-h-screen pt-20">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">AI Studio</h1>
            <p className="text-sm text-gray-400">Design your vision board</p>
          </div>
          <Link href="/" className="text-sm text-gray-400 hover:text-white">← Home</Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_400px]">
          {/* Left: Canvas */}
          <div className="card min-h-[500px]">
            {generating && (
              <div className="flex h-full min-h-[450px] flex-col items-center justify-center">
                <div className="animate-spin text-5xl">✦</div>
                <p className="mt-4 text-gray-400">Generating your vision board...</p>
              </div>
            )}
            {!generating && generated && (
              <div className="animate-fade-up">
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg bg-gradient-to-br ${
                        templates[selectedTemplate ?? 0]?.color ?? 'from-brand-500/30 to-blush/20'
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-6 flex justify-center gap-3">
                  <button className="btn-secondary text-sm">↻ Regenerate</button>
                  <button className="btn-primary text-sm">Approve &amp; Print →</button>
                </div>
              </div>
            )}
            {!generating && !generated && (
              <div className="flex h-full min-h-[450px] flex-col items-center justify-center text-center">
                <div className="text-5xl">🎨</div>
                <p className="mt-4 text-gray-400">
                  Describe your vision or pick a template to get started
                </p>
              </div>
            )}
          </div>

          {/* Right: Controls */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="font-semibold text-white">Describe your vision</h3>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="I want to manifest travel, wealth, and a beautiful home by the beach..."
                className="mt-3 h-28 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-brand-500 focus:outline-none"
              />
            </div>

            <div className="card">
              <h3 className="font-semibold text-white">Or start from a template</h3>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {templates.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setSelectedTemplate(i)}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition ${
                      selectedTemplate === i
                        ? 'border-brand-500 bg-brand-600/20 text-white'
                        : 'border-white/10 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    <span className="text-lg">{t.emoji}</span>
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={generate}
              disabled={generating || (!prompt && selectedTemplate === null)}
              className="btn-primary w-full disabled:opacity-50"
            >
              {generating ? 'Generating...' : 'Generate Vision Board'}
            </button>
            <p className="text-center text-xs text-gray-600">
              Free preview — no payment until you approve your design.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
