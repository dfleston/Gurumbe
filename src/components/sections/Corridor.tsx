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
              {dict.body3 && (
                <p className="font-body-md">
                  {dict.body3}
                </p>
              )}
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
                {/* Conceptual regional map */}
                <svg width="100%" height="100%" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">

                  {/* 1. Background Grid */}
                  <g style={{ opacity: 0.08 }}>
                    <line x1="0" y1="0" x2="400" y2="0" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="0" y1="45" x2="400" y2="45" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="0" y1="90" x2="400" y2="90" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="0" y1="135" x2="400" y2="135" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="0" y1="180" x2="400" y2="180" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="0" y1="225" x2="400" y2="225" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="0" y1="270" x2="400" y2="270" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="0" y1="315" x2="400" y2="315" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="0" y1="360" x2="400" y2="360" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="0" y1="405" x2="400" y2="405" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="0" y1="450" x2="400" y2="450" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="0" y1="495" x2="400" y2="495" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="0" y1="0" x2="0" y2="500" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="45" y1="0" x2="45" y2="500" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="90" y1="0" x2="90" y2="500" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="135" y1="0" x2="135" y2="500" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="180" y1="0" x2="180" y2="500" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="225" y1="0" x2="225" y2="500" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="270" y1="0" x2="270" y2="500" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="315" y1="0" x2="315" y2="500" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="360" y1="0" x2="360" y2="500" stroke="#c8841d" strokeWidth="0.5"></line>
                    <line x1="405" y1="0" x2="405" y2="500" stroke="#c8841d" strokeWidth="0.5"></line>
                  </g>

                  {/* 2. Concentric Circles */}
                  <g style={{ opacity: 0.12 }}>
                    <circle cx="200" cy="250" r="120" stroke="#c8841d" strokeWidth="0.5" fill="none"></circle>
                    <circle cx="200" cy="250" r="80" stroke="#b5531d" strokeWidth="0.5" fill="none"></circle>
                    <circle cx="200" cy="250" r="40" stroke="#046A38" strokeWidth="0.5" fill="none"></circle>
                  </g>

                  {/* 3. Coastlines & Geopolitical Borders */}
                  {/* IBERIA (Spain & Portugal) */}
                  <g opacity="0.35" stroke="#c8841d" fill="none">
                    <path d="M 60 70 L 150 70 L 150 115 L 105 160 L 75 155 L 60 115 Z" strokeWidth="1.25"></path>
                    <path d="M 80 70 L 80 110 L 95 125 L 90 157" strokeWidth="0.75" strokeDasharray="2,2"></path>
                    <text x="73" y="115" fontSize="5" fill="#c8841d" opacity="0.7" textAnchor="end">PT</text>
                    <text x="125" y="125" fontSize="5" fill="#c8841d" opacity="0.7">ES</text>
                  </g>

                  {/* AFRICA CONTINENTAL MASS */}
                  <g opacity="0.35" stroke="#c8841d" fill="none">
                    <path d="M 90 220 L 135 175 L 225 175 L 315 220 L 330 260 L 270 400 L 180 445 L 175 285 L 140 260 L 115 255 Z" strokeWidth="1.25"></path>
                    <path d="M 115 255 Q 150 230, 200 225" strokeWidth="0.75" strokeDasharray="2,2"></path>
                    <path d="M 140 260 L 145 220" strokeWidth="0.75" strokeDasharray="1.5,1.5"></path>
                    <path d="M 160 273 L 162 235" strokeWidth="0.75" strokeDasharray="1.5,1.5"></path>
                    <path d="M 200 225 L 200 310 L 180 445" strokeWidth="0.75" strokeDasharray="2,2"></path>
                    <path d="M 200 270 L 260 250 L 330 260" strokeWidth="0.75" strokeDasharray="2,2"></path>
                    <path d="M 200 310 L 270 400" strokeWidth="0.75" strokeDasharray="2,2"></path>
                    <path d="M 260 250 L 245 300 L 200 310" strokeWidth="0.75" strokeDasharray="1.5,1.5"></path>
                  </g>

                  {/* 4. Atlantic Archipelagos */}
                  <g stroke="#c8841d" strokeWidth="0.75" fill="none" opacity="0.4">
                    <polygon points="15,105 25,100 30,108 18,112"></polygon>
                    <text x="34" y="107" fontSize="5.5" fill="#c8841d">Azores</text>
                    <polygon points="30,145 40,142 37,150"></polygon>
                    <text x="44" y="147" fontSize="5.5" fill="#c8841d">Madeira</text>
                    <polygon points="65,185 75,181 80,189 70,192"></polygon>
                    <text x="58" y="201" fontSize="5.5" fill="#c8841d">Canary Is.</text>
                  </g>

                  {/* 5. KEY NODES */}
                  {/* MADRID */}
                  <circle cx="118" cy="105" r="5" fill="rgb(200, 132, 29)"></circle>
                  <text x="126" y="103" fontSize="8" fill="rgb(200, 132, 29)" fontWeight="bold">MADRID</text>

                  {/* ACCRA */}
                  <circle cx="151" cy="264" r="5" fill="#b5531d"></circle>
                  <text x="145" y="261" fontSize="8" fill="#b5531d" textAnchor="end">ACCRA</text>

                  <text x="152" y="284" fontSize="7" fill="#b5531d" opacity="0.6" fontStyle="italic">Gulf of Guinea</text>

                  {/* NAIROBI */}
                  <circle cx="250" cy="280" r="5" fill="#046A38"></circle>
                  <text x="258" y="284" fontSize="8" fill="#046A38" fontWeight="bold">NAIROBI</text>

                  {/* 6. Connections */}
                  <g stroke="#b5531d" strokeWidth="1" fill="none" strokeDasharray="3,3">
                    <path d="M 118 105 Q 120 190, 151 264"></path>
                    <path d="M 151 264 Q 200 270, 250 280"></path>
                    <path d="M 118 105 Q 200 195, 250 280" opacity="0.4"></path>
                  </g>
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
                  ((e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')
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
      </div>

      <style>{`
        @media (max-width: 767px) {
          .corridor-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
