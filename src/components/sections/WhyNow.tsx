'use client'

import Link from 'next/link'

type WhyNowProps = {
  dict: any
}

export default function WhyNow({ dict }: WhyNowProps) {
  const forces = [
    {
      number: '01',
      label: dict.force1Label,
      title: dict.force1Title,
      body: dict.force1Body,
      accentColor: 'var(--color-secondary)',
    },
    {
      number: '02',
      label: dict.force2Label,
      title: dict.force2Title,
      body: dict.force2Body,
      accentColor: 'var(--color-primary)',
    },
    {
      number: '03',
      label: dict.force3Label,
      title: dict.force3Title,
      body: dict.force3Body,
      accentColor: 'var(--color-tertiary)',
    },
    {
      number: '04',
      label: dict.force4Label,
      title: dict.force4Title,
      body: dict.force4Body,
      accentColor: 'var(--color-secondary)',
      link: '/tokenization',
    },
    {
      number: '05',
      label: dict.force5Label,
      title: dict.force5Title,
      body: dict.force5Body,
      accentColor: 'var(--color-primary)',
    },
    {
      number: '06',
      label: dict.force6Label,
      title: dict.force6Title,
      body: dict.force6Body,
      accentColor: 'var(--color-tertiary)',
    },
  ]

  return (
    <section
      id="why-now"
      style={{
        backgroundColor: 'var(--color-surface-main)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}
    >
      <div className="container-max">
        {/* Header */}
        <header style={{ marginBottom: '4rem' }}>
          <span className="section-label">{dict.label}</span>

          <h2
            className="font-display"
            style={{ color: 'var(--color-parchment)', marginBottom: '2rem', maxWidth: '42rem', whiteSpace: 'pre-line' }}
          >
            {dict.headline}
          </h2>

          <div
            style={{ width: '6rem', height: '1px', backgroundColor: 'var(--color-rule-line)' }}
          />
        </header>

        {/* Six forces grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="forces-grid"
        >
          {forces.map((force) => {
            const content = (
              <>
                <div style={{ marginTop: '1rem' }}>
                  <span
                    className="font-label-lg"
                    style={{ color: force.accentColor, display: 'block', marginBottom: '1rem' }}
                  >
                    {force.label}
                  </span>

                  <h3
                    className="font-headline-md"
                    style={{ color: 'var(--color-parchment)', marginBottom: '1rem' }}
                  >
                    {force.title}
                  </h3>

                  <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                    {force.body}
                  </p>
                </div>
              </>
            )

            const baseStyle: React.CSSProperties = {
              backgroundColor: 'var(--color-surface)',
              padding: '2rem',
              border: '1px solid var(--color-rule-line)',
              borderTop: `6px solid ${force.accentColor}`,
              position: 'relative',
              transition: 'transform 0.3s, border-color 0.3s',
              cursor: force.link ? 'pointer' : 'default',
              textDecoration: 'none',
              display: 'block',
            }

            if (force.link) {
              return (
                <Link
                  key={force.number}
                  href={`/en${force.link}`} // Note: using en as primary, lang dynamic is preferred but we are inside client component. Let's make sure it handles /es if needed.
                  // Wait, let's keep path relative to lang if possible or just relative '/tokenization' (middleware or navigation router can handle it). Let's use simple route.
                  style={baseStyle}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translateY(-4px)'
                    el.style.borderColor = 'var(--color-primary)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translateY(0)'
                    el.style.borderColor = 'var(--color-rule-line)'
                  }}
                >
                  {content}
                </Link>
              )
            }

            return (
              <article
                key={force.number}
                style={baseStyle}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                }}
              >
                {content}
              </article>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .forces-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .forces-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
