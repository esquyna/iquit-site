'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#testimonials', label: 'Stories' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🚭</span>
            <span className="font-bold text-xl text-teal-700">iQuit</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-teal-700 transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://apps.apple.com/app/id6745068473"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Download Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-teal-700"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-teal-50 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-teal-700 transition-colors font-medium text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://apps.apple.com/app/id6745068473"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors text-center"
              >
                Download Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
