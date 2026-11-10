import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'

type Article = { outlet: string; logo?: string; headline: string; date: string; url: string }

// Press coverage. Add entries here as they come in, e.g.
//   { outlet: 'The Times', headline: '…', date: '12 Mar 2026', url: 'https://…' }
const articles: Article[] = [
  {
    outlet: 'The Times',
    logo: '/logos/the-times.png',
    headline: 'Elliot Castro: how a call centre worker became one of UK’s most prolific scammers',
    date: 'PLACEHOLDER — confirm date',
    url: 'https://www.thetimes.com/uk/scotland/article/elliot-castro-scammer-fraudster-5w9wc666h',
  },
  {
    outlet: 'BBC News',
    logo: '/logos/bbc.jpg',
    headline: 'The teenage con artist behind a £2.5m global crime spree',
    date: '7 June 2024',
    url: 'https://www.bbc.co.uk/news/articles/c9xxejwek5po',
  },
]

export default function Articles() {
  if (articles.length === 0) return null

  return (
    <section style={{ padding: '5rem 2rem', background: '#fff' }}>
      <div className="container">
        <AnimateIn>
          <p className="section-label">In the press</p>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '2.5rem', marginTop: '0.75rem' }}>
            Coverage
          </h2>
        </AnimateIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {articles.map((a, i) => (
            <AnimateIn key={a.url} delay={i * 100}>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="article-link"
              >
                <span className="article-logo">
                  {a.logo ? (
                    <Image src={a.logo} alt={a.outlet} width={120} height={56} style={{ height: 40, width: 'auto', objectFit: 'contain' }} unoptimized />
                  ) : (
                    <span className="article-outlet">{a.outlet}</span>
                  )}
                </span>
                <span className="article-body">
                  <span className="article-headline">{a.headline}</span>
                  <span className="article-date">{a.date}</span>
                </span>
                <span className="article-arrow">→</span>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
