"use client";

import { motion } from "motion/react";
import { Hammer, Zap, Rocket, Droplet } from "lucide-react";

export default function WhatWeBuild() {
  const phases = [
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
  ];

  return (
    <section id="what-we-build" className="py-32 max-w-7xl mx-auto px-6">
      <div className="mb-20">
        <span className="section-label">WE BUILD · CONSTRUIMOS</span>
        <h2 className="text-4xl md:text-6xl max-w-2xl">
          A Phased Roadmap of <span className="italic text-primary font-light">Institutional Sovereignty.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {phases.map((item, i) => (
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
  );
}
