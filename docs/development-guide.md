---
title: Development Guide
project: gullet-stuffer
generated: 2026-06-04
scan_level: deep
---

# Development Guide

## Prerequisites

- Node.js compatible with Create React App 5 and the deployment runtime. `app.yaml` uses `nodejs22`.
- npm, using the checked-in `package-lock.json`.

## Install

```bash
npm install
```

## Local Development

```bash
npm run dev
```

This starts the CRA development server. `package.json` also defines a proxy to `http://localhost:8080`, so API testing may require running the Express server separately or using production-mode testing after a build.

## Production Build

```bash
npm run build
```

`gcp-build` runs the same command for deployment.

## Production Server

```bash
npm start
```

This runs `node server.js`, which expects a built CRA app in `build/`. It serves static files and the `/api/*` routes.

## Testing

```bash
npm test
```

Tests use CRA/Jest and React Testing Library. Existing setup files are `src/setupTests.js` and `src/App.test.js`.

## Environment Setup

Use `.env.example` as the safe reference for environment variable names. Do not copy secrets into documentation.

Client-exposed variables:

- `REACT_APP_MAILCHIMP_URL`
- `REACT_APP_STRIPE_URL`
- `REACT_APP_IG_USERNAME`
- `REACT_APP_IG_FEED_URL`

Server-only variables:

- `IG_USER_ID`
- `IG_ACCESS_TOKEN`
- `IG_FEED_LIMIT`
- `IG_CACHE_TTL_SECONDS`
- `DOJIGGY_LEADERBOARDS_URL`
- `DOJIGGY_GOOGLE_SHEET_GID`
- `DOJIGGY_ACCESS_TOKEN`
- `DOJIGGY_LEADERBOARD_LIMIT`
- `DOJIGGY_CACHE_TTL_SECONDS`
- `DOJIGGY_ATHLETE_PAGES_ENABLED`

## Common Change Patterns

- Add a public page in `src/pages`, then register it in `src/App.js`.
- Add reusable UI in `src/components`.
- Add static event, athlete, food, or hall-of-fame content in `src/data`.
- Add third-party integrations in `server.js` when secrets, caching, or normalization are involved.
- Update `README.md` when integration env vars or setup steps change.

## Code Style Constraints

- Plain JavaScript only unless a TypeScript migration is explicitly requested.
- ES modules in `src/`; CommonJS in `server.js`.
- Lowercase/snake_case filenames for new source files.
- Tailwind-first styling with existing theme tokens before new CSS.

