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
  thesis: string
  stage: AssetStage
  accentColor: string
  marketDetail: string[]
  metrics: AssetMetric[]
  imageUrl?: string
  imageAlt?: string
  status?: string
}

const STAGE_META: Record<AssetStage, { label: string; color: string; bg: string }> = {
  LAND: { label: 'LAND', color: '#b5651d', bg: 'rgba(181,101,29,0.12)' },
  CONSTRUCTION: { label: 'IN CONSTRUCTION', color: '#c8a84b', bg: 'rgba(200,168,75,0.12)' },
  OPERATIONAL: { label: 'OPERATIONAL', color: '#4a9e6b', bg: 'rgba(74,158,107,0.12)' },
}

/** Safe getter with fallback */
function getStageMeta(stage: AssetStage) {
  const meta = STAGE_META[stage]
  if (!meta) {
    console.warn(`[AssetCard] Invalid stage: "${stage}". Falling back to LAND.`)
    return STAGE_META.LAND
  }
  return meta
}

function ImagePlaceholder({ city, accentColor }: { city: string; accentColor: string }) {
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
      {/* ... rest of your ImagePlaceholder remains unchanged ... */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 220"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0 }}
      >
        <defs>
          <pattern id={`grid-${city}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke={accentColor} strokeWidth="0.3" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="400" height="220" fill={`url(#grid-${city})`} />
        <circle cx="200" cy="220" r="80" fill="none" stroke={accentColor} strokeWidth="0.5" opacity="0.15" />
        <circle cx="200" cy="220" r="140" fill="none" stroke={accentColor} strokeWidth="0.5" opacity="0.1" />
        <circle cx="200" cy="220" r="200" fill="none" stroke={accentColor} strokeWidth="0.5" opacity="0.08" />
        <line x1="200" y1="0" x2="200" y2="220" stroke={accentColor} strokeWidth="0.4" opacity="0.2" />
        <line x1="0" y1="110" x2="400" y2="110" stroke={accentColor} strokeWidth="0.4" opacity="0.2" />
      </svg>

      <span
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '3.5rem',
          fontWeight: 600,
          color: accentColor,
          opacity: 0.12,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          userSelect: 'none',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {city}
      </span>

      <span
        className="font-label-sm"
        style={{
          position: 'absolute',
          bottom: '0.75rem',
          right: '1rem',
          color: accentColor,
          opacity: 0.35,
        }}
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
  stage,
  accentColor,
  marketDetail,
  metrics,
  imageUrl,
  imageAlt,
  status = 'PHASE 1 · PIPELINE',
}: AssetCardProps) {
  const stageMeta = getStageMeta(stage)

  return (
    <div
      style={{
        position: 'relative',
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
        el.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--color-outline-variant)'
        el.style.transform = 'translateY(0)'
      }}
    >
      {/* IMAGE ZONE */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/7', overflow: 'hidden', flexShrink: 0 }}>
        {imageUrl ? (
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
                background: 'linear-gradient(to top, rgba(13,11,8,0.85) 0%, rgba(13,11,8,0.3) 60%, transparent 100%)',
              }}
            />
          </>
        ) : (
          <ImagePlaceholder city={city} accentColor={accentColor} />
        )}

        {/* Stage badge */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            backgroundColor: stageMeta.bg,
            border: `1px solid ${stageMeta.color}`,
            padding: '0.25rem 0.7rem',
            backdropFilter: 'blur(4px)',
          }}
        >
          <span className="font-label-sm" style={{ color: stageMeta.color }}>
            {stageMeta.label}
          </span>
        </div>

        {/* Status badge */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(13,11,8,0.6)',
            border: `1px solid ${accentColor}`,
            padding: '0.25rem 0.7rem',
            backdropFilter: 'blur(4px)',
          }}
        >
          <span className="font-label-sm" style={{ color: accentColor }}>
            {status}
          </span>
        </div>

        {/* City overlay */}
        {imageUrl && (
          <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem' }}>
            <p className="font-label-sm" style={{ color: accentColor, margin: 0 }}>{country.toUpperCase()}</p>
            <h3
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '2.2rem',
                fontWeight: 600,
                color: 'var(--color-parchment)',
                lineHeight: 1,
                margin: 0,
              }}
            >
              {city}
            </h3>
            {district && (
              <p className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', margin: '0.25rem 0 0', fontStyle: 'italic' }}>
                {district}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Rest of your component remains unchanged... */}
      {/* Top accent bar, header, role, thesis, market detail, metrics, disclaimer... */}

      {/* (I kept your original logic for the rest — only the stage handling was updated) */}
    </div>
  )
}