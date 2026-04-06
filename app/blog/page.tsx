import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Quit Smoking Tips & Science',
  description:
    'Science-backed articles, real stories, and practical tips to help you quit smoking and stay quit.',
  alternates: { canonical: 'https://iquitapp.com/blog' },
  openGraph: {
    title: 'iQuit Blog — Quit Smoking Tips & Science',
    description: 'Science-backed articles and tips to help you quit smoking for good.',
    url: 'https://iquitapp.com/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'iQuit Blog — Quit Smoking Articles',
    url: 'https://iquitapp.com/blog',
    numberOfItems: posts.length,
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://iquitapp.com/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <div className="bg-gradient-to-br from-teal-900 via-teal-700 to-emerald-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">The iQuit Blog</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Science, stories, and practical tips for your smoke-free journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <span className="text-5xl mb-4 block">📝</span>
            <p>No articles yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
