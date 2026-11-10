import AnimateIn from '@/components/AnimateIn'

type Testimonial = { quote: string; author: string; org: string }

// Real testimonials only — never placeholders. To publish them, add entries
// to this array, e.g.
//   { quote: 'What they said…', author: 'Jane Smith, Head of Fraud', org: 'Example Bank' }
// The block renders nothing while the array is empty, and lays out 3 per row
// on desktop (use 3 or 6 quotes so rows stay full).
const testimonials: Testimonial[] = [
  {
    quote: 'The event went really well, and the feedback on Elliot was great. Everyone has commented how interesting the story was and relevant the takeaways were.',
    author: 'Booking agent',
    org: 'Cyber Resilience in Practice — Oct 2026',
  },
  {
    quote: 'A huge thank you to Elliot for a successful speech at the Financial Fraud Forum. We have now received the feedback forms from most delegates and their average rating of your speech is 4.43 on a scale from 1 to 5. That’s very good! Many of the delegates have also written positive comments: brilliant, so interesting, perfect with this "inside story", interesting and entertaining.',
    author: 'Stefan Haglund, CEO',
    org: 'Företagsuniversitetet AB — Financial Fraud Forum 2026',
  },
  {
    quote: 'The feedback from the Smarter Payments Summit was very positive, as always, and we love having you attend our Events.',
    author: 'Natasha Cobbold, Organiser',
    org: 'Forum Events — Smarter Payments Summit',
  },
  {
    quote: 'Your presentation was received excellently and delegates responded with very positive feedback; "very entertaining", "fascinating", "Insightful". I would love to book you in for future events!',
    author: 'Natasha Cobbold',
    org: 'Forum Events — Merchant Fraud Summit',
  },
  {
    quote: 'Just to say a big thank you for speaking for Danone. The event went well and we were very happy with Elliot. Those in attendance found Elliot’s talk very interesting and several stuck around afterwards to ask him questions.',
    author: 'Danone',
    org: 'Cyber Awareness Month',
  },
]

export default function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <div className="cards-3" style={{ marginTop: '1.5rem' }}>
      {testimonials.map((t, i) => (
        <AnimateIn key={i} delay={i * 100} className="grid-cell">
          <div style={{ background: '#fff', border: '1px solid var(--color-border)', padding: '2.5rem', height: '100%' }}>
            <p style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1rem', fontStyle: 'italic', color: 'var(--color-navy)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-navy)' }}>{t.author}</p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-mid-grey)' }}>{t.org}</p>
          </div>
        </AnimateIn>
      ))}
    </div>
  )
}
