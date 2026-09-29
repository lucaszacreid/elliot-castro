import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'
import TrustBar from '@/components/TrustBar'
import InActionGallery from '@/components/InActionGallery'
import EnquiryForm from '@/components/EnquiryForm'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Elliot Castro | Fraud Keynote Speaker on Fraud Psychology & Social Engineering',
  socialTitle: 'Elliot Castro | Fraud Keynote Speaker',
  description: 'Fraud keynote speaker Elliot Castro explains how criminals manufacture trust, manipulate decisions and exploit the gaps between people, identity and process – including AI-enabled fraud, deepfakes and voice cloning.',
  path: '/',
})

const topicTeasers = [
  { title: 'Fraud Psychology & the Criminal Mindset', slug: 'fraud-psychology', line: 'How offenders think, spot opportunity and exploit the gap between procedure and practice.' },
  { title: 'Social Engineering, Trust & Human Behaviour', slug: 'social-engineering', line: 'How credibility is manufactured through authority, urgency, confidence and gradual persuasion.' },
  { title: 'Identity, Impersonation & Human Verification', slug: 'identity-impersonation', line: 'Where identity, process and human judgement collide – and how criminals exploit it.' },
  { title: 'Modern Fraud & AI-Enabled Deception', slug: 'ai-enabled-deception', line: 'How AI, deepfakes and voice cloning make familiar manipulation faster and more convincing.' },
]

const proofPoints = [
  { title: 'First-hand insight', line: 'A genuine first-hand view of how fraudsters think, build trust, gather information and exploit processes.' },
  { title: 'Proven with corporate audiences', line: 'Established experience speaking to corporate and financial-services audiences.' },
  { title: 'Accessible and non-technical', line: 'Complex fraud and behavioural issues translated into clear, story-led presentations for non-technical audiences.' },
  { title: 'A distinctive perspective', line: 'Lived experience combined with contemporary fraud prevention and organisational risk.' },
  { title: 'Focused where it counts', line: 'Fraud psychology, social engineering, identity, impersonation, manipulation and human behaviour.' },
  { title: 'Story as the hook, insight as the value', line: 'The personal story opens the door. The practical understanding of fraud and human behaviour is what audiences take back to work.' },
]

const widerSectors = [
  'Insurers',
  'Retailers',
  'Technology businesses',
  'Professional services',
  'Government',
  'Law enforcement',
  'Leadership audiences',
]

// TODO: replace with genuine testimonials supplied by Elliot
const testimonials = [
  { quote: '{{TESTIMONIAL_1}}', author: '{{TESTIMONIAL_1_NAME_TITLE}}', org: '{{TESTIMONIAL_1_ORGANISATION}}' },
  { quote: '{{TESTIMONIAL_2}}', author: '{{TESTIMONIAL_2_NAME_TITLE}}', org: '{{TESTIMONIAL_2_ORGANISATION}}' },
  { quote: '{{TESTIMONIAL_3}}', author: '{{TESTIMONIAL_3_NAME_TITLE}}', org: '{{TESTIMONIAL_3_ORGANISATION}}' },
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
          <p className="hero-overline" style={{ maxWidth: 560, lineHeight: 1.9 }}>
            Fraud keynote speaker &middot; Fraud psychology &middot; Social engineering &middot; Identity &amp; trust &middot; Human behaviour
          </p>
          <h1 className="hero-headline">
            Technology changes.<br />Manipulation does not.
          </h1>
          <p className="hide-mobile" style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 520, lineHeight: 1.75, marginTop: '-1rem', marginBottom: '2.25rem', fontSize: '1rem' }}>
            Elliot Castro helps organisations understand how criminals manufacture trust, manipulate decisions and exploit the gaps between people, identity and process &ndash; and how those methods are evolving in an age of AI-enabled deception.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="hero-cta">
              Enquire about speaking
            </Link>
            <Link href="/keynotes" className="hero-cta hide-mobile" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.5)' }}>
              Explore speaking topics
            </Link>
          </div>
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

      {/* ── Introduction (short bio) ── */}
      <section style={{ padding: '6rem 2rem' }}>
        <div className="container about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }}>
          <AnimateIn>
            <p className="section-label">About Elliot</p>
            <h2 style={{ fontSize: 'clamp(1.625rem, 3vw, 2.5rem)', marginTop: '0.75rem', lineHeight: 1.15 }}>
              A rare first-hand view of how fraud works.
            </h2>
          </AnimateIn>
          <AnimateIn delay={120}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                Elliot Castro is a former fraudster turned keynote speaker and consultant who gives organisations a rare first-hand view of how criminals think, build credibility and manipulate people.
              </p>
              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                His work focuses on fraud psychology, social engineering, identity, impersonation and the human behaviour that sits behind successful scams. Drawing on lived experience alongside his work with corporate and financial-services audiences, Elliot explains how offenders identify opportunity, exploit trust and find the gaps between people, processes and controls.
              </p>
              <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.85 }}>
                Today, he uses that experience to help audiences understand fraud from the other side of the equation &ndash; and to recognise why changing technology may alter the tools both criminals and industry use, but not necessarily the psychology that makes fraud work.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.75rem' }}>
                <Link href="/contact" className="btn-primary">Enquire about speaking</Link>
                <Link href="/about" className="btn-outline">Read Elliot&apos;s story</Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <div style={{ borderTop: '1px solid var(--color-border)' }} />

      {/* ── Topics ── */}
      <section style={{ padding: '6rem 2rem' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label">Speaking topics</p>
            <h2 style={{ fontSize: 'clamp(1.625rem, 3vw, 2.5rem)', marginBottom: '0.75rem', marginTop: '0.75rem' }}>
              Four talks on the human mechanics of fraud.
            </h2>
            <p style={{ color: 'var(--color-mid-grey)', maxWidth: 480, lineHeight: 1.75, marginBottom: '3.5rem' }}>
              Trust, authority, urgency, impersonation and the moment a target starts helping the offender. Every talk is accessible, non-technical and tailored to your sector and audience.
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
            <div style={{ paddingTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Enquire about speaking</Link>
              <Link href="/keynotes" className="btn-outline">Explore speaking topics</Link>
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

      {/* ── Why Elliot ── */}
      <section style={{ padding: '6rem 2rem' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label">Why Elliot</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '0.75rem', marginTop: '0.75rem' }}>
              His past is the starting point, not the product.
            </h2>
            <p style={{ color: 'var(--color-mid-grey)', maxWidth: 520, lineHeight: 1.75, marginBottom: '3.5rem' }}>
              The value lies in translating first-hand experience into practical insight about fraud, trust, manipulation, human behaviour and organisational resilience.
            </p>
          </AnimateIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)' }}>
            {proofPoints.map((p, i) => (
              <AnimateIn key={p.title} delay={i * 60}>
                <div style={{ background: '#fff', padding: '2.25rem 2rem', height: '100%' }}>
                  <div style={{ width: 20, height: 2, background: 'var(--color-green)', marginBottom: '1rem' }} />
                  <p style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '1rem', marginBottom: '0.5rem' }}>{p.title}</p>
                  <p style={{ color: 'var(--color-mid-grey)', fontSize: '0.875rem', lineHeight: 1.7 }}>{p.line}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Elliot works with ── */}
      <section style={{ padding: '6rem 2rem', background: 'var(--color-off-white)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }}>
          <AnimateIn>
            <p className="section-label">Who Elliot works with</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginTop: '0.75rem', marginBottom: '1rem', lineHeight: 1.15 }}>
              Wherever trust and identity create risk.
            </h2>
            <p style={{ color: 'var(--color-mid-grey)', lineHeight: 1.75 }}>
              Financial services is the focus, but the human mechanics of fraud apply to any organisation where trust, manipulation, identity and human behaviour create risk.
            </p>
          </AnimateIn>
          <AnimateIn delay={120}>
            <div style={{ background: '#fff', border: '1px solid var(--color-border)', padding: '2.25rem 2rem' }}>
              <p style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', fontWeight: 600, marginBottom: '0.75rem' }}>
                Financial services
              </p>
              <p style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '1.0625rem', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                Banks, fintechs and payments businesses
              </p>
              <p style={{ color: 'var(--color-mid-grey)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                Particularly teams working in fraud, financial crime, risk, compliance, cyber security and identity.
              </p>
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderTop: 'none', padding: '2.25rem 2rem' }}>
              <p style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', fontWeight: 600, marginBottom: '0.75rem' }}>
                Also relevant to
              </p>
              <p style={{ color: 'var(--color-navy)', fontSize: '0.9375rem', lineHeight: 1.9 }}>
                {widerSectors.join(' \u00b7 ')}
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── What people say ── */}
      <section style={{ padding: '6rem 2rem', background: 'var(--color-off-white)' }}>
        <div className="container">
          <AnimateIn>
            <p className="section-label">What people say</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '0.75rem', marginTop: '0.75rem' }}>
              What organisers say.
            </h2>
            <p style={{ color: 'var(--color-mid-grey)', maxWidth: 480, lineHeight: 1.75, marginBottom: '3.5rem' }}>
              Feedback from organisers and audiences at corporate and financial-services events.
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
              <Link href="/contact" className="btn-outline">Get in touch</Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Trust bar 5 ── */}
      <TrustBar />

      {/* ── Enquiry form ── */}
      <section style={{ padding: '6rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <AnimateIn>
            <p className="section-label" style={{ textAlign: 'center' }}>Speaking enquiries</p>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
              Enquire about speaking
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--color-mid-grey)', lineHeight: 1.75, marginBottom: '3rem' }}>
              Tell Elliot about your event, audience and format. Consultancy and media enquiries are welcome too &ndash; Elliot responds personally.
            </p>
          </AnimateIn>
          <EnquiryForm defaultType="keynote" />
        </div>
      </section>

      {/* ── Trust bar 6 ── */}
      <TrustBar />
    </>
  )
}
