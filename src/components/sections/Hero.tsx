"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
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

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact" className="btn-outline inline-block">
              Show Your Interest
            </a>
            <a href="#what-we-build" className="btn-outline inline-block">
              Explore the Vision
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
