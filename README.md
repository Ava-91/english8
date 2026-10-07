# English 8

Interactive English 8 learning website based on **Lesson 1 — My Nationality**.

## Project

A school assignment designed as an interactive learning aid rather than a digital copy of the textbook.

### Sections

- Home
- Lesson 1
- Interactive World Map
- Practice Quiz
- About

### Highlights

- Responsive desktop navigation
- Mobile bottom navigation inspired by the companion Arabic 8 project
- Interactive country selection
- Country → nationality learning
- Vocabulary cards
- Question-and-answer language patterns
- 10-question practice quiz
- Dark, focused educational UI
- Keyboard-friendly map interaction
- Reduced-motion support

## Tech

- Next.js 16
- React 19
- React Simple Maps
- Plain CSS

## Run locally

```bash
npm install
npm run dev
```

Then open the local development URL shown by Next.js.

## Build

```bash
npm run build
```

GitHub Actions also runs the production build on pushes and pull requests to `main`.

## Content note

The website uses original explanations, examples, interface design, and practice activities. It is intended for educational use alongside the official English 8 textbook.

The interactive map currently loads its TopoJSON geography data from jsDelivr at runtime, so the map requires network access.
