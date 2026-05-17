import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getDictionary } from '@/i18n/getDictionary'
import type { Locale } from '@/i18n/config'
import Link from 'next/link'

export default async function BridgePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)
  const pageDict = dict.bridgePage

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

      {/* Why Spain Section */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem',
          backgroundColor: 'var(--color-surface-main)',
        }}
      >
        <div className="container-max">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '5fr 7fr',
              gap: '4rem',
              alignItems: 'start',
            }}
            className="split-layout"
          >
            <div>
              <span className="section-label">THE GATEWAY · EL PORTAL</span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem', marginBottom: '2rem' }}>
                {pageDict.whySpainTitle}
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-on-surface-variant)' }}>
              <p className="font-body-lg" style={{ color: 'var(--color-parchment)', fontWeight: 'bold' }}>
                {pageDict.whySpainBody1}
              </p>
              <blockquote
                className="font-display"
                style={{
                  fontSize: '2rem',
                  lineHeight: '1.25',
                  color: 'var(--color-primary)',
                  fontStyle: 'italic',
                  margin: '1rem 0',
                  borderLeft: '4px solid var(--color-primary)',
                  paddingLeft: '1.5rem',
                }}
              >
                {pageDict.whySpainBody2}
              </blockquote>
              <p className="font-body-md">
                {pageDict.whySpainBody3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gurumbé & Cultural Roots */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem',
          backgroundColor: 'var(--color-surface)',
          borderTop: '1px solid var(--color-rule-line)',
          borderBottom: '1px solid var(--color-rule-line)',
        }}
      >
        <div className="container-max">
          <header style={{ marginBottom: '5rem' }}>
            <span className="section-label">CULTURE & COMPOUNDING · ALMA Y RITMO</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {pageDict.whyGurumbeTitle}
            </h2>
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              marginBottom: '5rem',
            }}
            className="cultural-grid"
          >
            {/* Duende */}
            <article style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span className="font-label-sm" style={{ color: 'var(--color-primary)' }}>DUENDE & FIESTA</span>
              <h3 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '2rem', margin: 0 }}>
                {pageDict.duendeTitle}
              </h3>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.6', margin: 0 }}>
                {pageDict.duendeBody1}
              </p>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.6', margin: 0 }}>
                {pageDict.duendeBody2}
              </p>
            </article>

            {/* Flamenco */}
            <article style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span className="font-label-sm" style={{ color: 'var(--color-secondary)' }}>THE CONFLUENCE</span>
              <h3 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '2rem', margin: 0 }}>
                {pageDict.flamencoTitle}
              </h3>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.6', margin: 0 }}>
                {pageDict.flamencoBody1}
              </p>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.6', margin: 0 }}>
                {pageDict.flamencoBody2}
              </p>
            </article>

            {/* Bantu */}
            <article style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span className="font-label-sm" style={{ color: 'var(--color-tertiary)' }}>THE ROOT</span>
              <h3 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '2rem', margin: 0 }}>
                {pageDict.bantuTitle}
              </h3>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.6', margin: 0 }}>
                {pageDict.bantuBody}
              </p>
            </article>

            {/* Documentary link */}
            <article
              style={{
                backgroundColor: 'var(--color-surface-container-low)',
                border: '1px solid var(--color-outline-variant)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <span className="font-label-sm" style={{ color: 'var(--color-primary)' }}>CINEMATIC ANCHOR</span>
              <h3 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '1.75rem', margin: 0 }}>
                {pageDict.documentaryTitle}
              </h3>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.6', margin: 0 }}>
                {pageDict.documentaryBody}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Adinkra Operating System */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem',
          backgroundColor: 'var(--color-surface-main)',
        }}
      >
        <div className="container-max">
          <header style={{ marginBottom: '4rem' }}>
            <span className="section-label">ADINKRA · EL SISTEMA OPERATIVO</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {pageDict.adinkraTitle}
            </h2>
            <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', marginTop: '1.5rem', maxWidth: '36rem' }}>
              {pageDict.adinkraBody}
            </p>
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2.5rem',
              marginBottom: '4rem',
            }}
            className="adinkra-grid"
          >
            {/* Sankofa */}
            <div
              style={{
                border: '1px solid var(--color-outline-variant)',
                backgroundColor: 'var(--color-surface-container)',
                padding: '2.5rem',
                display: 'flex',
                gap: '2rem',
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  color: 'var(--color-primary)',
                  fontWeight: 'bold',
                  lineHeight: '1',
                }}
              >
                𓅓
              </div>
              <div>
                <h3 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '1.75rem', margin: '0 0 0.5rem' }}>
                  {pageDict.sankofaName}
                </h3>
                <p className="font-label-sm" style={{ color: 'var(--color-primary)', fontStyle: 'italic', marginBottom: '1rem' }}>
                  {pageDict.sankofaDesc1}
                </p>
                <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', margin: 0 }}>
                  {pageDict.sankofaDesc2}
                </p>
              </div>
            </div>

            {/* Nyame */}
            <div
              style={{
                border: '1px solid var(--color-outline-variant)',
                backgroundColor: 'var(--color-surface-container)',
                padding: '2.5rem',
                display: 'flex',
                gap: '2rem',
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  color: 'var(--color-secondary)',
                  fontWeight: 'bold',
                  lineHeight: '1',
                }}
              >
                ❂
              </div>
              <div>
                <h3 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '1.75rem', margin: '0 0 0.5rem' }}>
                  {pageDict.nyameName}
                </h3>
                <p className="font-label-sm" style={{ color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '1rem' }}>
                  {pageDict.nyameDesc1}
                </p>
                <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', margin: 0 }}>
                  {pageDict.nyameDesc2}
                </p>
              </div>
            </div>
          </div>

          <p className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.6, textAlign: 'center' }}>
            {pageDict.adinkraEnd}
          </p>
        </div>
      </section>

      {/* Atlantic and CTA */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '8rem',
          backgroundColor: 'var(--color-surface)',
          borderTop: '1px solid var(--color-rule-line)',
        }}
      >
        <div className="container-max">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="split-layout"
          >
            <div>
              <span className="section-label">THE SPANISH WORLD · DIMENSIÓN HISPANA</span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                {pageDict.atlanticTitle}
              </h2>
              <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', margin: 0 }}>
                {pageDict.atlanticBody}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link href={`/${lang}/contact`} className="btn-ghost" style={{ padding: '1.5rem 3rem' }}>
                {pageDict.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={dict.footer} lang={lang} />

      <style>{`
        @media (max-width: 767px) {
          .split-layout { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .cultural-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .adinkra-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
