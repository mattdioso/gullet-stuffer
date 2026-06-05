---
project_name: 'gullet-stuffer'
user_name: 'matt'
date: '2026-06-04'
sections_completed: ['technology_stack', 'language_specific_rules', 'framework_specific_rules', 'testing_rules', 'code_quality_style_rules', 'development_workflow_rules', 'critical_dont_miss_rules']
existing_patterns_found: 15
status: 'complete'
rule_count: 45
optimized_for_llm: true
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

- Client app is Create React App using React 18.2 and `react-scripts 5.0.1`; do not introduce Next.js, Vite, TypeScript, or a new router unless explicitly requested.
- Production serving and API endpoints live in `server.js` on Express 4.22; `npm start` runs the Express server, while `npm run dev` runs the CRA dev server.
- Routing uses `react-router-dom` v6 with `<Routes>` / `<Route>` declarations in `src/App.js`.
- Styling is Tailwind CSS 3.2 plus global CSS in `src/index.css` and `src/App.css`; preserve the custom Tailwind theme names and font families.
- Tests use CRA/Jest and React Testing Library; keep tests compatible with `react-scripts test`.

## Critical Implementation Rules

### Language-Specific Rules

- Keep the project in plain JavaScript. Do not add TypeScript files, TS configs, or type-only syntax unless the migration is explicitly requested.
- Use ES module imports/exports in `src/`; use CommonJS in `server.js` to match the existing Express server.
- Keep component and page filenames consistent with the repo's lowercase/snake_case style, even when component symbols are PascalCase.
- Export static content from `src/data` as named constants, and keep page/component rendering data-driven where existing pages already use data modules.
- Never expose integration secrets through `REACT_APP_*` client code. Prefer server-only environment variables and API routes in `server.js`.
- For server fetch failures, return sanitized public errors and preserve the stale-cache fallback pattern when cached data exists.

### Framework-Specific Rules

- Add routes in `src/App.js` using React Router v6 `<Route path="..." element={<Component />} />`; do not use v5 `Switch`, `component`, or `render` props.
- Put route-level views in `src/pages` and reusable UI in `src/components`; keep static event/contestant/history content in `src/data`.
- Prefer function components and hooks for new React code, but do not rewrite existing class components unless the task requires it.
- Keep async client fetches local to the component with loading/error UI and effect cleanup guards to avoid setting state after unmount.
- Use existing server endpoints under `/api/*` for third-party data; add new integration endpoints in `server.js` when secrets, caching, or normalization are needed.
- Preserve Express cache behavior: successful upstream responses update in-memory cache; failures serve stale cache when available; public responses should not leak upstream credentials or raw provider errors.

### Testing Rules

- Keep tests compatible with CRA's Jest setup and `react-scripts test`; do not add a second test runner unless explicitly requested.
- Use React Testing Library for component behavior; prefer visible text, roles, and user-observable states over implementation details.
- Add focused tests for changed interactive behavior, routing-visible UI, and API-driven loading/error states.
- Mock `fetch` for components that call `/api/*`; verify loading, success, empty, and failure UI when the change affects those paths.
- Avoid snapshot-heavy tests for Tailwind markup unless the task specifically needs structural regression coverage.
- If server API normalization grows, prefer extracting pure helpers before testing them rather than driving tests through a live Express server.

### Code Quality & Style Rules

- Follow the existing lowercase/snake_case filename convention for new pages, components, utilities, and data files.
- Use PascalCase for React component symbols even when the file name is lowercase.
- Prefer Tailwind utility classes and existing theme tokens (`gs_red`, `gs_purple`, `gold`, custom font families) before adding new CSS.
- Add global CSS only for font faces, reusable low-level utilities, or behavior Tailwind cannot express cleanly.
- Keep large static content out of components when it is event, contestant, food, sponsor, or history data; place it in `src/data` and render from data.
- Preserve the black/neon Gullet Stuffer visual language unless the task explicitly asks for a redesign.
- Keep comments rare and useful; do not add explanatory comments for straightforward JSX or Tailwind classes.
- Update `README.md` when adding or changing environment variables, server endpoints, or external integration setup.

### Development Workflow Rules

- Use `npm run dev` for local CRA development and `npm run build` to verify production client builds.
- Use `npm start` only when a `build/` directory exists or when intentionally testing the production Express server.
- Keep production API behavior in `server.js`; the deployed server serves both static CRA assets and `/api/*` endpoints.
- When changing integration behavior, verify both the client component and the server route/normalization path.
- Document any new required environment variables in `README.md` alongside the existing DoJiggy configuration notes.
- No branch naming, commit message, or PR template convention is currently defined in this repo; do not invent one in project context.

### Critical Don't-Miss Rules

- Do not put Instagram, DoJiggy, or future third-party access tokens in React client code; secrets must stay server-side in `server.js`.
- Preserve `/api/instagram-feed` and `/api/dojiggy-leaderboards` safe-failure behavior: sanitized errors, no-store on uncached failures, and stale cached responses when available.
- DoJiggy normalization must continue accepting published CSV, shared Google Sheet URLs normalized to CSV export, JSON arrays, and structured JSON payloads.
- Do not remove filtering that prevents event/campaign summary rows from appearing as athlete fundraisers.
- Keep leaderboard components resilient to loading, error, empty, and `configured: false` states.
- Do not change route paths casually; public pages like `/`, `/about`, `/events`, `/gs8`, `/hof`, `/partners`, `/merch`, and `/vote` are user-facing URLs.
- External image/font assets are central to the current site; verify visual changes in both mobile and desktop layouts when touching major page sections.
- Keep the Express catch-all route after API routes and static middleware so client-side routing continues to work in production.

---

## Usage Guidelines

**For AI Agents:**

- Read this file before implementing code.
- Follow all rules exactly as documented.
- When uncertain, prefer the existing project pattern over adding a new abstraction.
- Update this file when new project-specific implementation rules emerge.

**For Humans:**

- Keep this file lean and focused on unobvious agent guidance.
- Update it when the technology stack, deployment model, or integration patterns change.
- Remove rules that become stale or obvious over time.

Last Updated: 2026-06-04
