import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Contact from '@/components/sections/Contact'
import { getDictionary } from '@/i18n/getDictionary'
import type { Locale } from '@/i18n/config'

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)

  return (
    <main className="min-h-screen bg-surface-main">
      <Navigation dict={dict.navigation} lang={lang} />
      <div style={{ paddingTop: '5rem' }}>
        <Contact dict={dict.contact} />
      </div>
      <Footer dict={dict.footer} lang={lang} />
    </main>
  )
}
