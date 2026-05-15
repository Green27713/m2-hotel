# M2 Rooms & Stays Patong

A full hotel website for M2 Rooms & Stays, a boutique guesthouse-hotel in Patong Beach, Phuket, Thailand.

## Run & Operate

- `pnpm --filter @workspace/m2-hotel run dev` — run the hotel website (frontend only, no backend)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS
- UI: shadcn/ui components + Radix primitives
- Animation: Framer Motion
- Map: React Leaflet (Leaflet.js)
- Weather: Open-Meteo API (free, no key)
- Fonts: Playfair Display (headings) + Lato (body)
- Build: Vite static build

## Where things live

- `artifacts/m2-hotel/src/App.tsx` — main app and routing
- `artifacts/m2-hotel/src/index.css` — theme (HSL CSS variables) and global styles
- `artifacts/m2-hotel/src/pages/` — page components
- `artifacts/m2-hotel/src/components/` — shared UI components
- `attached_assets/` — generated and uploaded images

## Architecture decisions

- Presentation-first site: no backend, no OpenAPI, no database. Fully static.
- Weather data fetched client-side from Open-Meteo (free, no API key needed).
- Map uses React Leaflet with OpenStreetMap/CartoDB tiles (free, no API key).
- Single page app with wouter routing — all content on "/" as scrollable sections.

## Product

A full hotel marketing website for M2 Rooms & Stays Patong. Features: hero section, rooms showcase, live weather widget, interactive map with local attractions, amenities, local area guide, guest reviews, FAQ, owner's content guide, contact form, and footer.

## User preferences

- Site should blend Shangri-La luxury aesthetic with Lub D's fun/playful energy
- Warm tropical colour palette: deep teal primary, gold/amber accent, cream background
- Fully responsive (mobile + desktop)
- Playfair Display for headings, Lato for body text
- No emojis in UI
- Weather widget for Patong Beach, Phuket (Open-Meteo API)
- Interactive map they can update with hotel location + points of interest

## Gotchas

- Always add Google Fonts `@import url(...)` as the VERY FIRST LINE of index.css — PostCSS fails silently if it appears after other imports
- Leaflet requires CSS import (`leaflet/dist/leaflet.css`) and default icon fix (delete `_getIconUrl`, merge options)
- All CSS custom properties in index.css were initialised to `red` placeholder — must all be replaced before components render
- Weather: use Open-Meteo API — free, no key: https://api.open-meteo.com/v1/forecast?latitude=7.8956&longitude=98.2978&current=...

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
