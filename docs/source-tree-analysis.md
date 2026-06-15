---
title: Source Tree Analysis
project: gullet-stuffer
generated: 2026-06-04
scan_level: deep
---

# Source Tree Analysis

```text
gullet-stuffer/
├── package.json                  # Scripts, CRA/React dependencies, Express dependency
├── package-lock.json             # npm lockfile
├── server.js                     # Express production server and API integration layer
├── app.yaml                      # Google App Engine deployment config
├── tailwind.config.js            # Tailwind theme, fonts, colors, animations, custom utilities
├── postcss.config.js             # Tailwind/PostCSS integration
├── README.md                     # Project summary and DoJiggy setup notes
├── public/
│   ├── index.html                # CRA HTML shell
│   ├── manifest.json             # PWA/web app metadata
│   ├── dojiggy-leaderboards.sample.json
│   └── dojiggy-zapier-sheet.sample.csv
├── src/
│   ├── index.js                  # React root bootstrap, imports `tw-elements`
│   ├── App.js                    # React Router route table and global Navbar
│   ├── index.css                 # Tailwind layers, global utilities, font-face declarations
│   ├── App.css                   # Global body/root styling and legacy CRA styles
│   ├── setupTests.js             # CRA/Jest setup
│   ├── App.test.js               # Existing smoke test
│   ├── pages/                    # Route-level screens
│   ├── components/               # Reusable UI and feature components
│   ├── components/utils/         # Small shared animation/reveal utilities
│   ├── data/                     # Structured content for years, contestants, foods, HOF
│   ├── years/                    # Legacy year component
│   ├── fonts/                    # Local font assets registered in CSS/Tailwind
│   └── imgs/                     # Local historical media assets
└── docs/                         # Generated brownfield project documentation
```

## Critical Folders

| Path | Purpose |
| --- | --- |
| `src/pages` | Public route screens. New user-facing pages should be registered in `src/App.js`. |
| `src/components` | Shared UI and feature widgets, including navigation, leaderboards, Instagram feed, athlete cards, and forms. |
| `src/data` | Structured static content for events, athletes, foods, and hall-of-fame content. Prefer this over embedding large content arrays in JSX. |
| `src/fonts` | Local font files referenced by `src/index.css` and `tailwind.config.js`. |
| `src/imgs` | Historical/local image, audio, and video assets used by legacy pages and data. |
| `public` | CRA public assets and DoJiggy sample payloads for integration setup. |
| `docs` | Generated documentation and scan state. |

## Entry Points

- Client bootstrap: `src/index.js`
- Route table: `src/App.js`
- Production server/API layer: `server.js`
- Deployment config: `app.yaml`

## Integration Points

- React client calls same-origin `/api/instagram-feed` through `src/components/ig_feed_api.js`.
- React client calls same-origin `/api/dojiggy-leaderboards` through `src/components/dojiggy_leaderboards.js`.
- Express fetches third-party services and normalizes responses before returning client-safe JSON.

