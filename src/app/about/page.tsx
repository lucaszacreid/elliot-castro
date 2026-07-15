import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = {
  title: 'About Elliot Castro',
  description: 'From convicted international fraudster to trusted adviser to banks, police forces, and corporations. The story behind the speaker.',
}

const expertiseAreas = [
  'Fraud & Scam Psychology',
  'Social Engineering Tactics',
  'Trust Exploitation',
  'Behavioural Manipulation',
  'Corporate Fraud Risk',
  'Consumer Scam Prevention',
  'Identity & Impersonation Fraud',
  'Online & Phone Fraud',
]

const credentials = [
  { label: 'Based in', value: 'United Kingdom' },
  { label: 'Available for', value: 'UK & International' },
  { label: 'Languages', value: 'English' },
  { label: 'Enquiries', value: 'Via contact form or email' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Page header ── */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--color-border)', background: 'var(--color-navy)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>About</p>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', maxWidth: 700, lineHeight: 1.12 }}>
              A story that earns the right to speak on fraud.
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* ── Main content ── */}
      <section style={{ padding: '6rem 2rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }}>
          {/* Sidebar */}
          <AnimateIn>
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
              <Image
                src="/about-photo.jpg"
                alt="Elliot Castro"
                width={600}
                height={750}
                priority
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {credentials.map(item => (
                <div key={item.label} style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                  <p style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', marginBottom: '0.25rem', fontWeight: 600 }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-navy)' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Body text */}
          <AnimateIn delay={120}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <p style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.375rem', lineHeight: 1.55, color: 'var(--color-navy)', fontStyle: 'italic' }}>
                Most people who talk about fraud have studied it. Elliot lived through it — on the wrong side of the law.
              </p>

              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                [Elliot's full story goes here — the events, the choices, the consequences, and the path out. This section should be written in Elliot's voice and reviewed carefully before publishing. It should be honest, restrained, and specific — not dramatic. The goal is credibility, not spectacle.]
              </p>

              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                Today, Elliot advises organisations on how fraud actually works — not from a textbook, but from direct experience of the psychology, the tactics, and the vulnerabilities that make it possible. He speaks to audiences who need to understand deception in a way that changes their behaviour, not just their awareness.
              </p>

              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                He is trusted by event organisers, corporate risk teams, and journalists precisely because he doesn't sensationalise. He explains clearly, draws on real events, and leaves audiences with practical understanding rather than fear.
              </p>

              <blockquote style={{ borderLeft: '3px solid var(--color-green)', paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
                <p style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.125rem', fontStyle: 'italic', color: 'var(--color-navy)', lineHeight: 1.6 }}>
                  &ldquo;The question I'm always asked is how people let it happen to them. The honest answer is: they're normal, and the person deceiving them was skilled.&rdquo;
                </p>
              </blockquote>

              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                Elliot is available for keynote engagements, corporate consultancy, media commentary, and expert advisory roles. He works selectively — taking on projects where he believes his perspective adds genuine value.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                <Link href="/contact" className="btn-primary">Make an enquiry</Link>
                <Link href="/keynotes" className="btn-outline">View keynotes</Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Expertise grid ── */}
      <section style={{ padding: '5rem 2rem', background: 'var(--color-off-white)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label">Areas of expertise</p>
          </AnimateIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'var(--color-border)', marginTop: '2rem' }}>
            {expertiseAreas.map((area, i) => (
              <AnimateIn key={area} delay={i * 60}>
                <div style={{ background: '#fff', padding: '1.75rem 2rem' }}>
                  <div style={{ width: 20, height: 2, background: 'var(--color-green)', marginBottom: '0.875rem' }} />
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-navy)', fontWeight: 500 }}>{area}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '6rem 2rem', background: 'var(--color-navy)' }}>
        <AnimateIn>
          <div style={{ maxWidth: 620, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>Book Elliot for your event</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2.5rem' }}>
              Keynotes, workshops, corporate consultancy, or media enquiries — get in touch to discuss how Elliot can help.
            </p>
            <Link href="/contact" className="btn-primary">Make an enquiry</Link>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
