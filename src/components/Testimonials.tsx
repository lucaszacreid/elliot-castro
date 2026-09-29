import AnimateIn from '@/components/AnimateIn'

type Testimonial = { quote: string; author: string; org: string }

// Real testimonials only — never placeholders. To publish them, add entries
// to this array, e.g.
//   { quote: 'What they said…', author: 'Jane Smith, Head of Fraud', org: 'Example Bank' }
// The block renders nothing while the array is empty, and lays out 3 per row
// on desktop (use 3 or 6 quotes so rows stay full).
const testimonials: Testimonial[] = []

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
