'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const topicLinks = [
  { label: 'Fraud Prevention', href: '/keynotes#fraud-prevention' },
  { label: 'Cybersecurity Awareness', href: '/keynotes#cybersecurity' },
  { label: 'Identity Theft', href: '/keynotes#identity-theft' },
  { label: 'Social Engineering', href: '/keynotes#social-engineering' },
  { label: 'Criminal Psychology', href: '/keynotes#psychology' },
  { label: 'Insider Threats', href: '/keynotes#insider-threats' },
  { label: 'Risk Management', href: '/keynotes#risk-management' },
  { label: 'Ethics & Transformation', href: '/keynotes#ethics' },
]

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/keynotes', label: 'Topics', dropdown: true },
  { href: '/case-studies', label: 'Case Studies' },
]

export default function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMobileOpen(false); setDropdownOpen(false) }, [pathname])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  // Hero is now white — nav is always light, just gains shadow on scroll
  const navBg = scrolled ? 'rgba(255,255,255,0.97)' : '#fff'
  const navBorder = scrolled ? '#e5e5e5' : 'transparent'
  const logoColor = '#111111'
  const linkColor = (active: boolean) => active ? '#111111' : '#737373'
  const hamburgerColor = '#111111'

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: navBg,
      borderBottom: `1px solid ${navBorder}`,
      boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.10)' : 'none',
      transition: 'background 0.3s, box-shadow 0.3s, border-color 0.3s',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.125rem', fontWeight: 700, color: logoColor, letterSpacing: '0.01em', transition: 'color 0.3s' }}>
          Elliot Castro
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hide-mobile">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href} ref={dropdownRef} style={{ position: 'relative' }}>
                <button
                  onClick={() => setDropdownOpen(o => !o)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.25rem',
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: '0.875rem', fontWeight: isActive(link.href) ? 600 : 400,
                    color: linkColor(isActive(link.href)),
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                  <ChevronDown size={14} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>

                {dropdownOpen && (
                  <div style={{
                    position: 'absolute', top: 'calc(100% + 12px)', left: '50%', transform: 'translateX(-50%)',
                    background: '#fff', border: '1px solid #e5e5e5',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)', minWidth: 240, zIndex: 200,
                    padding: '0.5rem 0',
                  }}>
                    <Link href="/keynotes" style={{ display: 'block', padding: '0.625rem 1.25rem', fontSize: '0.8125rem', fontWeight: 600, color: '#111111', borderBottom: '1px solid #e5e5e5', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      All topics
                    </Link>
                    {topicLinks.map(t => (
                      <Link key={t.href} href={t.href} style={{ display: 'block', padding: '0.5rem 1.25rem', fontSize: '0.875rem', color: '#737373', transition: 'color 0.15s, background 0.15s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#111111'; (e.currentTarget as HTMLElement).style.background = '#fafafa' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#737373'; (e.currentTarget as HTMLElement).style.background = '' }}
                      >
                        {t.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} style={{ fontSize: '0.875rem', fontWeight: isActive(link.href) ? 600 : 400, color: linkColor(isActive(link.href)), transition: 'color 0.2s' }}>
                {link.label}
              </Link>
            )
          )}
          <Link href="/contact" className="btn-primary" style={{ padding: '0.625rem 1.5rem', fontSize: '0.75rem' }}>
            Book Elliot
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: hamburgerColor, transition: 'color 0.3s' }}
          className="show-mobile"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid var(--color-border)', padding: '1rem 1.5rem 2.5rem' }}>
          {navLinks.map(link => (
            <div key={link.href}>
              <Link href={link.href} style={{ display: 'block', padding: '0.875rem 0', fontSize: '1rem', fontWeight: 600, color: 'var(--color-navy)', borderBottom: '1px solid var(--color-border)' }}>
                {link.label}
              </Link>
              {link.dropdown && topicLinks.map(t => (
                <Link key={t.href} href={t.href} style={{ display: 'block', padding: '0.625rem 0 0.625rem 1rem', fontSize: '0.875rem', color: 'var(--color-mid-grey)', borderBottom: '1px solid var(--color-border)' }}>
                  {t.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '1.5rem' }}>
            Book Elliot
          </Link>
        </div>
      )}
    </header>
  )
}
