'use client'

export default function Who() {
  return (
    <section
      id="who"
      style={{
        backgroundColor: 'var(--color-surface)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}
    >
      <div className="container-max">
        {/* Section header */}
        <div style={{ marginBottom: '5rem' }}>
          <span className="section-label">WHO IS BEHIND THIS · QUIÉN ESTÁ DETRÁS</span>
          <h2 className="font-display" style={{ color: 'var(--color-parchment)' }}>
            The Founder.
          </h2>
        </div>

        {/* Typographic founder block */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'flex-start',
          }}
          className="who-grid"
        >
          {/* Left — name & role */}
          <div>
            <div
              style={{
                borderLeft: '4px solid var(--color-primary)',
                paddingLeft: '2.5rem',
                marginBottom: '3rem',
              }}
            >
              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '3.5rem',
                  fontWeight: 600,
                  color: 'var(--color-parchment)',
                  lineHeight: 1.1,
                  marginBottom: '1rem',
                }}
              >
                David F.<br />Leston
              </h3>
              <p
                className="font-label-lg"
                style={{ color: 'var(--color-primary)', letterSpacing: '0.2em' }}
              >
                FOUNDER & STRATEGIST
              </p>
            </div>

            {/* Credential tags */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'African Development Bank (AfDB) — Monetary Infrastructure',
                'European EBSI (Distributed Architecture) — Spain Ministry of Science',
                'Galician Roots · African Ground · Atlantic Perspective',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary)',
                      marginTop: '0.5rem',
                      flexShrink: 0,
                    }}
                  />
                  <p
                    className="font-label-sm"
                    style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — narrative */}
          <div>
            <p
              className="font-body-lg"
              style={{
                color: 'var(--color-on-surface-variant)',
                marginBottom: '1.5rem',
                lineHeight: 1.7,
              }}
            >
              David F. Leston is not an analyst who discovered Africa. He is
              someone built at the intersection of the corridor itself — Galician
              roots, operational presence across West and East Africa, and deep
              engagement with the institutional architectures that govern capital
              at the supranational level.
            </p>
            <p
              className="font-body-lg"
              style={{
                color: 'var(--color-on-surface-variant)',
                marginBottom: '1.5rem',
                lineHeight: 1.7,
              }}
            >
              His work with the African Development Bank on monetary
              infrastructure design and with Spain&apos;s Ministry of Science on
              programmable compliance systems positions him uniquely to build
              what this corridor has always needed: not another fund, but a
              sovereign financial architecture with cultural legitimacy.
            </p>
            <p
              className="font-body-lg"
              style={{
                color: 'var(--color-on-surface-variant)',
                lineHeight: 1.7,
              }}
            >
              He operates from the conviction that the Gurumbé rhythm — the
              African drum that gave birth to Flamenco in Seville — is not a
              metaphor. It is a structural proof of concept: that deep cultural
              synthesis creates durable, high-yield value. That is the thesis.
              That is the fund.
            </p>

            {/* Substack link */}
            <div style={{ marginTop: '2.5rem' }}>
              <a
                href="https://dleston.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-lg"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-primary)',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    'var(--color-parchment)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    'var(--color-primary)')
                }
              >
                READ ESSAYS & UPDATES
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Advisory board placeholder */}
        <div
          style={{
            marginTop: '5rem',
            border: '1px solid var(--color-rule-line)',
            padding: '3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p
              className="font-label-sm"
              style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}
            >
              PARTNERS & ADVISORS
            </p>
            <p
              className="font-headline-md"
              style={{ color: 'var(--color-parchment)', marginBottom: '0.75rem' }}
            >
              The Consortium
            </p>
            <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '36rem' }}>
              Legal counsel across Spain and African jurisdictions, TokenCity
              (regulated EU tokenization platform), cultural anchor Miguel Ángel
              Rosales — filmmaker of{' '}
              <em>Gurumbé: Afro-Andalusian Memories</em> — and institutional
              engagement with the African Development Bank. Formal introductions
              forthcoming.
            </p>
          </div>
          <div
            style={{
              width: '1px',
              alignSelf: 'stretch',
              backgroundColor: 'var(--color-rule-line)',
            }}
            className="divider-v"
          />
          <div style={{ flexShrink: 0 }}>
            <a href="#contact" className="btn-ghost">
              INITIATE DIALOGUE
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .who-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .divider-v { display: none !important; }
        }
      `}</style>
    </section>
  )
}
