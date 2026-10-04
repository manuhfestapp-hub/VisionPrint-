'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

const categories = [
  'Career', 'Friends', 'Health', 'Relationships',
  'Hustle', 'Lifestyle', 'Wealth', 'Adulthood', 'Family',
];

export default function HonestVisionBoardPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [category, setCategory] = useState('');
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const generate = () => {
    if (!preview) return;
    setGenerating(true);
    setResult(false);
    setTimeout(() => {
      setResult(true);
      setGenerating(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen pt-20">
      <div className="mx-auto max-w-lg px-4 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
          100% Free — no account needed
        </p>
        <h1 className="mt-4 text-4xl font-bold">🖼️ Vision Board: Expectation vs. Reality</h1>
        <p className="mt-4 text-gray-400">
          Upload a selfie and we&apos;ll generate two pictures of{' '}
          <em className="text-brand-200">you</em> — the glossy life you put on your
          vision board, and the hilariously honest reality.
        </p>

        <div className="mt-10">
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
          <button
            onClick={() => fileRef.current?.click()}
            className="card w-full cursor-pointer text-center transition hover:border-brand-500/50"
          >
            {preview ? (
              <img src={preview} alt="Selfie" className="mx-auto max-h-48 rounded-lg" />
            ) : (
              <p className="text-sm text-gray-400">Tap to upload a selfie</p>
            )}
          </button>
          <p className="mt-1 text-xs text-gray-600">Camera Upload</p>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-400">Pick a category (or leave random)</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-lg border px-3 py-1.5 text-sm transition ${
                  category === c
                    ? 'border-brand-500 bg-brand-600/20 text-white'
                    : 'border-white/10 text-gray-400 hover:border-white/20'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={generate}
          disabled={!preview || generating}
          className="btn-primary mt-6 w-full disabled:opacity-50"
        >
          {generating ? 'Generating...' : 'Generate Expectation vs. Reality'}
        </button>

        {generating && (
          <div className="mt-8 animate-pulse text-6xl">🪞</div>
        )}

        {result && (
          <div className="mt-8 grid grid-cols-2 gap-4 animate-fade-up">
            <div className="card text-center">
              <p className="text-xs uppercase tracking-wider text-brand-300">Expectation</p>
              <div className="mt-3 aspect-square rounded-lg bg-gradient-to-br from-brand-500/30 to-blush/20" />
            </div>
            <div className="card text-center">
              <p className="text-xs uppercase tracking-wider text-gray-500">Reality</p>
              <div className="mt-3 aspect-square rounded-lg bg-gradient-to-br from-gray-600/30 to-gray-800/20" />
            </div>
          </div>
        )}

        <p className="mt-6 text-xs text-gray-600">
          Your selfie is used only to generate this image and isn&apos;t stored or shared.
        </p>

        <Link href="/" className="mt-8 inline-block text-sm text-gray-400 hover:text-white">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
