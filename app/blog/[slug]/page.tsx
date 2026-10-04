import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — VisionPrint`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <article className="mx-auto max-w-3xl px-4 py-12">
        <Link href="/blog" className="text-sm text-gray-400 hover:text-white">
          ← All articles
        </Link>

        <h1 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
          {post.title}
        </h1>
        <time dateTime={post.publishedAt} className="mt-3 block text-sm text-brand-300">
          {formatDate(post.publishedAt)}
        </time>

        {/* Plain <img> keeps remote hero/inline images working without touching next.config.mjs */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.heroImage}
          alt={post.heroImageAlt}
          className="mt-8 w-full rounded-2xl border border-white/10 object-cover"
        />

        {/* First-party, trusted content stored in lib/posts.ts — rendered as raw HTML on purpose. */}
        <div
          className="blog-body mt-10"
          dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
        />

        {post.sources.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-semibold text-white">Sources</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-400">
              {post.sources.map((source) => (
                <li key={source}>
                  <a href={source} className="text-brand-300 hover:text-brand-200">
                    {source}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="card mt-14 text-center">
          <h2 className="section-title text-2xl sm:text-3xl">
            Make your own vision board
          </h2>
          <p className="section-sub text-base">
            Describe your dream life, upload a selfie, and preview your personalized AI vision
            board in minutes. Free to start — you only continue if you approve your design.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/register?returnTo=/ai-studio"
              className="btn-primary"
            >
              Create your vision board free
            </Link>
            <Link href="/free-lockscreen" className="btn-secondary">
              Try the free lockscreen generator
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
