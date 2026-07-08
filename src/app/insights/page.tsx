import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Writing and commentary from Elliot Castro on fraud, scams, social engineering, trust, and behaviour.',
}

const posts = [
  {
    slug: 'why-smart-people-get-scammed',
    title: 'Why Smart People Get Scammed',
    date: 'June 2025',
    category: 'Psychology',
    excerpt:
      'Intelligence is not a defence against social engineering. Here is why — and what actually helps.',
    readTime: '6 min read',
  },
  {
    slug: 'the-anatomy-of-a-phone-scam',
    title: 'The Anatomy of a Phone Scam',
    date: 'May 2025',
    category: 'How fraud works',
    excerpt:
      'A step-by-step breakdown of how a typical phone fraud unfolds — from first contact to financial loss.',
    readTime: '8 min read',
  },
  {
    slug: 'trust-is-a-vulnerability',
    title: 'Trust Is a Vulnerability',
    date: 'April 2025',
    category: 'Psychology',
    excerpt:
      'The same instinct that makes us good colleagues, friends, and citizens also makes us exploitable.',
    readTime: '5 min read',
  },
  {
    slug: 'the-impersonation-economy',
    title: 'The Impersonation Economy',
    date: 'March 2025',
    category: 'Trends',
    excerpt:
      'Why impersonating a trusted brand or institution has become the default opening move in modern fraud.',
    readTime: '7 min read',
  },
  {
    slug: 'what-fraud-training-misses',
    title: 'What Fraud Training Usually Misses',
    date: 'February 2025',
    category: 'Prevention',
    excerpt:
      'Most fraud awareness training creates knowledge without changing behaviour. Here is what to do instead.',
    readTime: '9 min read',
  },
  {
    slug: 'the-slow-build',
    title: 'The Slow Build: How Long-Con Fraud Works',
    date: 'January 2025',
    category: 'How fraud works',
    excerpt:
      'Some of the most damaging frauds take months or years to execute. Understanding the patience of a fraudster changes how you think about prevention.',
    readTime: '10 min read',
  },
]

export default function InsightsPage() {
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
            Insights
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
            On fraud, trust, and behaviour.
          </h1>
          <p
            style={{
              color: 'var(--color-muted)',
              fontSize: '1.0625rem',
              maxWidth: '480px',
              lineHeight: 1.7,
            }}
          >
            Writing that aims to be useful — for organisations trying to protect themselves,
            and individuals trying to understand the world around them.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Featured post */}
          <Link
            href={`/insights/${posts[0].slug}`}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              padding: '3rem 0',
              borderBottom: '1px solid var(--color-border)',
              alignItems: 'end',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-oxblood)',
                  marginBottom: '0.75rem',
                }}
              >
                {posts[0].category}
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  color: 'var(--color-cream)',
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                }}
              >
                {posts[0].title}
              </h2>
              <p
                style={{
                  color: 'var(--color-muted)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                }}
              >
                {posts[0].excerpt}
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginBottom: '0.25rem' }}>
                  {posts[0].date}
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
                  {posts[0].readTime}
                </p>
              </div>
              <p
                style={{
                  fontSize: '0.8125rem',
                  letterSpacing: '0.08em',
                  color: 'var(--color-oxblood)',
                  textTransform: 'uppercase',
                }}
              >
                Read &rarr;
              </p>
            </div>
          </Link>

          {/* Remaining posts */}
          <div>
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr 120px',
                  gap: '2rem',
                  padding: '2rem 0',
                  borderBottom: '1px solid var(--color-border)',
                  alignItems: 'start',
                }}
              >
                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--color-muted)',
                    paddingTop: '0.125rem',
                  }}
                >
                  {post.date}
                </p>
                <div>
                  <p
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-oxblood)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {post.category}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-playfair), Georgia, serif',
                      fontSize: '1.125rem',
                      color: 'var(--color-cream)',
                      marginBottom: '0.5rem',
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
                </div>
                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--color-muted)',
                    textAlign: 'right',
                    paddingTop: '0.125rem',
                  }}
                >
                  {post.readTime}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
