import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getDictionary } from '@/i18n/getDictionary'
import type { Locale } from '@/i18n/config'
import Link from 'next/link'

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)
  const pageDict = dict.aboutPage
  const ethosDict = dict.ethos
  const whoDict = dict.who

  const principles = [
    { title: ethosDict.principle1Title, body: ethosDict.principle1Body },
    { title: ethosDict.principle2Title, body: ethosDict.principle2Body },
    { title: ethosDict.principle3Title, body: ethosDict.principle3Body },
    { title: ethosDict.principle4Title, body: ethosDict.principle4Body },
    { title: ethosDict.principle5Title, body: ethosDict.principle5Body },
    { title: ethosDict.principle6Title, body: ethosDict.principle6Body },
    { title: ethosDict.principle7Title, body: ethosDict.principle7Body },
    { title: ethosDict.principle8Title, body: ethosDict.principle8Body },
  ]

  const partners = [
    { name: pageDict.partner1Name, desc: pageDict.partner1Desc },
    { name: pageDict.partner2Name, desc: pageDict.partner2Desc },
    { name: pageDict.partner3Name, desc: pageDict.partner3Desc },
    { name: pageDict.partner4Name, desc: pageDict.partner4Desc },
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
            {pageDict.intro}
          </p>
        </div>
      </section>

      {/* Ethos: The Eight Principles */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem',
          backgroundColor: 'var(--color-surface-main)',
        }}
      >
        <div className="container-max">
          <header style={{ marginBottom: '4rem' }}>
            <span className="section-label">COMPASS · LA BRÚJULA</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {ethosDict.headline}
            </h2>
            <div style={{ width: '4rem', height: '1px', backgroundColor: 'var(--color-rule-line)', marginTop: '1.5rem' }} />
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
            }}
            className="principles-grid"
          >
            {principles.map((pr) => {
              const isAntiCorruption = pr.title.includes('Corruption') || pr.title.includes('Corrupción')
              return (
                <article
                  key={pr.title}
                  style={{
                    borderLeft: isAntiCorruption ? '4px solid var(--color-primary)' : '4px solid var(--color-outline-variant)',
                    paddingLeft: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    backgroundColor: isAntiCorruption ? 'var(--color-surface-container-low)' : 'transparent',
                    padding: isAntiCorruption ? '1.5rem' : '0 0 0 1.75rem',
                    transition: 'border-color 0.3s',
                  }}
                >
                  <h3
                    className="font-headline-md"
                    style={{
                      color: isAntiCorruption ? 'var(--color-primary)' : 'var(--color-parchment)',
                      margin: 0,
                    }}
                  >
                    {pr.title}
                  </h3>
                  <p
                    className="font-body-md"
                    style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.6', margin: 0 }}
                  >
                    {pr.body}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
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
              gap: '5rem',
              alignItems: 'start',
            }}
            className="split-layout"
          >
            {/* Left Col — Metadata & photo stand-in */}
            <div>
              <span className="section-label">{whoDict.label}</span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem', marginBottom: '2rem' }}>
                {whoDict.headline}
              </h2>
              <div
                style={{
                  border: '1px solid var(--color-outline-variant)',
                  backgroundColor: 'var(--color-surface-container-low)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                <div>
                  <span className="font-label-sm" style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '0.25rem' }}>
                    {whoDict.role}
                  </span>
                  <span className="font-headline-md" style={{ color: 'var(--color-parchment)' }}>
                    Daniel F. Leston
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <span className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', borderLeft: '2px solid var(--color-secondary)', paddingLeft: '1rem' }}>
                    {whoDict.credential1}
                  </span>
                  <span className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', borderLeft: '2px solid var(--color-secondary)', paddingLeft: '1rem' }}>
                    {whoDict.credential2}
                  </span>
                  <span className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', borderLeft: '2px solid var(--color-secondary)', paddingLeft: '1rem' }}>
                    {whoDict.credential3}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col — Copy edits */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-on-surface-variant)' }}>
              <p className="font-body-lg" style={{ color: 'var(--color-parchment)', fontWeight: 'bold' }}>
                {whoDict.body1}
              </p>
              <p className="font-body-md">
                {whoDict.body2}
              </p>
              <p className="font-body-md">
                {whoDict.body3}
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <a
                  href="https://danielfernandezleston.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-lg"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-primary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-primary)',
                    paddingBottom: '0.25rem',
                  }}
                >
                  {whoDict.substackLink}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consortium Section */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '8rem',
          backgroundColor: 'var(--color-surface-main)',
        }}
      >
        <div className="container-max">
          <header style={{ marginBottom: '4rem' }}>
            <span className="section-label">{pageDict.consortiumLabel}</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              {whoDict.advisoryTitle}
            </h2>
            <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '36rem' }}>
              {pageDict.consortiumIntro}
            </p>
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem',
              marginBottom: '4rem',
            }}
            className="consortium-grid"
          >
            {partners.map((pt) => (
              <div
                key={pt.name}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-outline-variant)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <h3 className="font-display" style={{ color: 'var(--color-parchment)', fontSize: '1.5rem', margin: 0 }}>
                  {pt.name}
                </h3>
                <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', margin: 0, lineHeight: '1.5' }}>
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.6, marginBottom: '4rem' }}>
            {pageDict.partnersNote}
          </p>

          {/* Call to Action */}
          <div
            style={{
              borderTop: '1px solid var(--color-rule-line)',
              paddingTop: '4rem',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Link href={`/${lang}/contact`} className="btn-ghost" style={{ padding: '1.5rem 3rem' }}>
              {pageDict.cta}
            </Link>
          </div>
        </div>
      </section>

      <Footer dict={dict.footer} lang={lang} />

      <style>{`
        @media (max-width: 767px) {
          .split-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .principles-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .consortium-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .consortium-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  )
}
