'use client'

type HowWeWorkProps = {
  dict: any
}

export default function HowWeWork({ dict }: HowWeWorkProps) {
  const properties = [
    { label: dict.prop1Label, desc: dict.prop1Desc },
    { label: dict.prop2Label, desc: dict.prop2Desc },
    { label: dict.prop3Label, desc: dict.prop3Desc },
    { label: dict.prop4Label, desc: dict.prop4Desc },
  ]

  return (
    <section
      id="how-we-work"
      style={{
        backgroundColor: 'var(--color-surface)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}
    >
      <div className="container-max">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '48rem', margin: '0 auto 5rem' }}>
          <span className="section-label">{dict.label}</span>
          <h2 className="font-display" style={{ color: 'var(--color-parchment)' }}>
            {dict.headline}
          </h2>
          <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', marginTop: '1.5rem' }}>
            {dict.body}
          </p>
        </div>

        {/* Bento diagram: Holding → Capital Flow → SPVs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: '2rem',
            alignItems: 'center',
            marginBottom: '3rem',
          }}
          className="diagram-grid"
        >
          {/* Holding Company card */}
          <div
            className="card-surface"
            style={{ minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <h3 className="font-headline-md" style={{ color: 'var(--color-parchment)', marginBottom: '0.5rem' }}>
                {dict.holdingTitle}
              </h3>
              <p className="font-label-sm" style={{ color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
                {dict.holdingLabel}
              </p>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                {dict.holdingBody}
              </p>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
                <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Capital flow connector */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              width: '8rem',
            }}
            className="connector"
          >
            <span className="font-label-sm" style={{ color: 'var(--color-primary)', textAlign: 'center', whiteSpace: 'pre-line' }}>
              {dict.flowLabel}
            </span>
            <div
              style={{
                width: '100%',
                height: '3px',
                background: `linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-tertiary) 100%)`,
                borderRadius: '2px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '10px',
                  height: '10px',
                  backgroundColor: 'var(--color-tertiary-container)',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>

          {/* SPV card */}
          <div
            className="card-surface"
            style={{ minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <h3 className="font-headline-md" style={{ color: 'var(--color-parchment)', marginBottom: '0.5rem' }}>
                {dict.spvTitle}
              </h3>
              <p className="font-label-sm" style={{ color: 'var(--color-tertiary-container)', marginBottom: '1.25rem' }}>
                {dict.spvLabel}
              </p>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                {dict.spvBody}
              </p>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-tertiary-container)" strokeWidth="1.5">
                <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="1.5">
                <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Binary Transition / Programmable Compliance block */}
        <div
          style={{
            backgroundColor: 'var(--color-surface-container-high)',
            borderTop: '4px solid var(--color-primary)',
            border: '1px solid var(--color-outline-variant)',
            borderTopWidth: '4px',
            padding: '3rem',
            marginBottom: '5rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '3rem',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flex: '1 1 20rem' }}>
              <h3 className="font-headline-lg" style={{ color: 'var(--color-parchment)', marginBottom: '0.5rem' }}>
                {dict.binaryTitle}
              </h3>
              <p className="font-label-sm" style={{ color: 'var(--color-primary)' }}>
                {dict.binaryLabel}
              </p>
            </div>
            <div
              style={{
                flex: '2 1 30rem',
                borderLeft: '2px solid var(--color-outline-variant)',
                paddingLeft: '2.5rem',
              }}
              className="binary-body"
            >
              <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', marginBottom: '1.5rem' }}>
                {dict.binaryBody}
              </p>

              <div
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}
                className="properties-grid"
              >
                {properties.map((p) => (
                  <div key={p.label}>
                    <p
                      className="font-label-sm"
                      style={{ color: 'var(--color-primary)', marginBottom: '0.25rem' }}
                    >
                      {p.label.toUpperCase()}
                    </p>
                    <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .diagram-grid { grid-template-columns: 1fr !important; }
          .connector { display: none !important; }
          .binary-body { border-left: none !important; padding-left: 0 !important; }
          .properties-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
