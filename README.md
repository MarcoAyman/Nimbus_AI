<div align="center">

# ☁️ Nimbus — AI Workspace Landing Page

**A modern, fully-responsive marketing landing page for a fictional AI workspace product, built with React + Vite and deployed on Vercel.**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## 📖 Description

**Nimbus** is a polished, production-quality landing page for an imagined AI workspace SaaS — the kind of product that connects your tools, automates busywork, and turns scattered company knowledge into instant answers.

The page is a single-scroll experience with a dark, gradient-accented design and a glass-morphism aesthetic. It walks a visitor from hook to conversion: a hero with an animated app mockup, a live-counting stats band, a bento-grid feature showcase, a three-step "how it works" flow, social-proof testimonials, transparent pricing tiers, an accordion FAQ, and a final email-capture call-to-action.

Originally authored as a static HTML/CSS/JS page, it has been **rebuilt as a component-driven React + Vite application** — keeping every word of the original copy intact while adding a maintainable architecture, motion polish, and end-to-end mobile responsiveness.

## ✨ Features

- 🎨 **Modern dark UI** — gradient text, glow orbs, a masked grid background, and glass surfaces
- 📱 **Fully responsive** — fluid layouts from large desktops down to small phones, with iOS safe-area support and comfortable touch targets
- 🎬 **Scroll-reveal animations** — powered by Framer Motion, gracefully disabled for users who prefer reduced motion
- 🔢 **Animated stat counters** — numbers count up with a cubic ease when scrolled into view
- 💬 **Interactive app mockup** — a faux chat UI with a typing indicator, illustrating the product in action
- 📂 **Accordion FAQ** — opening one question smoothly closes the others
- 📨 **Email capture form** — client-side validation with inline success / error feedback
- 🍔 **Sticky nav + mobile menu** — translucent on scroll, with a hamburger menu on small screens
- ⚡ **Fast & lightweight** — static build, code-split and gzip-optimized by Vite

## 🛠️ Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | [React 18](https://react.dev) |
| Build tool | [Vite 5](https://vitejs.dev) |
| Animation | [Framer Motion 11](https://www.framer.com/motion/) |
| Styling | Hand-written CSS (custom properties, grid, clamp-based fluid type) |
| Fonts | Inter + Sora (Google Fonts) |
| Hosting | [Vercel](https://vercel.com) |

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server  →  http://localhost:5173
npm run dev

# 3. Build for production   →  outputs to dist/
npm run build

# 4. Preview the production build locally
npm run preview
```

> Requires Node.js 18+.

## ☁️ Deploy to Vercel

The repo ships with a `vercel.json` preconfigured for Vite, so deployment is zero-config.

**Dashboard**
1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Vite (build: `vite build`, output: `dist`). Click **Deploy**.

**CLI**
```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

## 📁 Project Structure

```
.
├── index.html               # Vite entry — fonts, meta tags, #root mount
├── vite.config.js           # Vite + React plugin config
├── vercel.json              # Vercel (Vite preset) deploy config
├── src/
│   ├── main.jsx             # React entry point
│   ├── App.jsx              # Page composition
│   ├── index.css            # All styles + responsive breakpoints
│   ├── components/
│   │   ├── Background.jsx   # Grid + glow background layers
│   │   ├── Nav.jsx          # Sticky nav with mobile menu
│   │   ├── Hero.jsx         # Headline + animated app mockup
│   │   ├── Stats.jsx        # Count-up stats band
│   │   ├── Features.jsx     # Bento feature grid
│   │   ├── HowItWorks.jsx   # 3-step flow
│   │   ├── Testimonials.jsx # Customer quotes
│   │   ├── Pricing.jsx      # Pricing tiers
│   │   ├── Faq.jsx          # Accordion FAQ
│   │   ├── CtaFinal.jsx     # Email-capture CTA
│   │   ├── Footer.jsx       # Footer with link columns
│   │   ├── Reveal.jsx       # Reusable scroll-reveal wrapper
│   │   └── BrandMark.jsx    # SVG logo mark
│   └── hooks/
│       ├── useScrolled.js   # Sticky-nav scroll state
│       └── useCountUp.js    # Number count-up animation
└── _original/               # Original static HTML/CSS/JS (kept for reference)
```

## ♿ Accessibility & Performance

- Honors `prefers-reduced-motion` — all reveal animations and the typing indicator are disabled.
- Semantic landmarks (`header`, `main`, `footer`, `nav`) and ARIA labels on interactive controls.
- Lazy-loaded testimonial avatars and preconnected font origins.
- Minimum 44px tap targets on touch devices.

## 📝 License

This is a demo / portfolio project. The "Nimbus" brand, copy, logos, and testimonials are fictional and for illustrative purposes only.

---

<div align="center">
Made with React + Vite ⚡
</div>
