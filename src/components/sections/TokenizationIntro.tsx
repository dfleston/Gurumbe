'use client'

import Link from 'next/link'

type TokenizationIntroProps = {
  dict: any
  lang: string
}

export default function TokenizationIntro({ dict, lang }: TokenizationIntroProps) {
  if (!dict) return null

  return (
    <section
      id="tokenization-intro"
      style={{
        backgroundColor: 'var(--color-surface)',
        paddingTop: '8rem',
        paddingBottom: '8rem',
        borderTop: '1px solid var(--color-rule-line)',
        borderBottom: '1px solid var(--color-rule-line)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle arc graphic element for consistency */}
      <div
        className="bg-arc"
        style={{
          width: '600px',
          height: '600px',
          right: '-150px',
          bottom: '-150px',
          borderColor: 'rgba(200, 132, 29, 0.03)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-max" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="intro-grid"
        >
          {/* Left Column — Large high-impact header */}
          <div>
            <span className="section-label">{dict.label}</span>
            <h2
              className="font-display"
              style={{
                color: 'var(--color-parchment)',
                fontSize: '3rem',
                lineHeight: '1.15',
                marginTop: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              {dict.headline}
            </h2>
            <div
              style={{
                width: '4rem',
                height: '2px',
                backgroundColor: 'var(--color-primary)',
              }}
            />
          </div>

          {/* Right Column — Elaborated concept and dynamic CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <p
              className="font-body-lg"
              style={{
                color: 'var(--color-on-surface-variant)',
                lineHeight: '1.7',
                margin: 0,
              }}
            >
              {dict.body}
            </p>

            <div>
              <Link
                href={`/${lang}/tokenization`}
                className="font-label-lg"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--color-primary)',
                  textDecoration: 'none',
                  transition: 'color 0.3s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = 'var(--color-parchment)'
                  el.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = 'var(--color-primary)'
                  el.style.transform = 'translateX(0)'
                }}
              >
                {dict.cta}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .intro-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
