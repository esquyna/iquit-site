import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'iQuit — Stop Smoking for Good',
    template: '%s | iQuit',
  },
  description:
    'iQuit helps you quit smoking with science-backed methods, real-time health tracking, and personalized craving support.',
  metadataBase: new URL('https://iquitapp.com'),
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'iQuit',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@iquitapp',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
