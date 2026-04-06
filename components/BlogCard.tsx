import Link from 'next/link';
import { BlogPostMeta, formatDate } from '@/lib/blog';

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="h-40 bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-20">
          📖
        </div>
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <time className="text-teal-600 text-xs font-semibold uppercase tracking-wide">
          {formatDate(post.date)}
        </time>

        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 leading-snug group-hover:text-teal-700 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.description}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-800 font-semibold text-sm transition-colors"
        >
          Read article
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
