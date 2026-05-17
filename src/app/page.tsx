import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import Corridor from '@/components/sections/Corridor'
import WhyNow from '@/components/sections/WhyNow'
import WhatWeBuild from '@/components/sections/WhatWeBuild'
import HowWeWork from '@/components/sections/HowWeWork'
import Ethos from '@/components/sections/Ethos'
import Who from '@/components/sections/Who'
import Thoughts from '@/components/sections/Thoughts'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-main">
      <Navigation />
      <Hero />
      <Corridor />
      <WhyNow />
      <WhatWeBuild />
      <HowWeWork />
      <Ethos />
      <Who />
      <Thoughts />
      <Contact />
      <Footer />
    </main>
  )
}
