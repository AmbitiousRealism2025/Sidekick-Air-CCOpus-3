import type { Metadata, Viewport } from 'next'
import { fontVariables } from '@/lib/fonts'
import Navigation from '@/components/layout/Navigation'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sidekickair.com'),
  title: 'Sidekick Air | Reimagining Recovery',
  description:
    'The world\'s first inflatable therapy table. Professional-grade support, yoga-mat portability. Built for therapists who move.',
  keywords: [
    'therapy table',
    'massage table',
    'portable therapy table',
    'inflatable therapy table',
    'physical therapy equipment',
    'massage therapy equipment',
    'athletic training equipment',
    'sidekick air',
    'recovery equipment',
  ],
  authors: [{ name: 'Sidekick Air' }],
  creator: 'Sidekick Air',
  publisher: 'Sidekick Air',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sidekickair.com',
    siteName: 'Sidekick Air',
    title: 'Sidekick Air | Reimagining Recovery',
    description:
      'The world\'s first inflatable therapy table. Professional-grade support, yoga-mat portability.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sidekick Air - Reimagining Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sidekick Air | Reimagining Recovery',
    description:
      'The world\'s first inflatable therapy table. Professional-grade support, yoga-mat portability.',
    images: ['/og-image.jpg'],
    creator: '@sidekickair',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F8FA' },
    { media: '(prefers-color-scheme: dark)', color: '#1C1C1E' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
