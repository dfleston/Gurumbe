# Gurumbé Capital - South-to-South Investment Corridor

A visionary investment platform connecting Africa and Iberia through real asset tokenization. Built with Next.js 16, Tailwind CSS, and a commitment to recognizing the corridor of capital that was always there.

## Vision

Gurumbé is not just an investment vehicle. It's a recognition. A statement that the South can invest in itself without permission from the North. That Africa doesn't need to be saved—it needs to be recognized.

Capital flows South-to-South. Ownership. Real assets. Tokenized for efficiency, but rooted in earth, energy, and excellence.

## Features

### Core Sections
- **Hero** - "The Corridor Was Always There" - Compelling entry point
- **The Corridor** - Five nodes: Spain/Iberia, Kenya, Ghana, Namibia, Angola
- **Why Now?** - Six converging macro trends: demographics, energy, technology, tokenization, institutional readiness, history
- **What We Build** - Real asset tokenization: real estate, energy, agriculture
- **How We Work** - Four-step process: Identify → Structure → Tokenize → Deploy
- **Who Is Behind This** - David F. Leston's vision and philosophy
- **Thought Leadership** - Essays on history, technology, economics, investment
- **Get in Touch** - Contact form, newsletter subscription, investor engagement

### Design System
- **Colors**: Adinkra-inspired palette (Charcoal, Solar Gold, Terracotta, Cream, Sage)
- **Typography**: Serif headings (Lora), Sans body (Inter)
- **Responsive**: Mobile-first design with smooth desktop experience
- **Interactive**: Smooth scrolling, hover states, form validation

### Technology Stack
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Fonts**: Google Fonts (Lora + Inter)
- **Deployment**: Vercel-ready static pages
- **Forms**: Client-side contact form with email support

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/dfleston/Gurumbe.git
cd Gurumbe
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Design tokens and global styles
├── components/
│   ├── Navigation.tsx      # Header with smooth scrolling nav
│   ├── Footer.tsx          # Footer with links and info
│   └── sections/           # Page sections
│       ├── Hero.tsx
│       ├── Corridor.tsx
│       ├── WhyNow.tsx
│       ├── WhatWeBuild.tsx
│       ├── HowWeWork.tsx
│       ├── Who.tsx
│       ├── Thoughts.tsx
│       └── Contact.tsx
└── next.config.js
```

## Design Tokens

The design system uses CSS custom properties for themeable colors:

```css
--background: #f5f1e8      /* Cream */
--foreground: #2a2a2a      /* Charcoal */
--primary: #c85a3a         /* Terracotta */
--secondary: #d4af37        /* Solar Gold */
--accent: #8b9a7e          /* Sage */
--muted: #a8a8a8           /* Gray */
--border: #e0dbd2          /* Light Gray */
```

## Key Features

### Smooth Navigation
- Fixed header with smooth-scroll navigation
- Mobile hamburger menu
- Hash-based routing (#corridor, #why-now, etc.)

### Responsive Design
- Mobile-first approach
- Tested at 375px (mobile) and 1920px (desktop)
- Flexible grid layouts with Tailwind's responsive prefixes

### Contact Form
- Client-side form with validation
- Type selection (Interest, Investor, Partner, Press, Other)
- Success confirmation message
- Privacy assurance

### Thought Leadership
- Card-based article layout
- Links to David F. Leston's Substack and La Promesa Devuelta book
- Category badges (History, Technology, Economics, Investment)

## About the Author

**David F. Leston** is the founder and visionary behind Gurumbé Capital. 

He is the author of *La Promesa Devuelta* (The Promise Returned), a historical examination of the African-Hispanic synthesis that shaped civilization. His work spans culture, technology, economy, and the spiritual forces that move them.

- **Essays**: https://dleston.substack.com
- **Book**: http://promesadevuelta.com/en/

## The Five Nodes

The Gurumbé corridor connects five essential nodes:

1. **Spain & Iberia** - Institutional Gateway
   - Centuries of African-Hispanic synthesis
   - The duende, the recognition

2. **Kenya** - East African Hub
   - Demographic dividend, tech-native capital markets
   - Opportunity and speed

3. **Ghana** - West African Anchor
   - Gold standard governance
   - Stable, strategic, open

4. **Namibia** - Southern Gateway
   - Mineral wealth, emerging financial center
   - Continental position

5. **Angola** - Energy Power
   - Oil, diamonds, agricultural renaissance
   - Continental hub

## The Thesis

Wealth follows capital. Capital follows yield. Yield is highest where risk is cheapest and growth is fastest.

That's Africa. That's the South. That's now.

We're not chasing trends. We're following fundamentals.

## Contact

- Email: hello@gurumbe.capital
- Essays: [Substack](https://dleston.substack.com)
- Book: [La Promesa Devuelta](http://promesadevuelta.com/en/)

## License

© 2026 Gurumbé Capital. All rights reserved.

---

**Building the South-to-South corridor.**
