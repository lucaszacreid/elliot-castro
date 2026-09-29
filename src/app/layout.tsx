import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { topics, SHORT_BIO_FIRST_PARAGRAPH } from '@/lib/topics'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap', weight: ['400', '600', '700'], style: ['normal', 'italic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://elliotcastro.com'),
  title: {
    default: 'Elliot Castro — Fraud Keynote Speaker & Consultant',
    template: '%s | Elliot Castro',
  },
  description: SHORT_BIO_FIRST_PARAGRAPH,
  keywords: ['fraud keynote speaker', ...topics.map(t => t.title), 'Elliot Castro'],
  authors: [{ name: 'Elliot Castro' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://elliotcastro.com',
    siteName: 'Elliot Castro',
    title: 'Elliot Castro — Fraud Keynote Speaker & Consultant',
    description: SHORT_BIO_FIRST_PARAGRAPH,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Elliot Castro' }],
  },
  twitter: { card: 'summary_large_image', title: 'Elliot Castro — Fraud Keynote Speaker & Consultant', description: SHORT_BIO_FIRST_PARAGRAPH, images: ['/og-image.jpg'] },
  robots: { index: true, follow: true },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Elliot Castro',
  url: 'https://elliotcastro.com',
  jobTitle: 'Keynote Speaker',
  description: SHORT_BIO_FIRST_PARAGRAPH,
  email: 'elliot@elliotcastro.com',
  knowsAbout: topics.map(t => t.title),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      </head>
      <body>
        <Nav />
        <main style={{ paddingTop: 72 }}>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
