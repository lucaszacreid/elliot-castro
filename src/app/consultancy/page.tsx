import type { Metadata } from 'next'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata: Metadata = {
  title: 'Consultancy',
  description:
    'Fraud risk assessment, training, advisory, and incident response consultancy from Elliot Castro — hands-on, practical, and grounded in real experience.',
}

const services = [
  {
    title: 'Fraud Risk Assessment',
    desc: 'An honest evaluation of where your organisation is exposed — processes, people, and culture. Delivered as a written report with prioritised recommendations, not a sales pitch for follow-on services.',
  },
  {
    title: 'Staff Training & Awareness',
    desc: 'Bespoke training sessions for teams, delivered in a way that creates genuine understanding rather than compliance box-ticking. Designed for the people actually doing the work, not the training manual.',
  },
  {
    title: 'Expert Advisory',
    desc: 'Retained or project-based advisory for organisations that want a trusted perspective on fraud, social engineering, and trust risk — available to boards, risk teams, and senior leadership.',
  },
  {
    title: 'Incident Response Support',
    desc: 'When fraud has already happened, clear thinking matters. Advisory support during and after an incident — understanding what happened, containing further risk, and communicating to stakeholders.',
  },
  {
    title: 'Policy & Process Review',
    desc: 'Review of existing controls, procedures, and policies from the perspective of how a fraudster would look at them. Practical, specific, and prioritised.',
  },
]

export default function ConsultancyPage() {
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
            Consultancy
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
            Practical fraud expertise, applied to your organisation.
          </h1>
          <p
            style={{
              color: 'var(--color-muted)',
              fontSize: '1.0625rem',
              maxWidth: '560px',
              lineHeight: 1.7,
            }}
          >
            Consultancy grounded in what fraud actually looks like from the inside — not
            theoretical frameworks, but the real vulnerabilities that get exploited and
            the practical measures that reduce risk.
          </p>
        </div>
      </section>

      {/* Who it&apos;s for */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--color-border)' }}>
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
          <h2
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: '1.5rem',
              color: 'var(--color-cream)',
              lineHeight: 1.3,
            }}
          >
            Who I work with
          </h2>
          <div>
            <p style={{ color: 'var(--color-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              I work with organisations that face real fraud exposure and want a practical,
              experienced perspective — not a compliance exercise. That typically means risk and
              security teams, senior leadership, and boards who want genuine understanding, not reassurance.
            </p>
            <p style={{ color: 'var(--color-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
              I take on a limited number of consultancy engagements at any one time. Enquiries
              are assessed individually — if I do not believe I can add genuine value, I will say so.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
              marginBottom: '3rem',
            }}
          >
            Services
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {services.map((s, i) => (
              <div
                key={s.title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: '3rem',
                  padding: '2.5rem 0',
                  borderTop: '1px solid var(--color-border)',
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-oxblood)',
                      letterSpacing: '0.08em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2
                    style={{
                      fontFamily: 'var(--font-playfair), Georgia, serif',
                      fontSize: '1.125rem',
                      color: 'var(--color-cream)',
                      lineHeight: 1.3,
                    }}
                  >
                    {s.title}
                  </h2>
                </div>
                <p
                  style={{
                    color: 'var(--color-muted)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.75,
                    alignSelf: 'center',
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--color-border)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0',
          }}
        >
          {[
            { label: 'Engagement model', items: ['Project-based', 'Retained advisory', 'One-day intensive'] },
            { label: 'Typical duration', items: ['Single workshop: half or full day', 'Risk assessment: 2–4 weeks', 'Advisory: 3–12 months'] },
            { label: 'Sectors', items: ['Financial services', 'Insurance', 'Professional services', 'Healthcare', 'Public sector', 'Retail & e-commerce'] },
          ].map((col, i) => (
            <div
              key={col.label}
              style={{
                padding: '3rem',
                borderLeft: i === 0 ? '1px solid var(--color-border)' : undefined,
                borderRight: '1px solid var(--color-border)',
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <p
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  marginBottom: '1.5rem',
                }}
              >
                {col.label}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {col.items.map((item) => (
                  <li key={item} style={{ color: 'var(--color-cream-muted)', fontSize: '0.9375rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry form */}
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
              Make a consultancy enquiry
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              Tell me about the challenge or project. I respond to all serious enquiries personally.
            </p>
          </div>
          <EnquiryForm type="consultancy" />
        </div>
      </section>
    </>
  )
}
