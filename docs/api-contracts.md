---
title: API Contracts
project: gullet-stuffer
generated: 2026-06-04
scan_level: deep
---

# API Contracts

All API endpoints are implemented in `server.js` and served from the same origin as the built React app.

## GET `/api/instagram-feed`

Returns normalized Instagram media for the configured account.

### Configuration

| Environment variable | Purpose |
| --- | --- |
| `IG_USER_ID` | Instagram Graph user ID; defaults to `me`. |
| `IG_ACCESS_TOKEN` | Server-only Instagram access token. Required for live feed. |
| `IG_FEED_LIMIT` | Max upstream media count; defaults to `10`. |
| `IG_CACHE_TTL_SECONDS` | In-memory cache TTL; defaults to `900`. |

### Success Response

```json
{
  "data": [
    {
      "id": "string",
      "caption": "string",
      "media_type": "IMAGE | VIDEO | CAROUSEL_ALBUM",
      "media_url": "https://...",
      "thumbnail_url": "https://...",
      "permalink": "https://www.instagram.com/...",
      "timestamp": "2026-01-01T00:00:00+0000"
    }
  ],
  "paging": {}
}
```

### Failure Behavior

- If a fresh upstream request fails and a cached response exists, the server returns stale cached JSON with `Cache-Control: no-cache` and a warning header.
- If no cache exists, the server returns a sanitized JSON error:

```json
{
  "error": "Instagram feed is unavailable."
}
```

## GET `/api/dojiggy-leaderboards`

Returns normalized fundraising leaderboards for fundraisers and donors.

### Configuration

| Environment variable | Purpose |
| --- | --- |
| `DOJIGGY_LEADERBOARDS_URL` | CSV or JSON source URL. Shared Google Sheets URLs are normalized to CSV export URLs. |
| `DOJIGGY_GOOGLE_SHEET_GID` | Sheet tab gid for shared Google Sheet URLs; defaults to `0`. |
| `DOJIGGY_ACCESS_TOKEN` | Optional bearer token for protected leaderboard sources. |
| `DOJIGGY_LEADERBOARD_LIMIT` | Number of entries to return per board; defaults to `5`. |
| `DOJIGGY_CACHE_TTL_SECONDS` | In-memory cache TTL; defaults to `900`. |
| `DOJIGGY_ATHLETE_PAGES_ENABLED` | Set to `false` to disable athlete campaign page fallback scraping. |

### Success Response

```json
{
  "fundraisers": [
    {
      "id": "string",
      "name": "string",
      "amount": 1234,
      "donationCount": 5,
      "avatarUrl": "",
      "message": ""
    }
  ],
  "donors": [
    {
      "id": "string",
      "name": "string",
      "amount": 500,
      "donationCount": 1,
      "avatarUrl": "",
      "message": "optional"
    }
  ],
  "updatedAt": "2026-01-01T00:00:00.000Z",
  "configured": true
}
```

If `DOJIGGY_LEADERBOARDS_URL` is unset, the endpoint returns empty arrays and `configured: false`.

### Accepted Source Shapes

- Published CSV, including the Zapier/Google Sheets shape documented in `README.md`.
- Shared Google Sheets URLs, normalized by `server.js`.
- JSON arrays containing fundraiser, donor, or donation rows.
- Structured JSON objects with `fundraisers`, `topFundraisers`, `participants`, `donors`, `topDonors`, or `donations`.

### Failure Behavior

- Successful upstream responses are cached in memory.
- On failure, stale cached data is served when available.
- Without cache, the server returns:

```json
{
  "error": "DoJiggy leaderboards are unavailable."
}
```

## Static Asset / Route Fallback

After API routes, `server.js` serves `build/` statically and then sends `build/index.html` for all remaining paths. Keep this order so React Router pages work in production.

