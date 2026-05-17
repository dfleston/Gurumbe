import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getDictionary } from '@/i18n/getDictionary'
import type { Locale } from '@/i18n/config'
import Link from 'next/link'

export default async function AfricaPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)
  const pageDict = dict.africaPage

  const pillars = [
    { title: pageDict.pillar1Title, body: pageDict.pillar1Body },
    { title: pageDict.pillar2Title, body: pageDict.pillar2Body },
    { title: pageDict.pillar3Title, body: pageDict.pillar3Body },
    { title: pageDict.pillar4Title, body: pageDict.pillar4Body },
    { title: pageDict.pillar5Title, body: pageDict.pillar5Body },
    { title: pageDict.pillar6Title, body: pageDict.pillar6Body },
    { title: pageDict.pillar7Title, body: pageDict.pillar7Body },
    { title: pageDict.pillar8Title, body: pageDict.pillar8Body },
  ]

  return (
    <main className="min-h-screen bg-surface-main">
      <Navigation dict={dict.navigation} lang={lang} />
      
      {/* Hero Header */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '6rem',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-rule-line)',
        }}
      >
        <div className="container-max" style={{ position: 'relative', zIndex: 10 }}>
          <span className="section-label">{pageDict.label}</span>
          <h1
            className="font-display animate-fade-up"
            style={{
              color: 'var(--color-parchment)',
              fontSize: '3.5rem',
              lineHeight: '1.15',
              marginTop: '1.5rem',
              marginBottom: '2rem',
              maxWidth: '48rem',
            }}
          >
            {pageDict.headline}
          </h1>
          <p
            className="font-body-lg"
            style={{
              color: 'var(--color-on-surface-variant)',
              maxWidth: '40rem',
              lineHeight: '1.7',
              borderLeft: '2px solid var(--color-primary)',
              paddingLeft: '1.5rem',
            }}
          >
            {pageDict.subhead}
          </p>
        </div>
      </section>

      {/* The 8 Pillars Grid */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem',
          backgroundColor: 'var(--color-surface-main)',
        }}
      >
        <div className="container-max">
          <header style={{ marginBottom: '4rem' }}>
            <span className="section-label">THE PILLARS · LOS PILARES</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {pageDict.pillarsHeadline}
            </h2>
            <div style={{ width: '4rem', height: '1px', backgroundColor: 'var(--color-rule-line)', marginTop: '1.5rem' }} />
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
            }}
            className="pillars-grid"
          >
            {pillars.map((pillar, i) => (
              <article
                key={pillar.title}
                style={{
                  borderLeft: '4px solid var(--color-secondary)',
                  paddingLeft: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <h3
                  className="font-headline-md"
                  style={{ color: 'var(--color-parchment)', margin: 0 }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="font-body-md"
                  style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.6', margin: 0 }}
                >
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Markets & Rationale */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '8rem',
          backgroundColor: 'var(--color-surface)',
          borderTop: '1px solid var(--color-rule-line)',
          position: 'relative',
        }}
      >
        <div className="container-max">
          <header style={{ marginBottom: '4rem' }}>
            <span className="section-label">MARKETS · MERCADOS</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {pageDict.marketsHeadline}
            </h2>
            <div style={{ width: '4rem', height: '1px', backgroundColor: 'var(--color-rule-line)', marginTop: '1.5rem' }} />
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              marginBottom: '4rem',
            }}
            className="markets-grid"
          >
            <div
              style={{
                backgroundColor: 'var(--color-surface-container-low)',
                border: '1px solid var(--color-outline-variant)',
                padding: '2.5rem',
              }}
            >
              <h3 className="font-display" style={{ color: 'var(--color-parchment)', marginBottom: '1rem' }}>Madrid</h3>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', margin: 0 }}>
                {pageDict.madridRationale}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface-container-low)',
                border: '1px solid var(--color-outline-variant)',
                padding: '2.5rem',
              }}
            >
              <h3 className="font-display" style={{ color: 'var(--color-parchment)', marginBottom: '1rem' }}>Nairobi</h3>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', margin: 0 }}>
                {pageDict.nairobiRationale}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface-container-low)',
                border: '1px solid var(--color-outline-variant)',
                padding: '2.5rem',
              }}
            >
              <h3 className="font-display" style={{ color: 'var(--color-parchment)', marginBottom: '1rem' }}>Accra</h3>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', margin: 0 }}>
                {pageDict.accraRationale}
              </p>
            </div>
          </div>

          {/* Footer Callout */}
          <div
            style={{
              borderTop: '1px solid var(--color-rule-line)',
              paddingTop: '4rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            <p className="font-body-lg" style={{ color: 'var(--color-parchment)', fontStyle: 'italic', margin: 0, maxWidth: '36rem' }}>
              {pageDict.nextPhaseMarkets}
            </p>
            <Link
              href={`/${lang}/contact`}
              className="btn-ghost"
            >
              {pageDict.cta}
            </Link>
          </div>
        </div>
      </section>

      <Footer dict={dict.footer} lang={lang} />

      <style>{`
        @media (max-width: 767px) {
          .pillars-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .markets-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
