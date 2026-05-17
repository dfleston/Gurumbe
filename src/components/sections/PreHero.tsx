'use client'

import { motion } from 'motion/react'

type PreHeroProps = {
  dict: any
}

export default function PreHero({ dict }: PreHeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-luminosity grayscale contrast-125"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Cinematic Gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(15,12,9,0.2) 0%, rgba(15,12,9,0.8) 60%, var(--color-surface-main) 100%)',
          zIndex: 2,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-label"
        >
          {dict.label}
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display"
          style={{
            color: 'var(--color-parchment)',
            marginBottom: '2rem',
            lineHeight: 1.1,
          }}
        >
          {dict.headline}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-body-lg"
          style={{
            color: 'var(--color-on-surface-variant)',
            maxWidth: '42rem',
            margin: '0 auto',
            fontStyle: 'italic',
            lineHeight: 1.6,
          }}
        >
          {dict.body}
        </motion.p>
      </div>
    </section>
  )
}
