import Image from 'next/image'

const logos = [
  { src: '/logos/bbc.jpg', alt: 'BBC', w: 120, h: 48 },
  { src: '/logos/experian.jpg', alt: 'Experian', w: 140, h: 48 },
  { src: '/logos/monzo.jpg', alt: 'Monzo', w: 110, h: 48 },
]

const HALF = 8
const half = Array.from({ length: HALF }, (_, i) => logos[i % logos.length])
const items = [...half, ...half]

export default function TrustBar() {
  return (
    <div style={{ background: '#ffffff', borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8', padding: '1.25rem 0' }}>
      <div className="trust-bar-inner">
        <div className="trust-track">
          {items.map((logo, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', padding: '0 3rem', flexShrink: 0 }}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                style={{ height: 48, width: 'auto', objectFit: 'contain' }}
                unoptimized
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
