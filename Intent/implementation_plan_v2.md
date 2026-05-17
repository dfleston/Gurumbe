# Implementation Plan v2: Gurumbé Capital — Next.js 16 Web App

*Updated following critical design review and user decisions.*

---

## Part 1: Resolved Design Decisions

### 1.1 The Color System — Final Token Map

The palette is now a five-token system: four primary colors (the Pan-African/Iberian material synthesis) plus one named typographic color.

| Token Name | Hex | Rationale | Usage |
|---|---|---|---|
| `--color-surface` | `#0f0c09` | Deep Iberian Charcoal | Base background, all pages |
| `--color-gold` | `#c8841d` | Solar Gold / Ochre | Primary accents, rule lines, CTAs |
| `--color-terracotta` | `#b5531d` | Andalusian Clay / Red Soil | Phase 1 (Real Estate) cards, accent borders |
| `--color-verde` | `#046A38` | Portuguese Flag Dark Green | Phase 2 (Energy) cards only — **strictly contextual** |
| `--color-parchment` | `#ebe2cb` | Atlantic Cream / Andalusian Parchment | All body text, first-class typographic token |

#### The rule-line token (derived):
```css
--color-rule: rgba(200, 132, 29, 0.16);   /* gold at 16% opacity */
```

#### On the Galician Blue (`#0099CC`) — Honest Assessment

The proposal to use the Galician *azul celeste* is thematically compelling. Daniel Fernandez Leston's Galician roots, the Atlantic corridor, the ocean as the physical medium of the South-to-South route — it is all correct as *narrative*.

**The design risk is real:** `#0099CC` is a saturated, bright cyan. In its pure form it will break the warm palette immediately. It introduces a completely different temperature and does not map to any asset class in the thesis.

**The recommendation:** Do not introduce it as a sixth named accent. Instead, name the ocean's presence through *the parchment itself*. The warm cream already carries the Atlantic — it is the color of aged maps, nautical charts, and the pages of the documents that recorded the corridor for centuries.

If you want the Atlantic present visually, use it in one specific place: a very thin, barely-visible rule or section divider tinted toward a cool grey-blue (`#b8c9d4` — a desaturated, almost neutral Atlantic mist). It signals the ocean without adding a new color to manage.

**Decision:** Keep the five-token system. The Atlantic is present in the parchment. If you want a sixth token later for the "Oasis" page, introduce it there.

---

### 1.2 Typography — Final System (Three Fonts)

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display / Headlines | Cormorant Garamond | 500–600 | All `<h1>`, `<h2>`, section titles |
| Body / Long-form | EB Garamond | 400 | Paragraphs, pull quotes, essay copy |
| Labels / Navigation / Technical | DM Mono | 400–500 | Nav links, section labels, data points, form labels |
| **Removed** | ~~Space Mono~~ | — | Reserved for future data-heavy pages |

**Rule:** Never use DM Mono for body copy. Never use Cormorant for navigation.

---

### 1.3 Who Section — Daniel Fernandez Leston Only

Use a **typographic treatment** — no portrait cards for now. Large name, DM Mono role label, two–three sentences explaining *why this person is uniquely positioned*, not a LinkedIn summary.

The Advisory Board slot becomes: *"Partners & Advisors — Introductions forthcoming"* styled as an open, architecturally elegant placeholder (a bordered empty card with a gold rule) — honest and intentional rather than hidden.

---

### 1.4 Audience — Institutional Primary

The main site targets institutional LPs and family offices. **"Oasis"** (for retail and tech-native allocators) is a future separate page — noted, not in scope for this build.

---

### 1.5 Thought Leadership — Structure Decision

The Thoughts section supports three content types: **Essay**, **Conversation** (podcast), **Field Note** (short observation).

**Architecture:**
- **Homepage section** `Thoughts.tsx`: Preview of 2 most recent pieces with type indicator tags. CTA links to full page.
- **Separate route** `/thoughts`: Full archive with category filter (Capital & Infrastructure / The Corridor / Operators' Notes).
- **Individual piece route** `/thoughts/[slug]`: Full-width reading layout, no sidebar clutter.

**Card system:**
- Type tag in DM Mono: `ESSAY` / `CONVERSATION` / `FIELD NOTE`
- Reading/listening time shown
- No pagination clutter — editorial magazine feel

**Stub content for launch:**
- Featured essay: *"The Corridor Was Always There: Africa, Iberia, and the Architecture of South-to-South Capital"* — headline only, body as placeholder.

---

## Part 2: Technical Implementation Plan

> [!IMPORTANT]
> **Step 1 is non-negotiable before any component work:** The `bold_edition` HTML files use Tailwind's CDN JIT mode with custom config objects. Next.js with Tailwind v4 uses CSS custom properties in `globals.css`. These are two completely different mechanisms. The class names look the same — they are not the same underneath. A systematic token-by-token mapping pass must happen before any TSX is touched.

---

### Step 1 — CSS Token Mapping (Do This First)

**Source:** The `tailwind.config` objects inside each `bold_edition/code.html` file.  
**Target:** `src/app/globals.css` using Tailwind v4's `@theme` block.

#### Complete token map from `bold_edition` → `globals.css`:

```css
@import "tailwindcss";

@theme {
  /* === SURFACE SCALE === */
  --color-surface-main:              #0f0c09;
  --color-surface:                   #171306;
  --color-surface-dim:               #171306;
  --color-surface-container-lowest:  #110e03;
  --color-surface-container-low:     #1f1b0d;
  --color-surface-container:         #231f11;
  --color-surface-container-high:    #2e2a1b;
  --color-surface-container-highest: #393525;
  --color-surface-variant:           #393525;
  --color-surface-bright:            #3e3929;
  --color-background:                #171306;

  /* === PRIMARY (Solar Gold) === */
  --color-primary:                   #c8841d;
  --color-primary-container:         #c8841d;
  --color-on-primary:                #462a00;
  --color-on-primary-container:      #402600;
  --color-inverse-primary:           #855400;
  --color-primary-fixed:             #ffddb7;
  --color-primary-fixed-dim:         #ffb95d;
  --color-on-primary-fixed:          #2a1700;
  --color-on-primary-fixed-variant:  #653e00;
  --color-surface-tint:              #ffb95d;

  /* === SECONDARY (Portuguese Verde) === */
  --color-secondary:                 #046A38;
  --color-secondary-container:       #23501e;
  --color-on-secondary:              #0a3909;
  --color-on-secondary-container:    #90c283;
  --color-secondary-fixed:           #bcf0ae;
  --color-secondary-fixed-dim:       #a1d494;
  --color-on-secondary-fixed:        #002201;
  --color-on-secondary-fixed-variant: #23501e;

  /* === TERTIARY (Terracotta Clay) === */
  --color-tertiary:                  #b5531d;
  --color-tertiary-container:        #e1743c;
  --color-on-tertiary:               #571f00;
  --color-on-tertiary-container:     #4e1b00;
  --color-tertiary-fixed:            #ffdbcc;
  --color-tertiary-fixed-dim:        #ffb694;
  --color-on-tertiary-fixed:         #351000;
  --color-on-tertiary-fixed-variant: #7b2f00;

  /* === SURFACE TEXT / ON-COLORS === */
  --color-on-surface:                #ebe2cb;   /* = parchment */
  --color-on-surface-variant:        #d7c3b0;
  --color-on-background:             #ebe2cb;
  --color-inverse-surface:           #ebe2cb;
  --color-inverse-on-surface:        #353021;
  --color-parchment:                 #ebe2cb;   /* named first-class token */

  /* === OUTLINE / RULE LINES === */
  --color-outline:                   #9f8e7c;
  --color-outline-variant:           #524436;
  --color-rule-line:                 rgba(200, 132, 29, 0.16);

  /* === ERROR === */
  --color-error:                     #ffb4ab;
  --color-on-error:                  #690005;
  --color-error-container:           #93000a;
  --color-on-error-container:        #ffdad6;

  /* === TYPOGRAPHY SCALE === */
  --font-display:         "Cormorant Garamond", Georgia, serif;
  --font-headline-lg:     "Cormorant Garamond", Georgia, serif;
  --font-headline-md:     "Cormorant Garamond", Georgia, serif;
  --font-body-lg:         "Cormorant Garamond", Georgia, serif;
  --font-body-md:         "EB Garamond", Georgia, serif;
  --font-label-lg:        "DM Mono", "Courier New", monospace;
  --font-label-sm:        "DM Mono", "Courier New", monospace;

  /* === SPACING SYSTEM === */
  --spacing-margin-desktop: 64px;
  --spacing-margin-mobile:  16px;
  --spacing-gutter:         24px;
  --spacing-container-max:  1280px;
  --spacing-section-v:      80px;
  --spacing-column-gap:     4rem;

  /* === BORDER RADIUS === */
  --radius-sm:  0.125rem;
  --radius:     0.25rem;
  --radius-md:  0.375rem;
  --radius-lg:  0.5rem;
  --radius-full: 9999px;
}

/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Mono:wght@300;400;500&display=swap');

body {
  background-color: var(--color-surface-main);
  color: var(--color-parchment);
  font-family: var(--font-body-md);
  -webkit-font-smoothing: antialiased;
}
```

**Validation test after Step 1:** Run `npm run build`. Zero TypeScript errors. Zero missing color references. Only then proceed to Step 2.

---

### Step 2 — Configuration & Tooling

#### [MODIFY] [package.json](file:///Users/leston/code/Gurumbe/package.json)
```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@google/genai": "^1.29.0",
    "motion": "^11.0.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.0.0",
    "typescript": "^5.0.0",
    "@types/react": "^19.0.0",
    "@types/node": "^20.0.0"
  }
}
```

#### [MODIFY] [tsconfig.json](file:///Users/leston/code/Gurumbe/tsconfig.json)
- Next.js paths: `"@/*": ["./src/*"]`
- Remove all Vite/tsconfig.node.json references

---

### Step 3 — Navigation

#### [MODIFY] [Navigation.tsx](file:///Users/leston/code/Gurumbe/src/components/Navigation.tsx)
- `"use client"` — scroll-aware active state
- Logo: `GURUMBÉ CAPITAL` in `font-headline-md` tracking-widest
- Nav links (DM Mono, uppercase): `STRATEGY · ESTRATEGIA` / `ASSETS · ACTIVOS` / `CORRIDOR · CORREDOR` / `ABOUT · NOSOTROS`
- CTA button: `CONTACT · CONTACTO` — gold border, transparent fill, hover fill `gold/10`
- Mobile: hamburger with animated menu drawer

---

### Step 4 — Page Sections (in order)

#### [MODIFY] Hero.tsx
- Headline: *"The corridor was always there."*
- Full-screen charcoal `#0f0c09` base with concentric arc decorations (SVG, gold at 5% opacity)
- Cinematic overlay image (low-saturation, dark architectural)
- CTA: `ENTER THE CORRIDOR` with animated downward arrow
- Section label (DM Mono): `A SOVEREIGN STORY`

#### [MODIFY] Corridor.tsx
- Split layout 5/7: text left, image right
- Section label: `THE FOUNDATION · EL CIMIENTO`
- Headline: *"Rooted in rhythm. Built for scale."*
- Historical copy: Seville streets, Bantu drum rhythm, early globalization
- Sankofa quote block: *"To go back and get it is not a taboo."*
- Right: grayscale architectural image, floating Sankofa SVG card (bottom-left overlay)
- Sub-section: "The South Arrow Thesis" — 2 cards (Sovereign Growth / Cultural Fluency)

#### [MODIFY] WhyNow.tsx
- Section label: `WHY NOW · POR QUÉ AHORA`
- Headline: *"The Convergence of Hemispheric Forces"*
- 3-column cards with colored top borders:
  - `01 · DEMOGRAPHIC FACT` — Verde top border (`#046A38`)
  - `02 · CAPITAL SHIFT` — Gold top border (`#c8841d`)
  - `03 · ARCHITECTURAL GAP` — Terracotta top border (`#b5531d`)
- Pull quote (terracotta left-border): *"We are not waiting for the future to be distributed; we are structuring the rails upon which it will run."*

#### [MODIFY] WhatWeBuild.tsx
- Section label: `LO QUE CONSTRUIMOS · WHAT WE BUILD`
- Headline: *"A Phased Roadmap of Institutional Sovereignty."*
- 4 cards (staggered 2×2 grid on desktop, offset vertically on alternate):
  - Phase 1 — ROOTS: Smart Real Estate / terracotta border / `nature` icon / Focus: Nairobi, Accra, Windhoek
  - Phase 2 — POWER: Decentralized Energy / verde border / `solar_power` icon / Focus: Lagos, Dakar, Johannesburg
  - Phase 3 — SCALE: VC Venture Building / gold border / `rocket_launch` icon / Focus: Kigali, Cape Town, Madrid
  - Phase 4 — LIQUIDITY: African Public Equities / outline border / `water_drop` icon / Focus: Casablanca, Nairobi, Johannesburg
- Pull quote: *"We do not invest in geography. We invest in the inevitable sovereign architecture of the next century."*

#### [MODIFY] HowWeWork.tsx
- Section label: `THE ARCHITECTURE · LA ARQUITECTURA`
- Headline: *"Structural Integrity."*
- Bento diagram: Gurumbé Holding Co. (Spain jurisdiction) → Capital Flow connector → Asset SPVs (local jurisdictions)
- Binary Transition block: "Tokenization as a binary 0→1 transition" — no crypto jargon, framed as *programmable compliance architecture*
- Four tokenization properties: Composability / Finality / Fractionalization / Programmability

#### [NEW] Ethos.tsx (interstitial — addresses Gap 2)
- Full-width dark section between HowWeWork and Who
- Section label: `THE ETHOS · EL CIMIENTO`
- Headline: *"The Eight Principles."*
- Pull quote: *"We do not invest to develop; we invest to compound sovereignty."*
- 8 principles rendered as a 2-column grid (icon + name + one-line description):
  I. Beyond Returns / II. Spiritually Founded / III. Clear Compass / IV. Intelligent, Diligent, Energetic, Integer / V. Strategic Problem Solving / VI. Knowledgeable Voice / VII. Macro & Micro / VIII. Adinkra as Operating System

#### [MODIFY] Who.tsx → The Founder
- Section label: `WHO IS BEHIND THIS · QUIÉN ESTÁ DETRÁS`
- Headline: *"The Founder."*
- **Typographic treatment** (no portrait card):
  - Name: `Daniel Fernandez Leston` in Cormorant Garamond display size
  - Role in DM Mono: `FOUNDER & STRATEGIST`
  - Short paragraph: why this person (Galician roots, African ground, AfDB engagement, EBSI/Spain MoST, Atlantic perspective)
- Advisory Board placeholder: elegant bordered card with gold rule — `"Partners & Advisors — Introductions forthcoming."`
- Cultural anchor: Miguel Ángel Rosales / *Gurumbé: Afro-Andalusian Memories*

#### [MODIFY] Thoughts.tsx (homepage preview)
- Section label: `EL PENSAMIENTO · THE THINKING`
- 2 featured piece cards with type indicator (DM Mono): `ESSAY`
- Card: *"The Corridor Was Always There"* — stubbed headline, teaser paragraph
- CTA: `VIEW ALL THINKING →` links to `/thoughts`

#### [NEW] src/app/thoughts/page.tsx
- Full archive layout — editorial magazine feel
- Category filter: Capital & Infrastructure / The Corridor / Operators' Notes
- Each card: type tag, headline (Cormorant), reading time (DM Mono), date

#### [MODIFY] Contact.tsx
- Section label: `ENGAGE · CONTACTO`
- Headline: *"Initiate Dialogue."*
- Left column: intro copy + location (Paseo de la Castellana, Madrid) + `office@gurumbecapital.com`
- Right column: dossier form
  - Inputs: bottom-border only (no box), DM Mono labels
  - Radio selection: `INVESTMENT` / `PARTNERSHIP` / `MEDIA & PRESS`
  - Submit button: `SUBMIT DOSSIER` — gold ghost button

---

### Step 5 — Footer

#### [MODIFY] Footer.tsx
- 12-column grid
- Left (4 cols): `GURUMBÉ CAPITAL` wordmark + tagline: *"Bridging value across the South-to-South corridor."*
- Right (8 cols): `INVESTMENT · INVERSIÓN` / `SOVEREIGNTY · SOBERANÍA` / `LEGAL · LEGAL`
- Bottom: `© 2025 GURUMBÉ CAPITAL. ALL RIGHTS RESERVED.` in DM Mono
- Top border: gold rule line

---

### Step 6 — Cleanup

#### [DELETE] Vite Files
`index.html` / `vite.config.ts` / `src/main.tsx` / `src/App.tsx` / `src/index.css`

---

## Part 3: Verification Plan

### Automated
1. `npm install` — clean lockfile
2. `npm run build` — zero errors (do this after Step 1 and again after Step 6)
3. Audit for prohibited terms: `grep -r "crypto\|blockchain\|Web3" src/` → must return zero results

### Manual
1. Verify color contrast ratios: parchment `#ebe2cb` on charcoal `#0f0c09` — must pass WCAG AA
2. Verify verde `#046A38` appears *only* in WhyNow and WhatWeBuild Phase 2 cards — nowhere else
3. Verify DM Mono never used for paragraphs; Cormorant Garamond never used for navigation labels
4. Mobile responsive check: hamburger nav, stacked sections, readable typography
5. Contact form: state validation, success message, correct inquiry types

---

## Content Audit: Language Rules

| Prohibited | Use Instead |
|---|---|
| "crypto" | "fractional asset issuance" |
| "blockchain" | "programmable compliance architecture" / "immutable registry" |
| "Web3" | "digital asset infrastructure" |
| "NFT" | "direct asset-backed digital unit" |
| "ESG" | (avoid entirely — the brand is *beyond narratives*) |
| "impact investing" | (avoid — same reason) |
