# Investigation: Cloudflare Cache EXPIRED After Purge

## Hand-off Brief

1. **What happened.** User reports still receiving `CF-Cache-Status: EXPIRED` after purging everything in Cloudflare; Cloudflare documentation says `EXPIRED` means the resource existed in edge cache but its TTL had elapsed and it was served from origin.
2. **Where the case stands.** Initial evidence shows this app deliberately sends short or revalidating cache headers for HTML and APIs, while static build assets are long-lived.
3. **What's needed next.** Capture the exact URL and response headers showing `EXPIRED` so the status can be mapped to the route class and expected TTL.

## Case Info

| Field            | Value                                                                 |
| ---------------- | --------------------------------------------------------------------- |
| Ticket           | N/A                                                                   |
| Date opened      | 2026-07-08                                                            |
| Status           | Active                                                                |
| System           | gullet-stuffer Express production server, Cloudflare edge cache       |
| Evidence sources | User report, source code, Cloudflare cache response documentation     |

## Problem Statement

User reports: "i'm still getting a Cf-Cache-Status EXPIRED after purging everything in cloudflare"

Treat this as a hypothesis until the exact URL, headers, and request sequence are captured.

## Evidence Inventory

| Source                     | Status    | Notes                                                                 |
| -------------------------- | --------- | --------------------------------------------------------------------- |
| User report                | Available | Reports `CF-Cache-Status: EXPIRED` after Cloudflare purge everything. |
| Cloudflare docs            | Available | `EXPIRED` means cached object existed but TTL expired, then origin served it. |
| `server.js` cache headers  | Available | HTML uses `no-cache`; APIs use public 15-minute TTL by default; static assets use one-year immutable TTL. |
| Live response headers      | Missing   | Exact URL, `Cache-Control`, `Age`, `ETag`, `Last-Modified`, `CF-Ray`, and request timing not captured. |
| Cloudflare cache settings  | Missing   | Cache Rules, Origin Cache Control, Browser TTL, Edge TTL, Workers, and Tiered Cache settings unknown. |

## Investigation Backlog

| # | Path to Explore | Priority | Status | Notes |
| - | --------------- | -------- | ------ | ----- |
| 1 | Capture exact response headers for the affected URL twice in sequence | High | Open | Distinguishes expected revalidation from failed purge. |
| 2 | Identify whether affected URL is HTML, API JSON, or static build asset | High | Done | Route classes have different cache headers. |
| 3 | Check Cloudflare cache settings for cache-everything or edge TTL overrides | Medium | Open | Could make HTML/API behavior differ from origin headers. |

## Timeline of Events

| Time       | Event                                      | Source      | Confidence |
| ---------- | ------------------------------------------ | ----------- | ---------- |
| 2026-07-08 | User purged everything in Cloudflare       | User report | Deduced    |
| 2026-07-08 | User observed `CF-Cache-Status: EXPIRED`   | User report | Confirmed  |

## Confirmed Findings

### Finding 1: HTML responses intentionally require revalidation

**Evidence:** `server.js:658`

**Detail:** The catch-all HTML route sets `Cache-Control: no-cache` before sending `index.html`. This allows storage but requires revalidation before reuse.

### Finding 2: API success responses are cacheable for 15 minutes by default

**Evidence:** `server.js:567`, `server.js:576`, `server.js:596`, `server.js:605`

**Detail:** Instagram and DoJiggy API success responses send `Cache-Control: public, max-age=<ttl>`, where the default TTL is 900 seconds.

### Finding 3: Static build assets are long-lived and immutable

**Evidence:** `server.js:630`, `server.js:648`

**Detail:** `/main.js`, `/main.css`, and files under `build/static` send `Cache-Control: public, max-age=31536000, immutable`.

## Deduced Conclusions

### Deduction 1: `EXPIRED` after a purge can be normal after the object has been re-cached and then its TTL expires

**Based on:** Cloudflare definition of `EXPIRED`; Findings 1 and 2.

**Reasoning:** Purge removes existing edge objects. A subsequent request can repopulate cache. When that new object's freshness lifetime ends, Cloudflare can report `EXPIRED` and fetch origin again.

**Conclusion:** `EXPIRED` is not by itself evidence that purge failed.

## Hypothesized Paths

### Hypothesis 1: The observed `EXPIRED` is for `index.html` or an app route using `Cache-Control: no-cache`

**Status:** Open

**Theory:** Cloudflare stored the HTML object but immediately had to revalidate it, producing `EXPIRED` or similar revalidation statuses depending on Cloudflare settings and origin validators.

**Supporting indicators:** The app sets `Cache-Control: no-cache` for HTML.

**Would confirm:** Exact affected URL is `/`, `/about`, `/events`, or another client route, and response headers include `Cache-Control: no-cache`.

**Would refute:** Exact affected URL is a hashed static asset with one-year immutable cache headers.

**Resolution:** Open.

### Hypothesis 2: The observed `EXPIRED` is for an API endpoint after its 900-second TTL elapsed

**Status:** Open

**Theory:** `/api/instagram-feed` or `/api/dojiggy-leaderboards` was cached, became older than 900 seconds, and Cloudflare fetched origin.

**Supporting indicators:** API success responses default to `max-age=900`.

**Would confirm:** Exact affected URL is one of the API endpoints, with `Cache-Control: public, max-age=900`.

**Would refute:** Affected URL is not an API route, or Cloudflare settings override origin TTL.

**Resolution:** Open.

## Missing Evidence

| Gap | Impact | How to Obtain |
| --- | ------ | ------------- |
| Exact affected URL and response headers | Determines whether `EXPIRED` is expected for the route class | `curl -I -L https://example/path` twice, preserving all headers |
| Cloudflare cache configuration | Determines whether edge TTL or cache rules override app headers | Inspect Cache Rules, Page Rules, Workers, and Origin Cache Control |
| Request sequence after purge | Determines whether edge was repopulated before `EXPIRED` appeared | Record first and second request after purge with timestamps |

## Source Code Trace

| Element       | Detail |
| ------------- | ------ |
| Error origin  | Not an application error; status produced by Cloudflare edge |
| Trigger       | Request to a URL proxied through Cloudflare |
| Condition     | Cached object exists at edge but its freshness lifetime has expired |
| Related files | `server.js` |

## Conclusion

**Confidence:** Medium

The evidence shows `CF-Cache-Status: EXPIRED` is compatible with normal Cloudflare behavior after a purge, because a post-purge request can re-cache the object and later expire. In this app, HTML is deliberately `no-cache`, API responses have a short default 900-second TTL, and hashed/static assets are one-year immutable. The unresolved question is which exact URL is returning `EXPIRED`.

## Recommended Next Steps

### Fix direction

No code fix is indicated until the affected URL is identified. If `EXPIRED` is on app routes or `index.html`, that is consistent with the current `no-cache` strategy. If it is on hashed static assets soon after purge, inspect Cloudflare settings or deployment asset paths.

### Diagnostic

Run two header requests against the affected URL and compare `CF-Cache-Status`, `Cache-Control`, `Age`, `ETag`, `Last-Modified`, and `CF-Ray`.

## Reproduction Plan

1. Purge the affected URL or purge everything in Cloudflare.
2. Request the URL once and record all response headers.
3. Request the same URL again immediately and record all response headers.
4. Wait past the route TTL when applicable, then request again and record headers.

## Side Findings

- The repo's intended cache strategy differs by route class: HTML revalidates, API data has short freshness, and static assets are long-lived.

