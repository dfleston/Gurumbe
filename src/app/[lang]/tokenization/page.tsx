import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getDictionary } from '@/i18n/getDictionary'
import type { Locale } from '@/i18n/config'
import Link from 'next/link'

export default async function TokenizationPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)
  const pageDict = dict.tokenizationPage

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

      {/* The Problem of Digital Abundance */}
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
              <span className="section-label">THE CONSTRAINT · LA RESTRICCIÓN</span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem', marginBottom: '2rem' }}>
                {pageDict.abundanceTitle}
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-on-surface-variant)' }}>
              <p className="font-body-lg" style={{ color: 'var(--color-parchment)', fontWeight: 'bold' }}>
                {pageDict.abundanceBody1}
              </p>
              <p className="font-body-md">
                {pageDict.abundanceBody2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cryptographic Unicity & Mechanisms */}
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="split-layout"
          >
            {/* Left — content */}
            <div>
              <span className="section-label">{pageDict.mechanismLabel}</span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '2rem' }}>
                {pageDict.mechanismTitle}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--color-on-surface-variant)' }}>
                <p className="font-body-md">{pageDict.mechanismBody1}</p>
                <p className="font-body-md">{pageDict.mechanismBody2}</p>
                <p className="font-body-md">{pageDict.mechanismBody3}</p>
              </div>
            </div>

            {/* Right — comparison visual schema */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div
                style={{
                  border: '1px solid var(--color-outline-variant)',
                  backgroundColor: 'var(--color-surface-container-low)',
                  padding: '2.5rem',
                }}
              >
                <span className="font-label-sm" style={{ color: 'var(--color-secondary)', display: 'block', marginBottom: '0.75rem' }}>
                  {pageDict.web2Label}
                </span>
                <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', margin: 0 }}>
                  {pageDict.web2Body}
                </p>
              </div>

              <div
                style={{
                  border: '1px solid var(--color-primary)',
                  backgroundColor: 'var(--color-surface-container)',
                  padding: '2.5rem',
                }}
              >
                <span className="font-label-sm" style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem' }}>
                  {pageDict.web3Label}
                </span>
                <p className="font-body-md" style={{ color: 'var(--color-parchment)', margin: 0 }}>
                  {pageDict.web3Body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Properties This Unlocks */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem',
          backgroundColor: 'var(--color-surface-main)',
        }}
      >
        <div className="container-max">
          <header style={{ marginBottom: '4rem' }}>
            <span className="section-label">{pageDict.propertiesLabel}</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {pageDict.propertiesHeadline}
            </h2>
            <div style={{ width: '4rem', height: '1px', backgroundColor: 'var(--color-rule-line)', marginTop: '1.5rem' }} />
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
            }}
            className="properties-grid"
          >
            {/* Composability */}
            <article style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.75rem' }}>
              <h3 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                {pageDict.composabilityTitle}
              </h3>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.6', margin: 0 }}>
                {pageDict.composabilityBody}
              </p>
            </article>

            {/* Finality */}
            <article style={{ borderLeft: '4px solid var(--color-secondary)', paddingLeft: '1.75rem' }}>
              <h3 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                {pageDict.finalityTitle}
              </h3>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.6', margin: 0 }}>
                {pageDict.finalityBody}
              </p>
            </article>

            {/* Fractionalization */}
            <article style={{ borderLeft: '4px solid var(--color-tertiary)', paddingLeft: '1.75rem' }}>
              <h3 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                {pageDict.fractionalizationTitle}
              </h3>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.6', margin: 0 }}>
                {pageDict.fractionalizationBody}
              </p>
            </article>

            {/* Programmability */}
            <article style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.75rem' }}>
              <h3 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                {pageDict.programmabilityTitle}
              </h3>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.6', margin: 0 }}>
                {pageDict.programmabilityBody}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Beyond Securitization */}
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
              <span className="section-label">THE EVOLUTION · LA EVOLUCIÓN</span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem', marginBottom: '2rem' }}>
                {pageDict.beyondTitle}
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-on-surface-variant)' }}>
              <p className="font-body-lg" style={{ color: 'var(--color-parchment)', fontWeight: 'bold' }}>
                {pageDict.beyondBody1}
              </p>
              <p className="font-body-md">
                {pageDict.beyondBody2}
              </p>
              <p className="font-body-md">
                {pageDict.beyondBody3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Africa Why Now & AUA Perspective */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '8rem',
          backgroundColor: 'var(--color-surface-main)',
        }}
      >
        <div className="container-max">
          <header style={{ marginBottom: '5rem' }}>
            <span className="section-label">REAL OPPORTUNITY · OPORTUNIDAD REAL</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {pageDict.whyAfricaTitle}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem', color: 'var(--color-on-surface-variant)', maxWidth: '42rem' }}>
              <p className="font-body-lg" style={{ color: 'var(--color-parchment)' }}>
                {pageDict.whyAfricaBody1}
              </p>
              <p className="font-body-md">
                {pageDict.whyAfricaBody2}
              </p>
              <p className="font-body-md">
                {pageDict.whyAfricaBody3}
              </p>
            </div>
          </header>

          {/* Institutional Rails Box */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-outline-variant)',
              padding: '3rem',
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              marginBottom: '5rem',
            }}
            className="split-layout"
          >
            <div>
              <h3 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '2rem', marginBottom: '1rem' }}>
                {pageDict.infraTitle}
              </h3>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', margin: 0 }}>
                {pageDict.infraBody}
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link href={`/${lang}/thoughts/the-african-unit-of-account-a-perspective`} className="btn-ghost">
                {pageDict.infraLink}
              </Link>
            </div>
          </div>

          {/* Legal / Corporate Connection Callout */}
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
              {pageDict.structureHeadline}
            </p>
            <Link
              href={`/${lang}/structure`}
              className="btn-ghost"
            >
              {pageDict.structureLink}
            </Link>
          </div>
        </div>
      </section>

      <Footer dict={dict.footer} lang={lang} />

      <style>{`
        @media (max-width: 767px) {
          .split-layout { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .properties-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </main>
  )
}
