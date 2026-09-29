import type { Metadata } from 'next'

export const SITE_URL = 'https://elliotcastro.com'
export const SITE_NAME = 'Elliot Castro'
const OG_IMAGE = { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Elliot Castro, fraud keynote speaker' }

// Page-level openGraph/twitter objects replace the layout's rather than merging,
// so every page builds its full social metadata from here.
export function pageMetadata({
  title,
  socialTitle,
  description,
  path,
}: {
  title: Metadata['title']
  socialTitle: string
  description: string
  path: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: 'summary_large_image', title: socialTitle, description, images: [OG_IMAGE.url] },
  }
}
