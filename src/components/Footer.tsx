'use client'

type FooterProps = {
  dict: any
  lang: string
}

export default function Footer({ dict, lang }: FooterProps) {
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
            © 2025 GURUMBÉ CAPITAL. {dict.rights}.
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
          {[
            { label: dict.linkInvestment, href: '#what-we-build' },
            { label: dict.linkSovereignty, href: '#ethos' },
            { label: dict.linkThinking, href: `/${lang}/thoughts` },
            { label: dict.linkContact, href: '#contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
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
            </a>
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
