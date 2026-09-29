'use client'
import { useState, useEffect, useRef } from 'react'

const slides = [
  '[Photo: Elliot on stage at corporate conference — image pending from Elliot]',
  '[Photo: Elliot delivering keynote to large audience — image pending from Elliot]',
  '[Photo: Elliot at close-up keynote moment — image pending from Elliot]',
  '[Photo: Elliot at broadcast or media appearance — image pending from Elliot]',
]

const INTERVAL = 4500

export default function InActionGallery() {
  const [idx, setIdx] = useState(0)
  const [reduced, setReduced] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  function advance() {
    setIdx(i => (i + 1) % slides.length)
  }

  function startTimer() {
    if (timer.current) clearInterval(timer.current)
    timer.current = setInterval(advance, INTERVAL)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setReduced(true)
      return
    }
    startTimer()
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [])

  function goTo(i: number) {
    setIdx(i)
    if (!reduced) startTimer()
  }

  return (
    <section id="watch" style={{ padding: '6rem 0 5rem', background: '#0a0a0a' }}>
      <div className="container">
        <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)' }}>Elliot in action</p>
        <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '0.75rem', marginTop: '0.75rem' }}>
          Watch Elliot speak.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.8, marginBottom: '3rem', fontSize: '0.9375rem' }}>
          Accessible, story-led and non-technical &ndash; see how Elliot brings the human mechanics of fraud to life for corporate and financial-services audiences.
        </p>

        {/* TODO: replace with embedded video of Elliot on stage ({{VIDEO_ELLIOT_ON_STAGE}}) */}
        <div className="doc-link" style={{ marginBottom: '4rem' }}>
          <div className="doc-thumb" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(255,255,255,0.12)' }}>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', lineHeight: 1.8, textAlign: 'center', padding: '0 2rem' }}>
              [Video: Elliot speaking on stage &mdash; showreel pending from Elliot]
            </p>
          </div>
        </div>
      </div>

      {/* Full-width slide area */}
      <div
        style={{ position: 'relative', width: '100%', aspectRatio: '16/7', overflow: 'hidden', cursor: 'pointer' }}
        onMouseEnter={() => { if (timer.current) clearInterval(timer.current) }}
        onMouseLeave={() => { if (!reduced) startTimer() }}
        onClick={() => { setIdx(i => (i + 1) % slides.length); if (!reduced) startTimer() }}
        role="img"
        aria-label="Gallery of Elliot Castro speaking"
      >
        {slides.map((caption, i) => (
          <div
            key={i}
            style={{
              position: 'absolute', inset: 0,
              background: i % 2 === 0 ? '#151515' : '#1d1d1d',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              opacity: i === idx ? 1 : 0,
              transition: reduced ? 'none' : 'opacity 0.8s ease',
              pointerEvents: i === idx ? 'auto' : 'none',
            }}
          >
            <div style={{
              border: '1px dashed rgba(255,255,255,0.07)',
              padding: '2rem 3rem',
              maxWidth: 480,
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.06em', lineHeight: 1.8 }}>
                {caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots nav */}
      <div className="container" style={{ paddingTop: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === idx ? 28 : 8,
                height: 8,
                borderRadius: 4,
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                background: i === idx ? '#fff' : 'rgba(255,255,255,0.18)',
                transition: reduced ? 'none' : 'width 0.3s ease, background 0.3s ease',
              }}
            />
          ))}
          <span style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.22)', marginLeft: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {idx + 1} / {slides.length}
          </span>
        </div>
      </div>
    </section>
  )
}
