'use client'

const phases = [
  {
    phase: 'PHASE 1 — ROOTS',
    title: 'Smart Real Estate',
    body: 'Laying the physical foundation. Tokenized African serviced and hospitality real estate. Title-backed. Smart contract architectures automate revenue-sharing and personal rights-of-use — a direct, secure invitation to discover Africa while investing in its future.',
    hubs: ['Nairobi', 'Accra', 'Windhoek', 'Luanda'],
    accentColor: 'var(--color-tertiary-container)',
    offset: false,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    phase: 'PHASE 2 — POWER',
    title: 'Decentralized Energy',
    body: "Powering the infrastructure. Development and fractional issuance of clean energy installations, distributed solar arrays, and regional microgrids. Africa's solar irradiation is a structural advantage — we convert it into investable yield.",
    hubs: ['Namibia', 'Ghana', 'Kenya'],
    accentColor: 'var(--color-secondary)',
    offset: true,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    phase: 'PHASE 3 — SCALE',
    title: 'VC Venture Building',
    body: 'Accelerating native innovation. We act as internal venture builders — co-investing alongside aligned partners, internalizing operational responsibilities, and scaling native technical talent across the corridor. We do not outsource key execution.',
    hubs: ['Kigali', 'Cape Town', 'Madrid'],
    accentColor: 'var(--color-primary)',
    offset: false,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    phase: 'PHASE 4 — LIQUIDITY',
    title: 'African Public Equities',
    body: 'Capturing mature value. Strategic capital allocations into undervalued, high-yielding public equities on regional African stock exchanges. Portfolio liquidity and pricing anchor — digital infrastructure mirrored in the legal entity.',
    hubs: ['Casablanca', 'Nairobi', 'Johannesburg'],
    accentColor: 'var(--color-outline)',
    offset: true,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function WhatWeBuild() {
  return (
    <section
      id="what-we-build"
      style={{
        backgroundColor: 'var(--color-background)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}
    >
      <div className="container-max">
        {/* Header */}
        <div style={{ marginBottom: '5rem' }}>
          <span className="section-label">LO QUE CONSTRUIMOS · WHAT WE BUILD</span>
          <h2 className="font-display" style={{ color: 'var(--color-parchment)', maxWidth: '40rem' }}>
            A Phased Roadmap of{' '}
            <em style={{ color: 'var(--color-primary)' }}>Institutional Sovereignty.</em>
          </h2>
        </div>

        {/* Staggered 2×2 grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
          }}
          className="phases-grid"
        >
          {phases.map((phase, i) => (
            <div
              key={phase.phase}
              style={{
                marginTop: phase.offset ? '6rem' : '0',
                display: 'flex',
                flexDirection: 'column',
              }}
              className={phase.offset ? 'phase-offset' : ''}
            >
              <div
                style={{
                  backgroundColor: 'var(--color-surface-container-low)',
                  borderLeft: `4px solid ${phase.accentColor}`,
                  border: '1px solid var(--color-outline-variant)',
                  borderLeftWidth: '4px',
                  borderLeftColor: phase.accentColor,
                  padding: '2.5rem',
                  flexGrow: 1,
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.transform =
                    'translateY(-4px)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.transform =
                    'translateY(0)')
                }
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '2rem',
                  }}
                >
                  <span
                    className="font-label-sm"
                    style={{ color: phase.accentColor }}
                  >
                    {phase.phase}
                  </span>
                  <span style={{ color: phase.accentColor, opacity: 0.7 }}>
                    {phase.icon}
                  </span>
                </div>

                <h3
                  className="font-headline-lg"
                  style={{ color: 'var(--color-parchment)', marginBottom: '1.25rem' }}
                >
                  {phase.title}
                </h3>

                <p
                  className="font-body-lg"
                  style={{ color: 'var(--color-on-surface-variant)', marginBottom: '3rem' }}
                >
                  {phase.body}
                </p>

                {/* Focus hubs */}
                <div style={{ marginTop: 'auto' }}>
                  <div
                    className="font-label-sm"
                    style={{
                      color: 'var(--color-on-surface-variant)',
                      borderTop: '1px solid var(--color-outline-variant)',
                      paddingTop: '1.5rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    FOCUS HUBS
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                    {phase.hubs.map((hub, j) => (
                      <span key={hub} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span
                          className="font-body-lg"
                          style={{ color: 'var(--color-parchment)' }}
                        >
                          {hub}
                        </span>
                        {j < phase.hubs.length - 1 && (
                          <span style={{ color: phase.accentColor }}>/</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote + CTA */}
        <div
          style={{
            marginTop: '5rem',
            paddingTop: '4rem',
            borderTop: '1px solid var(--color-outline-variant)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
          }}
        >
          <blockquote
            style={{
              borderLeft: '4px solid var(--color-primary)',
              paddingLeft: '2rem',
              margin: 0,
              maxWidth: '42rem',
            }}
          >
            <p
              className="font-headline-md"
              style={{ color: 'var(--color-parchment)', fontStyle: 'italic', marginBottom: '1rem' }}
            >
              &ldquo;We do not invest in geography. We invest in the inevitable sovereign architecture of the next century.&rdquo;
            </p>
            <footer className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)' }}>
              — INVESTMENT THESIS
            </footer>
          </blockquote>

          <a href="#contact" className="btn-ghost">
            SHOW INTEREST
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .phases-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .phase-offset { margin-top: 0 !important; }
        }
      `}</style>
    </section>
  )
}
