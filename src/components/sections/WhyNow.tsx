'use client'

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
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M12 6c3 0 6 2 6 6s-3 6-6 6" strokeLinecap="round" />
          <path d="M12 6c-3 0-6 2-6 6s3 6 6 6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '02',
      label: dict.force2Label,
      title: dict.force2Title,
      body: dict.force2Body,
      accentColor: 'var(--color-primary)',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M12 6c3 0 6 2 6 6s-3 6-6 6" strokeLinecap="round" />
          <path d="M12 6c-3 0-6 2-6 6s3 6 6 6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '03',
      label: dict.force3Label,
      title: dict.force3Title,
      body: dict.force3Body,
      accentColor: 'var(--color-tertiary)',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M12 6c3 0 6 2 6 6s-3 6-6 6" strokeLinecap="round" />
          <path d="M12 6c-3 0-6 2-6 6s3 6 6 6" strokeLinecap="round" />
        </svg>
      ),
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
            style={{ width: '6rem', height: '1px', backgroundColor: 'var(--color-rule-line)', marginBottom: '2rem' }}
          />

          <p
            className="font-body-lg"
            style={{ color: 'var(--color-on-surface-variant)', maxWidth: '36rem' }}
          >
            {dict.body}
          </p>
        </header>

        {/* Three forces grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="forces-grid"
        >
          {forces.map((force) => (
            <article
              key={force.number}
              style={{
                backgroundColor: 'var(--color-surface)',
                padding: '2rem',
                border: '1px solid var(--color-rule-line)',
                borderTop: `6px solid ${force.accentColor}`,
                position: 'relative',
                transition: 'transform 0.3s, border-color 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
              }}
            >
              {/* Icon */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  color: force.accentColor,
                  opacity: 0.6,
                }}
              >
                {force.icon}
              </div>

              <div style={{ marginTop: '3rem' }}>
                <span
                  className="font-label-lg"
                  style={{ color: force.accentColor, display: 'block', marginBottom: '1rem' }}
                >
                  {force.number} · {force.label}
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
            </article>
          ))}
        </div>

        {/* Pull quote */}
        <div
          style={{
            marginTop: '5rem',
            paddingLeft: '2rem',
            borderLeft: '6px solid var(--color-tertiary)',
            maxWidth: '48rem',
            marginLeft: '16.666%',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            background: 'linear-gradient(to right, rgba(181,83,29,0.05), transparent)',
          }}
          className="pull-quote-offset"
        >
          <p
            className="font-headline-md"
            style={{ color: 'var(--color-parchment)', fontStyle: 'italic', marginBottom: '1.25rem' }}
          >
            {dict.quote}
          </p>
          <p
            className="font-label-lg"
            style={{ color: 'var(--color-primary)', letterSpacing: '0.2em' }}
          >
            {dict.quoteLabel}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .forces-grid { grid-template-columns: 1fr !important; }
          .pull-quote-offset { margin-left: 0 !important; }
        }
        @media (max-width: 1023px) {
          .forces-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
