import './global.css'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { CursorEffect } from './components/cursor-effect'
import { baseUrl } from './sitemap'
import { profile } from './data/portfolio'

const title = `${profile.name} — ${profile.role}`

export const metadata: Metadata = {
  verification: {
  google: 'f5g0nO1El8DF4Ie5PS08A5OL-IatT3Z_h3sIhZqU5r4',
},
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    'AI SEO Specialist',
    'Generative Engine Optimization',
    'GEO',
    'SEO Specialist',
    'Technical SEO',
    'Digital Marketing',
    'Content Strategy',
    'Local SEO',
    'Asad Naeem',
  ],
  authors: [{ name: profile.name, url: baseUrl }],
  creator: profile.name,
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description: profile.tagline,
    url: baseUrl,
    siteName: profile.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: profile.tagline,
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
  themeColor: '#07090a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} bg-background`}
    >
      <body className="min-h-dvh font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex min-w-0 flex-col">
          {children}
        </main>
        <Footer />
        <CursorEffect />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
