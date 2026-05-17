'use client'

const forces = [
  {
    number: '01',
    label: 'DEMOGRAPHIC FACT',
    title: 'Youth as the Ultimate Asset',
    body: 'By 2050, one in four people on Earth will be African. This unprecedented demographic dividend shifts the center of global consumption, labor, and innovation southward — creating an undeniable gravitational pull for long-term capital deployment.',
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
    label: 'CAPITAL SHIFT',
    title: 'Currency Competition',
    body: 'As legacy financial systems fracture, tangible assets backed by verifiable registries offer sovereign stability. The corridor demands hard assets that bypass traditional intermediation to preserve purchasing power across borders.',
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
    label: 'ARCHITECTURAL GAP',
    title: 'Sovereign Infrastructure',
    body: 'The infrastructure to direct European and global capital into African assets — legally structured, culturally credible, operationally grounded — does not yet exist in coherent form. That is precisely what we are building.',
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

export default function WhyNow() {
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
          <span className="section-label">WHY NOW · POR QUÉ AHORA</span>

          <h2
            className="font-display"
            style={{ color: 'var(--color-parchment)', marginBottom: '2rem', maxWidth: '42rem' }}
          >
            The Convergence of<br />Hemispheric Forces
          </h2>

          <div
            style={{ width: '6rem', height: '1px', backgroundColor: 'var(--color-rule-line)', marginBottom: '2rem' }}
          />

          <p
            className="font-body-lg"
            style={{ color: 'var(--color-on-surface-variant)', maxWidth: '36rem' }}
          >
            We stand at an inflection point where institutional capital is
            reprioritizing growth markets, driven by demographic inevitability
            and the demand for sovereign architectural infrastructure.
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
            &ldquo;We are not waiting for the future to be distributed; we are
            structuring the rails upon which it will run.&rdquo;
          </p>
          <p
            className="font-label-lg"
            style={{ color: 'var(--color-primary)', letterSpacing: '0.2em' }}
          >
            GURUMBÉ CAPITAL THESIS
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
