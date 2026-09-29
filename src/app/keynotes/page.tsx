import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import TopicGrid from '@/components/TopicGrid'

export const metadata: Metadata = {
  title: 'Keynote Topics',
  description: 'Four keynote topics: Fraud Psychology & the Criminal Mindset; Social Engineering, Trust & Human Behaviour; Identity, Impersonation & Human Verification; and Modern Fraud & AI-Enabled Deception.',
}

export default function KeynotesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-navy)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Keynote Speaking</p>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', maxWidth: 700, lineHeight: 1.12, marginBottom: '1.5rem' }}>
              Talks built on lived experience, not research.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, lineHeight: 1.8 }}>
              Every keynote is tailored to your sector, audience, and event objectives. Elliot speaks from genuine personal experience — the expertise is not theoretical.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Topics ── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div className="container">
          <TopicGrid />
          <div style={{ borderTop: '1px solid var(--color-border)' }} />
        </div>
      </section>

      {/* ── Booking CTA ── */}
      <section style={{ padding: '6rem 2rem', background: 'var(--color-off-white)', borderTop: '1px solid var(--color-border)' }}>
        <AnimateIn>
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-label" style={{ textAlign: 'center' }}>Book Elliot</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>Ready to discuss your event?</h2>
            <p style={{ color: 'var(--color-mid-grey)', marginBottom: '2.5rem' }}>
              Elliot takes on a limited number of speaking engagements each year. Get in touch early to discuss availability and how the talk can be tailored to your audience.
            </p>
            <Link href="/contact" className="btn-primary">Make a speaking enquiry</Link>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
