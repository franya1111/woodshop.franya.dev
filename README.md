# WOODWAVE HOME — Handcrafted Willow, Rattan & Solid Wood Furniture

A modern e-commerce storefront for handcrafted willow, rattan, and solid wood furniture. Built with Next.js 16, TypeScript, Tailwind CSS 4, and Zustand.

## Quick start (run on your server, no installations needed)

The repository ships with a **pre-built static site** in `./out`. To run it on any Linux server (Linux Mint, Ubuntu, Debian, etc.):

```bash
# 1. Clone the repo
git clone https://github.com/franya1111/woodshop.franya.dev.git
cd woodshop.franya.dev

# 2. Serve the static site (uses Python 3, built into most distros)
bash serve.sh
```

The site will be available at `http://localhost:8080`.

To use a different port:

```bash
PORT=3000 bash serve.sh
```

To expose it on the public IP (e.g. for a VPS):

```bash
PORT=80 bash serve.sh   # requires sudo if port < 1024
```

## Rebuilding the site (optional)

Only needed if you edit the source code in `src/`. Requires Node.js >= 18 + Bun (or npm):

```bash
bash build.sh
```

This regenerates the `./out` directory.

## Tech stack

- **Framework:** Next.js 16 (App Router, static export `output: "export"`)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 + custom WoodWave design tokens
- **State:** Zustand (cart + quick view, persisted in localStorage)
- **Images:** AI-generated, stored locally in `public/img/`
- **Fonts:** System UI stack (no web fonts — same as woodwave.ie)

## Project structure

```
woodshop.franya.dev/
├── out/                  # Pre-built static site (what gets served)
├── public/img/           # 28 AI-generated furniture photos
├── src/
│   ├── app/              # Next.js App Router (layout, page, globals)
│   ├── components/site/   # Header, Hero, ProductCard, Cart, QuickView, etc.
│   ├── hooks/            # useReveal for scroll animations
│   └── lib/              # products.ts, cart-store.ts, quickview-store.ts
├── serve.sh              # Run the static site
├── build.sh              # Rebuild the static site
└── README.md
```

## Features

- 6 furniture categories, 12 product pages
- Sticky header with backdrop-blur, mobile menu
- Hero with sharp background image and clean WOODWAVE wordmark
- Scroll-reveal animations (IntersectionObserver)
- Cart drawer with localStorage persistence (Zustand)
- Quick view modal with color swatches and specs
- Image gallery with lightbox (keyboard arrows + Esc)
- Filter tabs by category
- Testimonials, About, Newsletter sections
- Responsive: mobile 390×844 → desktop 1920×1080

## Contact

- **Phone:** +353 85 7614192
- **Email:** mcos2666@gmail.com
- **Workshop:** R14RY62 Athy, co. Kildare, Ireland
- **Hours:** Monday – Sunday 9:00 AM – 7:00 PM

## License

© 2026 WOODWAVE HOME. All rights reserved.
