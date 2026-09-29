import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Fraud Consultancy & Advisory',
  socialTitle: 'Fraud Consultancy & Advisory | Elliot Castro',
  description: 'Consultancy and advisory from Elliot Castro: first-hand insight into fraud psychology, social engineering, identity and impersonation, and AI-enabled deception for financial services and beyond.',
  path: '/consultancy',
})

const areas = [
  {
    title: 'Fraud psychology & the criminal mindset',
    line: 'How offenders identify opportunity, gather information and exploit the gap between procedures on paper and what happens in practice.',
  },
  {
    title: 'Social engineering & trust',
    line: 'How credibility is manufactured through authority, urgency, confidence, familiarity, fear, assumption and gradual persuasion.',
  },
  {
    title: 'Identity, impersonation & verification',
    line: 'The points where personal information, impersonation, authentication processes and human judgement collide.',
  },
  {
    title: 'AI-enabled deception',
    line: 'How AI, deepfakes and voice cloning can increase the speed, scale and credibility of familiar manipulation techniques.',
  },
]

export default function ConsultancyPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-navy)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Consultancy &amp; advisory</p>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', maxWidth: 700, lineHeight: 1.12, marginBottom: '1.25rem' }}>
              See your organisation the way an offender would.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, lineHeight: 1.8 }}>
              Practical insight into how criminals manufacture trust, manipulate decisions and exploit the gaps between people, identity and process.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Approach ── */}
      <section style={{ padding: '6rem 2rem' }}>
        <div className="container about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }}>
          <AnimateIn>
            <p className="section-label">The approach</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginTop: '0.75rem', lineHeight: 1.15 }}>
              Fraud is a people problem as much as a technology one.
            </h2>
          </AnimateIn>
          <AnimateIn delay={120}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.25rem', lineHeight: 1.55, color: 'var(--color-navy)', fontStyle: 'italic' }}>
                Alongside his speaking, Elliot works with organisations as a consultant and adviser, bringing a rare first-hand view of how criminals think, build credibility and manipulate people.
              </p>
              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                Rather than treating fraud simply as a technology or security problem, Elliot looks at the interaction between people, identity and process &ndash; and at the moments where apparently sensible decisions can become opportunities for manipulation.
              </p>
              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                The aim is practical: to help teams understand why fraud works, how trust is manufactured, where organisations become vulnerable and what criminals may notice that legitimate organisations overlook.
              </p>
              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                Elliot&rsquo;s approach is accessible and non-technical, combining lived experience with contemporary fraud prevention and organisational risk. The focus is on the human behaviour that sits behind successful scams &ndash; and on why changing technology may alter the tools criminals use, but not necessarily the psychology that makes fraud work.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Areas ── */}
      <section style={{ padding: '5rem 2rem', background: 'var(--color-off-white)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label">Where Elliot can help</p>
          </AnimateIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'var(--color-border)', marginTop: '2rem' }}>
            {areas.map((area, i) => (
              <AnimateIn key={area.title} delay={i * 60}>
                <div style={{ background: '#fff', padding: '2rem', height: '100%' }}>
                  <div style={{ width: 20, height: 2, background: 'var(--color-green)', marginBottom: '0.875rem' }} />
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-navy)', fontWeight: 600, marginBottom: '0.5rem' }}>{area.title}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-mid-grey)', lineHeight: 1.7 }}>{area.line}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={200}>
            <div style={{ marginTop: '3.5rem', maxWidth: 640 }}>
              <p className="section-label">Who it&apos;s for</p>
              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                Financial services teams working in fraud, financial crime, risk, compliance, cyber security and identity &ndash; and other organisations where trust, manipulation, identity and human behaviour create risk, including insurers, retailers, technology businesses, professional services, government and law enforcement.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '6rem 2rem', background: 'var(--color-navy)' }}>
        <AnimateIn>
          <div style={{ maxWidth: 620, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>Discuss a consultancy project</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Every engagement is shaped around your organisation. Tell Elliot what you are looking to achieve and he will respond personally.
            </p>
            <Link href="/contact?type=consultancy" className="btn-primary" style={{ background: '#fff', color: '#111111' }}>
              Get in touch
            </Link>
            <p style={{ marginTop: '1.75rem', fontSize: '0.875rem' }}>
              <Link href="/contact" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'underline' }}>Or enquire about speaking</Link>
            </p>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
