'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

export default function FateBoardPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [rolling, setRolling] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const fates = [
    'You will buy a beach house by next summer',
    'You will start a business that changes everything',
    'You will travel to 12 countries this year',
    'You will find love in the most unexpected place',
    'You will achieve financial freedom by 35',
    'You will write the book that is inside you',
    'You will run a marathon and surprise yourself',
    'You will reconnect with someone who matters',
  ];

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const roll = () => {
    if (!preview) return;
    setRolling(true);
    setResult(null);
    setTimeout(() => {
      setResult(fates[Math.floor(Math.random() * fates.length)]);
      setRolling(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen pt-20">
      <div className="mx-auto max-w-lg px-4 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
          100% Free — no account needed
        </p>
        <h1 className="mt-4 text-4xl font-bold">🎲 Fate Board</h1>
        <p className="mt-4 text-gray-400">
          Upload a selfie. Press roll. The{' '}
          <span className="text-white font-semibold">exact second</span> you press
          decides your fate — we generate a picture of{' '}
          <em className="text-brand-200">you</em> holding up a vision board that
          displays your randomly-sealed destiny.
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
              <>
                <p className="text-sm text-gray-400">Tap to upload a selfie</p>
                <p className="mt-1 text-xs text-gray-600">Camera Upload</p>
              </>
            )}
          </button>
        </div>

        <button
          onClick={roll}
          disabled={!preview || rolling}
          className="btn-primary mt-6 w-full disabled:opacity-50"
        >
          {rolling ? '🎲 Rolling your fate...' : 'Roll My Fate'}
        </button>

        {rolling && (
          <div className="mt-8 animate-pulse text-6xl">🎲</div>
        )}

        {result && (
          <div className="mt-8 card animate-fade-up">
            <p className="text-xs uppercase tracking-wider text-brand-300">Your fate</p>
            <p className="mt-2 text-xl font-semibold text-white">{result}</p>
          </div>
        )}

        <p className="mt-6 text-xs text-gray-600">
          Your selfie is used only to generate your fate image and isn&apos;t stored
          or shared. Every roll is random — no two fates are the same.
        </p>

        <Link href="/" className="mt-8 inline-block text-sm text-gray-400 hover:text-white">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
