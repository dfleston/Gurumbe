'use client'

type EthosProps = {
  dict: any
}

export default function Ethos({ dict }: EthosProps) {
  const principles = [
    {
      roman: 'I',
      title: dict.principle1Title,
      body: dict.principle1Body,
      color: 'var(--color-primary)',
    },
    {
      roman: 'II',
      title: dict.principle2Title,
      body: dict.principle2Body,
      color: 'var(--color-tertiary)',
    },
    {
      roman: 'III',
      title: dict.principle3Title,
      body: dict.principle3Body,
      color: 'var(--color-secondary)',
    },
    {
      roman: 'IV',
      title: dict.principle4Title,
      body: dict.principle4Body,
      color: 'var(--color-primary)',
    },
    {
      roman: 'V',
      title: dict.principle5Title,
      body: dict.principle5Body,
      color: 'var(--color-tertiary)',
    },
    {
      roman: 'VI',
      title: dict.principle6Title,
      body: dict.principle6Body,
      color: 'var(--color-secondary)',
    },
    {
      roman: 'VII',
      title: dict.principle7Title,
      body: dict.principle7Body,
      color: 'var(--color-primary)',
    },
    {
      roman: 'VIII',
      title: dict.principle8Title,
      body: dict.principle8Body,
      color: 'var(--color-tertiary)',
    },
  ]

  return (
    <section
      id="ethos"
      style={{
        backgroundColor: 'var(--color-surface-main)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderTop: '1px solid var(--color-rule-line)',
        borderBottom: '1px solid var(--color-rule-line)',
      }}
    >
      <div className="container-max">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '4rem',
            alignItems: 'flex-start',
          }}
          className="ethos-grid"
        >
          {/* Left — title & pull quote */}
          <div style={{ position: 'sticky', top: '7rem' }} className="ethos-sticky">
            <span className="section-label">{dict.label}</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginBottom: '3rem', whiteSpace: 'pre-line' }}>
              {dict.headline}
            </h2>

            <div className="pull-quote" style={{ marginBottom: '2rem' }}>
              <p
                className="font-headline-md"
                style={{ color: 'var(--color-parchment)', fontStyle: 'italic' }}
              >
                {dict.quote}
              </p>
            </div>

            {/* Adinkra symbol */}
            <div
              style={{
                marginTop: '3rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.5rem',
              }}
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                style={{ opacity: 0.3 }}
              >
                {/* Abstract Adinkra Sankofa pattern */}
                <circle cx="32" cy="32" r="28" stroke="var(--color-primary)" strokeWidth="1" />
                <circle cx="32" cy="32" r="18" stroke="var(--color-tertiary)" strokeWidth="1" />
                <circle cx="32" cy="32" r="8" stroke="var(--color-secondary)" strokeWidth="1" />
                <line x1="32" y1="4" x2="32" y2="60" stroke="var(--color-primary)" strokeWidth="0.5" />
                <line x1="4" y1="32" x2="60" y2="32" stroke="var(--color-primary)" strokeWidth="0.5" />
                <line x1="12" y1="12" x2="52" y2="52" stroke="var(--color-rule-line)" strokeWidth="0.5" />
                <line x1="52" y1="12" x2="12" y2="52" stroke="var(--color-rule-line)" strokeWidth="0.5" />
              </svg>
              <span className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)' }}>
                {dict.adinkraLabel}
              </span>
            </div>
          </div>

          {/* Right — 8 principles */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem 4rem',
            }}
            className="principles-grid"
          >
            {principles.map((p) => (
              <div key={p.roman} style={{ position: 'relative' }}>
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: '"DM Mono", monospace',
                    color: p.color,
                    marginBottom: '0.75rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  {p.roman}.
                </div>
                <h4
                  className="font-headline-md"
                  style={{
                    color: 'var(--color-parchment)',
                    marginBottom: '0.5rem',
                    fontSize: '1.4rem',
                  }}
                >
                  {p.title}
                </h4>
                <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                  {p.body}
                </p>
                <div
                  style={{
                    width: '2rem',
                    height: '2px',
                    backgroundColor: p.color,
                    marginTop: '1rem',
                    opacity: 0.5,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .ethos-grid { grid-template-columns: 1fr !important; }
          .ethos-sticky { position: static !important; }
          .principles-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .principles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
