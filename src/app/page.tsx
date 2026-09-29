import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'
import TrustBar from '@/components/TrustBar'
import InActionGallery from '@/components/InActionGallery'
import EnquiryForm from '@/components/EnquiryForm'
import TopicGrid from '@/components/TopicGrid'
import Testimonials from '@/components/Testimonials'
import { SHORT_BIO_FIRST_PARAGRAPH } from '@/lib/topics'

export const metadata: Metadata = {
  title: 'Elliot Castro — Fraud Keynote Speaker & Consultant',
  description: SHORT_BIO_FIRST_PARAGRAPH,
}

const takeaways = [
  { title: 'A view from the other side.', text: 'First-hand insight into how fraudsters think, build trust, gather information and exploit processes.' },
  { title: 'Accessible, story-led and practical.', text: 'Complex fraud and behavioural issues made clear for non-technical audiences.' },
  { title: 'Relevant to today’s threats.', text: 'Lived experience connected to modern fraud prevention, organisational risk and AI-enabled deception.' },
]

const BBC_DOC_URL = 'https://www.bbc.co.uk/iplayer/episodes/m001zx5p/confessions-of-a-teenage-fraudster'

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-section">
        {/* Alpha PNG — transparent bg blends seamlessly with #111111 hero */}
        <div className="hero-portrait" aria-hidden="true">
          <Image
            src="/hero-lander.png"
            alt=""
            width={1144}
            height={1376}
            priority
            style={{ height: '100%', width: 'auto', maxWidth: '68%', objectFit: 'contain', objectPosition: 'bottom right' }}
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
        {/* Trust bar pinned to hero bottom — text and trust bar visible together */}
        <div className="hero-trust-bar">
          <TrustBar />
        </div>
      </section>

      {/* ── BBC Documentary ── */}
      <section style={{ padding: '5rem 2rem 5.5rem', background: '#0d0d0d' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.38)' }}>BBC Documentary</p>
            <h2 style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1.875rem, 3.5vw, 2.875rem)',
              color: '#ffffff',
              marginTop: '0.75rem',
              marginBottom: '1rem',
              maxWidth: 520,
              lineHeight: 1.12,
            }}>
              The full story.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 440, lineHeight: 1.85, marginBottom: '2.75rem', fontSize: '0.9375rem' }}>
              From international fraudster to trusted adviser — how one man&apos;s inside knowledge became the most valuable asset in the room.
            </p>
          </AnimateIn>

          <AnimateIn delay={140}>
            <a
              href={BBC_DOC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="doc-link"
              aria-label="Watch Confessions of a Teenage Fraudster on BBC iPlayer"
            >
              <div className="doc-thumb">
                <Image
                  src="/doc-thumb.jpg"
                  alt="Confessions of a Teenage Fraudster — BBC documentary"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  unoptimized
                />
                <div className="doc-play-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width={26} height={26} style={{ marginLeft: 4 }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="doc-label-chip">BBC iPlayer</span>
              </div>
              <div className="doc-footer">
                <span>Watch on BBC iPlayer</span>
                <span>→</span>
              </div>
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* ── Trust bar 2 ── */}
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

          <TopicGrid />
          <div style={{ borderTop: '1px solid var(--color-border)' }} />

          <AnimateIn delay={400}>
            <div style={{ paddingTop: '2.5rem' }}>
              <Link href="/keynotes" className="btn-outline">See all topics</Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Trust bar 3 ── */}
      <TrustBar />

      {/* ── Elliot in action ── */}
      <InActionGallery />

      {/* ── Trust bar 4 ── */}
      <TrustBar />

      {/* ── What audiences take away ── */}
      <section style={{ padding: '6rem 2rem', background: 'var(--color-off-white)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label">What audiences take away</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '3.5rem', marginTop: '0.75rem' }}>
              Why organisations book Elliot
            </h2>
          </AnimateIn>

          <div className="cards-3">
            {takeaways.map((t, i) => (
              <AnimateIn key={t.title} delay={i * 100} className="grid-cell">
                <div style={{ background: '#fff', border: '1px solid var(--color-border)', padding: '2.5rem', height: '100%' }}>
                  <p style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '1rem', marginBottom: '0.5rem' }}>{t.title}</p>
                  <p style={{ color: 'var(--color-mid-grey)', fontSize: '0.9375rem', lineHeight: 1.75 }}>{t.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <Testimonials />
        </div>
      </section>

      {/* ── Trust bar 5 ── */}
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

      {/* ── Trust bar 6 ── */}
      <TrustBar />
    </>
  )
}
