import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = {
  title: 'Case Studies — Elliot Castro',
  description: 'Real outcomes from organisations Elliot has worked with — keynotes, consultancy, and advisory engagements.',
}

const placeholders = [
  {
    org: '[Organisation name — TBC]',
    sector: '[Sector — TBC]',
    type: 'Keynote speaking',
    outcome: '[Brief outcome — e.g. "Delivered fraud awareness keynote to 400 senior staff. Zero reported incidents in subsequent quarter." — copy pending from Elliot]',
    quote: '[Testimonial quote — copy pending from Elliot]',
    attribution: '[Name, Title, Organisation — TBC]',
  },
  {
    org: '[Organisation name — TBC]',
    sector: '[Sector — TBC]',
    type: 'Consultancy',
    outcome: '[Brief outcome — e.g. "Conducted fraud risk audit and delivered board-level recommendations. Two critical control gaps identified." — copy pending from Elliot]',
    quote: '[Testimonial quote — copy pending from Elliot]',
    attribution: '[Name, Title, Organisation — TBC]',
  },
  {
    org: '[Organisation name — TBC]',
    sector: '[Sector — TBC]',
    type: 'Workshop & training',
    outcome: '[Brief outcome — e.g. "Full-day social engineering workshop for security team. Measurably improved phishing test scores over 6 months." — copy pending from Elliot]',
    quote: '[Testimonial quote — copy pending from Elliot]',
    attribution: '[Name, Title, Organisation — TBC]',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-navy)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Outcomes</p>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', maxWidth: 680, lineHeight: 1.12, marginBottom: '1.25rem' }}>
              Real results from real engagements.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, lineHeight: 1.8 }}>
              Organisations that book Elliot come away with changed perspectives, not just improved awareness. Here is a selection of engagements and outcomes.
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
              Want to discuss your requirements?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Elliot responds to all serious enquiries personally. Get in touch to talk through what you need.
            </p>
            <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: '#111111' }}>
              Make an enquiry
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
