import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import { SHORT_BIO_FIRST_PARAGRAPH } from '@/lib/topics'

export const metadata: Metadata = {
  title: 'About',
  description: SHORT_BIO_FIRST_PARAGRAPH,
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
        <div className="container about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }}>
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
              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                Elliot Castro is a former fraudster turned keynote speaker and consultant who now helps organisations understand fraud from a perspective most people never get to see: how offenders actually think, manufacture credibility and persuade people to act against their own interests.
              </p>

              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                His work explores the human mechanics underneath fraud &ndash; trust, authority, urgency, confidence, information gathering, impersonation and the exploitation of weaknesses in everyday processes. Rather than treating fraud simply as a technology or security problem, Elliot looks at the interaction between people, identity and process, and at the moments where apparently sensible decisions can become opportunities for manipulation.
              </p>

              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                That perspective comes from lived experience. After becoming involved in fraud at the young age of 15, Elliot ultimately faced prison and the consequences of the decisions he had made. What followed was a very different chapter: rebuilding his life and using what he had learned to help others understand and prevent the very behaviours he had once exploited.
              </p>

              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                Today, Elliot speaks to corporate, financial services and professional audiences about fraud psychology, the criminal mindset, social engineering, identity and impersonation, and the human behaviour behind scams. He also examines how newer technologies &ndash; including AI-enabled deception, deepfakes and voice cloning &ndash; can make familiar manipulation techniques faster, more scalable and more convincing.
              </p>

              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                His approach is deliberately accessible and non-technical. The aim is not to glorify criminal behaviour or simply tell an unusual story. It is to help audiences understand why fraud works, how trust is manufactured, where organisations become vulnerable and what criminals may notice that legitimate organisations overlook.
              </p>

              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                Elliot&rsquo;s past is therefore the starting point, not the product. The value lies in translating that experience into practical insight about fraud, trust, manipulation, human behaviour and organisational resilience.
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
