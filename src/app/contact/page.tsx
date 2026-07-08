import type { Metadata } from 'next'
import Link from 'next/link'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Elliot Castro — speaking, consultancy, media, and general enquiries.',
}

const enquiryTypes = [
  {
    type: 'keynote' as const,
    label: 'Keynote Speaking',
    desc: 'Book Elliot for a conference, corporate event, or public forum.',
    href: '/keynote',
  },
  {
    type: 'consultancy' as const,
    label: 'Consultancy',
    desc: 'Fraud risk advisory, training, or incident support for your organisation.',
    href: '/consultancy',
  },
  {
    type: 'media' as const,
    label: 'Media',
    desc: 'Expert commentary for broadcast, print, or digital. Short deadlines welcome.',
    href: '/media',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '4rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
              marginBottom: '1.25rem',
            }}
          >
            Contact
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--color-cream)',
              maxWidth: '700px',
              marginBottom: '1.5rem',
            }}
          >
            Let&apos;s talk.
          </h1>
          <p
            style={{
              color: 'var(--color-muted)',
              fontSize: '1.0625rem',
              maxWidth: '480px',
              lineHeight: 1.7,
            }}
          >
            I respond to all serious enquiries personally. Use the forms below or
            contact me directly at{' '}
            <a
              href="mailto:hello@elliotcastro.com"
              style={{ color: 'var(--color-cream)', borderBottom: '1px solid var(--color-border)' }}
            >
              hello@elliotcastro.com
            </a>
          </p>
        </div>
      </section>

      {/* Enquiry type shortcuts */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
              marginBottom: '2.5rem',
            }}
          >
            What can I help with?
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0',
            }}
          >
            {enquiryTypes.map((item, i) => (
              <Link
                key={item.type}
                href={item.href}
                style={{
                  display: 'block',
                  padding: '2.5rem',
                  borderLeft: i === 0 ? '1px solid var(--color-border)' : undefined,
                  borderRight: '1px solid var(--color-border)',
                  borderTop: '1px solid var(--color-border)',
                  borderBottom: '1px solid var(--color-border)',
                  transition: 'background 0.2s',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '1.125rem',
                    color: 'var(--color-cream)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.label}
                </h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {item.desc}
                </p>
                <p
                  style={{
                    fontSize: '0.8125rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-oxblood)',
                  }}
                >
                  Go to {item.label.toLowerCase()} &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* General form */}
      <section style={{ padding: '5rem 2rem' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '6rem',
            alignItems: 'start',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: '1.75rem',
                color: 'var(--color-cream)',
                marginBottom: '1rem',
                lineHeight: 1.3,
              }}
            >
              General enquiry
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Not sure which category fits? Use this form and I&apos;ll make sure it reaches the right place.
            </p>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              Or email directly:
              <br />
              <a
                href="mailto:hello@elliotcastro.com"
                style={{
                  color: 'var(--color-cream)',
                  display: 'block',
                  marginTop: '0.25rem',
                }}
              >
                hello@elliotcastro.com
              </a>
            </p>
          </div>
          <EnquiryForm type="general" />
        </div>
      </section>
    </>
  )
}
