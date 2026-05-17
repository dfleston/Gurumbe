import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'src/content/thoughts')

export interface ArticleMetadata {
  slug: string
  featured: boolean
  type: string
  category: string
  date: string
  readTime_en: string
  readTime_es: string
  title_en: string
  title_es: string
  subtitle_en: string
  subtitle_es: string
  teaser_en: string
  teaser_es: string
}

export interface ParsedArticle {
  metadata: ArticleMetadata
  contentHtml: string
}

export interface ArticlePreview {
  slug: string
  featured: boolean
  type: string
  category: string
  date: string
  readTime: string
  title: string
  subtitle: string
  teaser: string
}

export function getAllArticles(lang: string): ArticlePreview[] {
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(contentDirectory)
  const allArticlesData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      const meta = data as ArticleMetadata

      return {
        slug,
        featured: meta.featured || false,
        type: meta.type || 'ESSAY',
        category: meta.category || 'General',
        date: meta.date || '',
        readTime: lang === 'es' ? meta.readTime_es || meta.readTime_en : meta.readTime_en,
        title: lang === 'es' ? meta.title_es || meta.title_en : meta.title_en,
        subtitle: lang === 'es' ? meta.subtitle_es || meta.subtitle_en : meta.subtitle_en,
        teaser: lang === 'es' ? meta.teaser_es || meta.teaser_en : meta.teaser_en,
      }
    })

  // Sort articles by date
  return allArticlesData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getArticleBySlug(slug: string, lang: string): ParsedArticle | null {
  const fullPath = path.join(contentDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Split content by ---ES---
  const parts = content.split(/---(?:ES|es)---/)
  const englishBody = parts[0] || ''
  const spanishBody = parts[1] || englishBody

  const activeBody = lang === 'es' ? spanishBody.trim() : englishBody.trim()

  return {
    metadata: data as ArticleMetadata,
    contentHtml: activeBody,
  }
}
