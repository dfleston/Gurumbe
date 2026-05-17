'use client'

import Link from 'next/link'

type HeroProps = {
  dict: any
  lang: string
}

export default function Hero({ dict, lang }: HeroProps) {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--color-surface-main)',
        paddingTop: '5rem',
      }}
    >
      {/* Cinematic gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(15,12,9,0.3) 0%, rgba(15,12,9,0.7) 60%, var(--color-surface-main) 100%)',
          zIndex: 2,
        }}
      />

      {/* Background texture — architectural dark */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 80px,
              rgba(200, 132, 29, 0.02) 80px,
              rgba(200, 132, 29, 0.02) 81px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 80px,
              rgba(200, 132, 29, 0.02) 80px,
              rgba(200, 132, 29, 0.02) 81px
            )
          `,
          zIndex: 1,
        }}
      />

      {/* Concentric arc decorations */}
      <div
        className="bg-arc"
        style={{
          width: '900px',
          height: '900px',
          left: '-250px',
          top: '5%',
          borderColor: 'rgba(200, 132, 29, 0.06)',
        }}
      />
      <div
        className="bg-arc"
        style={{
          width: '1100px',
          height: '1100px',
          left: '-350px',
          top: '-5%',
          borderColor: 'rgba(4, 106, 56, 0.04)',
        }}
      />

      {/* Content */}
      <div
        className="container-max"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: '1fr',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <span
          className="section-label"
          style={{ letterSpacing: '0.3em' }}
        >
          {dict.label}
        </span>

        <h1
          className="font-display"
          style={{
            color: 'var(--color-parchment)',
            marginBottom: '2rem',
            whiteSpace: 'pre-line',
          }}
        >
          {dict.headline}
        </h1>

        <p
          className="font-body-lg"
          style={{
            color: 'var(--color-on-surface-variant)',
            maxWidth: '36rem',
            borderLeft: '2px solid var(--color-primary)',
            paddingLeft: '1.5rem',
            paddingTop: '0.25rem',
            paddingBottom: '0.25rem',
            marginBottom: '3rem',
          }}
        >
          {dict.body}
        </p>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link
            href={`/${lang}/bridge`}
            className="font-label-lg animate-fade-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: 'var(--color-primary)',
              textDecoration: 'none',
              transition: 'color 0.3s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.color = 'var(--color-parchment)'
              el.style.transform = 'translateX(4px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.color = 'var(--color-primary)'
              el.style.transform = 'translateX(0)'
            }}
          >
            {dict.enter}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href={`/${lang}/africa`}
            className="btn-ghost"
          >
            {dict.interest}
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background:
            'linear-gradient(to bottom, transparent, var(--color-surface-main))',
          zIndex: 3,
        }}
      />
    </section>
  )
}
