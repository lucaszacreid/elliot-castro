import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = {
  title: 'Elliot Castro — Keynote Speaker | Fraud, Cybersecurity & Criminal Psychology',
  description: 'Award-winning keynote speaker and consultant on fraud, cybersecurity, social engineering, and criminal psychology. Trusted by banks, police forces, and corporations.',
}

const keynoteThemes = [
  { title: 'Fraud Prevention', desc: 'How modern fraudsters think, identify vulnerabilities, and exploit businesses — and what you can do about it.', href: '/keynotes#fraud-prevention' },
  { title: 'Cybersecurity Awareness', desc: 'How criminals steal personal and financial data, and how organisations build genuine defences.', href: '/keynotes#cybersecurity' },
  { title: 'Social Engineering', desc: 'How scammers manipulate employees into revealing confidential information — and how to make your team resilient.', href: '/keynotes#social-engineering' },
  { title: 'Criminal Psychology', desc: 'Why intelligent people commit fraud, and the mindset behind organised financial crime.', href: '/keynotes#psychology' },
]

const mediaSources = ['BBC', 'Sky News', 'The Times', 'Channel 4', 'The Guardian', '[Media — TBC]']

const testimonials = [
  { quote: '[Testimonial quote — TBC]', author: '[Name, Title]', org: '[Organisation]' },
  { quote: '[Testimonial quote — TBC]', author: '[Name, Title]', org: '[Organisation]' },
  { quote: '[Testimonial quote — TBC]', author: '[Name, Title]', org: '[Organisation]' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: 'var(--color-navy)', minHeight: 'calc(100vh - 72px)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Portrait */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', pointerEvents: 'none' }} aria-hidden="true">
          <Image
            src="/hero-portrait.png"
            alt=""
            fill
            priority
            style={{ objectFit: 'contain', objectPosition: 'right bottom', mixBlendMode: 'multiply', filter: 'brightness(7) contrast(0.65)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--color-navy) 0%, rgba(15,32,64,0.6) 30%, rgba(15,32,64,0.1) 65%, transparent 85%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-navy) 0%, transparent 30%)' }} />
        </div>

        <div className="container" style={{ position: 'relative', padding: '6rem 2rem' }}>
          <AnimateIn>
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Keynote Speaker · Consultant · Media Commentator</p>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', maxWidth: 620, marginBottom: '1.5rem', lineHeight: 1.1 }}>
              The insider who became the expert.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.125rem', maxWidth: 480, lineHeight: 1.75, marginBottom: '2.5rem' }}>
              Elliot Castro draws on a unique personal journey — from convicted international fraudster to trusted adviser to banks, police forces, and corporations — to deliver keynotes that genuinely change how organisations think about risk.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Book Elliot to Speak</Link>
              <Link href="/about" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Learn his story</Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '1.75rem 2rem', background: 'var(--color-off-white)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', fontWeight: 600, flexShrink: 0 }}>As seen on</p>
          {mediaSources.map(src => (
            <span key={src} style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-mid-grey)', letterSpacing: '0.05em', opacity: 0.7 }}>{src}</span>
          ))}
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

      {/* ── Keynote themes ── */}
      <section style={{ padding: '7rem 2rem', background: 'var(--color-off-white)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label" style={{ textAlign: 'center' }}>Keynote Themes</p>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', maxWidth: 560, margin: '0 auto 1rem' }}>Talks that make audiences think differently about risk.</h2>
            <p style={{ textAlign: 'center', color: 'var(--color-mid-grey)', maxWidth: 520, margin: '0 auto 4rem' }}>Every keynote is tailored to your sector, audience, and event objectives — no two talks are the same.</p>
          </AnimateIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {keynoteThemes.map((theme, i) => (
              <AnimateIn key={theme.title} delay={i * 80}>
                <Link href={theme.href} style={{
                  display: 'block', padding: '2.25rem', background: '#fff',
                  border: '1px solid var(--color-border)',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                }}>
                  <div style={{ width: 32, height: 3, background: 'var(--color-green)', marginBottom: '1.25rem' }} />
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>{theme.title}</h3>
                  <p style={{ color: 'var(--color-mid-grey)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{theme.desc}</p>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-green)', fontWeight: 600 }}>Learn more →</span>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/keynotes" className="btn-outline">View all keynote themes</Link>
          </div>
        </div>
      </section>

      {/* ── Pull quote ── */}
      <section style={{ padding: '7rem 2rem', background: 'var(--color-navy)' }}>
        <AnimateIn>
          <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: 'clamp(1.375rem, 3vw, 2rem)', fontFamily: 'var(--font-playfair), Georgia, serif', fontStyle: 'italic', color: '#fff', lineHeight: 1.55, marginBottom: '2rem' }}>
              &ldquo;[Bold pull quote — a striking line about fraud, trust, or deception that positions Elliot's unique angle — TBC]&rdquo;
            </p>
            <div style={{ width: 48, height: 2, background: 'var(--color-green)', margin: '0 auto' }} />
          </div>
        </AnimateIn>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: '7rem 2rem' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label" style={{ textAlign: 'center' }}>What People Say</p>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '4rem' }}>Trusted by organisations across the UK.</h2>
          </AnimateIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', background: 'var(--color-border)' }}>
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
      <section style={{ padding: '6rem 2rem', background: 'var(--color-green)' }}>
        <AnimateIn>
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>Ready to book Elliot for your event?</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem', fontSize: '1rem' }}>Speaking, consultancy, and media enquiries all welcome. Elliot responds personally.</p>
            <Link href="/contact" style={{ background: '#fff', color: 'var(--color-green)', padding: '1rem 2.5rem', fontSize: '0.9375rem', fontWeight: 700, display: 'inline-block', letterSpacing: '0.02em' }}>
              Make an enquiry
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
