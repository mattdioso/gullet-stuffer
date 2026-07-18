---
title: 'Remove GSVIII Athlete Support Buttons'
type: 'chore'
created: '2026-07-18'
status: 'done'
route: 'one-shot'
---

# Remove GSVIII Athlete Support Buttons

## Intent

**Problem:** GSVIII athlete cards displayed campaign support buttons that should no longer appear at the bottom of each card.

**Approach:** Remove the campaign-link controls only from the GSVIII-specific athlete card component, preserving athlete details and support links elsewhere in the site.

## Suggested Review Order

**UI change**

- GSVIII cards now end after performance history, with no campaign action.
  [`gs8_athlete_section.js:74`](../../src/components/gs8_athlete_section.js#L74)

**Regression coverage**

- Both divisions retain athlete details while exposing no support links.
  [`gs8_athlete_section.test.js:21`](../../src/components/gs8_athlete_section.test.js#L21)
