# JAG Website

Marketing and services website for **JAG** — Java · Architecture · QA consulting, based in Germany.

Built with **Next.js 16** (App Router) and **GSAP 3** for animations, from a Claude Design handoff.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript |
| Animations | GSAP 3 + ScrollTrigger |
| Fonts | Inter Tight (display/body) · Archivo (labels) via Google Fonts |
| Styling | Global CSS with custom design tokens |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, three commitments, services overview, Why JAG essay, proof band, testimonials, CTA |
| `/services` | Five service rows with sticky heads and numbered deliverable lists |
| `/about` | Bio, portrait card, values, four-chapter career timeline |
| `/training` | Format cards, 8-topic catalogue table, four-step process |
| `/contact` | Validated enquiry form + direct contact sidebar |

---

## GSAP effects

- **Hero**: staggered text entrance (kicker → title → caption → CTAs), emblem continuous float, plate glow pulse, crosshair flicker
- **Pillars**: scroll-triggered stagger from below, red rule width animation on enter + hover
- **Service tiles**: stagger with scale from scroll
- **Proof band**: animated number counters (0 → target) on scroll
- **Why JAG**: sticky LHS slide-in from left, RHS paragraph stagger, pull-quote slide
- **Social proof**: logo cell stagger, quote cards rise
- **Services page**: each row animates head/body from opposite sides independently
- **About page**: portrait slides left, bio slides right, bio paragraphs stagger, timeline rows cascade
- **Training page**: format cards stagger with scale, table rows cascade
- **Contact page**: form and sidebar slide from opposite sides, success message fade-up
- **Nav**: brand/links/CTA entrance + scroll shadow on `scrollY > 20`
- **Mobile drawer**: GSAP slide-down open, slide-up close, links stagger in
- **CTA band**: title, caption, button animate from opposite sides on scroll

---

## Design system

Ferrari-inspired editorial system: chiaroscuro (black/white), restrained typography, precision spacing.

| Token | Value |
|---|---|
| Accent (Rosso Corsa) | `#DA291C` |
| Black surface | `#000000` |
| Graphite surface | `#181818` |
| White surface | `#FFFFFF` |
| Ash surface | `#F5F5F5` |
| Display font | Inter Tight 400/500/600/700 |
| Label font | Archivo 400 |

---

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve production build
```

---

## Project structure

```
src/
  app/
    globals.css          # all design tokens + component styles
    layout.tsx           # root layout — Nav + Footer wrappers
    page.tsx             # home route
    about/page.tsx
    contact/page.tsx
    services/page.tsx
    training/page.tsx
  components/
    Nav.tsx              # sticky nav with mobile hamburger drawer
    Footer.tsx
    PageHead.tsx         # dark hero banner for sub-pages
    CTABand.tsx          # red CTA section
    home/
      HomePage.tsx
      Hero.tsx
      Pillars.tsx
      ServicesOverview.tsx
      WhyJAG.tsx
      ProofBand.tsx
      SocialProof.tsx
```

---

## Contact

Contact details available on request.
