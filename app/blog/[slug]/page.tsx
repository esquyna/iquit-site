import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostWithContent, getPostSlugs, formatDate } from '@/lib/blog';
import AppStoreButtons from '@/components/AppStoreButtons';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug: slug.replace(/\.md$/, '') }));
}

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const post = await getPostWithContent(slug);
  if (!post) return {};
  const url = `https://iquitapp.com/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      siteName: 'iQuit',
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      site: '@iquitapp',
    },
  };
}

export default async function BlogPostPage({ params: { slug } }: Props) {
  const post = await getPostWithContent(slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://iquitapp.com/blog/${slug}` },
    author: { '@type': 'Organization', name: 'iQuit', url: 'https://iquitapp.com' },
    publisher: {
      '@type': 'Organization',
      name: 'iQuit',
      url: 'https://iquitapp.com',
      logo: { '@type': 'ImageObject', url: 'https://iquitapp.com/logo.png' },
    },
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <div className="bg-gradient-to-br from-teal-900 via-teal-700 to-emerald-600 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-teal-200 hover:text-white text-sm mb-8 inline-flex items-center gap-2 transition-colors">
            ← Back to blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-6 mt-4">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-teal-200 text-sm">
            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">🚭</span>
            <span>iQuit</span>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xl text-gray-600 leading-relaxed mb-10 font-light border-l-4 border-teal-400 pl-6">
          {post.description}
        </p>

        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-100">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-teal-50 text-teal-700 text-sm px-4 py-1.5 rounded-full font-medium">
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-teal-600 to-emerald-700 rounded-3xl p-8 sm:p-10 text-center">
          <span className="text-4xl mb-4 block">🚭</span>
          <h3 className="text-2xl font-bold text-white mb-3">Ready to quit for good?</h3>
          <p className="text-teal-100 mb-8 max-w-md mx-auto">
            Download iQuit free and start your smoke-free journey today. Track your health,
            crush cravings, and watch your savings grow.
          </p>
          <div className="flex justify-center">
            <AppStoreButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
