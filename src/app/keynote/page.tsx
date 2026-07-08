import type { Metadata } from 'next'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata: Metadata = {
  title: 'Keynote Speaking',
  description:
    'Elliot Castro speaks to organisations about fraud, scams, trust, and social engineering — from first-hand experience. Book a keynote.',
}

const topics = [
  {
    title: 'The Psychology of Deception',
    desc: 'How fraudsters exploit cognitive shortcuts, emotional triggers, and social norms — and why even intelligent, sceptical people fall victim. A talk that reframes fraud as a human problem rather than a technical one.',
  },
  {
    title: 'Inside the Social Engineer\'s Playbook',
    desc: 'A detailed, often uncomfortable look at the techniques used to manipulate individuals and organisations. Impersonation, pretext, trust-building, urgency, and isolation — demonstrated with real examples.',
  },
  {
    title: 'When Fraud Hits the Organisation',
    desc: 'The human cost of corporate fraud — on individuals, on teams, and on organisations. How it happens, how it spreads, and what a culture of scepticism actually looks like in practice.',
  },
  {
    title: 'Building a Fraud-Aware Culture',
    desc: 'Moving beyond compliance training. How to create the conditions in which staff are genuinely better at recognising, questioning, and escalating — without creating a culture of suspicion.',
  },
  {
    title: 'Scam Prevention for Consumers',
    desc: 'A public-facing talk designed for general audiences: older adults, community groups, employees\' families. Warm, accessible, and immediately practical.',
  },
]

const testimonials = [
  {
    quote: 'I have never seen a room that quiet during a talk about compliance. Elliot made every person in that room think about how it could happen to them.',
    author: 'Head of Risk, major UK bank',
  },
  {
    quote: 'He speaks with authority you can\'t fake. Our team left the session with a completely different relationship to the word \'trust\'.',
    author: 'Chief People Officer, professional services firm',
  },
  {
    quote: 'We\'ve had fraud awareness speakers before. This was something else. Our delegates were still talking about it at dinner.',
    author: 'Conference director, financial crime forum',
  },
]

export default function KeynotePage() {
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
            Keynote Speaking
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
            Talks that change how people think about being deceived.
          </h1>
          <p
            style={{
              color: 'var(--color-muted)',
              fontSize: '1.0625rem',
              maxWidth: '560px',
              lineHeight: 1.7,
            }}
          >
            Elliot speaks at conferences, corporate events, and public forums. He brings
            a perspective no fraud training manual can replicate — lived experience of
            deception, delivered with clarity and restraint.
          </p>
        </div>
      </section>

      {/* Topics */}
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
            Topics & formats
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {topics.map((topic, i) => (
              <div
                key={topic.title}
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
                    {topic.title}
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
                  {topic.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format / audience */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--color-border)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '0',
          }}
        >
          {[
            {
              label: 'Format',
              items: ['45–60 minute keynote', 'Full-day workshop', 'Panel participation', 'Fireside conversation', 'Custom to brief'],
            },
            {
              label: 'Audience',
              items: ['Financial services', 'Professional services', 'Public sector', 'Healthcare', 'General conferences', 'Community & public'],
            },
            {
              label: 'Delivery',
              items: ['In-person (UK & international)', 'Hybrid formats', 'Remote (select events)'],
            },
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

      {/* Testimonials */}
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
            What organisers say
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2px',
              background: 'var(--color-border)',
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.author}
                style={{
                  background: 'var(--color-ink)',
                  padding: '2.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    color: 'var(--color-cream)',
                    lineHeight: 1.7,
                    marginBottom: '1.25rem',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.06em',
                    color: 'var(--color-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
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
              Enquire about a keynote
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              Tell me about your event and what you need. I respond to all serious enquiries personally.
            </p>
          </div>
          <EnquiryForm type="keynote" />
        </div>
      </section>
    </>
  )
}
