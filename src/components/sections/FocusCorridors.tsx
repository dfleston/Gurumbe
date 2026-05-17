'use client'

type FocusCorridorsProps = {
  dict: any
}

export default function FocusCorridors({ dict }: FocusCorridorsProps) {
  if (!dict) return null

  const hubs = [
    {
      title: dict.madridTitle,
      subtitle: dict.madridSubtitle,
      body: dict.madridBody,
      borderAccent: 'var(--color-primary)',
    },
    {
      title: dict.nairobiTitle,
      subtitle: dict.nairobiSubtitle,
      body: dict.nairobiBody,
      borderAccent: 'var(--color-secondary)',
    },
    {
      title: dict.accraTitle,
      subtitle: dict.accraSubtitle,
      body: dict.accraBody,
      borderAccent: 'var(--color-tertiary)',
    },
  ]

  return (
    <section
      id="focus-corridors"
      style={{
        backgroundColor: 'var(--color-surface-main)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderTop: '1px solid var(--color-rule-line)',
      }}
    >
      <div className="container-max">
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="section-label">{dict.label}</span>
          <h2
            className="font-display"
            style={{
              color: 'var(--color-parchment)',
              marginTop: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            {dict.headline}
          </h2>
          <div
            style={{
              width: '5rem',
              height: '1px',
              backgroundColor: 'var(--color-rule-line)',
            }}
          />
        </div>

        {/* Hubs Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="hubs-grid"
        >
          {hubs.map((hub) => (
            <article
              key={hub.title}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-outline-variant)',
                borderTop: `4px solid ${hub.borderAccent}`,
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-4px)'
                el.style.borderColor = 'rgba(200, 132, 29, 0.3)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.borderColor = 'var(--color-outline-variant)'
              }}
            >
              <h3
                className="font-display"
                style={{
                  color: 'var(--color-parchment)',
                  fontSize: '2.25rem',
                  lineHeight: '1.2',
                  margin: 0,
                }}
              >
                {hub.title}
              </h3>
              
              <span
                className="font-label-sm"
                style={{
                  color: hub.borderAccent,
                  display: 'block',
                  marginTop: '0.5rem',
                  marginBottom: '1.5rem',
                  letterSpacing: '0.15em',
                }}
              >
                {hub.subtitle}
              </span>

              <p
                className="font-body-md"
                style={{
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                {hub.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .hubs-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
