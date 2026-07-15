import Link from 'next/link'

const cols = [
  {
    heading: 'Elliot Castro',
    links: [
      { href: '/about', label: 'About Elliot' },
      { href: '/keynotes', label: 'Keynotes' },
      { href: '/contact', label: 'Enquire' },
    ],
  },
  {
    heading: 'Keynote Topics',
    links: [
      { href: '/keynotes#fraud-prevention', label: 'Fraud Prevention' },
      { href: '/keynotes#cybersecurity', label: 'Cybersecurity' },
      { href: '/keynotes#social-engineering', label: 'Social Engineering' },
      { href: '/keynotes#psychology', label: 'Criminal Psychology' },
      { href: '/keynotes#insider-threats', label: 'Insider Threats' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms & Conditions' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-navy)', color: '#fff', padding: '5rem 2rem 2.5rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {/* Brand column */}
          <div>
            <p style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>Elliot Castro</p>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 260 }}>
              Keynote speaker and consultant on fraud, cybersecurity, and criminal psychology.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', marginTop: '1.5rem', background: 'var(--color-green)', color: '#fff', padding: '0.75rem 1.5rem', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.04em' }}>
              Book a talk
            </Link>
          </div>

          {cols.map(col => (
            <div key={col.heading}>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem', fontWeight: 600 }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {col.links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>
            &copy; {new Date().getFullYear()} Elliot Castro. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>
            <a href="mailto:elliot@elliotcastro.com" style={{ color: 'rgba(255,255,255,0.6)' }}>elliot@elliotcastro.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
