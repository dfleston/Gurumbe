'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavigationProps = {
  dict: any
  lang: string
}

export default function Navigation({ dict, lang }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: dict.africa, href: '/africa' },
    { label: dict.bridge, href: '/bridge' },
    { label: dict.tokenization, href: '/tokenization' },
    { label: dict.invest, href: '/invest' },
    { label: dict.thoughts, href: '/thoughts' },
  ]

  const utilityLinks = [
    { label: lang === 'en' ? 'About' : 'Nosotros', href: '/about' },
    { label: lang === 'en' ? 'Structure' : 'Estructura', href: '/structure' },
    { label: dict.contact || (lang === 'en' ? 'Contact' : 'Contacto'), href: '/contact' },
  ]

  // Determine opposite language for the toggle
  const nextLang = lang === 'en' ? 'es' : 'en'
  const togglePath = pathname.replace(`/${lang}`, `/${nextLang}`)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        borderBottom: '1px solid var(--color-rule-line)',
        backdropFilter: 'blur(12px)',
        backgroundColor: scrolled
          ? 'rgba(15, 12, 9, 0.95)'
          : 'rgba(15, 12, 9, 0.8)',
        transition: 'background-color 0.3s',
      }}
    >
      <div
        className="container-max"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '5rem',
        }}
      >
        {/* Logo */}
        <Link
          href={`/${lang}`}
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.25rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            color: 'var(--color-parchment)',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          {dict.brand}
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${lang}${link.href}`}
              className="font-label-sm"
              style={{
                color: 'var(--color-on-surface-variant)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--color-primary)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  'var(--color-on-surface-variant)')
              }
            >
              {link.label}
            </Link>
          ))}

          {/* Lang Switcher Desktop */}
          <Link
            href={togglePath}
            className="font-label-sm"
            style={{
              color: 'var(--color-primary)',
              textDecoration: 'none',
              transition: 'color 0.3s',
              borderLeft: '1px solid var(--color-outline-variant)',
              paddingLeft: '2.5rem',
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = 'var(--color-parchment)')
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = 'var(--color-primary)')
            }
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </Link>

          {/* Contact CTA */}
          <Link
            href={`/${lang}/contact`}
            className="btn-ghost"
            style={{ padding: '0.5rem 1.25rem' }}
          >
            {dict.contact}
          </Link>
        </div>

        {/* Mobile controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="mobile-menu-btn">
          {/* Lang Switcher Mobile */}
          <Link
            href={togglePath}
            className="font-label-sm"
            style={{
              color: 'var(--color-primary)',
              textDecoration: 'none',
            }}
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-parchment)',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {menuOpen ? (
                <>
                  <path d="M18 6L6 18" strokeLinecap="round" />
                  <path d="M6 6l12 12" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" strokeLinecap="round" />
                  <path d="M4 12h16" strokeLinecap="round" />
                  <path d="M4 18h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: 'var(--color-surface-container-low)',
            borderTop: '1px solid var(--color-rule-line)',
            padding: '1.5rem var(--spacing-margin-mobile)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${lang}${link.href}`}
              className="font-label-sm"
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'var(--color-on-surface-variant)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
          
          <div style={{ height: '1px', backgroundColor: 'var(--color-rule-line)', margin: '0.5rem 0' }} />
          
          {utilityLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${lang}${link.href}`}
              className="font-label-sm"
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'var(--color-on-surface-variant)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .mobile-menu-btn { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
        @media (max-width: 767px) {
          .mobile-menu-btn { display: flex !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
