import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'
import TrustBar from '@/components/TrustBar'
import InActionGallery from '@/components/InActionGallery'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata: Metadata = {
  title: 'Elliot Castro — Keynote Speaker | Fraud, Cybersecurity & Criminal Psychology',
  description: 'Award-winning keynote speaker and consultant on fraud, cybersecurity, social engineering, and criminal psychology. Trusted by banks, police forces, and corporations.',
}

const topicTeasers = [
  { title: 'Fraud Prevention', slug: 'fraud-prevention', line: 'How fraudsters think — and how to stop them.' },
  { title: 'Social Engineering', slug: 'social-engineering', line: 'Manipulation is a skill. Train your team to recognise it.' },
  { title: 'Cybersecurity Awareness', slug: 'cybersecurity', line: "The human layer your technology can't protect." },
  { title: 'Insider Threats', slug: 'insider-threats', line: 'The risk already inside your organisation.' },
  { title: 'Criminal Psychology', slug: 'psychology', line: 'Why ordinary people commit extraordinary crimes.' },
  { title: 'Identity Theft', slug: 'identity-theft', line: 'Who you think you are, and who criminals think you are.' },
]

const testimonials = [
  { quote: '[Testimonial quote — copy pending from Elliot]', author: '[Name, Title]', org: '[Organisation]' },
  { quote: '[Testimonial quote — copy pending from Elliot]', author: '[Name, Title]', org: '[Organisation]' },
  { quote: '[Testimonial quote — copy pending from Elliot]', author: '[Name, Title]', org: '[Organisation]' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-section">
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
        <div className="hero-gradient" aria-hidden="true" />
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

      {/* ── Trust bar 1 ── */}
      <TrustBar />

      {/* ── Topics ── */}
      <section style={{ padding: '6rem 2rem' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label">Keynote topics</p>
            <h2 style={{ fontSize: 'clamp(1.625rem, 3vw, 2.5rem)', marginBottom: '0.75rem', marginTop: '0.75rem' }}>
              Talks built on lived experience.
            </h2>
            <p style={{ color: 'var(--color-mid-grey)', maxWidth: 480, lineHeight: 1.75, marginBottom: '3.5rem' }}>
              Every talk is tailored to your sector, audience, and event objectives. Elliot speaks from genuine personal experience — the expertise is not theoretical.
            </p>
          </AnimateIn>

          <div className="topics-grid">
            {topicTeasers.map((topic, i) => (
              <AnimateIn key={topic.slug} delay={i * 60}>
                <Link
                  href={`/keynotes#${topic.slug}`}
                  style={{ display: 'block', borderTop: '1px solid var(--color-border)', padding: '1.75rem 0', textDecoration: 'none' }}
                  className="topic-card"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem' }}>
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '1rem', marginBottom: '0.375rem' }}>{topic.title}</p>
                      <p style={{ color: 'var(--color-mid-grey)', fontSize: '0.875rem', lineHeight: 1.65 }}>{topic.line}</p>
                    </div>
                    <span style={{ color: 'var(--color-mid-grey)', fontSize: '1.25rem', flexShrink: 0, marginTop: '0.1rem', transition: 'transform 0.2s' }}>→</span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
          <div style={{ borderTop: '1px solid var(--color-border)' }} />

          <AnimateIn delay={400}>
            <div style={{ paddingTop: '2.5rem' }}>
              <Link href="/keynotes" className="btn-outline">See all topics</Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Trust bar 2 ── */}
      <TrustBar />

      {/* ── Elliot in action ── */}
      <InActionGallery />

      {/* ── Trust bar 3 ── */}
      <TrustBar />

      {/* ── Case studies / reviews ── */}
      <section style={{ padding: '6rem 2rem', background: 'var(--color-off-white)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label">What people say</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '0.75rem', marginTop: '0.75rem' }}>
              Trusted by organisations across the UK.
            </h2>
            <p style={{ color: 'var(--color-mid-grey)', maxWidth: 480, lineHeight: 1.75, marginBottom: '3.5rem' }}>
              From financial services and corporate security to media and public sector — organisations that book Elliot come away with changed perspectives.
            </p>
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

          <AnimateIn delay={300}>
            <div style={{ paddingTop: '2.5rem' }}>
              <Link href="/case-studies" className="btn-outline">View case studies</Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Trust bar 4 ── */}
      <TrustBar />

      {/* ── Enquiry form ── */}
      <section style={{ padding: '6rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <AnimateIn>
            <p className="section-label" style={{ textAlign: 'center' }}>Get in touch</p>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
              Make an enquiry
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--color-mid-grey)', lineHeight: 1.75, marginBottom: '3rem' }}>
              Speaking, consultancy, and media enquiries all welcome. Elliot responds personally.
            </p>
          </AnimateIn>
          <EnquiryForm />
        </div>
      </section>

      {/* ── Trust bar 5 ── */}
      <TrustBar />
    </>
  )
}
