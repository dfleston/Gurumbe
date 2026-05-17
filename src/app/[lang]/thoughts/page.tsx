import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getDictionary } from '@/i18n/getDictionary'
import type { Locale } from '@/i18n/config'
import { getAllArticles } from '@/lib/markdown'
import ThoughtsGrid from '@/components/thoughts/ThoughtsGrid'

export const metadata: Metadata = {
  title: 'The Thinking — Gurumbé Capital',
  description:
    'Essays, conversations, and field notes on South-to-South capital architecture, sovereign infrastructure, and the corridor between Africa and Iberia.',
}

export default async function ThoughtsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)
  const articles = getAllArticles(lang)
  
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--color-surface-main)' }}>
      <Navigation dict={dict.navigation} lang={lang} />

      {/* Page hero */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '2.5rem',
          backgroundColor: 'var(--color-surface)',
        }}
      >
        <div className="container-max">
          <span className="section-label">{dict.thoughts.label}</span>
          <h1
            className="font-display"
            style={{ 
              color: 'var(--color-parchment)', 
              marginBottom: '1.5rem', 
              maxWidth: '40rem',
              whiteSpace: 'pre-line',
              fontSize: '3.5rem',
              lineHeight: 1.1,
            }}
          >
            {dict.thoughts.headline}
          </h1>
          <p
            className="font-body-lg"
            style={{ color: 'var(--color-on-surface-variant)', maxWidth: '32rem', lineHeight: 1.7 }}
          >
            {dict.thoughts.description}
          </p>
        </div>
      </section>

      {/* Thoughts Interactive Grid (Includes filtering tags and Dot highlighters) */}
      <ThoughtsGrid pieces={articles} lang={lang} dict={dict.thoughts} />

      <Footer dict={dict.footer} lang={lang} />

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
