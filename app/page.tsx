import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyItWorks from '@/components/WhyItWorks';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import BlogCard from '@/components/BlogCard';
import AppStoreButtons from '@/components/AppStoreButtons';
import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'iQuit — Quit Smoking Without Willpower | Allen Carr Method App',
  description:
    'Stop smoking without fighting cravings. iQuit uses the Allen Carr method to remove your desire to smoke entirely — not suppress it. No patches, no gum, no willpower. Free on iOS & Android.',
  alternates: {
    canonical: 'https://iquitapp.com',
  },
  keywords: [
    'quit smoking app',
    'stop smoking without willpower',
    'Allen Carr method app',
    'stop smoking app',
    'no cravings quit smoking',
    'easy way to stop smoking',
    'quit smoking iphone android',
  ],
  openGraph: {
    title: 'iQuit — Quit Smoking Without Willpower',
    description:
      'Stop fighting cigarettes. The Allen Carr method removes the desire to smoke entirely. 10 guided chapters, AI coach, health tracking. Free to download.',
    url: 'https://iquitapp.com',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'iQuit',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'HealthApplication',
  description:
    'Science-backed app to quit smoking with real-time health recovery tracking, craving support, and money saved counter.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '1200' },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'iQuit',
  url: 'https://iquitapp.com',
};

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

      <Hero />
      <WhyItWorks />
      <Features />
      <HowItWorks />
      <Testimonials />

      {/* Blog preview */}
      {recentPosts.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                From the blog
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Science, tips, and real stories to help you on your quit-smoking journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                View all articles
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-teal-900 via-teal-700 to-emerald-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-500 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl opacity-15" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/10 border border-white/20 text-white/80 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Join 1,200+ people who quit for good
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Stop fighting.<br />Start understanding.
          </h2>
          <p className="text-xl text-teal-100 mb-4 max-w-2xl mx-auto leading-relaxed">
            Every previous attempt taught you that quitting is hard. iQuit will show you it doesn&apos;t have to be.
          </p>
          <p className="text-teal-300 font-semibold mb-10">
            No patches. No gum. No willpower battles.
          </p>
          <div className="flex flex-col items-center gap-4">
            <AppStoreButtons />
            <p className="text-teal-200 text-sm">Free to download · No credit card required</p>
          </div>
        </div>
      </section>
    </>
  );
}
