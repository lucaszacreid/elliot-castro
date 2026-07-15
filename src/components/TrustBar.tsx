const logos = ['BBC', 'Monzo', 'Experian']

// 12 items per half × 3 logos cycles = dense enough to cover any viewport
const HALF = 12
const half = Array.from({ length: HALF }, (_, i) => logos[i % logos.length])
const items = [...half, ...half]

export default function TrustBar() {
  return (
    <div style={{ background: '#0f0f0f', padding: '0.875rem 0' }}>
      <div className="trust-bar-inner">
        <div className="trust-track">
          {items.map((name, i) => (
            <span key={i} className="trust-item">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
