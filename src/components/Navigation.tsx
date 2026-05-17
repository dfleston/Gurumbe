'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'STRATEGY · ESTRATEGIA', href: '#corridor' },
  { label: 'ASSETS · ACTIVOS', href: '#what-we-build' },
  { label: 'CORRIDOR · CORREDOR', href: '#why-now' },
  { label: 'ABOUT · NOSOTROS', href: '#who' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          href="/"
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
          GURUMBÉ CAPITAL
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
            <a
              key={link.href}
              href={link.href}
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
            </a>
          ))}

          {/* Contact CTA */}
          <a
            href="#contact"
            className="btn-ghost"
            style={{ padding: '0.5rem 1.25rem' }}
          >
            CONTACT · CONTACTO
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--color-parchment)',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          className="mobile-menu-btn"
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

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: 'var(--color-surface-container-low)',
            borderTop: '1px solid var(--color-rule-line)',
            padding: '1.5rem var(--spacing-margin-mobile)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label-sm"
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'var(--color-on-surface-variant)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-ghost"
            onClick={() => setMenuOpen(false)}
            style={{ textAlign: 'center' }}
          >
            CONTACT · CONTACTO
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .mobile-menu-btn { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
        @media (max-width: 767px) {
          .mobile-menu-btn { display: block !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
