import type { Metadata } from 'next'
import AnimateIn from '@/components/AnimateIn'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Speaking, consultancy, media, and general enquiries for Elliot Castro.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-navy)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Get in touch</p>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', maxWidth: 600, lineHeight: 1.12, marginBottom: '1.25rem' }}>
              Let's talk.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 480, lineHeight: 1.8 }}>
              Elliot responds to all serious enquiries personally. Use the form below or email{' '}
              <a href="mailto:elliot@elliotcastro.com" style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>
                elliot@elliotcastro.com
              </a>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Form + sidebar ── */}
      <section style={{ padding: '6rem 2rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }}>

          {/* Sidebar */}
          <AnimateIn>
            <h2 style={{ fontSize: '1.375rem', marginBottom: '1rem', lineHeight: 1.3 }}>What can Elliot help with?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: 'Keynote Speaking', desc: 'Book Elliot for conferences, corporate events, or private briefings. Talks tailored to your audience and sector.' },
                { title: 'Consultancy', desc: 'Fraud risk advisory, employee training, policy review, and incident response support.' },
                { title: 'Media', desc: 'Expert commentary for broadcast, print, and digital. Short deadlines welcome.' },
                { title: 'Workshop & Training', desc: 'Half-day or full-day sessions for teams, delivered in-person or virtually.' },
              ].map(item => (
                <div key={item.title} style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem' }}>
                  <p style={{ fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.375rem', fontSize: '0.9375rem' }}>{item.title}</p>
                  <p style={{ color: 'var(--color-mid-grey)', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--color-off-white)', border: '1px solid var(--color-border)' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', marginBottom: '0.5rem' }}>Direct email</p>
              <a href="mailto:elliot@elliotcastro.com" style={{ color: 'var(--color-navy)', fontWeight: 600, fontSize: '0.9375rem' }}>
                elliot@elliotcastro.com
              </a>
            </div>
          </AnimateIn>

          {/* Form */}
          <AnimateIn delay={120}>
            <EnquiryForm defaultType="keynote" />
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
