import { getDictionary } from '@/i18n/getDictionary'
import type { Locale } from '@/i18n/config'
import InvestPageClient from './InvestPageClient'

export default async function InvestPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)

  return <InvestPageClient lang={lang} dict={dict} />
}