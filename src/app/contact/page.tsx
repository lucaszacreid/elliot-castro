import type { Metadata } from 'next'
import AnimateIn from '@/components/AnimateIn'
import EnquiryForm from '@/components/EnquiryForm'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Enquire About Speaking',
  socialTitle: 'Enquire About Speaking | Elliot Castro',
  description: 'Speaking, consultancy, advisory and media enquiries for fraud keynote speaker Elliot Castro.',
  path: '/contact',
})

const ENQUIRY_TYPES = ['keynote', 'consultancy', 'media', 'general']

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { type } = await searchParams
  const enquiryType = typeof type === 'string' && ENQUIRY_TYPES.includes(type) ? type : 'keynote'

  return (
    <>
      {/* ── Header ── */}
      <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-navy)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Get in touch</p>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', maxWidth: 600, lineHeight: 1.12, marginBottom: '1.25rem' }}>
              Enquire about speaking
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 480, lineHeight: 1.8 }}>
              For speaking, consultancy, advisory and media enquiries, use the form below or email{' '}
              <a href="mailto:elliot@elliotcastro.com" style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>
                elliot@elliotcastro.com
              </a>. Elliot responds to all serious enquiries personally.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Form + sidebar ── */}
      <section style={{ padding: '6rem 2rem' }}>
        <div className="container contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }}>

          {/* Sidebar */}
          <AnimateIn>
            <h2 style={{ fontSize: '1.375rem', marginBottom: '1rem', lineHeight: 1.3 }}>How Elliot can help</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: 'Speaking', desc: 'Keynotes, panels, workshops and virtual sessions on fraud psychology, social engineering, identity and impersonation, and AI-enabled deception. Tailored to your sector and audience.' },
                { title: 'Consultancy & advisory', desc: 'First-hand insight into how criminals build trust, gather information and exploit the gaps between people, identity and process.' },
                { title: 'Media', desc: 'Commentary on fraud, scams, social engineering, impersonation and AI-enabled deception. Choose “Media” as the enquiry type.' },
                { title: 'General enquiries', desc: 'Anything else – choose “General enquiry” and Elliot will get back to you.' },
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
            <EnquiryForm key={enquiryType} defaultType={enquiryType} />
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
