import 'server-only'
import type { Locale } from './config'

// We enumerate all dictionaries here for better webpack bundling
const dictionaries = {
  en: () => import('@/dictionaries/en').then((module) => module.default),
  es: () => import('@/dictionaries/es').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en()
}
