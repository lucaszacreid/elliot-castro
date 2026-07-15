import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap', weight: ['400', '600', '700'], style: ['normal', 'italic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://elliotcastro.com'),
  title: {
    default: 'Elliot Castro — Keynote Speaker | Fraud, Cybersecurity & Criminal Psychology',
    template: '%s | Elliot Castro',
  },
  description: 'Elliot Castro is a keynote speaker and consultant on fraud prevention, cybersecurity, social engineering, and criminal psychology — drawing on a unique personal journey from convicted fraudster to trusted adviser.',
  keywords: ['keynote speaker', 'fraud prevention', 'cybersecurity speaker', 'social engineering', 'criminal psychology', 'Elliot Castro'],
  authors: [{ name: 'Elliot Castro' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://elliotcastro.com',
    siteName: 'Elliot Castro',
    title: 'Elliot Castro — Keynote Speaker | Fraud, Cybersecurity & Criminal Psychology',
    description: 'Keynote speaker and consultant drawing on a unique journey from convicted fraudster to trusted adviser to banks, police, and corporations.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Elliot Castro' }],
  },
  twitter: { card: 'summary_large_image', title: 'Elliot Castro — Keynote Speaker', description: 'Fraud, cybersecurity, and criminal psychology speaker.', images: ['/og-image.jpg'] },
  robots: { index: true, follow: true },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Elliot Castro',
  url: 'https://elliotcastro.com',
  jobTitle: 'Keynote Speaker',
  description: 'Keynote speaker and consultant on fraud prevention, cybersecurity, social engineering, and criminal psychology.',
  email: 'elliot@elliotcastro.com',
  knowsAbout: ['Fraud Prevention', 'Cybersecurity', 'Social Engineering', 'Criminal Psychology', 'Insider Threats'],
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
