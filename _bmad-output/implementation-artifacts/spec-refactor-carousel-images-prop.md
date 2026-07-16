---
title: 'Refactor Carousel to accept images as a prop'
type: 'refactor'
created: '2026-07-15'
status: 'done'
baseline_commit: 'b9d90b37a88d173d40560e3a887914dab7f97289'
context:
  - '{project-root}/_bmad-output/project-context.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** `Carousel` owns a fixed array of image URLs, preventing callers from reusing it with different image sets.

**Approach:** Change `Carousel` to receive an `images` array prop and pass that array through all rendering, navigation, drag, and autoplay behavior.

## Boundaries & Constraints

**Always:** Preserve the current carousel appearance and interaction behavior for a supplied non-empty image array. Keep the API and implementation in plain JavaScript and remove imports made obsolete by the refactor. Handle an empty or omitted array without throwing or advancing to an invalid slide.

**Ask First:** Adding a default image collection, changing carousel styling/timing, or activating the currently unused carousel on a page.

**Never:** Keep a hidden fixed image array inside the component, modify the user's existing `about.js` edit, introduce a new carousel dependency, or broaden this into unrelated cleanup.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Supplied images | Non-empty array of image URL strings | One slide and navigation dot render per supplied image; navigation and autoplay stay within the supplied array | N/A |
| No images | Omitted or empty `images` array | Component renders safely without slides or navigation dots | No runtime exception or invalid index updates |
| Images change | Rerender with a shorter or empty array | Selected index returns to a valid value | Clamp/reset the selected index |

</frozen-after-approval>

## Code Map

- `src/components/carousel.js` -- Owns carousel state, autoplay, drag navigation, slide rendering, and the current hard-coded URLs.
- `src/pages/about.js` -- Sole import site; contains the user's existing removal of a commented Carousel invocation and must remain untouched.

## Tasks & Acceptance

**Execution:**
- [x] `src/components/carousel.js` -- replace the module-owned image list with an `images` prop, pass it to the slide renderer, keep indices valid as input changes, and remove the unused testing-library import.
- [x] `src/components/carousel.test.js` -- add focused coverage proving supplied images are rendered and empty/changed inputs remain safe.

**Acceptance Criteria:**
- Given a caller supplies an array of image URLs, when `Carousel` renders, then its slides, dots, drag bounds, and autoplay bounds derive only from that array.
- Given no active Carousel call site exists, when the refactor is complete, then no page is changed or newly made to display the carousel.
- Given the user's uncommitted `src/pages/about.js` change, when implementation completes, then that existing change is preserved exactly.

## Spec Change Log

## Verification

**Commands:**
- `npm test -- --watchAll=false` -- expected: the focused Carousel tests and existing test suite pass.
- `npm run build` -- expected: the production client compiles successfully with no Carousel-related errors.

## Suggested Review Order

**Prop-driven behavior**

- The public API and bounded index make supplied arrays the single image source.
  [`carousel.js:15`](../../src/components/carousel.js#L15)

- Autoplay safely skips empty arrays and wraps using the current prop length.
  [`carousel.js:35`](../../src/components/carousel.js#L35)

- Rendering and navigation consume the supplied array without embedded defaults.
  [`carousel.js:81`](../../src/components/carousel.js#L81)

**Regression coverage**

- Focused tests cover supplied, omitted, empty, and shrinking image arrays.
  [`carousel.test.js:4`](../../src/components/carousel.test.js#L4)
