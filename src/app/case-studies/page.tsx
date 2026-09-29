import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'

// Hidden from nav, footer and sitemap until real case studies are supplied.
export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Selected speaking and consultancy engagements from fraud keynote speaker Elliot Castro.',
  robots: { index: false, follow: true },
}

// TODO: replace with genuine case studies supplied by Elliot
const placeholders = [1, 2, 3].map(n => ({
  org: `{{CASE_STUDY_${n}_ORG}}`,
  sector: `{{CASE_STUDY_${n}_SECTOR}}`,
  type: n === 2 ? 'Consultancy & advisory' : 'Speaking',
  outcome: `{{CASE_STUDY_${n}_SUMMARY}}`,
  quote: `{{CASE_STUDY_${n}_QUOTE}}`,
  attribution: `{{CASE_STUDY_${n}_NAME_TITLE}}`,
}))

export default function CaseStudiesPage() {
  return (
    <>
      <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-navy)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Case studies</p>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', maxWidth: 680, lineHeight: 1.12, marginBottom: '1.25rem' }}>
              Selected engagements.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, lineHeight: 1.8 }}>
              A selection of speaking and consultancy work with corporate and financial-services organisations.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {placeholders.map((item, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <div style={{ borderBottom: '1px solid var(--color-border)', padding: '3.5rem 0' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: 'var(--color-navy)', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: 2 }}>
                      {item.type}
                    </span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-mid-grey)' }}>{item.sector}</span>
                  </div>

                  <h2 style={{ fontSize: '1.375rem', marginBottom: '1rem' }}>{item.org}</h2>

                  <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 640 }}>
                    {item.outcome}
                  </p>

                  <blockquote style={{ borderLeft: '3px solid var(--color-border)', paddingLeft: '1.5rem' }}>
                    <p style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.0625rem', fontStyle: 'italic', color: 'var(--color-navy)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-mid-grey)' }}>{item.attribution}</p>
                  </blockquote>
                </div>
              </AnimateIn>
            ))}
          </div>

          <div style={{ marginTop: '2rem', padding: '2rem', background: 'var(--color-off-white)', border: '1px dashed var(--color-border)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-mid-grey)' }}>
              Additional case studies and client references available on request.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 2rem', background: 'var(--color-navy)' }}>
        <AnimateIn>
          <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>
              Planning an event?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Share your event date, audience and format, and Elliot will respond personally.
            </p>
            <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: '#111111' }}>
              Enquire about speaking
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
