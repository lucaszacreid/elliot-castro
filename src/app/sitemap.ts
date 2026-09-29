import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://elliotcastro.com'
  const pages = [
    { path: '', priority: 1 },
    { path: '/about', priority: 0.9 },
    { path: '/keynotes', priority: 0.9 },
    { path: '/consultancy', priority: 0.8 },
    { path: '/contact', priority: 0.85 },
    { path: '/privacy-policy', priority: 0.3 },
    { path: '/terms', priority: 0.3 },
  ]

  return pages.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }))
}
