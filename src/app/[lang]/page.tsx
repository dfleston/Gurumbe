import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import PreHero from '@/components/sections/PreHero'
import Corridor from '@/components/sections/Corridor'
import WhyNow from '@/components/sections/WhyNow'
import TokenizationIntro from '@/components/sections/TokenizationIntro'
import WhatWeBuild from '@/components/sections/WhatWeBuild'
import FocusCorridors from '@/components/sections/FocusCorridors'
import Thoughts from '@/components/sections/Thoughts'
import Contact from '@/components/sections/Contact'
import { getDictionary } from '@/i18n/getDictionary'
import type { Locale } from '@/i18n/config'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)

  return (
    <main className="min-h-screen bg-surface-main">
      <Navigation dict={dict.navigation} lang={lang} />
      <PreHero dict={dict.preHero} />
      <Hero dict={dict.hero} lang={lang} />
      <Corridor dict={dict.corridor} />
      <WhyNow dict={dict.whyNow} />
      <TokenizationIntro dict={dict.tokenizationIntro} lang={lang} />
      <WhatWeBuild dict={dict.whatWeBuild} />
      <FocusCorridors dict={dict.focusCorridors} />
      <Thoughts dict={dict.thoughts} lang={lang} />
      <Contact dict={dict.contact} />
      <Footer dict={dict.footer} lang={lang} />
    </main>
  )
}
