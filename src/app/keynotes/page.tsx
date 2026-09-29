import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Fraud Keynote Topics: Social Engineering, Identity & AI-Enabled Fraud',
  socialTitle: 'Fraud Keynote Topics | Elliot Castro',
  description: 'Four keynote topics from fraud speaker Elliot Castro: fraud psychology and the criminal mindset, social engineering and trust, identity and impersonation, and AI-enabled deception including deepfakes and voice cloning.',
  path: '/keynotes',
})

const FORMATS = 'Keynote, panel, workshop or virtual'

const keynotes = [
  {
    id: 'fraud-psychology',
    // Anchors for the pre-2026 topics folded into this pillar, so old links still land here
    legacyIds: ['fraud-prevention', 'psychology', 'risk-management'],
    title: 'Fraud Psychology & the Criminal Mindset',
    subtitle: 'Fraud rarely starts with technology. It starts with someone noticing an opportunity.',
    bestFor: 'Fraud, financial crime, risk and leadership teams',
    body: [
      'How offenders think, identify opportunity, gather information, manipulate people and exploit the gap between procedures on paper and what happens in practice.',
      "Drawing on first-hand experience, Elliot takes audiences to the other side of the equation: what criminals notice, what they look for, and where organisations become vulnerable without realising it.",
    ],
    points: [
      'How offenders identify opportunity and decide where to focus',
      'How information is gathered before any approach is made',
      'The gap between procedures on paper and what happens in practice',
      'What criminals may notice that legitimate organisations overlook',
    ],
    whoFor: 'Fraud, financial crime, risk and compliance teams, leadership audiences, and any organisation that wants to see its own processes the way an offender would.',
  },
  {
    id: 'social-engineering',
    legacyIds: ['cybersecurity'],
    title: 'Social Engineering, Trust & Human Behaviour',
    subtitle: 'Credibility can be manufactured. Understanding how is the first step to resisting it.',
    bestFor: 'Fraud, cyber security and customer-facing teams',
    body: [
      'How credibility is manufactured through authority, urgency, confidence, familiarity, fear, assumption and gradual persuasion.',
      'Elliot explains the human mechanics behind successful manipulation – including the moments where apparently sensible decisions become opportunities for manipulation, and the point at which a target begins helping the offender.',
    ],
    points: [
      'How authority, urgency and confidence are used to shortcut judgement',
      'How familiarity, fear and assumption lower people’s guard',
      'How gradual persuasion moves someone from caution to cooperation',
      'Why fraud works on capable, sensible people',
    ],
    whoFor: 'Fraud, cyber security and customer-facing teams in financial services and beyond, as well as leadership teams and all-staff events.',
  },
  {
    id: 'identity-impersonation',
    legacyIds: ['identity-theft'],
    title: 'Identity, Impersonation & Human Verification',
    subtitle: 'Identity is only as strong as the people and processes that verify it.',
    bestFor: 'Identity, authentication and fraud teams',
    body: [
      'How criminals exploit personal information, impersonation, authentication processes and the points where identity, process and human judgement collide.',
      'Rather than treating identity simply as a technology or security problem, Elliot looks at the interaction between people, identity and process – and at what happens when someone convincingly claims to be someone they are not.',
    ],
    points: [
      'How personal information is used to build a convincing identity',
      'How impersonation exploits trust in familiar people and organisations',
      'Where authentication processes depend on human judgement',
      'The points where identity, process and human judgement collide',
    ],
    whoFor: 'Identity, authentication and fraud teams at banks, fintechs and payments businesses, plus insurers, retailers and any organisation that needs to verify who it is dealing with.',
  },
  {
    id: 'ai-enabled-deception',
    legacyIds: [] as string[],
    title: 'Modern Fraud & AI-Enabled Deception',
    subtitle: 'New tools, familiar manipulation.',
    bestFor: 'Fraud, cyber, identity and leadership audiences',
    body: [
      'How technologies such as AI, deepfakes and voice cloning can increase the speed, scale and credibility of fraud – while the underlying human manipulation remains remarkably familiar.',
      'This is not a technical briefing. Elliot gives a clear, accessible view of how newer technologies make familiar manipulation techniques faster, more scalable and more convincing – and why changing technology may alter the tools both criminals and industry use, but not necessarily the psychology that makes fraud work.',
    ],
    points: [
      'How AI, deepfakes and voice cloning change the speed, scale and credibility of fraud',
      'Why the manipulation underneath remains remarkably familiar',
      'How new technology makes established techniques more convincing',
      'Why the psychology of fraud matters as much as the tools',
    ],
    whoFor: 'Fraud, cyber security and identity teams, technology businesses, and leadership audiences looking at how fraud is evolving.',
  },
]

export default function KeynotesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-navy)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Speaking topics</p>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', maxWidth: 700, lineHeight: 1.12, marginBottom: '1.5rem' }}>
              Technology changes. Manipulation does not.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, lineHeight: 1.8 }}>
              Four talks on the human mechanics underneath fraud: trust, authority, urgency, confidence, information gathering, impersonation, process exploitation and the point at which a target begins helping the offender. Every talk is accessible, non-technical and tailored to your sector and audience.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Keynote list ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {keynotes.map((k, i) => (
              <AnimateIn key={k.id} delay={i * 40}>
                <div id={k.id} style={{ borderBottom: '1px solid var(--color-border)', padding: '4rem 0', position: 'relative' }}>
                  {k.legacyIds.map(legacyId => (
                    <span key={legacyId} id={legacyId} aria-hidden="true" style={{ position: 'absolute', top: 0 }} />
                  ))}
                  <div className="keynote-item-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
                    {/* Left */}
                    <div className="keynote-sticky" style={{ position: 'sticky', top: '6rem' }}>
                      <div style={{ width: 32, height: 3, background: 'var(--color-green)', marginBottom: '1.5rem' }} />
                      <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{k.title}</h2>
                      <p style={{ color: 'var(--color-mid-grey)', fontSize: '0.9375rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>{k.subtitle}</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--color-mid-grey)' }}><span style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Formats:</span> {FORMATS}</p>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--color-mid-grey)' }}><span style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Best for:</span> {k.bestFor}</p>
                      </div>
                      <Link href="/contact" className="btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '0.8125rem' }}>
                        Enquire about speaking
                      </Link>
                    </div>

                    {/* Right */}
                    <div>
                      {k.body.map((para, j) => (
                        <p key={j} style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85, marginBottom: '1.25rem' }}>{para}</p>
                      ))}
                      <div style={{ marginTop: '2rem' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-green)', marginBottom: '1rem' }}>What your audience will understand</p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                          {k.points.map(pt => (
                            <li key={pt} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.9375rem', color: 'var(--color-navy)' }}>
                              <span style={{ color: 'var(--color-green)', fontWeight: 700, flexShrink: 0, marginTop: '0.1em' }}>—</span>
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div style={{ marginTop: '2rem' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-green)', marginBottom: '0.75rem' }}>Who it&apos;s for</p>
                        <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>{k.whoFor}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking CTA ── */}
      <section style={{ padding: '6rem 2rem', background: 'var(--color-off-white)', borderTop: '1px solid var(--color-border)' }}>
        <AnimateIn>
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-label" style={{ textAlign: 'center' }}>Speaking enquiries</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>Ready to discuss your event?</h2>
            <p style={{ color: 'var(--color-mid-grey)', marginBottom: '2.5rem' }}>
              Share your event date, audience and format, and Elliot will come back to you to discuss availability and how the talk can be tailored to your audience.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary">Enquire about speaking</Link>
              <Link href="/#watch" className="btn-outline">Watch Elliot speak</Link>
            </div>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
