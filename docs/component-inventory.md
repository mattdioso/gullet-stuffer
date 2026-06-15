---
title: Component Inventory
project: gullet-stuffer
generated: 2026-06-04
scan_level: deep
---

# Component Inventory

## Route Pages

| File | Route | Role |
| --- | --- | --- |
| `src/pages/home.js` | `/` | Home page, countdown, event summary, DoJiggy leaderboards, top fundraisers, Mailchimp signup. |
| `src/pages/about.js` | `/about` | About page for the event and charity context. |
| `src/pages/events.js` | `/events` | Interactive history page with year selector, story, standings, and video tabs. |
| `src/pages/GS8.js` | `/gs8` | Current GSVIII page with countdown, event invite, and athlete sections. |
| `src/pages/hof.js` | `/hof` | Hall of Fame page with champions, notable competitors, moments, and fundraisers. |
| `src/pages/sponsors.js` | `/partners` | Sponsors/community partner page. |
| `src/pages/merch_custom.js` | `/merch` | Current merch page with checkout modal behavior. |
| `src/pages/merch.js` | `/merch2` | Legacy merch route. |
| `src/pages/voters_guide.js` | `/vote` | Voting guide page. |
| `src/components/merch_success.js` | `/merch/success` | Merch checkout success route. |

## Navigation and Layout

| Component | File | Notes |
| --- | --- | --- |
| `Navbar` | `src/components/navbar.js` | Fixed black nav, desktop links, mobile menu, social icons. |
| `SectionContainer` | `src/components/section_container.js` | Small layout wrapper. |
| `Reveal`, `RevealTable` | `src/components/utils/` | Framer Motion reveal helpers. |

## Event and Athlete Display

| Component | File | Notes |
| --- | --- | --- |
| `GS8AthleteSection` | `src/components/gs8_athlete_section.js` | GSVIII pro/amateur grids with athlete cards and inline food graphics. |
| `AthleteCard` | `src/components/athlete_card.js` | Smaller athlete card component. |
| `ContestantCard` | `src/components/contestant_card.js` | Flippable/visual card used by Hall of Fame. |
| `ContestantProfile` | `src/components/contestant_profile.js` | Legacy contestant profile display. |
| `EventInvite` | `src/components/event_invite.js` | GSVIII event invitation/details block. |
| `GSYear` | `src/years/GSYear.js` | Legacy year display component. |

## Live Integrations

| Component | File | Notes |
| --- | --- | --- |
| `DojiggyLeaderboards` | `src/components/dojiggy_leaderboards.js` | Fetches `/api/dojiggy-leaderboards`, filters athlete fundraisers, renders skeleton/empty/list states. |
| `IGFeed` | `src/components/ig_feed.js` | Embla carousel for Instagram feed with fallback CTA on error. |
| `fetchInstagramFeed` | `src/components/ig_feed_api.js` | Client-side adapter for normalized Instagram endpoint response. |
| `PrevButton`, `NextButton`, `usePrevNextButtons` | `src/components/ig_feed_buttons.js` | Embla carousel controls. |
| `SelectedSnapDisplay`, `useSelectedSnapDisplay` | `src/components/ig_feed_selected_snap_display.js` | Embla selected snap indicator. |
| `TwitchLivestream` | `src/components/twitch_livestream.js` | Twitch embed support for legacy/hidden route. |

## Forms and Commerce

| Component | File | Notes |
| --- | --- | --- |
| `GulletStufferSubscribe` | `src/components/mailchimp_subscribe.js` | Wraps `react-mailchimp-subscribe`. |
| `GulletStufferForm` | `src/components/gulletstuffer_form.js` | Email form UI and validation payload construction. |
| `CustomMerchPage`, `CheckoutModal` | `src/pages/merch_custom.js` | Product selection and checkout modal flow. |
| `Success` | `src/components/merch_success.js` | Checkout success display. |

## Visual / Legacy Components

| Component | File | Notes |
| --- | --- | --- |
| `Accordion` | `src/components/accordion.js` | Expand/collapse content display. |
| `Carousel` | `src/components/carousel.js` | Legacy custom carousel using local media. |
| `ExpandableCard` | `src/components/expandable_card.js` | Larger interactive donation/contact card. |
| `IntroVideo` | `src/components/intro_video.js` | Legacy intro video component. |
| `TimelineScroller` | `src/components/timeline_scroller.js` | Timeline display component. |

## Design System Notes

- Tailwind theme colors: `gs_red`, `gs_purple`, `gold`.
- Font utilities are backed by local font-face declarations and Tailwind `fontFamily` entries.
- UI language is black background, neon/purple/red highlights, dense event imagery, and large display typography.

