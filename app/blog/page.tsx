import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllPosts, type BlogPost } from '@/lib/posts';

export const metadata = {
  title: 'Blog — VisionPrint',
  description:
    'Guides and ideas for making vision boards: how to create one with AI, vision board examples for career, money, wellness and travel, and more.',
};

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="card flex flex-col overflow-hidden p-0">
      <Link href={`/blog/${post.slug}`} className="block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.heroImage}
          alt={post.heroImageAlt}
          className="aspect-[16/9] w-full object-cover"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <time dateTime={post.publishedAt} className="text-xs uppercase tracking-widest text-brand-300">
          {formatDate(post.publishedAt)}
        </time>
        <h2 className="mt-2 text-xl font-bold leading-snug text-white">
          <Link href={`/blog/${post.slug}`} className="hover:text-brand-200">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-sm text-gray-400">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 text-sm font-semibold text-brand-300 hover:text-brand-200"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="section-title">Vision Board Blog</h1>
        <p className="section-sub max-w-2xl">
          Guides, ideas and examples to help you picture the life you want — and turn it into a
          vision board you see every day.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
