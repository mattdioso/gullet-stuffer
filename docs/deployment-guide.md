---
title: Deployment Guide
project: gullet-stuffer
generated: 2026-06-04
scan_level: deep
---

# Deployment Guide

## Deployment Target

`app.yaml` configures Google App Engine standard environment:

| Field | Value |
| --- | --- |
| Runtime | `nodejs22` |
| Environment | `standard` |
| Instance class | `F4` |
| Entrypoint | `npm start` |

## Build and Start Flow

1. Install dependencies with `npm install`.
2. Build the React app with `npm run build` or `npm run gcp-build`.
3. Start the production server with `npm start`.
4. Express serves `build/`, API endpoints, and the React Router catch-all fallback.

## Runtime Port

`server.js` listens on `process.env.PORT || 8080`. App Engine supplies `PORT` at runtime.

## App Engine Environment Variables

`app.yaml` currently includes:

```yaml
env_variables:
  IG_USER_ID: "me"
  IG_FEED_LIMIT: "10"
  IG_CACHE_TTL_SECONDS: "900"
```

Secrets such as `IG_ACCESS_TOKEN` and `DOJIGGY_ACCESS_TOKEN` should be configured securely and should not be committed.

## Integration Configuration

Instagram feed requires a server-side access token:

- `IG_USER_ID`
- `IG_ACCESS_TOKEN`
- `IG_FEED_LIMIT`
- `IG_CACHE_TTL_SECONDS`

DoJiggy leaderboards use either CSV/Google Sheets or JSON source configuration:

- `DOJIGGY_LEADERBOARDS_URL`
- `DOJIGGY_GOOGLE_SHEET_GID`
- `DOJIGGY_ACCESS_TOKEN`
- `DOJIGGY_LEADERBOARD_LIMIT`
- `DOJIGGY_CACHE_TTL_SECONDS`

## Production Routing Requirement

Keep route order in `server.js`:

1. API routes.
2. `express.static(buildPath)`.
3. Catch-all `app.get('*')` returning `build/index.html`.

Changing this order can break either API calls or React Router page refreshes.

