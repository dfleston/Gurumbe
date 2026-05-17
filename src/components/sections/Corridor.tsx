'use client'

type CorridorProps = {
  dict: any
}

export default function Corridor({ dict }: CorridorProps) {
  return (
    <section
      id="corridor"
      style={{
        backgroundColor: 'var(--color-surface)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}
    >
      <div className="container-max">
        {/* Split layout: 5/7 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '5fr 7fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="corridor-grid"
        >
          {/* Left — text */}
          <div>
            <span className="section-label">{dict.label}</span>

            <h2
              className="font-headline-lg"
              style={{ color: 'var(--color-parchment)', marginBottom: '2rem', whiteSpace: 'pre-line' }}
            >
              {dict.headline}
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                color: 'var(--color-on-surface-variant)',
                marginBottom: '3rem',
              }}
            >
              <p className="font-body-md">
                {dict.body1}
              </p>
              <p className="font-body-md">
                {dict.body2}
              </p>
            </div>

            {/* Sankofa quote block */}
            <div
              style={{
                border: '1px solid var(--color-rule-line)',
                backgroundColor: 'var(--color-surface-container-low)',
                padding: '2rem',
                position: 'relative',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-3px)'
                el.style.borderColor = 'rgba(200, 132, 29, 0.4)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.borderColor = 'var(--color-rule-line)'
              }}
            >
              {/* Decorative icon */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  color: 'var(--color-rule-line)',
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" />
                </svg>
              </div>

              <blockquote
                className="font-headline-md"
                style={{
                  color: 'var(--color-parchment)',
                  fontStyle: 'italic',
                  borderLeft: '4px solid var(--color-primary)',
                  paddingLeft: '1.5rem',
                  margin: 0,
                }}
              >
                {dict.sankofaQuote}
              </blockquote>
              <p
                className="font-label-lg"
                style={{
                  color: 'var(--color-primary)',
                  marginTop: '1rem',
                  letterSpacing: '0.2em',
                }}
              >
                — {dict.sankofaLabel}
              </p>
            </div>
          </div>

          {/* Right — visual */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '560px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Background offset box */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'var(--color-surface-container-low)',
                  border: '1px solid var(--color-rule-line)',
                  marginLeft: '2rem',
                  marginTop: '2rem',
                }}
              />

              {/* Architectural pattern — stands in for photography */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: 'calc(100% - 1rem)',
                  height: 'calc(100% - 1rem)',
                  backgroundColor: 'var(--color-surface-container)',
                  border: '1px solid var(--color-outline-variant)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                {/* Architectural line pattern */}
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 500"
                  style={{ opacity: 0.15 }}
                  preserveAspectRatio="xMidYMid slice"
                >
                  {/* Geometric Andalusian-inspired pattern */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <line
                      key={`h-${i}`}
                      x1="0"
                      y1={i * 45}
                      x2="400"
                      y2={i * 45}
                      stroke="#c8841d"
                      strokeWidth="0.5"
                    />
                  ))}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1={i * 45}
                      y1="0"
                      x2={i * 45}
                      y2="500"
                      stroke="#c8841d"
                      strokeWidth="0.5"
                    />
                  ))}
                  <circle cx="200" cy="250" r="120" stroke="#c8841d" strokeWidth="0.5" fill="none" />
                  <circle cx="200" cy="250" r="80" stroke="#b5531d" strokeWidth="0.5" fill="none" />
                  <circle cx="200" cy="250" r="40" stroke="#046A38" strokeWidth="0.5" fill="none" />
                </svg>

                {/* Label */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '2rem',
                    right: '2rem',
                  }}
                >
                  <p
                    className="font-label-sm"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {dict.visualLabel}
                  </p>
                </div>
              </div>

              {/* Floating Sankofa card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-2.5rem',
                  left: '-2.5rem',
                  backgroundColor: 'var(--color-surface-container)',
                  border: '1px solid var(--color-rule-line)',
                  padding: '2rem',
                  zIndex: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '11rem',
                  height: '11rem',
                  transition: 'transform 0.5s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.transform =
                    'translateY(-6px)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.transform =
                    'translateY(0)')
                }
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="1.5"
                  style={{ marginBottom: '0.75rem' }}
                >
                  <path
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="font-label-sm"
                  style={{
                    color: 'var(--color-parchment)',
                    letterSpacing: '0.15em',
                    textAlign: 'center',
                  }}
                >
                  SANKOFA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* South Arrow Thesis — 2 cards below */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            marginTop: '5rem',
          }}
          className="thesis-cards"
        >
          {[
            {
              title: dict.thesis1Title,
              body: dict.thesis1Body,
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              title: dict.thesis2Title,
              body: dict.thesis2Body,
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
          ].map((card) => (
            <div
              key={card.title}
              className="card-surface"
              style={{
                borderLeft: '4px solid var(--color-secondary)',
                borderTop: 'none',
                borderRight: 'none',
                borderBottom: 'none',
                border: '1px solid var(--color-outline-variant)',
                borderLeftWidth: '4px',
                borderLeftColor: 'var(--color-secondary)',
              }}
            >
              <div
                style={{
                  color: 'var(--color-rule-line)',
                  marginBottom: '1.5rem',
                }}
              >
                {card.icon}
              </div>
              <h4
                className="font-headline-md"
                style={{ color: 'var(--color-parchment)', marginBottom: '0.75rem' }}
              >
                {card.title}
              </h4>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .corridor-grid { grid-template-columns: 1fr !important; }
          .thesis-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
