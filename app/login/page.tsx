'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const search = useSearchParams();
  const returnTo = search.get('returnTo') || '/ai-studio';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(returnTo);
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4 pt-20">
      <div className="w-full max-w-sm">
        <h1 className="text-center text-2xl font-bold text-white">Welcome back</h1>
        <p className="mt-1 text-center text-sm text-gray-400">Log in to your account</p>

        <button className="btn-secondary mt-8 w-full">
          <span>🔵</span> Continue with Google
        </button>

        <div className="my-6 flex items-center gap-3 text-xs text-gray-600">
          <div className="h-px flex-1 bg-white/10" />
          or
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 focus:border-brand-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 focus:border-brand-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="btn-primary w-full">Log in</button>
        </form>

        <div className="mt-4 text-center">
          <Link href="/forgot-password" className="text-sm text-gray-500 hover:text-gray-300">
            Forgot password?
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-brand-300 hover:text-brand-200">Create one</Link>
        </p>
      </div>
    </main>
  );
}
