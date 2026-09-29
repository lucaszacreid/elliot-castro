import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { SITE_URL, pageMetadata } from '@/lib/seo'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap', weight: ['400', '600', '700'], style: ['normal', 'italic'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  keywords: ['fraud keynote speaker', 'fraud psychology', 'social engineering', 'identity and impersonation', 'AI-enabled fraud', 'deepfakes', 'Elliot Castro'],
  authors: [{ name: 'Elliot Castro' }],
  ...pageMetadata({
    title: undefined,
    socialTitle: 'Elliot Castro | Fraud Keynote Speaker',
    description: 'Elliot Castro is a former fraudster turned keynote speaker and consultant, helping organisations understand fraud psychology, social engineering, identity and impersonation, and AI-enabled deception such as deepfakes and voice cloning.',
    path: '/',
  }),
  // Canonical is set per page; the layout-level one would leak onto every route.
  alternates: undefined,
  title: {
    default: 'Elliot Castro | Fraud Keynote Speaker on Fraud Psychology & Social Engineering',
    template: '%s | Elliot Castro',
  },
  robots: { index: true, follow: true },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Elliot Castro',
  url: SITE_URL,
  jobTitle: 'Fraud keynote speaker and consultant',
  description: 'Former fraudster turned keynote speaker and consultant who helps organisations understand how criminals manufacture trust, manipulate decisions and exploit the gaps between people, identity and process.',
  email: 'elliot@elliotcastro.com',
  knowsAbout: ['Fraud Psychology', 'Social Engineering', 'Identity and Impersonation', 'Human Verification', 'AI-Enabled Fraud', 'Deepfakes and Voice Cloning', 'Human Behaviour'],
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
