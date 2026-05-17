import Hero from "@/components/sections/Hero";
import Corridor from "@/components/sections/Corridor";
import WhyNow from "@/components/sections/WhyNow";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import HowWeWork from "@/components/sections/HowWeWork";
import Who from "@/components/sections/Who";
import Thoughts from "@/components/sections/Thoughts";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Corridor />
        <WhyNow />
        <WhatWeBuild />
        <HowWeWork />
        <Who />
        <Thoughts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
