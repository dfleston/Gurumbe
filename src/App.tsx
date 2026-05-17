import { motion } from "motion/react";
import { Header, Footer } from "./components/Navigation";
import { 
  ArrowRight, 
  Leaf, 
  Zap, 
  Rocket, 
  Droplet, 
  MapPin, 
  Mail, 
  Waves,
  Hammer,
  User
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-40 mix-blend-luminosity grayscale contrast-125"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="cinematic-gradient" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-label"
            >
              THE ARCHITECTURE · LA ARQUITECTURA
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl mb-8 leading-[1.1]"
            >
              Structural Integrity.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-on-background/60 max-w-2xl mx-auto leading-relaxed italic"
            >
              Our methodology rejects arbitrary complexity in favor of resilient, institutional-grade architecture. We bridge the South-to-South corridor through highly regulated holding structures.
            </motion.p>
          </div>
        </section>



        {/* PHASES SECTION */}
        <section id="assets" className="py-32 max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="section-label">WE BUILD · CONSTRUIMOS</span>
            <h2 className="text-4xl md:text-6xl max-w-2xl">
              A Phased Roadmap of <span className="italic text-primary font-light">Institutional Sovereignty.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                phase: "1 — ROOTS",
                title: "Smart Real Estate",
                icon: <Hammer className="text-tertiary" size={40} />,
                color: "text-tertiary",
                border: "border-tertiary/20",
                desc: "Laying the physical foundation. High-yield, tech-enabled commercial and residential developments establishing permanent anchors.",
                hubs: ["Nairobi", "Accra", "Windhoek"]
              },
              {
                phase: "2 — POWER",
                title: "Decentralized Energy",
                icon: <Zap className="text-secondary" size={40} />,
                color: "text-secondary",
                border: "border-secondary/20",
                desc: "Powering the infrastructure. Investments in off-grid solar and sustainable utility networks to guarantee operational sovereignty.",
                hubs: ["Lagos", "Dakar", "Johannesburg"]
              },
              {
                phase: "3 — SCALE",
                title: "VC Venture Building",
                icon: <Rocket className="text-primary" size={40} />,
                color: "text-primary",
                border: "border-primary/20",
                desc: "Accelerating native innovation. A structured venture studio model incubating tech startups tailored for the Southern corridor.",
                hubs: ["Kigali", "Cape Town", "Madrid"]
              },
              {
                phase: "4 — LIQUIDITY",
                title: "African Public Equities",
                icon: <Droplet className="text-on-background/40" size={40} />,
                color: "text-on-background/40",
                border: "border-outline-variant",
                desc: "Strategic positioning in liquid markets, targeting established regional champions and newly listed sovereign entities.",
                hubs: ["Casablanca", "Nairobi", "Johannesburg"]
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-surface-dim p-10 border border-outline-variant border-l-4 ${item.border} hover:translate-y-[-4px] transition-all duration-500`}
              >
                <div className="flex justify-between items-start mb-12">
                  <span className={`font-mono text-[10px] tracking-widest ${item.color}`}>PHASE {item.phase}</span>
                  {item.icon}
                </div>
                <h3 className="text-3xl mb-4">{item.title}</h3>
                <p className="text-on-background/60 mb-12 font-serif min-h-[80px]">
                  {item.desc}
                </p>
                <div className="pt-6 border-t border-outline-variant/30">
                  <span className="font-mono text-[9px] text-on-background/30 tracking-widest block mb-4 uppercase">Focus Hubs</span>
                  <div className="flex flex-wrap gap-4">
                    {item.hubs.map(hub => (
                      <span key={hub} className="text-sm font-display italic">— {hub}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONVERGENCE SECTION */}
        <section id="strategy" className="py-32 bg-surface-dim overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-5">
                <span className="section-label">THE CONVERGENCE · LA CONVERGENCIA</span>
                <h2 className="text-5xl md:text-7xl mb-12 leading-tight">The Convergence of Hemispheric Forces</h2>
                <div className="w-16 h-px bg-primary mb-12" />
                
                <ul className="space-y-8 font-display text-2xl md:text-3xl">
                  <li className="flex items-center gap-6 group">
                    <span className="w-2 h-2 bg-primary group-hover:w-8 transition-all" />
                    <span>Iberia (Spain/Portugal)</span>
                  </li>
                  <li className="flex items-center gap-6 group">
                    <span className="w-2 h-2 bg-primary group-hover:w-8 transition-all" />
                    <span>The Global South (Emerging Sovereigns)</span>
                  </li>
                  <li className="flex items-center gap-6 group">
                    <span className="w-2 h-2 bg-primary group-hover:w-8 transition-all" />
                    <span>Africa-to-South Atlantic</span>
                  </li>
                  <li className="flex items-center gap-6 group">
                    <span className="w-2 h-2 bg-primary group-hover:w-8 transition-all" />
                    <span>South-to-South Realignment</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7">
                <div className="relative h-full min-h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2574&auto=format&fit=crop" 
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 mix-blend-luminosity"
                    alt="Institutional Architecture"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE CORRIDOR SECTION */}
        <section id="corridor" className="py-32 relative overflow-hidden bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="section-label">A SOVEREIGN STORY</span>
                  <h2 className="text-5xl md:text-6xl mb-8 leading-tight">The corridor was always there.</h2>
                  <p className="text-lg text-on-background/70 mb-12 border-l-2 border-primary pl-6 py-2">
                    Gurumbé Capital is a thematic investment vehicle bridging Spain and the Global South. We unearth value along ancient routes of exchange, applying institutional rigor to high-growth, sovereign frontiers.
                  </p>
                  
                  <div className="mt-16 space-y-12">
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.3em] text-on-background/40 block mb-4 uppercase">THE FOUNDATION · EL CIMIENTO</span>
                      <h3 className="text-3xl mb-6">Rooted in rhythm. Built for scale.</h3>
                      <div className="space-y-6 text-on-background/60 font-serif">
                        <p>
                          The "Gurumbé" was a profound drum rhythm, echoing through the 16th-century streets of Seville, carried by Bantu populations. It was the pulse of early globalization, a testament to resilience and an indelible link between continents.
                        </p>
                        <p>
                          Today, that historical corridor remains open. It is no longer defined by the tragedies of the past, but by the strategic flow of capital, innovation, and sovereign wealth between Iberia and the dynamic economies of the Global South.
                        </p>
                      </div>
                    </div>

                    <div className="p-8 bg-surface-dim border border-outline-variant relative group">
                      <blockquote className="text-2xl italic font-display border-l-4 border-primary pl-6">
                        "To go back and get it is not a taboo."
                      </blockquote>
                      <p className="font-mono text-[9px] tracking-[0.3em] text-primary mt-4 uppercase">— THE SANKOFA PRINCIPLE</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-square md:aspect-video lg:aspect-square"
                >
                  <div className="absolute inset-0 bg-primary/5 border border-outline-variant transform translate-x-8 translate-y-8" />
                  <img 
                    src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=2670&auto=format&fit=crop" 
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 contrast-125 mix-blend-luminosity shadow-2xl"
                    alt="Arched Corridor Architecture"
                  />
                  <div className="absolute -bottom-8 -left-8 bg-surface-dim border border-outline-variant p-8 shadow-2xl flex flex-col items-center justify-center w-40 h-40 group hover:border-primary transition-colors">
                    <Waves className="text-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                    <span className="font-mono text-[10px] tracking-widest text-on-background/40">SANKOFA</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section id="team" className="py-32 border-t border-outline-variant">
          <div className="max-w-7xl mx-auto px-6">
            <span className="section-label">STRUCTURAL RESILIENCE</span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-4">
                <h2 className="text-5xl md:text-6xl mb-8">The Team.</h2>
                <p className="text-on-background/60 font-serif leading-relaxed">
                  Institutional rigor meets market frontier expertise. Our leadership bridges the gap between traditional finance and high-growth ecosystem building.
                </p>
              </div>
              
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="p-10 bg-surface-dim border border-outline-variant group"
                  >
                    <div className="mb-8 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                      <User size={48} className="text-primary" />
                    </div>
                    <h3 className="text-3xl mb-1">David Leston</h3>
                    <p className="font-mono text-xs text-primary mb-6 tracking-widest">CHIEF INVESTMENT OFFICER</p>
                    <p className="text-on-background/50 font-serif text-sm">
                      Driving the strategic allocation and execution of thematic investments across the Iberia-Southern corridor.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="py-24 border-y border-outline-variant">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <blockquote className="text-3xl md:text-5xl italic font-display leading-tight mb-12">
              "We are not waiting for the future to be distributed; we are structuring the rails upon which it will run."
            </blockquote>
            <p className="font-mono text-[11px] tracking-[0.3em] text-primary">GURUMBÉ CAPITAL THESIS</p>
          </div>
        </section>

        {/* CONSORTIUM SECTION */}
        <section id="about" className="py-32 max-w-7xl mx-auto px-6">
          <span className="section-label">THE CONSORTIUM · EL CONSORCIO</span>
          <h2 className="text-5xl md:text-7xl mb-16">Leadership.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Kwame Adebayo",
                role: "Founder & Managing Partner",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2544&auto=format&fit=crop"
              },
              {
                name: "Elena Silva",
                role: "Head of European Operations",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
              },
              {
                name: "The Advisory Board",
                role: "Madrid, Accra & Dakar",
                isText: true,
                desc: "Our general partners bridge institutional banking in Madrid with deeply rooted networks in African tech and infrastructure hubs."
              }
            ].map((person, i) => (
              <div 
                key={i}
                className={`relative aspect-[3/4] overflow-hidden group border border-outline-variant ${person.isText ? 'bg-surface-dim p-12 flex flex-col justify-end' : ''}`}
              >
                {!person.isText && (
                  <>
                    <img 
                      src={person.img} 
                      className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity brightness-75 transition-transform duration-700 group-hover:scale-105"
                      alt={person.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  </>
                )}
                <div className="relative z-10">
                  {person.isText ? (
                    <>
                      <p className="text-xl italic mb-8 border-l border-primary pl-6">{person.desc}</p>
                      <a href="#" className="inline-flex items-center text-primary font-mono text-[10px] tracking-widest hover:translate-x-2 transition-transform">
                        VIEW ADVISORY BOARD <ArrowRight size={14} className="ml-2" />
                      </a>
                    </>
                  ) : (
                    <>
                      <h4 className="text-2xl mb-1">{person.name}</h4>
                      <p className="font-mono text-[9px] tracking-widest text-primary uppercase">{person.role}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 bg-surface-dim border-t border-outline-variant">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <span className="section-label">ENGAGE · CONTACTO</span>
              <h2 className="text-5xl md:text-7xl mb-8">Initiate Dialogue.</h2>
              <p className="text-on-background/60 mb-12">
                We operate discreetly and selectively. Please specify the nature of your inquiry to direct it to the appropriate desk.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={20} />
                  <div>
                    <span className="font-mono text-[10px] tracking-widest block opacity-40">HEADQUARTERS</span>
                    <p className="font-display italic">Paseo de la Castellana, Madrid</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" size={20} />
                  <div>
                    <span className="font-mono text-[10px] tracking-widest block opacity-40">COMMUNICATIONS</span>
                    <p className="font-display italic">office@gurumbecapital.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-background p-8 md:p-16 border border-outline-variant shadow-2xl relative">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-mono text-[9px] tracking-widest opacity-40 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" /> FULL NAME
                    </label>
                    <input type="text" className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors font-display text-lg" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[9px] tracking-widest opacity-40 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" /> ORGANIZATION
                    </label>
                    <input type="text" className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors font-display text-lg" placeholder="Institution" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="font-mono text-[9px] tracking-widest opacity-40">INQUIRY TYPE</label>
                  <div className="flex flex-wrap gap-6">
                    {["Investment", "Partnership", "Media"].map(type => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="type" className="hidden" />
                        <div className="w-3 h-3 border border-outline-variant rounded-full group-hover:border-primary transition-colors" />
                        <span className="font-mono text-[10px] tracking-widest uppercase group-hover:text-primary">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[9px] tracking-widest opacity-40">MESSAGE</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors font-display text-lg resize-none" placeholder="Brief outline of your proposal..." />
                </div>

                <button type="submit" className="w-full btn-outline text-lg py-5 mt-4 hover:border-primary">
                  SUBMIT DOSSIER
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
