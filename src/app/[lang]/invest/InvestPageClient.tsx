'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AssetCard from '@/components/sections/AssetCard'
import Link from 'next/link'

// ─────────────────────────────────────────────────────────────
// Custom Premium Graphic Image Placeholder for Roadmap Phases
// ─────────────────────────────────────────────────────────────

function PhaseImagePlaceholder({
  num,
  title,
  accentColor,
  active,
}: {
  num: string
  title: string
  accentColor: string
  active: boolean
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        backgroundColor: 'var(--color-surface-container-low)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-rule-line)',
        opacity: active ? 1 : 0.6,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 320 180"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0 }}
      >
        <defs>
          <pattern id={`phase-grid-${num}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke={accentColor} strokeWidth="0.25" opacity="0.15" />
          </pattern>
        </defs>
        <rect width="320" height="180" fill={`url(#phase-grid-${num})`} />
        
        {/* Concentric rings */}
        <circle cx="160" cy="90" r="50" fill="none" stroke={accentColor} strokeWidth="0.4" opacity="0.12" />
        <circle cx="160" cy="90" r="90" fill="none" stroke={accentColor} strokeWidth="0.3" opacity="0.08" />
        
        {/* Dynamic crosshair */}
        <line x1="160" y1="0" x2="160" y2="180" stroke={accentColor} strokeWidth="0.3" opacity="0.15" />
        <line x1="0" y1="90" x2="320" y2="90" stroke={accentColor} strokeWidth="0.3" opacity="0.15" />
        
        {/* Corner ticks */}
        <path d="M12 12 L12 24 M12 12 L24 12" fill="none" stroke={accentColor} strokeWidth="0.6" opacity="0.25" />
        <path d="M308 12 L308 24 M308 12 L296 12" fill="none" stroke={accentColor} strokeWidth="0.6" opacity="0.25" />
        <path d="M12 168 L12 156 M12 168 L24 168" fill="none" stroke={accentColor} strokeWidth="0.6" opacity="0.25" />
        <path d="M308 168 L308 156 M308 168 L296 168" fill="none" stroke={accentColor} strokeWidth="0.6" opacity="0.25" />
      </svg>
      
      {/* Huge numeral watermarked */}
      <span
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '6rem',
          fontWeight: 700,
          color: accentColor,
          opacity: active ? 0.09 : 0.05,
          userSelect: 'none',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {num}
      </span>
      
      {/* Dynamic subtitle anchor */}
      <span
        className="font-label-sm"
        style={{
          position: 'absolute',
          bottom: '0.6rem',
          right: '0.9rem',
          color: accentColor,
          opacity: active ? 0.45 : 0.25,
          fontSize: '0.55rem',
          letterSpacing: '0.12em',
        }}
      >
        FUTURE PROJECTION
      </span>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Stage explainer data-driven component
// ─────────────────────────────────────────────────────────────

function StageExplainer({ stagesList }: { stagesList: any[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="forces-grid">
      {stagesList.map((s) => (
        <div
          key={s.key}
          style={{ borderLeft: `4px solid ${s.color}`, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: `${s.color}20`,
                border: `1px solid ${s.color}`,
                padding: '0.15rem 0.6rem',
              }}
            >
              <span className="font-label-sm" style={{ color: s.color }}>{s.key}</span>
            </span>
          </div>
          <h4 className="font-headline-md" style={{ color: 'var(--color-parchment)', fontSize: '1.3rem', margin: 0 }}>{s.title}</h4>
          <p className="font-label-sm" style={{ color: s.color, fontStyle: 'italic', margin: 0 }}>{s.risk}</p>
          <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6, margin: 0 }}>{s.body}</p>
        </div>
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Page Client Component
// ─────────────────────────────────────────────────────────────

export default function InvestPageClient({ lang, dict }: { lang: string; dict: any }) {
  const [activeCountry, setActiveCountry] = useState<string>('kenya')

  const investDict = dict.investPage

  const filteredAssets = investDict.assets.filter((a: any) => a.countryKey === activeCountry)

  // Map phase number to its unique brand accent color
  const getPhaseAccentColor = (num: string) => {
    switch (num) {
      case '01':
        return 'var(--color-primary)' // Solar Gold
      case '02':
        return 'var(--color-secondary)' // Dark Forest Green
      case '03':
        return 'var(--color-tertiary)' // Terracotta Clay
      default:
        return 'var(--color-outline)' // Muted Slate
    }
  }

  return (
    <main className="min-h-screen bg-surface-main">
      <Navigation dict={dict.navigation} lang={lang} />

      {/* ── HERO ── */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '6rem',
          backgroundColor: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-rule-line)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="bg-arc" style={{ width: '600px', height: '600px', right: '-100px', top: '-200px', borderColor: 'rgba(200,132,29,0.05)' }} />
        <div className="container-max" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label">{investDict.label}</span>
          <h1
            className="font-display animate-fade-up"
            style={{ color: 'var(--color-parchment)', fontSize: '3.5rem', lineHeight: 1.1, marginTop: '1.5rem', marginBottom: '1.5rem', maxWidth: '44rem' }}
          >
            {investDict.headline}
          </h1>
          <p
            className="font-body-lg"
            style={{ color: 'var(--color-on-surface-variant)', maxWidth: '36rem', lineHeight: 1.7, borderLeft: '2px solid var(--color-primary)', paddingLeft: '1.5rem' }}
          >
            {investDict.subhead}
          </p>
        </div>
      </section>

      {/* ── THE CASE ── */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: 'var(--color-surface-main)' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '5rem', alignItems: 'start' }} className="split-layout">
            <div>
              <span className="section-label">{investDict.theCaseLabel}</span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
                {investDict.theCaseTitle}
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p className="font-body-lg" style={{ color: 'var(--color-parchment)', lineHeight: 1.7, margin: 0 }}>
                {investDict.theCaseBody1}
              </p>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.7, margin: 0 }}>
                {investDict.theCaseBody2}
              </p>
              <Link href={`/${lang}/africa`} className="font-label-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', textDecoration: 'none' }}>
                {investDict.theCaseCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-rule-line)', borderBottom: '1px solid var(--color-rule-line)' }}>
        <div className="container-max">
          <header style={{ marginBottom: '3rem' }}>
            <span className="section-label">{investDict.roadmapLabel}</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {investDict.roadmapTitle}
            </h2>
          </header>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="phases-grid">
            {investDict.roadmapPhases.map((phase: any) => {
              const accentColor = getPhaseAccentColor(phase.num)
              return (
                <div
                  key={phase.num}
                  style={{
                    border: `1px solid ${phase.active ? 'var(--color-primary)' : 'var(--color-outline-variant)'}`,
                    borderTop: `4px solid ${phase.active ? 'var(--color-primary)' : 'var(--color-outline-variant)'}`,
                    backgroundColor: phase.active ? 'var(--color-surface-container)' : 'transparent',
                    opacity: phase.active ? 1 : 0.55,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    transition: 'transform 0.2s, border-color 0.2s',
                  }}
                >
                  <PhaseImagePlaceholder
                    num={phase.num}
                    title={phase.title}
                    accentColor={accentColor}
                    active={phase.active}
                  />
                  <div style={{ padding: '1.75rem' }}>
                    <span className="font-label-sm" style={{ color: phase.active ? 'var(--color-primary)' : 'var(--color-on-surface-variant)' }}>
                      {phase.label}
                    </span>
                    <h3 className="font-headline-md" style={{ color: 'var(--color-parchment)', margin: '0.75rem 0 0.5rem', fontSize: '1.4rem' }}>
                      {phase.title}
                    </h3>
                    <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.88rem', lineHeight: 1.5, margin: '0 0 1.25rem' }}>
                      {phase.description}
                    </p>
                    <span
                      className="font-label-sm"
                      style={{
                        color: phase.active ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                        border: `1px solid ${phase.active ? 'var(--color-primary)' : 'var(--color-outline-variant)'}`,
                        padding: '0.2rem 0.6rem',
                        display: 'inline-block',
                        fontSize: '0.65rem',
                      }}
                    >
                      {phase.active ? investDict.roadmapActiveText : investDict.roadmapInactiveText}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── STAGE EXPLAINER ── */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: 'var(--color-surface-main)' }}>
        <div className="container-max">
          <header style={{ marginBottom: '3.5rem' }}>
            <span className="section-label">{investDict.stagesLabel}</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem', marginBottom: '1rem' }}>
              {investDict.stagesTitle}
            </h2>
            <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '42rem' }}>
              {investDict.stagesIntro}
            </p>
          </header>
          <StageExplainer stagesList={investDict.stagesList} />
        </div>
      </section>

      {/* ── RIGHT-OF-USE CALLOUT ── */}
      <section style={{ paddingTop: '0', paddingBottom: '5rem', backgroundColor: 'var(--color-surface-main)' }}>
        <div className="container-max">
          <div
            style={{
              backgroundColor: 'var(--color-surface-container)',
              border: '1px solid var(--color-primary)',
              padding: '3rem',
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="split-layout"
          >
            <div>
              <span className="font-label-sm" style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '1rem' }}>
                {investDict.diffLabel}
              </span>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.2rem', fontWeight: 300, fontStyle: 'italic', color: 'var(--color-parchment)', lineHeight: 1.3, margin: 0 }}>
                {investDict.diffTitle}
              </p>
            </div>
            <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.7, margin: 0 }}>
              {investDict.diffBody}
            </p>
          </div>
        </div>
      </section>

      {/* ── ASSET PIPELINE — TABBED BY COUNTRY ── */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '7rem',
          backgroundColor: 'var(--color-surface)',
          borderTop: '1px solid var(--color-rule-line)',
          borderBottom: '1px solid var(--color-rule-line)',
        }}
      >
        <div className="container-max">
          <header style={{ marginBottom: '3rem' }}>
            <span className="section-label">{investDict.pipelineLabel}</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {investDict.pipelineTitle}
            </h2>
          </header>

          {/* Country tabs */}
          <div style={{ display: 'flex', gap: '0', marginBottom: '3rem', borderBottom: '1px solid var(--color-rule-line)' }}>
            {investDict.countries.map((c: any) => (
              <button
                key={c.key}
                onClick={() => setActiveCountry(c.key)}
                className="font-label-lg"
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: activeCountry === c.key ? '2px solid var(--color-primary)' : '2px solid transparent',
                  color: activeCountry === c.key ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                  padding: '1rem 2rem',
                  cursor: 'pointer',
                  marginBottom: '-1px',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                {c.label.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Cards — 3 per country in responsive grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="cards-grid">
            {filteredAssets.map((asset: any) => (
              <AssetCard key={`${asset.city}-${asset.stage}`} {...asset} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DEAL FORMAT ── */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: 'var(--color-surface-main)' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '5rem', alignItems: 'start' }} className="split-layout">
            <div>
              <span className="section-label">{investDict.dealFormatLabel}</span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                {investDict.dealFormatTitle}
              </h2>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.65, margin: '0 0 2rem' }}>
                {investDict.dealFormatBody1}
              </p>
              <p className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.5, lineHeight: 1.6 }}>
                {investDict.dealFormatBody2}
              </p>
            </div>
            <div style={{ border: '1px solid var(--color-outline-variant)', overflow: 'hidden' }}>
              {investDict.dealFormatRows.map(([label, value]: string[], i: number) => (
                <div
                  key={label}
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', borderBottom: i < investDict.dealFormatRows.length - 1 ? '1px solid var(--color-rule-line)' : 'none' }}
                >
                  <div style={{ padding: '1.1rem 1.5rem', backgroundColor: 'var(--color-surface-container-low)', borderRight: '1px solid var(--color-rule-line)' }}>
                    <span className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.7 }}>{label.toUpperCase()}</span>
                  </div>
                  <div style={{ padding: '1.1rem 1.5rem' }}>
                    <span className="font-body-md" style={{ color: 'var(--color-parchment)' }}>{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCESS PATH ── */}
      <section style={{ paddingTop: '6rem', paddingBottom: '8rem', backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-rule-line)' }}>
        <div className="container-max">
          <header style={{ marginBottom: '4rem' }}>
            <span className="section-label">{investDict.processLabel}</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {investDict.processTitle}
            </h2>
          </header>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', marginBottom: '5rem' }} className="steps-grid">
            {investDict.processSteps.map((step: any) => (
              <div key={step.num} style={{ backgroundColor: 'var(--color-surface-main)', border: '1px solid var(--color-outline-variant)', borderTop: `4px solid ${step.accent}`, padding: '2.5rem' }}>
                <span className="font-label-lg" style={{ color: step.accent }}>{step.num}</span>
                <h3 className="font-headline-md" style={{ color: 'var(--color-parchment)', margin: '0.75rem 0 1rem', fontSize: '1.5rem' }}>{step.title}</h3>
                <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.65, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid var(--color-rule-line)', paddingTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <p className="font-body-lg" style={{ fontStyle: 'italic', color: 'var(--color-parchment)', margin: 0, maxWidth: '38rem' }}>
              {investDict.processQuote}
            </p>
            <Link href={`/${lang}/contact`} className="btn-ghost" style={{ padding: '1.25rem 3rem' }}>
              {investDict.processCta}
            </Link>
          </div>
        </div>
      </section>

      <Footer dict={dict.footer} lang={lang} />

      <style>{`
        @media (max-width: 767px) {
          .split-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .forces-grid  { grid-template-columns: 1fr !important; }
          .phases-grid  { grid-template-columns: 1fr 1fr !important; gap: 1rem !important; }
          .cards-grid   { grid-template-columns: 1fr !important; }
          .steps-grid   { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .forces-grid  { grid-template-columns: 1fr 1fr !important; }
          .phases-grid  { grid-template-columns: 1fr 1fr !important; }
          .cards-grid   { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  )
}
