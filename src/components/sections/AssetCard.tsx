'use client'

export type AssetStage = 'LAND' | 'CONSTRUCTION' | 'OPERATIONAL'

export interface AssetMetric {
  label: string
  value: string
  sub: string
}

export interface AssetCardProps {
  city: string
  district?: string
  country: string
  role: string
  /** Argued prose — 3-4 sentences demonstrating market knowledge */
  thesis: string
  /** Specific evidence bullets — rents, occupancy, demand drivers */
  marketDetail: string[]
  stage: AssetStage
  /** 2-3 metrics, stage-appropriate */
  metrics: AssetMetric[]
  accentColor: string
  imageUrl?: string
  imageAlt?: string
  status?: string
}

const STAGE_META: Record<AssetStage, { label: string; color: string; bg: string }> = {
  LAND: { label: 'LAND', color: '#b5651d', bg: 'rgba(181,101,29,0.15)' },
  CONSTRUCTION: { label: 'IN CONSTRUCTION', color: '#c8a84b', bg: 'rgba(200,168,75,0.15)' },
  OPERATIONAL: { label: 'OPERATIONAL', color: '#4a9e6b', bg: 'rgba(74,158,107,0.15)' },
}

function ImagePlaceholder({ city, accentColor }: { city: string; accentColor: string }) {
  const id = city.replace(/\s+/g, '-').toLowerCase()
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--color-surface-container)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 480 210"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0 }}
      >
        <defs>
          <pattern id={`grid-${id}`} width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke={accentColor} strokeWidth="0.3" opacity="0.18" />
          </pattern>
        </defs>
        <rect width="480" height="210" fill={`url(#grid-${id})`} />
        <circle cx="240" cy="240" r="90" fill="none" stroke={accentColor} strokeWidth="0.6" opacity="0.14" />
        <circle cx="240" cy="240" r="155" fill="none" stroke={accentColor} strokeWidth="0.5" opacity="0.09" />
        <circle cx="240" cy="240" r="220" fill="none" stroke={accentColor} strokeWidth="0.4" opacity="0.06" />
        <line x1="240" y1="0" x2="240" y2="210" stroke={accentColor} strokeWidth="0.4" opacity="0.18" />
        <line x1="0" y1="105" x2="480" y2="105" stroke={accentColor} strokeWidth="0.4" opacity="0.18" />
        <path d="M16 16 L16 34 M16 16 L34 16" fill="none" stroke={accentColor} strokeWidth="0.8" opacity="0.3" />
        <path d="M464 16 L464 34 M464 16 L446 16" fill="none" stroke={accentColor} strokeWidth="0.8" opacity="0.3" />
        <path d="M16 194 L16 176 M16 194 L34 194" fill="none" stroke={accentColor} strokeWidth="0.8" opacity="0.3" />
        <path d="M464 194 L464 176 M464 194 L446 194" fill="none" stroke={accentColor} strokeWidth="0.8" opacity="0.3" />
      </svg>
      <span
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '4rem',
          fontWeight: 600,
          color: accentColor,
          opacity: 0.09,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          userSelect: 'none',
          position: 'relative',
          zIndex: 1,
          whiteSpace: 'nowrap',
        }}
      >
        {city}
      </span>
      <span
        className="font-label-sm"
        style={{ position: 'absolute', bottom: '0.75rem', right: '1.25rem', color: accentColor, opacity: 0.28 }}
      >
        IMAGERY COMING
      </span>
    </div>
  )
}

export default function AssetCard({
  city,
  district,
  country,
  role,
  thesis,
  marketDetail,
  stage,
  metrics,
  accentColor,
  imageUrl,
  imageAlt,
  status = 'PHASE 1 · PIPELINE',
}: AssetCardProps) {
  const stageMeta = STAGE_META[stage]
  const hasImage = Boolean(imageUrl)

  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-outline-variant)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s, transform 0.3s',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = accentColor
        el.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--color-outline-variant)'
        el.style.transform = 'translateY(0)'
      }}
    >

      {/* ── ZONE 1: IMAGE ── */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 7', overflow: 'hidden', flexShrink: 0 }}>
        {hasImage ? (
          <>
            <img
              src={imageUrl}
              alt={imageAlt ?? `${city} — ${role}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(13,11,8,0.88) 0%, rgba(13,11,8,0.3) 55%, transparent 100%)',
              }}
            />
          </>
        ) : (
          <ImagePlaceholder city={city} accentColor={accentColor} />
        )}

        {/* Stage badge — top left */}
        <div
          style={{
            position: 'absolute', top: '1rem', left: '1rem',
            backgroundColor: stageMeta.bg, border: `1px solid ${stageMeta.color}`,
            padding: '0.22rem 0.65rem', backdropFilter: 'blur(6px)',
          }}
        >
          <span className="font-label-sm" style={{ color: stageMeta.color, fontSize: '0.62rem' }}>
            {stageMeta.label}
          </span>
        </div>

        {/* Status badge — top right */}
        <div
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            backgroundColor: 'rgba(13,11,8,0.55)', border: `1px solid ${accentColor}`,
            padding: '0.22rem 0.65rem', backdropFilter: 'blur(6px)',
          }}
        >
          <span className="font-label-sm" style={{ color: accentColor, fontSize: '0.62rem' }}>
            {status}
          </span>
        </div>

        {/* City overlay — bottom left, photo only */}
        {hasImage && (
          <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.75rem' }}>
            <p className="font-label-sm" style={{ color: accentColor, margin: 0, opacity: 0.85 }}>
              {country.toUpperCase()}
            </p>
            <h3
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '2.4rem', fontWeight: 600,
                color: 'var(--color-parchment)', lineHeight: 1, margin: 0,
              }}
            >
              {city}
            </h3>
            {district && (
              <p className="font-label-sm"
                style={{ color: 'var(--color-on-surface-variant)', margin: '0.3rem 0 0', fontStyle: 'italic', opacity: 0.75 }}>
                {district}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Accent rule */}
      <div style={{ height: '3px', backgroundColor: accentColor, flexShrink: 0 }} />

      {/* ── ZONE 2: IDENTITY ── */}
      <div style={{ padding: '1.75rem 2rem 1.25rem', borderBottom: '1px solid var(--color-rule-line)' }}>
        {/* On placeholder cards the city name lives here */}
        {!hasImage && (
          <>
            <p className="font-label-sm" style={{ color: accentColor, marginBottom: '0.4rem' }}>
              {country.toUpperCase()}
            </p>
            <h3
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '2.6rem', fontWeight: 600,
                color: 'var(--color-parchment)', lineHeight: 1, margin: '0 0 0.5rem',
              }}
            >
              {city}
            </h3>
            {district && (
              <p className="font-label-sm"
                style={{ color: 'var(--color-on-surface-variant)', fontStyle: 'italic', margin: '0 0 0.6rem' }}>
                {district}
              </p>
            )}
          </>
        )}

        {/* Role — always shown */}
        <p
          className="font-label-sm"
          style={{ color: 'var(--color-on-surface-variant)', fontStyle: 'italic', margin: 0, opacity: 0.8 }}
        >
          {hasImage && (
            <span style={{ color: accentColor, fontStyle: 'normal', marginRight: '0.4rem' }}>
              {city} ·
            </span>
          )}
          {role}
        </p>
      </div>

      {/* ── ZONE 3: ARGUMENT ── */}

      {/* Thesis — argued prose, full parchment colour, font-body-lg weight */}
      <div style={{ padding: '1.75rem 2rem 0' }}>
        <p
          className="font-body-lg"
          style={{ color: 'var(--color-parchment)', lineHeight: 1.72, margin: 0, fontSize: '1.03rem' }}
        >
          {thesis}
        </p>
      </div>

      {/* Market context — evidence for the argument above */}
      <div style={{ padding: '1.5rem 2rem 1.75rem', borderBottom: '1px solid var(--color-rule-line)' }}>
        <p
          className="font-label-sm"
          style={{ color: accentColor, opacity: 0.55, marginBottom: '0.9rem', letterSpacing: '0.18em', fontSize: '0.6rem' }}
        >
          MARKET CONTEXT
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
          {marketDetail.map((point, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem' }}>
              <span
                style={{
                  width: '4px', height: '4px', borderRadius: '50%',
                  backgroundColor: accentColor, marginTop: '0.52rem', flexShrink: 0, opacity: 0.65,
                }}
              />
              <p
                className="font-body-md"
                style={{ color: 'var(--color-on-surface-variant)', margin: 0, lineHeight: 1.55, fontSize: '0.88rem' }}
              >
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── ZONE 4: METRICS ── */}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${metrics.length}, 1fr)`, flexShrink: 0 }}>
        {metrics.map((metric, i) => (
          <div
            key={i}
            style={{
              padding: '1.5rem 1.25rem',
              borderRight: i < metrics.length - 1 ? '1px solid var(--color-rule-line)' : 'none',
              display: 'flex', flexDirection: 'column', gap: '0.3rem',
            }}
          >
            <p className="font-label-sm"
              style={{ color: 'var(--color-on-surface-variant)', opacity: 0.5, lineHeight: 1.35, fontSize: '0.6rem', letterSpacing: '0.1em', margin: 0 }}>
              {metric.label}
            </p>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '2rem', fontWeight: 600, color: accentColor, lineHeight: 1, margin: 0,
              }}
            >
              {metric.value}
            </p>
            <p className="font-label-sm"
              style={{ color: 'var(--color-on-surface-variant)', opacity: 0.38, fontSize: '0.58rem', margin: 0 }}>
              {metric.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div style={{ padding: '0.85rem 2rem', borderTop: '1px solid var(--color-rule-line)' }}>
        <p className="font-label-sm"
          style={{ color: 'var(--color-on-surface-variant)', opacity: 0.28, lineHeight: 1.5, fontSize: '0.57rem', margin: 0 }}>
          Indicative figures — market research only, not audited deal performance.
          Formal projections provided through the TokenCity onboarding process.
        </p>
      </div>

    </div>
  )
}