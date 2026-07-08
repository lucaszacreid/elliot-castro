import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Elliot Castro — Fraud, Trust & Social Engineering Expert',
  description:
    'Keynote speaker, consultant, and media commentator on fraud, scams, trust, and social engineering.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          overflow: 'hidden',
          background: '#0C0B0B',
        }}
      >
        {/* Portrait — right side, blended in */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            top: 0,
            width: '60%',
            pointerEvents: 'none',
          }}
        >
          <Image
            src="/hero-portrait.png"
            alt=""
            fill
            priority
            style={{
              objectFit: 'contain',
              objectPosition: 'right bottom',
              mixBlendMode: 'multiply',
            }}
          />
          {/* Fade from left — merges portrait into background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, #0C0B0B 0%, rgba(12,11,11,0.85) 25%, rgba(12,11,11,0.3) 55%, transparent 80%)',
            }}
          />
          {/* Fade from top */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, #0C0B0B 0%, rgba(12,11,11,0.4) 20%, transparent 50%)',
            }}
          />
          {/* Fade from bottom */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, #0C0B0B 0%, rgba(12,11,11,0.6) 20%, transparent 50%)',
            }}
          />
        </div>

        {/* Text content */}
        <div
          style={{
            position: 'relative',
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            padding: '0 2rem 6rem',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-oxblood)',
              marginBottom: '1.5rem',
            }}
          >
            Fraud · Trust · Social Engineering
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'var(--color-cream)',
              maxWidth: '540px',
              marginBottom: '2rem',
            }}
          >
            The person who knows how deception works — from the inside.
          </h1>

          <p
            style={{
              fontSize: '1.0625rem',
              color: 'var(--color-cream-muted)',
              maxWidth: '420px',
              lineHeight: 1.7,
              marginBottom: '3rem',
            }}
          >
            Elliot Castro advises organisations, speaks at conferences, and helps media
            audiences understand fraud before it happens to them.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link
              href="/keynote"
              style={{
                background: 'var(--color-oxblood)',
                color: 'var(--color-cream)',
                padding: '0.875rem 2rem',
                fontSize: '0.8125rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Book a keynote
            </Link>
            <Link
              href="/about"
              style={{
                border: '1px solid rgba(242,237,231,0.25)',
                color: 'var(--color-cream)',
                padding: '0.875rem 2rem',
                fontSize: '0.8125rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              About Elliot
            </Link>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section
        style={{
          borderTop: '1px solid var(--color-border)',
          padding: '6rem 2rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
              marginBottom: '4rem',
            }}
          >
            What I do
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '0',
            }}
          >
            {[
              {
                href: '/keynote',
                label: 'Keynote Speaking',
                desc: 'Talks that make fraud and social engineering viscerally real — so your audience leaves with understanding, not just awareness.',
                cta: 'Speaking enquiries',
              },
              {
                href: '/consultancy',
                label: 'Consultancy',
                desc: 'Hands-on advisory for organisations who want to assess exposure, improve defences, and train teams — from practical experience.',
                cta: 'Consultancy enquiries',
              },
              {
                href: '/media',
                label: 'Media',
                desc: 'Expert commentary for broadcast, print, and digital. Articulate, reliable, and available on short deadlines.',
                cta: 'Media enquiries',
              },
            ].map((item, i) => (
              <div
                key={item.label}
                style={{
                  padding: '3rem',
                  borderLeft: i === 0 ? '1px solid var(--color-border)' : undefined,
                  borderRight: '1px solid var(--color-border)',
                  borderBottom: '1px solid var(--color-border)',
                  borderTop: '1px solid var(--color-border)',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    color: 'var(--color-cream)',
                    marginBottom: '1rem',
                  }}
                >
                  {item.label}
                </h2>
                <p
                  style={{
                    color: 'var(--color-muted)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.7,
                    marginBottom: '2rem',
                  }}
                >
                  {item.desc}
                </p>
                <Link
                  href={item.href}
                  style={{
                    fontSize: '0.8125rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-oxblood)',
                  }}
                >
                  {item.cta} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section
        style={{
          padding: '6rem 2rem',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1.375rem, 3vw, 2rem)',
              fontStyle: 'italic',
              lineHeight: 1.5,
              color: 'var(--color-cream)',
              marginBottom: '2rem',
            }}
          >
            &ldquo;Most fraud training tells people what to look out for. Elliot makes them feel what it&apos;s like to be deceived — and that changes behaviour in a way a checklist never does.&rdquo;
          </p>
          <p
            style={{
              fontSize: '0.8125rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
            }}
          >
            — Event organiser, financial services sector
          </p>
        </div>
      </section>

      {/* Insights preview */}
      <section
        style={{
          borderTop: '1px solid var(--color-border)',
          padding: '6rem 2rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
              }}
            >
              Recent writing
            </p>
            <Link
              href="/insights"
              style={{
                fontSize: '0.8125rem',
                letterSpacing: '0.08em',
                color: 'var(--color-oxblood)',
              }}
            >
              All insights &rarr;
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1px',
              background: 'var(--color-border)',
            }}
          >
            {[
              {
                slug: 'why-smart-people-get-scammed',
                title: 'Why Smart People Get Scammed',
                date: 'June 2025',
                excerpt: 'Intelligence is not a defence against social engineering. Here is why — and what actually helps.',
              },
              {
                slug: 'the-anatomy-of-a-phone-scam',
                title: 'The Anatomy of a Phone Scam',
                date: 'May 2025',
                excerpt: 'A step-by-step breakdown of how a typical phone fraud unfolds, from first contact to loss.',
              },
              {
                slug: 'trust-is-a-vulnerability',
                title: 'Trust Is a Vulnerability',
                date: 'April 2025',
                excerpt: 'The same instinct that makes us good colleagues, friends, and citizens also makes us exploitable.',
              },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                style={{
                  display: 'block',
                  padding: '2.5rem',
                  background: 'var(--color-ink)',
                  transition: 'background 0.2s',
                }}
              >
                <p
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    color: 'var(--color-muted)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {post.date}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '1.125rem',
                    color: 'var(--color-cream)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section
        style={{
          borderTop: '1px solid var(--color-border)',
          padding: '5rem 2rem',
        }}
      >
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              color: 'var(--color-cream)',
              marginBottom: '1.5rem',
            }}
          >
            Have an event, project, or interview in mind?
          </h2>
          <p
            style={{
              color: 'var(--color-muted)',
              marginBottom: '2.5rem',
              fontSize: '1rem',
            }}
          >
            I respond to all serious enquiries personally.
          </p>
          <Link
            href="/contact"
            style={{
              background: 'var(--color-oxblood)',
              color: 'var(--color-cream)',
              padding: '1rem 2.5rem',
              fontSize: '0.8125rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'inline-block',
            }}
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
