import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getDictionary } from '@/i18n/getDictionary'
import type { Locale } from '@/i18n/config'
import Link from 'next/link'

export default async function InvestPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)
  const pageDict = dict.investPage

  const steps = [
    { title: pageDict.step1Title, body: pageDict.step1Body, accent: 'var(--color-primary)' },
    { title: pageDict.step2Title, body: pageDict.step2Body, accent: 'var(--color-secondary)' },
    { title: pageDict.step3Title, body: pageDict.step3Body, accent: 'var(--color-tertiary)' },
  ]

  const faqs = [
    { q: pageDict.faq1Q, a: pageDict.faq1A },
    { q: pageDict.faq2Q, a: pageDict.faq2A },
    { q: pageDict.faq3Q, a: pageDict.faq3A },
    { q: pageDict.faq4Q, a: pageDict.faq4A },
    { q: pageDict.faq5Q, a: pageDict.faq5A },
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

      {/* How It Works Step-by-Step */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem',
          backgroundColor: 'var(--color-surface-main)',
        }}
      >
        <div className="container-max">
          <header style={{ marginBottom: '4rem' }}>
            <span className="section-label">PROCESS · EL PROCESO</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {pageDict.howItWorksTitle}
            </h2>
            <div style={{ width: '4rem', height: '1px', backgroundColor: 'var(--color-rule-line)', marginTop: '1.5rem' }} />
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2.5rem',
            }}
            className="steps-grid"
          >
            {steps.map((step, i) => (
              <div
                key={step.title}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-outline-variant)',
                  borderTop: `4px solid ${step.accent}`,
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <span className="font-label-lg" style={{ color: step.accent }}>
                  0{i + 1}
                </span>
                <h3 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '1.75rem', margin: 0 }}>
                  {step.title}
                </h3>
                <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.6', margin: 0 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulated Pipeline Details */}
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
              alignItems: 'center',
            }}
            className="split-layout"
          >
            <div>
              <span className="section-label">THE PIPELINE · EL FLUJO</span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem', marginBottom: '2rem' }}>
                {pageDict.pipelineTitle}
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p
                className="font-body-lg"
                style={{
                  color: 'var(--color-on-surface-variant)',
                  borderLeft: '4px solid var(--color-secondary)',
                  paddingLeft: '1.5rem',
                  margin: 0,
                }}
              >
                {pageDict.pipelineDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '8rem',
          backgroundColor: 'var(--color-surface-main)',
        }}
      >
        <div className="container-max">
          <header style={{ marginBottom: '4rem' }}>
            <span className="section-label">FAQ · PREGUNTAS FRECUENTES</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {pageDict.faqTitle}
            </h2>
            <div style={{ width: '4rem', height: '1px', backgroundColor: 'var(--color-rule-line)', marginTop: '1.5rem' }} />
          </header>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              maxWidth: '48rem',
              margin: '0 auto',
            }}
          >
            {faqs.map((faq) => (
              <div
                key={faq.q}
                style={{
                  borderBottom: '1px solid var(--color-rule-line)',
                  paddingBottom: '2.5rem',
                }}
              >
                <h3
                  className="font-display"
                  style={{
                    color: 'var(--color-parchment)',
                    fontSize: '1.75rem',
                    marginBottom: '1rem',
                    lineHeight: '1.3',
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  className="font-body-md"
                  style={{
                    color: 'var(--color-on-surface-variant)',
                    lineHeight: '1.65',
                    margin: 0,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div style={{ textAlign: 'center', marginTop: '6rem' }}>
            <Link
              href={`/${lang}/contact`}
              className="btn-ghost"
              style={{ padding: '1.5rem 4rem' }}
            >
              {pageDict.cta}
            </Link>
          </div>
        </div>
      </section>

      <Footer dict={dict.footer} lang={lang} />

      <style>{`
        @media (max-width: 767px) {
          .split-layout { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
