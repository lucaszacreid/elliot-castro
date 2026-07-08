import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Elliot Castro',
  description:
    'Who Elliot is, what happened, what he does now, and why he is qualified to speak on fraud, scams, trust, and social engineering.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
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
            About
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--color-cream)',
              maxWidth: '700px',
            }}
          >
            A story that earns the right to speak on fraud.
          </h1>
        </div>
      </section>

      {/* Main content */}
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
          {/* Sidebar */}
          <aside>
            <div
              style={{
                width: '100%',
                aspectRatio: '4/5',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '2rem',
              }}
            >
              <Image
                src="/about-photo.jpg"
                alt="Elliot Castro speaking on stage"
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: 'Based in', value: 'United Kingdom' },
                { label: 'Available for', value: 'UK & International' },
                { label: 'Enquiries', value: 'Via contact form' },
              ].map((item) => (
                <div key={item.label} style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                  <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.25rem' }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-cream)' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </aside>

          {/* Body text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: '1.375rem',
                lineHeight: 1.55,
                color: 'var(--color-cream)',
                fontStyle: 'italic',
              }}
            >
              Most people who talk about fraud have studied it. Elliot lived through it — on the wrong side of the law.
            </p>

            <p style={{ color: 'var(--color-cream-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
              [Elliot&apos;s full story goes here — the events, the choices, the consequences, and the path out. This section should be written in Elliot&apos;s voice and reviewed carefully before publishing. It should be honest, restrained, and specific — not dramatic. The goal is credibility, not spectacle.]
            </p>

            <p style={{ color: 'var(--color-cream-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
              Today, Elliot advises organisations on how fraud actually works — not from a textbook, but from direct experience of the psychology, the tactics, and the vulnerabilities that make it possible. He speaks to audiences who need to understand deception in a way that changes their behaviour, not just their awareness.
            </p>

            <p style={{ color: 'var(--color-cream-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
              He is trusted by event organisers, corporate risk teams, and journalists precisely because he doesn&apos;t sensationalise. He explains clearly, draws on real events, and leaves audiences with practical understanding rather than fear.
            </p>

            <div
              style={{
                borderLeft: '2px solid var(--color-oxblood)',
                paddingLeft: '1.5rem',
                margin: '1rem 0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '1.125rem',
                  fontStyle: 'italic',
                  color: 'var(--color-cream)',
                  lineHeight: 1.6,
                }}
              >
                &ldquo;The question I&apos;m always asked is how people let it happen to them. The honest answer is: they&apos;re normal, and the person deceiving them was skilled.&rdquo;
              </p>
            </div>

            <p style={{ color: 'var(--color-cream-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
              Elliot is available for keynote engagements, corporate consultancy, media commentary, and expert advisory roles. He works selectively — taking on projects where he believes his perspective adds genuine value.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1rem' }}>
              <Link
                href="/keynote"
                style={{
                  background: 'var(--color-oxblood)',
                  color: 'var(--color-cream)',
                  padding: '0.875rem 2rem',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Speaking enquiries
              </Link>
              <Link
                href="/contact"
                style={{
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-cream)',
                  padding: '0.875rem 2rem',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise areas */}
      <section
        style={{
          borderTop: '1px solid var(--color-border)',
          padding: '5rem 2rem',
        }}
      >
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
            Areas of expertise
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1px',
              background: 'var(--color-border)',
            }}
          >
            {[
              'Fraud & scam psychology',
              'Social engineering tactics',
              'Trust exploitation',
              'Behavioural manipulation',
              'Corporate fraud risk',
              'Consumer scam prevention',
              'Impersonation & identity fraud',
              'Online & phone fraud',
            ].map((area) => (
              <div
                key={area}
                style={{
                  background: 'var(--color-ink)',
                  padding: '1.75rem 2rem',
                  borderLeft: '2px solid transparent',
                }}
              >
                <p style={{ color: 'var(--color-cream)', fontSize: '0.9375rem' }}>{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
