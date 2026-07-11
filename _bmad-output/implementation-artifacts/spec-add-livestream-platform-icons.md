---
title: 'Add Livestream Platform Icons'
type: 'feature'
created: '2026-07-11'
status: 'done'
route: 'one-shot'
---

# Add Livestream Platform Icons

## Intent

**Problem:** The home-page livestream buttons relied on text alone, making the platform choices less immediately recognizable.

**Approach:** Add consistently sized Twitch, Instagram, and YouTube icons from the existing icon library while preserving accessible text labels and responsive button behavior.

## Suggested Review Order

- Review the icon imports and normalized platform-button presentation.
  [`home_twitch.js:3`](../../src/pages/home_twitch.js#L3)

- Confirm each decorative icon remains hidden from assistive technology.
  [`home_twitch.js:97`](../../src/pages/home_twitch.js#L97)
