import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = {
  title: 'Elliot Castro — Keynote Speaker | Fraud, Cybersecurity & Criminal Psychology',
  description: 'Award-winning keynote speaker and consultant on fraud, cybersecurity, social engineering, and criminal psychology. Trusted by banks, police forces, and corporations.',
}

const mediaSources = ['BBC', 'Monzo', 'Experian']

const testimonials = [
  { quote: '[Testimonial quote — TBC]', author: '[Name, Title]', org: '[Organisation]' },
  { quote: '[Testimonial quote — TBC]', author: '[Name, Title]', org: '[Organisation]' },
  { quote: '[Testimonial quote — TBC]', author: '[Name, Title]', org: '[Organisation]' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-section">
        {/* Portrait */}
        <div className="hero-portrait" aria-hidden="true">
          <Image
            src="/hero-lander.png"
            alt=""
            width={900}
            height={1100}
            priority
            style={{ height: '100%', width: 'auto', maxWidth: '65%', objectFit: 'contain', objectPosition: 'bottom right' }}
          />
        </div>

        {/* Gradient overlay */}
        <div className="hero-gradient" aria-hidden="true" />

        {/* Text content — anchored to bottom-left */}
        <div className="hero-content">
          <p className="hero-overline">Elliot Castro</p>
          <h1 className="hero-headline">
            The insider who<br />became the expert.
          </h1>
          <Link href="/contact" className="hero-cta">
            Book Elliot
          </Link>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section style={{ background: '#0f0f0f', padding: '1.125rem 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: '0.625rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontWeight: 600, flexShrink: 0, padding: '0 2rem', borderRight: '1px solid rgba(255,255,255,0.1)', whiteSpace: 'nowrap' }}>
            As seen on
          </p>
          <div style={{ overflow: 'hidden', flex: 1 }}>
            <div className="trust-track">
              {[...mediaSources, ...mediaSources].map((src, i) => (
                <span key={i} style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.1em', padding: '0 3.5rem', flexShrink: 0, textTransform: 'uppercase' }}>
                  {src}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who is Elliot ── */}
      <section style={{ padding: '7rem 2rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <AnimateIn>
            <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: 'var(--color-light-grey)' }}>
              <Image src="/about-photo.jpg" alt="Elliot Castro" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
          </AnimateIn>
          <AnimateIn delay={150}>
            <p className="section-label">About Elliot</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', marginBottom: '1.5rem' }}>From the wrong side of the table — to the right one.</h2>
            <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              [Short teaser paragraph — Elliot's story in 2–3 sentences. International fraudster to trusted adviser. The transformation. What makes him credible.]
            </p>
            <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Today he advises some of the UK's largest organisations on fraud risk, trains police forces, and speaks at industry events across Europe. He doesn't present theory — he presents what actually happens.
            </p>
            <Link href="/about" className="btn-outline">Read his full story</Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── Pull quote ── */}
      <section style={{ padding: '7rem 2rem', background: '#111111' }}>
        <AnimateIn>
          <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: 'clamp(1.375rem, 3vw, 2rem)', fontFamily: 'var(--font-playfair), Georgia, serif', fontStyle: 'italic', color: '#fff', lineHeight: 1.55, marginBottom: '2rem' }}>
              &ldquo;[Bold pull quote — a striking line about fraud, trust, or deception that positions Elliot's unique angle — TBC]&rdquo;
            </p>
            <div style={{ width: 48, height: 1, background: 'rgba(255,255,255,0.3)', margin: '0 auto' }} />
          </div>
        </AnimateIn>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: '7rem 2rem', background: 'var(--color-off-white)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label" style={{ textAlign: 'center' }}>What People Say</p>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '4rem' }}>Trusted by organisations across the UK.</h2>
          </AnimateIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'var(--color-border)' }}>
            {testimonials.map((t, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div style={{ background: '#fff', padding: '2.5rem' }}>
                  <p style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1rem', fontStyle: 'italic', color: 'var(--color-navy)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-navy)' }}>{t.author}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-mid-grey)' }}>{t.org}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Client logos placeholder */}
          <div style={{ marginTop: '4rem', padding: '2.5rem', border: '1px dashed var(--color-border)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-mid-grey)', marginBottom: '1.5rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Client & partner logos</p>
            <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['[Client logo]', '[Client logo]', '[Client logo]', '[Client logo]', '[Client logo]'].map((l, i) => (
                <span key={i} style={{ fontSize: '0.8125rem', color: 'var(--color-border)', border: '1px solid var(--color-border)', padding: '0.5rem 1rem' }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ padding: '6rem 2rem', background: '#111111' }}>
        <AnimateIn>
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>Ready to book Elliot for your event?</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', fontSize: '1rem' }}>Speaking, consultancy, and media enquiries all welcome. Elliot responds personally.</p>
            <Link href="/contact" className="hero-cta">Make an enquiry</Link>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
