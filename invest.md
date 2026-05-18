# /invest Page — Integration Instructions
**Files delivered:** `src/app/[lang]/invest/page.tsx` · `src/components/sections/AssetCard.tsx`

---

## What Was Built

A full rebuild of `src/app/[lang]/invest/page.tsx` and a new reusable component `src/components/sections/AssetCard.tsx`.

The page removes the generic three-step placeholder and replaces it with a argued, location-specific investment case across seven sections.

---

## Files to Add / Replace

| Action | File |
|---|---|
| **Replace** | `src/app/[lang]/invest/page.tsx` |
| **Add (new)** | `src/components/sections/AssetCard.tsx` |

No changes to globals.css, the dict files, or any other component are required — the page uses only existing design tokens and class names from the current system.

---

## No Dict Changes Required

All copy is inlined directly in the page component with inline `lang === 'es'` ternaries rather than going through the dict system. This is intentional — the invest page has dense, argued copy that is difficult to manage cleanly through dict keys at this stage. If the project migrates to a CMS or the dict pattern needs to be extended later, the strings can be extracted straightforwardly.

---

## AssetCard Component — Props Reference

```tsx
interface AssetCardProps {
  city: string           // "Nairobi"
  country: string        // "Kenya"
  role: string           // Subtitle line under city name
  thesis: string         // 2–3 sentence location argument
  yieldRange: string     // "9–12%"
  appreciation: string   // "6–9%"
  rightOfUse: string     // "14–21 nights"
  accentColor: string    // CSS var or hex — controls top bar + metric values
  marketDetail: string[] // 3–4 bullet points on market context
  status?: string        // Defaults to "PHASE 1 · ACTIVE"
}
```

The component is fully self-contained and can be reused for future asset cards — Phase 2 energy assets, industrial real estate, etc. — by passing different props and accent colors.

---

## Responsive Behaviour

All grids collapse to single-column at `max-width: 767px`. The phase roadmap collapses to 2-column at that breakpoint. The two AssetCards stack vertically on mobile.

---

## Disclaimer Note

The indicative yield and appreciation figures (9–12%, 6–9%, etc.) are clearly marked as unaudited market research estimates in both the AssetCard component and the deal format section. Ensure legal review confirms this is sufficient for the jurisdictions where the site is distributed before going live.

---

## Sections Built

1. **Hero** — page label, headline, subhead with left-border accent
2. **The Case** — 5/7 split layout, thesis frame, link to `/africa`
3. **Asset Roadmap** — four-phase grid with ACTIVE/NEXT PHASE status badges
4. **Phase 1 Deep Dive** — three structural force cards + right-of-use callout panel
5. **Location Thesis** — two `<AssetCard>` components side by side (Nairobi + Accra)
6. **Deal Format** — 5/7 split, structured table with all deal parameters
7. **Access Path** — three-step process cards + closing CTA