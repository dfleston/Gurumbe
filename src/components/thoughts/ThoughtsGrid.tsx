'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArticlePreview } from '@/lib/markdown'

interface ThoughtsGridProps {
  pieces: ArticlePreview[]
  lang: string
  dict: any
}

const typeColors: Record<string, string> = {
  ESSAY: 'var(--color-primary)', // Terracotta / Gold
  'FIELD NOTE': 'var(--color-secondary)', // Green / Verde (underlay/indicator only)
  CONVERSATION: 'var(--color-tertiary)', // Bronze / Ochre
}

export default function ThoughtsGrid({ pieces, lang, dict }: ThoughtsGridProps) {
  const [activeCategory, setActiveCategory] = useState('All')

  // Categories include 'Technology'
  const categories = [
    lang === 'es' ? 'Todos' : 'All',
    'Capital & Infrastructure',
    'The Corridor',
    "Operators' Notes",
    'Technology',
  ]

  // Helper to map UI selected category to article categories
  const filteredPieces = pieces.filter((piece) => {
    if (activeCategory === 'All' || activeCategory === 'Todos') return true
    return piece.category.toLowerCase() === activeCategory.toLowerCase()
  })

  // Get featured article (if any is featured in the filtered set, or overall)
  const featuredPiece = filteredPieces.find((p) => p.featured) || filteredPieces[0]
  const remainingPieces = filteredPieces.filter((p) => p.slug !== (featuredPiece?.slug || ''))

  return (
    <div>
      {/* Category Filter */}
      <section
        style={{
          borderBottom: '1px solid var(--color-rule-line)',
          backgroundColor: 'var(--color-surface)',
          paddingBottom: '2.5rem',
          paddingTop: '1rem',
        }}
      >
        <div className="container-max">
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory.toLowerCase() === cat.toLowerCase()
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="font-label-sm"
                  style={{
                    padding: '0.625rem 1.25rem',
                    background: isActive ? 'var(--color-primary)' : 'transparent',
                    color: isActive ? 'var(--color-surface-main)' : 'var(--color-on-surface-variant)',
                    border: '1px solid var(--color-outline-variant)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    borderRadius: '2px',
                  }}
                >
                  {cat.toUpperCase()}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div className="container-max">
          {filteredPieces.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-on-surface-variant)' }}>
              <p className="font-body-lg">
                {lang === 'es' ? 'No se encontraron artículos en esta categoría.' : 'No articles found in this category.'}
              </p>
            </div>
          ) : (
            <>
              {/* Featured article */}
              {featuredPiece && (
                <div
                  style={{
                    backgroundColor: 'var(--color-surface-container-low)',
                    border: '1px solid var(--color-outline-variant)',
                    borderLeft: `6px solid ${typeColors[featuredPiece.type] || 'var(--color-primary)'}`,
                    padding: '3rem',
                    marginBottom: '4rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    alignItems: 'center',
                  }}
                  className="featured-card"
                >
                  <div>
                    <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <span
                        className="font-label-sm"
                        style={{
                          backgroundColor: typeColors[featuredPiece.type] || 'var(--color-primary)',
                          color: 'var(--color-surface-main)',
                          padding: '0.3rem 0.75rem',
                          borderRadius: '2px',
                          fontWeight: 600,
                        }}
                      >
                        {featuredPiece.type} · {lang === 'es' ? 'DESTACADO' : 'FEATURED'}
                      </span>
                      <span className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.8 }}>
                        {featuredPiece.readTime}
                      </span>
                    </div>
                    <h2 className="font-headline-lg" style={{ color: 'var(--color-parchment)', marginBottom: '0.5rem' }}>
                      {featuredPiece.title}
                    </h2>
                    <p
                      className="font-label-sm"
                      style={{ color: 'var(--color-on-surface-variant)', fontStyle: 'italic', marginBottom: '1.5rem' }}
                    >
                      {featuredPiece.subtitle}
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-body-lg"
                      style={{ color: 'var(--color-on-surface-variant)', marginBottom: '2rem', lineHeight: 1.7 }}
                    >
                      {featuredPiece.teaser}
                    </p>
                    <Link
                      href={`/${lang}/thoughts/${featuredPiece.slug}`}
                      className="btn-ghost"
                      style={{ display: 'inline-block' }}
                    >
                      {dict.readAction}
                    </Link>
                  </div>
                </div>
              )}

              {/* Remaining Articles Grid */}
              {remainingPieces.length > 0 && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2rem',
                  }}
                  className="articles-grid"
                >
                  {remainingPieces.map((piece) => (
                    <article
                      key={piece.title}
                      className="article-card"
                      style={{
                        backgroundColor: 'var(--color-surface-container-low)',
                        border: '1px solid var(--color-outline-variant)',
                        borderTop: `4px solid ${typeColors[piece.type] || 'var(--color-primary)'}`,
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        {/* Type indicator with colored Dot (highly legible text) */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span
                            style={{
                              display: 'inline-block',
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: typeColors[piece.type] || 'var(--color-primary)',
                            }}
                          />
                          <span
                            className="font-label-sm"
                            style={{ color: 'var(--color-on-surface-variant)', fontWeight: 600 }}
                          >
                            {piece.type}
                          </span>
                        </div>
                        <span className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.6 }}>
                          {piece.readTime}
                        </span>
                      </div>
                      <p
                        className="font-label-sm"
                        style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}
                      >
                        {piece.category}
                      </p>
                      <h3
                        className="font-headline-md"
                        style={{ color: 'var(--color-parchment)', marginBottom: '0.5rem', fontSize: '1.4rem' }}
                      >
                        {piece.title}
                      </h3>
                      <p
                        className="font-label-sm"
                        style={{ color: 'var(--color-on-surface-variant)', fontStyle: 'italic', marginBottom: '1rem' }}
                      >
                        {piece.subtitle}
                      </p>
                      <p
                        className="font-body-md"
                        style={{ color: 'var(--color-on-surface-variant)', flexGrow: 1, marginBottom: '1.5rem' }}
                      >
                        {piece.teaser}
                      </p>
                      <Link
                        href={`/${lang}/thoughts/${piece.slug}`}
                        style={{
                          marginTop: 'auto',
                          display: 'inline-block',
                          color: 'var(--color-primary)',
                          textDecoration: 'none',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          letterSpacing: '0.05em',
                        }}
                        className="article-link"
                      >
                        {dict.readAction.toUpperCase()} →
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
