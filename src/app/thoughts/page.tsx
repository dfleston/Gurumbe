import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Thinking — Gurumbé Capital',
  description:
    'Essays, conversations, and field notes on South-to-South capital architecture, sovereign infrastructure, and the corridor between Africa and Iberia.',
}

const categories = ['All', 'Capital & Infrastructure', 'The Corridor', "Operators' Notes"]

const pieces = [
  {
    type: 'ESSAY',
    category: 'The Corridor',
    title: 'The Corridor Was Always There',
    subtitle: 'Africa, Iberia, and the Architecture of South-to-South Capital',
    teaser:
      'For centuries, the economic, cultural, and spiritual currents between Africa and Iberia built the very foundations of the Spanish South. The Gurumbé drum rhythm that gave birth to Flamenco in 16th-century Seville was not a footnote — it was a structural proof of concept.',
    readTime: '12 min read',
    date: 'Coming Soon',
    featured: true,
  },
  {
    type: 'ESSAY',
    category: 'Capital & Infrastructure',
    title: 'Tokenization as a Binary Transition',
    subtitle: 'From Unit to Unicity — Why This is Not an Upgrade',
    teaser:
      'Traditional securitization turns an asset into a passive paper share. Programmable compliance architecture turns it into an active, self-executing economic agent. That is not an improvement. It is the $0→1 transition.',
    readTime: '8 min read',
    date: 'Coming Soon',
    featured: false,
  },
  {
    type: 'FIELD NOTE',
    category: "Operators' Notes",
    title: 'On the Cost of Capital in Africa',
    subtitle: 'Perception, Architecture, and Intentional Design',
    teaser:
      'The high cost of capital in Africa is not a natural market reflection. It is a combination of risk perception bias and an intentional architectural flaw in legacy global finance. We exist to dismantle this bottleneck.',
    readTime: '6 min read',
    date: 'Coming Soon',
    featured: false,
  },
  {
    type: 'CONVERSATION',
    category: 'The Corridor',
    title: 'Gurumbé: Afro-Andalusian Memories',
    subtitle: "In Conversation with Miguel Ángel Rosales",
    teaser:
      "The filmmaker behind the documentary that traced the African origins of Flamenco explains why the story of the Gurumbé drum rhythm — silenced for centuries — is one of the most important untold stories in Western cultural history.",
    readTime: '25 min listen',
    date: 'Coming Soon',
    featured: false,
  },
]

const typeColors: Record<string, string> = {
  ESSAY: 'var(--color-primary)',
  'FIELD NOTE': 'var(--color-secondary)',
  CONVERSATION: 'var(--color-tertiary)',
}

export default function ThoughtsPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--color-surface-main)' }}>
      <Navigation />

      {/* Page hero */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '5rem',
          borderBottom: '1px solid var(--color-rule-line)',
          backgroundColor: 'var(--color-surface)',
        }}
      >
        <div className="container-max">
          <span className="section-label">EL PENSAMIENTO · THE THINKING</span>
          <h1
            className="font-display"
            style={{ color: 'var(--color-parchment)', marginBottom: '1.5rem', maxWidth: '40rem' }}
          >
            A journal of record<br />for the corridor.
          </h1>
          <p
            className="font-body-lg"
            style={{ color: 'var(--color-on-surface-variant)', maxWidth: '32rem' }}
          >
            Essays, conversations, and field notes. On the architecture of
            South-to-South capital, sovereign infrastructure, and the living
            history of the Africa–Iberia corridor.
          </p>

          {/* Category filter */}
          <div
            style={{
              display: 'flex',
              gap: '0',
              marginTop: '3rem',
              flexWrap: 'wrap',
            }}
          >
            {categories.map((cat, i) => (
              <button
                key={cat}
                className="font-label-sm"
                style={{
                  padding: '0.625rem 1.25rem',
                  background: i === 0 ? 'var(--color-primary)' : 'transparent',
                  color: i === 0 ? 'var(--color-on-primary)' : 'var(--color-on-surface-variant)',
                  border: '1px solid var(--color-outline-variant)',
                  borderLeft: i === 0 ? '1px solid var(--color-outline-variant)' : 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div className="container-max">
          {/* Featured article */}
          {pieces
            .filter((p) => p.featured)
            .map((piece) => (
              <div
                key={piece.title}
                style={{
                  backgroundColor: 'var(--color-surface-container-low)',
                  border: '1px solid var(--color-outline-variant)',
                  borderLeft: `6px solid ${typeColors[piece.type] || 'var(--color-primary)'}`,
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
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span
                      className="font-label-sm"
                      style={{
                        color: typeColors[piece.type],
                        border: `1px solid ${typeColors[piece.type]}`,
                        padding: '0.2rem 0.6rem',
                      }}
                    >
                      {piece.type} · FEATURED
                    </span>
                    <span className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)' }}>
                      {piece.readTime}
                    </span>
                  </div>
                  <h2 className="font-headline-lg" style={{ color: 'var(--color-parchment)', marginBottom: '0.5rem' }}>
                    {piece.title}
                  </h2>
                  <p
                    className="font-label-sm"
                    style={{ color: 'var(--color-on-surface-variant)', fontStyle: 'italic', marginBottom: '1.5rem' }}
                  >
                    {piece.subtitle}
                  </p>
                </div>
                <div>
                  <p
                    className="font-body-lg"
                    style={{ color: 'var(--color-on-surface-variant)', marginBottom: '2rem', lineHeight: 1.7 }}
                  >
                    {piece.teaser}
                  </p>
                  <a
                    href="#"
                    className="btn-ghost"
                    style={{ display: 'inline-block' }}
                  >
                    READ ESSAY
                  </a>
                </div>
              </div>
            ))}

          {/* Article grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
            }}
            className="articles-grid"
          >
            {pieces
              .filter((p) => !p.featured)
              .map((piece) => (
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
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <span
                      className="font-label-sm"
                      style={{ color: typeColors[piece.type] }}
                    >
                      {piece.type}
                    </span>
                    <span className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.6 }}>
                      {piece.readTime}
                    </span>
                  </div>
                  <p
                    className="font-label-sm"
                    style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}
                  >
                    {piece.category.toUpperCase()}
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
                    {piece.teaser.slice(0, 140)}...
                  </p>
                  <span
                    className="font-label-sm"
                    style={{ color: 'var(--color-primary)', marginTop: 'auto' }}
                  >
                    {piece.date}
                  </span>
                </article>
              ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 1023px) {
          .articles-grid { grid-template-columns: 1fr 1fr !important; }
          .featured-card { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 767px) {
          .articles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
