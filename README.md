# English 8 — My Nationality

An interactive English 8 learning website based on **Lesson 1: My Nationality** from Prospect 2.

## What it includes

- Home page with lesson overview
- Lesson 1 vocabulary and sentence patterns
- Interactive world map with country → nationality information
- Searchable list of 195 countries
- Practice quiz with instant feedback and score
- Responsive desktop navigation and fixed mobile bottom navigation
- Keyboard-friendly map controls and visible focus states
- Custom 404 and world-map error pages
- Reduced-motion support
- Local world geography data bundled through `world-atlas` — no runtime map CDN request

## Routes

- `/` — Home
- `/lesson-1` — Lesson 1
- `/world-map` — Interactive World Map
- `/practice` — Practice Quiz
- `/about` — About

## Tech

- Next.js 16
- React 19
- React Simple Maps
- world-atlas 2.0.2
- ESLint 9 + Next.js ESLint config
- Plain CSS
- Local JavaScript data

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run validate
npm run build
```

GitHub Actions runs the same lint, data validation, and production build checks on pushes and pull requests to `main`.

## Map data

The map uses the `countries-110m.json` dataset shipped by `world-atlas` and imports it directly into the application. This keeps the map independent of runtime CDN availability.

The educational country data is maintained separately in `data/countries.js`, keyed by ISO numeric IDs where available. The map also handles named map units such as Greenland, Taiwan, Kosovo, and Somaliland without allowing ID collisions to select the wrong country.

## Content and copyright

The interface, explanations, examples, and exercises are original project work. The site is intended as a learning aid and does not reproduce full textbook pages, audio, or other protected textbook content.

The geography dataset comes from the open-source `world-atlas` project, which redistributes Natural Earth vector data under the ISC license.
