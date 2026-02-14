# Piyush Awning – Website

Light-modern, nature-themed marketing website for Piyush Awning: premium awnings, gazebos and pergolas. Built with Next.js, React Three Fiber, Tailwind CSS and Framer Motion.

## Setup

- **Node**: 18+
- **Package manager**: npm

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` – development server
- `npm run build` – production build
- `npm run start` – run production build
- `npm run lint` – ESLint

## Configuration

- **WhatsApp / phone**: Edit `lib/constants.ts` (`WHATSAPP_NUMBER`, `PHONE_NUMBER`).
- **Map**: Update `MAP_EMBED_URL` in `lib/constants.ts` with your Google Maps embed URL.
- **Content**: Update JSON files in `data/` (products, projects, FAQ, gallery). Replace placeholder image URLs with your own (or use files in `public/`).

## Tech stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- React Three Fiber + Drei (3D hero and product viewer)
- Framer Motion (parallax, animations)
- react-masonry-css (projects grid)

## Structure

- `app/` – routes and layouts
- `components/` – layout (Header, Footer, FloatingLeadButtons), UI (Button, Card, Accordion), sections (Hero, FeaturedProducts, etc.), three (HeroCanvas, ProductViewer)
- `data/` – static content (products, projects, FAQ, gallery)
- `lib/` – constants (nav, WhatsApp, map URL)
