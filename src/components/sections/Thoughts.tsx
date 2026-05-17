'use client'

import Link from 'next/link'

type ThoughtsProps = {
  dict: any
  lang: string
}

export default function Thoughts({ dict, lang }: ThoughtsProps) {
  const featuredPieces = [
    {
      type: dict.piece1Type,
      title: dict.piece1Title,
      subtitle: dict.piece1Subtitle,
      teaser: dict.piece1Teaser,
      readTime: dict.piece1ReadTime,
      category: dict.piece1Category,
      slug: 'the-corridor-was-always-there',
    },
    {
      type: dict.piece2Type,
      title: dict.piece2Title,
      subtitle: dict.piece2Subtitle,
      teaser: dict.piece2Teaser,
      readTime: dict.piece2ReadTime,
      category: dict.piece2Category,
      slug: 'tokenization-as-a-binary-transition',
    },
    {
      type: dict.piece3Type || 'MONETARY ARCHITECTURE',
      title: dict.piece3Title || 'The African Unit of Account — A Perspective',
      subtitle: dict.piece3Subtitle || 'A Proposal for Supranational Settlement and Sovereign Backing',
      teaser: dict.piece3Teaser || 'In early 2026, we presented a framework for expanding the African Unit of Account (AUA) to a director at the African Development Bank (AfDB). By backing a digital unit with direct mineral endowments, we can resolve the architectural flaw in the cost of capital.',
      readTime: dict.piece3ReadTime || '10 min read',
      category: dict.piece3Category || 'Monetary Architecture',
      slug: 'the-african-unit-of-account-a-perspective',
    },
  ]

  return (
    <section
      id="thoughts"
      style={{
        backgroundColor: 'var(--color-background)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderTop: '1px solid var(--color-rule-line)',
      }}
    >
      <div className="container-max">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <span className="section-label">{dict.label}</span>
            <h2 className="font-headline-lg" style={{ color: 'var(--color-parchment)', whiteSpace: 'pre-line' }}>
              {dict.headline}
            </h2>
          </div>

          <Link
            href={`/${lang}/thoughts`}
            className="font-label-lg"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--color-primary)',
              textDecoration: 'none',
              transition: 'color 0.3s',
              flexShrink: 0,
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
            {dict.viewAll}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* 3-card grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="thoughts-grid"
        >
          {featuredPieces.map((piece) => (
            <Link
              key={piece.title}
              href={`/${lang}/thoughts/${piece.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <article
                style={{
                  backgroundColor: 'var(--color-surface-container-low)',
                  border: '1px solid var(--color-outline-variant)',
                  padding: '2.5rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, border-color 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-4px)'
                  el.style.borderColor = 'rgba(200, 132, 29, 0.4)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.borderColor = 'var(--color-outline-variant)'
                }}
              >
                {/* Meta row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '2rem',
                  }}
                >
                  <span
                    className="font-label-sm"
                    style={{
                      color: 'var(--color-primary)',
                      border: '1px solid var(--color-rule-line)',
                      padding: '0.25rem 0.75rem',
                    }}
                  >
                    {piece.type}
                  </span>
                  <span
                    className="font-label-sm"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {piece.readTime}
                  </span>
                </div>

                {/* Category */}
                <p
                  className="font-label-sm"
                  style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}
                >
                  {piece.category.toUpperCase()}
                </p>

                {/* Title */}
                <h3
                  className="font-headline-md"
                  style={{
                    color: 'var(--color-parchment)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.25,
                  }}
                >
                  {piece.title}
                </h3>

                <p
                  className="font-label-sm"
                  style={{
                    color: 'var(--color-on-surface-variant)',
                    marginBottom: '1.5rem',
                    fontStyle: 'italic',
                  }}
                >
                  {piece.subtitle}
                </p>

                {/* Teaser */}
                <p
                  className="font-body-md"
                  style={{
                    color: 'var(--color-on-surface-variant)',
                    flexGrow: 1,
                    marginBottom: '2rem',
                  }}
                >
                  {piece.teaser}
                </p>

                {/* Read link */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginTop: 'auto',
                  }}
                >
                  <span
                    className="font-label-sm"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {dict.readAction}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                  >
                    <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .thoughts-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
