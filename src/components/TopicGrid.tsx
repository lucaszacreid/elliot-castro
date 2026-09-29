import AnimateIn from '@/components/AnimateIn'
import { topics } from '@/lib/topics'

// 2×2 on desktop, single column on mobile (see .topics-grid in globals.css)
export default function TopicGrid() {
  return (
    <div className="topics-grid">
      {topics.map((topic, i) => (
        <AnimateIn key={topic.slug} delay={i * 60} className="grid-cell">
          <div id={topic.slug} style={{ borderTop: '1px solid var(--color-border)', padding: '1.75rem 0', height: '100%' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.625rem' }}>{topic.title}</h3>
            <p style={{ color: 'var(--color-mid-grey)', fontSize: '0.9375rem', lineHeight: 1.75 }}>{topic.description}</p>
          </div>
        </AnimateIn>
      ))}
    </div>
  )
}
