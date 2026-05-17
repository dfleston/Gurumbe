'use client'

import Link from 'next/link'

type FooterProps = {
  dict: any
  lang: string
}

export default function Footer({ dict, lang }: FooterProps) {
  const footerLinks = [
    { label: dict.linkInvestment, href: '/invest' },
    { label: dict.about || (lang === 'en' ? 'ABOUT' : 'NOSOTROS'), href: '/about' },
    { label: dict.structure || (lang === 'en' ? 'STRUCTURE' : 'ESTRUCTURA'), href: '/structure' },
    { label: dict.linkThinking, href: '/thoughts' },
    { label: dict.linkContact, href: '/contact' },
  ]

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-rule-line)',
        backgroundColor: 'var(--color-surface-container-low)',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        marginTop: 'auto',
      }}
    >
      <div
        className="container-max"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'end',
        }}
      >
        {/* Brand column */}
        <div>
          <p
            className="font-headline-md"
            style={{ color: 'var(--color-parchment)', marginBottom: '0.75rem' }}
          >
            GURUMBÉ CAPITAL
          </p>
          <p
            className="font-body-md"
            style={{ color: 'var(--color-on-surface-variant)', marginBottom: '2rem', maxWidth: '28rem' }}
          >
            {dict.tagline}
          </p>
          <p
            className="font-label-sm"
            style={{ color: 'var(--color-on-surface-variant)', opacity: 0.6 }}
          >
            © 2026 GURUMBÉ CAPITAL. {dict.rights}.
          </p>
        </div>

        {/* Links column */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${lang}${link.href}`}
              className="font-label-sm"
              style={{
                color: 'var(--color-on-surface-variant)',
                textDecoration: 'none',
                transition: 'color 0.3s, transform 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                const el = e.target as HTMLElement
                el.style.color = 'var(--color-primary)'
                el.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                const el = e.target as HTMLElement
                el.style.color = 'var(--color-on-surface-variant)'
                el.style.transform = 'translateY(0)'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div
        className="container-max"
        style={{ marginTop: '3rem' }}
      >
        <div
          style={{
            height: '1px',
            backgroundColor: 'var(--color-rule-line)',
          }}
        />
        <p
          className="font-label-sm"
          style={{
            color: 'var(--color-on-surface-variant)',
            opacity: 0.4,
            marginTop: '1.5rem',
            textAlign: 'center',
          }}
        >
          {dict.bottomMessage}
        </p>
      </div>

      <style>{`
        @media (max-width: 767px) {
          footer > div:first-child {
            grid-template-columns: 1fr !important;
          }
          footer > div:first-child > div:last-child {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </footer>
  )
}
