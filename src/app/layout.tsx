import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://elliotcastro.com'),
  title: {
    default: 'Elliot Castro — Fraud, Trust & Social Engineering Expert',
    template: '%s | Elliot Castro',
  },
  description:
    'Keynote speaker, consultant, and media commentator on fraud, scams, trust, and social engineering. Trusted by organisations who need clarity, not speculation.',
  keywords: [
    'fraud expert',
    'keynote speaker',
    'social engineering',
    'scam prevention',
    'trust consultant',
    'fraud consultant',
    'Elliot Castro',
  ],
  authors: [{ name: 'Elliot Castro' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://elliotcastro.com',
    siteName: 'Elliot Castro',
    title: 'Elliot Castro — Fraud, Trust & Social Engineering Expert',
    description:
      'Keynote speaker, consultant, and media commentator on fraud, scams, trust, and social engineering.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elliot Castro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elliot Castro — Fraud, Trust & Social Engineering Expert',
    description:
      'Keynote speaker, consultant, and media commentator on fraud, scams, trust, and social engineering.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
