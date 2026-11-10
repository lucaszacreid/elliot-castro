import Image from 'next/image'

const LOGO_HEIGHT = 56

const logos = [
  { src: '/logos/bbc.jpg', alt: 'BBC', w: 140, h: LOGO_HEIGHT },
  { src: '/logos/experian.jpg', alt: 'Experian', w: 163, h: LOGO_HEIGHT },
  { src: '/logos/monzo.jpg', alt: 'Monzo', w: 128, h: LOGO_HEIGHT },
  { src: '/logos/danone.png', alt: 'Danone', w: 92, h: LOGO_HEIGHT },
  { src: '/logos/riskified.png', alt: 'Riskified', w: 142, h: LOGO_HEIGHT },
  { src: '/logos/iata.png', alt: 'IATA', w: 78, h: LOGO_HEIGHT },
  { src: '/logos/raiffeisen.png', alt: 'Raiffeisen Bank International', w: 130, h: LOGO_HEIGHT },
  { src: '/logos/skipton.png', alt: 'Skipton Building Society', w: 64, h: LOGO_HEIGHT },
  { src: '/logos/met-police.png', alt: 'Metropolitan Police', w: 103, h: LOGO_HEIGHT },
]

// 18 per half → ~18 × 230px ≈ 4140px — wider than any viewport so no black gap on loop
const HALF = 18
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
                style={{ height: LOGO_HEIGHT, width: 'auto', objectFit: 'contain' }}
                unoptimized
                loading="eager"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
