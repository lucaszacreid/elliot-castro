'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/about', label: 'About' },
  { href: '/keynote', label: 'Speaking' },
  { href: '/consultancy', label: 'Consultancy' },
  { href: '/media', label: 'Media' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s, border-color 0.3s',
        background: scrolled ? 'rgba(12,11,11,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid #2A2826' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: '1.125rem',
            fontWeight: 700,
            letterSpacing: '0.02em',
            color: 'var(--color-cream)',
          }}
        >
          Elliot Castro
        </Link>

        <nav
          style={{
            display: 'flex',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: '0.8125rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: pathname === l.href ? 'var(--color-cream)' : 'var(--color-muted)',
                transition: 'color 0.2s',
                fontWeight: pathname === l.href ? 500 : 400,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--color-cream)',
            cursor: 'pointer',
            padding: '0.25rem',
          }}
          className="md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          style={{
            background: 'var(--color-ink)',
            borderTop: '1px solid var(--color-border)',
            padding: '1.5rem 2rem 2rem',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                fontSize: '0.875rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: pathname === l.href ? 'var(--color-cream)' : 'var(--color-muted)',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
