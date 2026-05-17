import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getDictionary } from '@/i18n/getDictionary'
import type { Locale } from '@/i18n/config'
import Link from 'next/link'

export default async function StructurePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)
  const pageDict = dict.structurePage

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
        </div>
      </section>

      {/* Holding Company & SPV Split Layout */}
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
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
            }}
            className="split-layout"
          >
            {/* Master Holding */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-outline-variant)',
                borderTop: '4px solid var(--color-primary)',
                padding: '3rem',
              }}
            >
              <span className="font-label-sm" style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '1rem' }}>
                SPAIN MASTER VEHICLE
              </span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '2rem', margin: '0 0 1.5rem' }}>
                {pageDict.vehicleTitle}
              </h2>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.65', margin: 0 }}>
                {pageDict.vehicleBody}
              </p>
            </div>

            {/* SPV Architecture */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-outline-variant)',
                borderTop: '4px solid var(--color-secondary)',
                padding: '3rem',
              }}
            >
              <span className="font-label-sm" style={{ color: 'var(--color-secondary)', display: 'block', marginBottom: '1rem' }}>
                LOCAL RISK ISOLATION
              </span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '2rem', margin: '0 0 1.5rem' }}>
                {pageDict.spvTitle}
              </h2>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                {pageDict.spvIntro}
              </p>
              <ul
                style={{
                  color: 'var(--color-on-surface-variant)',
                  paddingLeft: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  margin: 0,
                }}
                className="font-body-md"
              >
                <li>{pageDict.spvP1}</li>
                <li>{pageDict.spvP2}</li>
                <li>{pageDict.spvP3}</li>
                <li>{pageDict.spvP4}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Two Levels of Digital Issuance */}
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
          <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <span className="section-label">THE FRAMEWORK · EL ESQUEMA</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {pageDict.issuanceTitle}
            </h2>
            <div style={{ width: '4rem', height: '1px', backgroundColor: 'var(--color-rule-line)', margin: '1.5rem auto 0' }} />
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
            }}
            className="split-layout"
          >
            {/* Level 1: SPV direct */}
            <div
              style={{
                borderLeft: '4px solid var(--color-tertiary)',
                paddingLeft: '2rem',
              }}
            >
              <h3 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '1.75rem', marginBottom: '1rem' }}>
                {pageDict.issuanceLevel1Name}
              </h3>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.65', margin: 0 }}>
                {pageDict.issuanceLevel1Body}
              </p>
            </div>

            {/* Level 2: Holding Co portfolio */}
            <div
              style={{
                borderLeft: '4px solid var(--color-primary)',
                paddingLeft: '2rem',
              }}
            >
              <h3 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '1.75rem', marginBottom: '1rem' }}>
                {pageDict.issuanceLevel2Name}
              </h3>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.65', margin: 0 }}>
                {pageDict.issuanceLevel2Body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution & Compliance */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '8rem',
          backgroundColor: 'var(--color-surface-main)',
        }}
      >
        <div className="container-max">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
            }}
            className="split-layout"
          >
            {/* Distribution Rail */}
            <div>
              <span className="section-label">PARTNER · SOCIO</span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                {pageDict.railTitle}
              </h2>
              <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.65', margin: 0 }}>
                {pageDict.railBody}
              </p>
            </div>

            {/* Regulatory Pathway */}
            <div>
              <span className="section-label">COMPLIANCE · NORMATIVA</span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                {pageDict.pathwayTitle}
              </h2>
              <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.65', margin: 0 }}>
                {pageDict.pathwayBody}
              </p>
            </div>
          </div>

          {/* Final Call to Action */}
          <div
            style={{
              borderTop: '1px solid var(--color-rule-line)',
              paddingTop: '5rem',
              marginTop: '5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            <p className="font-body-lg" style={{ color: 'var(--color-parchment)', fontStyle: 'italic', margin: 0, maxWidth: '36rem' }}>
              Have questions about compliant allocations or operational structures?
            </p>
            <Link href={`/${lang}/contact`} className="btn-ghost" style={{ padding: '1.5rem 3rem' }}>
              Initiate Dialogue
            </Link>
          </div>
        </div>
      </section>

      <Footer dict={dict.footer} lang={lang} />

      <style>{`
        @media (max-width: 767px) {
          .split-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </main>
  )
}
