import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getDictionary } from '@/i18n/getDictionary'
import type { Locale } from '@/i18n/config'
import { getArticleBySlug, getAllArticles } from '@/lib/markdown'

interface PageProps {
  params: Promise<{
    lang: string
    slug: string
  }>
}

export async function generateStaticParams() {
  const articles = getAllArticles('en') // Slugs are same for both locales
  const params: Array<{ lang: string; slug: string }> = []
  
  for (const article of articles) {
    params.push({ lang: 'en', slug: article.slug })
    params.push({ lang: 'es', slug: article.slug })
  }
  
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params
  const article = getArticleBySlug(slug, lang)
  
  if (!article) {
    return {
      title: 'Not Found — Gurumbé Capital',
    }
  }

  const title = lang === 'es' ? article.metadata.title_es : article.metadata.title_en
  const description = lang === 'es' ? article.metadata.teaser_es : article.metadata.teaser_en

  return {
    title: `${title} — Gurumbé Capital`,
    description,
  }
}

const typeColors: Record<string, string> = {
  ESSAY: 'var(--color-primary)',
  'FIELD NOTE': 'var(--color-secondary)',
  CONVERSATION: 'var(--color-tertiary)',
}

export default async function ArticlePage({ params }: PageProps) {
  const { lang, slug } = await params
  const dict = await getDictionary(lang as Locale)
  const article = getArticleBySlug(slug, lang)

  if (!article) {
    notFound()
  }

  const meta = article.metadata
  const title = lang === 'es' ? meta.title_es : meta.title_en
  const subtitle = lang === 'es' ? meta.subtitle_es : meta.subtitle_en
  const readTime = lang === 'es' ? meta.readTime_es : meta.readTime_en

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--color-surface-main)' }}>
      <Navigation dict={dict.navigation} lang={lang} />

      <article style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        {/* Article Header */}
        <header
          style={{
            borderBottom: '1px solid var(--color-rule-line)',
            paddingBottom: '4rem',
            marginBottom: '4rem',
          }}
        >
          <div className="container-max" style={{ maxWidth: '48rem', margin: '0 auto' }}>
            <Link
              href={`/${lang}/thoughts`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                marginBottom: '2rem',
              }}
              className="font-label-sm"
            >
              ← {lang === 'es' ? 'VOLVER A EL PENSAMIENTO' : 'BACK TO THE THINKING'}
            </Link>

            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span
                className="font-label-sm"
                style={{
                  backgroundColor: typeColors[meta.type] || 'var(--color-primary)',
                  color: 'var(--color-surface-main)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '2px',
                  fontWeight: 600,
                }}
              >
                {meta.type}
              </span>
              <span className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.8 }}>
                {readTime}
              </span>
              <span className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.6 }}>
                {meta.date}
              </span>
            </div>

            <h1
              className="font-display"
              style={{
                color: 'var(--color-parchment)',
                fontSize: '3.5rem',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className="font-body-lg"
                style={{
                  color: 'var(--color-on-surface-variant)',
                  fontStyle: 'italic',
                  fontSize: '1.5rem',
                  lineHeight: 1.4,
                  opacity: 0.9,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </header>

        {/* Article Body */}
        <section className="container-max" style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div className="article-content font-body-lg">
            <ReactMarkdown>{article.contentHtml}</ReactMarkdown>
          </div>
        </section>
      </article>

      <Footer dict={dict.footer} lang={lang} />

      {/* Styled Markdown Elements */}
      <style>{`
        .article-content {
          color: var(--color-on-surface);
          line-height: 1.8;
          font-size: 1.15rem;
        }
        .article-content p {
          margin-bottom: 2rem;
          opacity: 0.95;
        }
        .article-content h1,
        .article-content h2,
        .article-content h3,
        .article-content h4 {
          font-family: var(--font-display), "Cormorant Garamond", serif;
          color: var(--color-parchment);
          margin-top: 3rem;
          margin-bottom: 1.25rem;
          font-weight: 600;
          line-height: 1.2;
        }
        .article-content h1 { font-size: 2.5rem; }
        .article-content h2 { font-size: 2rem; }
        .article-content h3 { font-size: 1.6rem; }
        
        .article-content ul, 
        .article-content ol {
          margin-bottom: 2rem;
          padding-left: 1.5rem;
          color: var(--color-on-surface);
        }
        .article-content li {
          margin-bottom: 0.75rem;
        }
        .article-content blockquote {
          border-left: 4px solid var(--color-primary);
          padding-left: 1.5rem;
          margin: 3rem 0;
          font-style: italic;
          color: var(--color-on-surface-variant);
        }
        .article-content img {
          max-width: 100%;
          height: auto;
          margin: 3rem 0;
          border: 1px solid var(--color-outline-variant);
        }
        .article-content a {
          color: var(--color-primary);
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: opacity 0.2s;
        }
        .article-content a:hover {
          opacity: 0.8;
        }
      `}</style>
    </main>
  )
}
