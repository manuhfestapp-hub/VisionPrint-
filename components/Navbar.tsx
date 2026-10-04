'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-ink-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-lg">
            ✦
          </span>
          <span className="text-lg font-bold text-white">VisionPrint</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/fate-board" className="text-sm text-gray-400 hover:text-white">Fate Board</Link>
          <Link href="/honest-vision-board" className="text-sm text-gray-400 hover:text-white">Honest Board</Link>
          <Link href="/free-lockscreen" className="text-sm text-gray-400 hover:text-white">Free Lockscreen</Link>
          <Link href="/workflow-monitor" className="text-sm text-gray-400 hover:text-white">Workflow Monitor</Link>
          <Link href="/login" className="text-sm text-gray-400 hover:text-white">Log in</Link>
          <Link href="/register?returnTo=/ai-studio" className="btn-primary text-sm">Get started</Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link href="/fate-board" className="text-gray-400 hover:text-white">Fate Board</Link>
            <Link href="/honest-vision-board" className="text-gray-400 hover:text-white">Honest Board</Link>
            <Link href="/free-lockscreen" className="text-gray-400 hover:text-white">Free Lockscreen</Link>
            <Link href="/workflow-monitor" className="text-gray-400 hover:text-white">Workflow Monitor</Link>
            <Link href="/login" className="text-gray-400 hover:text-white">Log in</Link>
            <Link href="/register?returnTo=/ai-studio" className="btn-primary text-sm">Get started</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
