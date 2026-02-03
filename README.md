# React + Vite Portfolio

<div align="center">

![Vite 7](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/Component%20Driven-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
[![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/timmytimmytimmytime/timmytimmytimmytime.github.io/actions)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=for-the-badge&logo=github-pages&logoColor=white)](https://timmytimmytimmytime.github.io/)

**React + Vite portfolio with dual-panel layout, motion-friendly media handling, and GitHub Actions → GitHub Pages deploys.**

<br /><br />

<h1 style="border: none;">Live Portfolio → <a href="https://timmytimmytimmytime.github.io">timmytimmytimmytime.github.io</a></h1>

<br /><br />

</div>

## Features
- Single-page React + Vite app highlighting current and past projects.
- Responsive layout that keeps motion-heavy media consumable on phones.
- Project cards reveal looping video/GIF previews on hover or touch.
- Theme switcher tucked behind `?themeSwitcher=1` for demo palettes.
- GitHub Actions → GitHub Pages pipeline for hands-off deployments.

## Tech Stack Highlights
- **Vite 7 + React + SWC** for ultra-fast dev server and production builds.
- **CSS Modules + palette tokens** scope styles and flip themes instantly.
- **IntersectionObserver + requestAnimationFrame** power scroll-synced breadcrumbs and pointer lighting.
- **Card/media pipeline** normalizes `/assets` paths for GitHub Pages and layers static + motion assets safely.
- **StoreButton and GitHub-btn components** wrap CTA links so buttons stay consistent across projects.

## Theme Exploration
Default deploy stays on the curated palette. For demos/testing, open the live site with [`?themeSwitcher=1`](https://timmytimmytimmytime.github.io/?themeSwitcher=1) (also works locally). The switcher toggles `document.body` classes mapped in `src/palettes.css`, so palettes can be changed at runtime without rebuilding.

## Development Workflow
```bash
npm install          # dependencies
npm run dev          # Vite dev server @ http://localhost:5173
npm run build        # production bundle -> dist/
npm run preview      # serve built assets locally
npm run lint         # eslint .
```

## CI/CD & Quality Gates
- GitHub Actions workflow installs dependencies, runs lint/tests, builds, and deploys to GitHub Pages.
