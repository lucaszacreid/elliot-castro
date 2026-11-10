import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real outcomes from organisations Elliot has worked with — keynotes, consultancy, and advisory engagements.',
}

const placeholders = [
  {
    org: 'Cyber Resilience in Practice: From Preparation to Recovery',
    sector: 'Commercial — C-suite & IT leadership',
    type: 'Keynote speaking',
    outcome: '85 clients and prospects attended, including CTOs, CIOs, CISOs and IT Directors, as part of a discussion on preparing for and responding to cyber incidents.',
    quote: 'The event went really well, and the feedback on Elliot was great. Everyone has commented how interesting the story was and relevant the takeaways were.',
    attribution: 'Booking agent, October 2026',
  },
  {
    org: 'Företagsuniversitetet AB — Financial Fraud Forum 2026',
    sector: 'Fraud & anti-corruption, Sweden',
    type: 'Keynote speaking',
    outcome: 'Sweden’s annual forum for anti-fraud and anti-corruption professionals, drawing around 200 fraud fighters to Stockholm. Elliot’s talk scored an average 4.43 out of 5 across delegate feedback forms.',
    quote: 'A huge thank you to Elliot for a successful speech at the Financial Fraud Forum. Many of the delegates have also written positive comments: brilliant, so interesting, perfect with this "inside story", interesting and entertaining.',
    attribution: 'Stefan Haglund, CEO, September 2026',
  },
  {
    org: 'Forum Events — Smarter Payments Summit',
    sector: 'Payments industry',
    type: 'Keynote speaking',
    outcome: 'Returning speaker at Forum Events’ Smarter Payments Summit.',
    quote: 'The feedback from the Smarter Payments Summit was very positive, as always, and we love having you attend our Events.',
    attribution: 'Natasha Cobbold, Organiser, June 2024',
  },
  {
    org: 'Forum Events — Merchant Fraud Summit',
    sector: 'Merchant & payments fraud',
    type: 'Keynote speaking',
    outcome: 'Delegates rated the talk highly, with an open invitation to return for future events.',
    quote: 'Your presentation was received excellently and delegates responded with very positive feedback: "very entertaining", "fascinating", "insightful". I would love to book you in for future events!',
    attribution: 'Natasha Cobbold, November 2023',
  },
  {
    org: 'Danone',
    sector: 'Consumer goods / FMCG',
    type: 'Keynote speaking',
    outcome: 'Cyber Awareness Month keynote for roughly 80–90 attendees in person, with a further 6,000 watching via internal stream.',
    quote: 'Just to say a big thank you for speaking for Danone. The event went well and we were very happy with Elliot. Those in attendance found Elliot’s talk very interesting and several stuck around afterwards to ask him questions.',
    attribution: 'Danone, October 2025',
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
