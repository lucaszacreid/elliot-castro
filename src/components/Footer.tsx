import Link from 'next/link'

const nav = [
  { href: '/about', label: 'About' },
  { href: '/keynote', label: 'Speaking' },
  { href: '/consultancy', label: 'Consultancy' },
  { href: '/media', label: 'Media' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: '4rem 2rem',
        background: 'var(--color-ink)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: '1.125rem',
              fontWeight: 700,
              color: 'var(--color-cream)',
              marginBottom: '0.75rem',
            }}
          >
            Elliot Castro
          </p>
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-muted)',
              lineHeight: '1.6',
              maxWidth: '280px',
            }}
          >
            Keynote speaker, consultant, and media commentator on fraud, trust, and social engineering.
          </p>
        </div>

        <nav
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem 2rem',
            justifyContent: 'flex-end',
          }}
        >
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '3rem auto 0',
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
          &copy; {new Date().getFullYear()} Elliot Castro. All rights reserved.
        </p>
        <Link
          href="/contact"
          style={{
            fontSize: '0.75rem',
            color: 'var(--color-oxblood)',
            letterSpacing: '0.06em',
          }}
        >
          Make an enquiry &rarr;
        </Link>
      </div>
    </footer>
  )
}
