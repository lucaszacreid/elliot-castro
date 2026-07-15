import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://elliotcastro.com'
  const pages = [
    { path: '', priority: 1 },
    { path: '/about', priority: 0.9 },
    { path: '/keynotes', priority: 0.9 },
    { path: '/keynotes#fraud-prevention', priority: 0.7 },
    { path: '/keynotes#cybersecurity', priority: 0.7 },
    { path: '/keynotes#identity-theft', priority: 0.7 },
    { path: '/keynotes#social-engineering', priority: 0.7 },
    { path: '/keynotes#psychology', priority: 0.7 },
    { path: '/keynotes#insider-threats', priority: 0.7 },
    { path: '/keynotes#risk-management', priority: 0.7 },
    { path: '/keynotes#ethics', priority: 0.7 },
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
