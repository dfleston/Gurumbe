'use client'

export interface AssetCardProps {
  city: string
  country: string
  role: string
  thesis: string
  yieldRange: string
  appreciation: string
  rightOfUse: string
  accentColor: string
  marketDetail: string[]
  status?: string
}

export default function AssetCard({
  city,
  country,
  role,
  thesis,
  yieldRange,
  appreciation,
  rightOfUse,
  accentColor,
  marketDetail,
  status = 'PHASE 1 · ACTIVE',
}: AssetCardProps) {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-outline-variant)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: '4px', backgroundColor: accentColor, width: '100%' }} />

      {/* Header */}
      <div
        style={{
          padding: '2.5rem 2.5rem 2rem',
          borderBottom: '1px solid var(--color-rule-line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '1rem',
        }}
      >
        <div>
          <p className="font-label-sm" style={{ color: accentColor, marginBottom: '0.5rem' }}>
            {country.toUpperCase()}
          </p>
          <h3
            className="font-display"
            style={{ color: 'var(--color-parchment)', fontSize: '3rem', lineHeight: 1, margin: 0 }}
          >
            {city}
          </h3>
          <p
            className="font-label-sm"
            style={{ color: 'var(--color-on-surface-variant)', marginTop: '0.5rem', fontStyle: 'italic' }}
          >
            {role}
          </p>
        </div>

        {/* Status badge */}
        <div
          style={{
            border: `1px solid ${accentColor}`,
            padding: '0.35rem 0.85rem',
            flexShrink: 0,
          }}
        >
          <span className="font-label-sm" style={{ color: accentColor }}>
            {status}
          </span>
        </div>
      </div>

      {/* Thesis */}
      <div style={{ padding: '2rem 2.5rem', borderBottom: '1px solid var(--color-rule-line)' }}>
        <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6, margin: 0 }}>
          {thesis}
        </p>
      </div>

      {/* Market detail bullets */}
      <div style={{ padding: '1.75rem 2.5rem', borderBottom: '1px solid var(--color-rule-line)' }}>
        <p className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', marginBottom: '1rem' }}>
          MARKET CONTEXT
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {marketDetail.map((point, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: accentColor,
                  marginTop: '0.55rem',
                  flexShrink: 0,
                }}
              />
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', margin: 0, lineHeight: 1.5 }}>
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Return metrics — the big visual part */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          borderBottom: '1px solid var(--color-rule-line)',
        }}
      >
        {[
          { label: 'GROSS RENTAL YIELD', value: yieldRange, sub: 'per annum' },
          { label: '5-YR APPRECIATION', value: appreciation, sub: 'per annum' },
          { label: 'RIGHT-OF-USE', value: rightOfUse, sub: 'per token tranche / year' },
        ].map((metric, i) => (
          <div
            key={i}
            style={{
              padding: '2rem 1.5rem',
              borderRight: i < 2 ? '1px solid var(--color-rule-line)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <p className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.7 }}>
              {metric.label}
            </p>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '2.2rem',
                fontWeight: 600,
                color: accentColor,
                lineHeight: 1,
                margin: 0,
              }}
            >
              {metric.value}
            </p>
            <p className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.5 }}>
              {metric.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div style={{ padding: '1.25rem 2.5rem' }}>
        <p className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.45, lineHeight: 1.5 }}>
          Indicative figures based on market research. Not audited deal performance. Formal projections
          provided through TokenCity onboarding documentation.
        </p>
      </div>
    </div>
  )
}
