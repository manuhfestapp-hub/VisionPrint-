import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm">
              ✦
            </span>
            <span className="font-bold text-white">VisionPrint</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/fate-board" className="hover:text-white">Fate Board</Link>
            <Link href="/honest-vision-board" className="hover:text-white">Honest Board</Link>
            <Link href="/free-lockscreen" className="hover:text-white">Free Lockscreen</Link>
            <Link href="/login" className="hover:text-white">Log in</Link>
            <Link href="/register?returnTo=/ai-studio" className="hover:text-white">Sign up</Link>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} VisionPrint. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
