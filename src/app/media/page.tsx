import type { Metadata } from 'next'
import Link from 'next/link'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata: Metadata = {
  title: 'Media',
  description:
    'Expert commentary and media appearances from Elliot Castro on fraud, scams, social engineering, and trust. Press kit and headshots available.',
}

const appearances = [
  { outlet: 'BBC Radio 4', description: 'Expert commentary on investment scam surge', year: '2025' },
  { outlet: 'The Times', description: 'Interview: how phone fraudsters build trust', year: '2025' },
  { outlet: 'Channel 4 News', description: 'On-screen commentary, romance fraud documentary', year: '2024' },
  { outlet: 'The Guardian', description: 'Written contribution: the psychology of scam victims', year: '2024' },
  { outlet: 'Sky News', description: 'Live interview: corporate email fraud cases', year: '2024' },
]

export default function MediaPage() {
  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '4rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
              marginBottom: '1.25rem',
            }}
          >
            Media
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--color-cream)',
              maxWidth: '700px',
              marginBottom: '1.5rem',
            }}
          >
            Authoritative commentary. Available on deadline.
          </h1>
          <p
            style={{
              color: 'var(--color-muted)',
              fontSize: '1.0625rem',
              maxWidth: '560px',
              lineHeight: 1.7,
            }}
          >
            Elliot provides expert commentary for broadcast, print, and digital media
            on fraud, scams, social engineering, and the psychology of trust. Articulate,
            reliable, and experienced with short turnarounds.
          </p>
        </div>
      </section>

      {/* What I offer media */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--color-border)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '0',
          }}
        >
          {[
            {
              label: 'Broadcast',
              items: ['Live TV commentary', 'Radio interviews', 'Podcast appearances', 'Documentary contribution'],
            },
            {
              label: 'Print & Digital',
              items: ['Written expert quotes', 'Background briefings', 'Long-form interviews', 'Fact-check / editorial'],
            },
            {
              label: 'What I comment on',
              items: ['Fraud & scam trends', 'High-profile cases', 'Consumer protection', 'Legislation & policy', 'Victim psychology'],
            },
          ].map((col, i) => (
            <div
              key={col.label}
              style={{
                padding: '3rem',
                borderLeft: i === 0 ? '1px solid var(--color-border)' : undefined,
                borderRight: '1px solid var(--color-border)',
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <p
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  marginBottom: '1.5rem',
                }}
              >
                {col.label}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {col.items.map((item) => (
                  <li key={item} style={{ color: 'var(--color-cream-muted)', fontSize: '0.9375rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Appearances */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
              marginBottom: '3rem',
            }}
          >
            Selected appearances
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {appearances.map((a) => (
              <div
                key={`${a.outlet}-${a.year}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '160px 1fr 60px',
                  gap: '2rem',
                  padding: '1.5rem 0',
                  borderTop: '1px solid var(--color-border)',
                  alignItems: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '1rem',
                    color: 'var(--color-cream)',
                    fontWeight: 600,
                  }}
                >
                  {a.outlet}
                </p>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem' }}>
                  {a.description}
                </p>
                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--color-muted)',
                    textAlign: 'right',
                  }}
                >
                  {a.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press kit download */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--color-border)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2px',
            background: 'var(--color-border)',
          }}
        >
          {[
            {
              title: 'Press Kit',
              desc: 'Biography, high-resolution headshots, areas of expertise, and contact details for editorial use.',
              href: '/downloads/elliot-castro-press-kit.pdf',
              label: 'Download press kit (PDF)',
            },
            {
              title: 'Short Biography',
              desc: 'A 100-word biography cleared for publication, ready to paste into programme notes, listings, and articles.',
              href: '/downloads/elliot-castro-bio.pdf',
              label: 'Download short bio (PDF)',
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: 'var(--color-ink)',
                padding: '3rem',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '1.25rem',
                  color: 'var(--color-cream)',
                  marginBottom: '0.75rem',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: 'var(--color-muted)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                }}
              >
                {item.desc}
              </p>
              <a
                href={item.href}
                download
                style={{
                  fontSize: '0.8125rem',
                  letterSpacing: '0.08em',
                  color: 'var(--color-oxblood)',
                  textTransform: 'uppercase',
                }}
              >
                {item.label} &darr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry form */}
      <section style={{ padding: '5rem 2rem' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '6rem',
            alignItems: 'start',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: '1.75rem',
                color: 'var(--color-cream)',
                marginBottom: '1rem',
                lineHeight: 1.3,
              }}
            >
              Media enquiry
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              Short deadlines are not a problem. Tell me what you are working on and I will get back to you quickly.
            </p>
          </div>
          <EnquiryForm type="media" />
        </div>
      </section>
    </>
  )
}
