import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import PreHero from '@/components/sections/PreHero'
import Corridor from '@/components/sections/Corridor'
import WhyNow from '@/components/sections/WhyNow'
import WhatWeBuild from '@/components/sections/WhatWeBuild'
import HowWeWork from '@/components/sections/HowWeWork'
import Ethos from '@/components/sections/Ethos'
import Who from '@/components/sections/Who'
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
      <Hero dict={dict.hero} />
      <Corridor dict={dict.corridor} />
      <WhyNow dict={dict.whyNow} />
      <WhatWeBuild dict={dict.whatWeBuild} />
      <HowWeWork dict={dict.howWeWork} />
      <Ethos dict={dict.ethos} />
      <Who dict={dict.who} />
      <Thoughts dict={dict.thoughts} lang={lang} />
      <Contact dict={dict.contact} />
      <Footer dict={dict.footer} lang={lang} />
    </main>
  )
}
