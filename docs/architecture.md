---
title: Architecture
project: gullet-stuffer
generated: 2026-06-04
scan_level: deep
---

# Architecture

## Executive Summary

`gullet-stuffer` is a React single-page application with a thin Express production server. The architecture is a monolithic web app: client routes, static content, reusable UI, and server integration endpoints live in one package.

The main architectural boundary is between browser-safe React code in `src/` and server-only integration logic in `server.js`.

## Technology Stack

| Category | Technology | Version / Source |
| --- | --- | --- |
| Client framework | React | `^18.2.0` |
| Build system | Create React App / `react-scripts` | `5.0.1` |
| Routing | `react-router-dom` | `^6.5.0` |
| Server | Express | `^4.22.2` |
| Styling | Tailwind CSS | `^3.2.4` |
| Testing | CRA/Jest, React Testing Library | package dependencies |
| Deployment | Google App Engine | `app.yaml`, `nodejs22` |

## Architecture Pattern

The client follows a route/page/component/data structure:

- `src/App.js`: route composition.
- `src/pages`: route-level screens.
- `src/components`: reusable and feature-specific UI.
- `src/data`: static structured content.
- `src/index.css` and `tailwind.config.js`: visual system and design tokens.

The server follows a single-file Express integration pattern:

- Environment loading through `dotenv`.
- Integration helpers and normalizers as module-local functions.
- API routes for normalized JSON.
- Static `build/` serving and React Router fallback.

## Client Architecture

### Routing

Routes are declared in `src/App.js` using React Router v6:

- `/`
- `/about`
- `/events`
- `/gs8`
- `/hof`
- `/partners`
- `/merch`
- `/merch2`
- `/merch/success`
- `/vote`

### State

There is no global state library. State is local to components and pages via class component state or hooks.

Examples:

- `src/pages/events.js`: selected year and active tab.
- `src/components/dojiggy_leaderboards.js`: leaderboard data, loading, and error state.
- `src/components/ig_feed.js`: Instagram items and error state.

### Styling

Tailwind utilities are the dominant styling approach. Global CSS provides font-face declarations, body/root defaults, and a few reusable utilities such as `no-scroll`.

The brand system depends on:

- Black backgrounds.
- `gs_red`, `gs_purple`, and `gold`.
- Custom display fonts such as Phosphate, Heavitas, Lemon Milk, and OpenSans variants.

## Server Architecture

`server.js` provides:

- `/api/instagram-feed`: Instagram Graph API proxy and normalizer.
- `/api/dojiggy-leaderboards`: DoJiggy/Google Sheets/CSV/JSON normalizer and leaderboard aggregator.
- Static serving from `build/`.
- Catch-all routing for SPA page refreshes.

External feed routes share a safe-failure pattern:

- Cache successful responses in memory.
- Serve stale cache if upstream fails.
- Return sanitized client errors when no cache exists.
- Keep access tokens in server-only environment variables.

## Data Architecture

The app has no database. Data comes from:

- Static JavaScript modules in `src/data`.
- External image/media URLs.
- Server-normalized live integration payloads.

See [Data Models](./data-models.md).

## API Design

API routes are same-origin JSON endpoints intended for the React client only. They are not currently versioned and do not implement authentication.

See [API Contracts](./api-contracts.md).

## Testing Strategy

Testing uses CRA/Jest and React Testing Library. The current test surface is minimal. New tests should focus on user-visible behavior, route-visible UI, and integration component states.

## Operational Notes

- `npm run dev` runs the CRA dev server.
- `npm run build` creates `build/`.
- `npm start` runs Express and requires `build/`.
- App Engine uses `npm start` as the entrypoint.

