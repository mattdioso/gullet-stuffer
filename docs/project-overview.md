---
title: Project Overview
project: gullet-stuffer
generated: 2026-06-04
scan_level: deep
---

# Project Overview

Gullet Stuffer is the website for an annual Seattle competitive eating contest and charity fundraiser. The site presents event history, current Gullet Stuffer VIII information, athletes, fundraising leaderboards, sponsors/community partners, merch, and supporting calls to action.

## Executive Summary

The repository is a single JavaScript web application: a Create React App client in `src/` served in production by a root-level Express server in `server.js`. The Express server also owns third-party feed integrations for Instagram and DoJiggy, keeping access tokens and normalization logic server-side.

The frontend is content-heavy and visually branded. Most user-facing pages are data-driven from modules in `src/data`, with reusable UI in `src/components` and route screens in `src/pages`.

## Classification

| Field | Value |
| --- | --- |
| Repository type | Monolith |
| Project type | Web |
| Primary language | JavaScript |
| Client framework | React 18 / Create React App |
| Server runtime | Node.js / Express |
| Styling | Tailwind CSS plus global CSS/font declarations |
| Deployment target | Google App Engine standard, Node.js 22 |

## Primary Capabilities

- Public event website with route-based pages for home, about, history, GSVIII, hall of fame, partners/community, merch, and voting.
- Event and athlete presentation from structured local data modules.
- Live DoJiggy fundraising leaderboards via `/api/dojiggy-leaderboards`.
- Instagram feed carousel via `/api/instagram-feed`.
- Mailchimp signup form via `react-mailchimp-subscribe`.
- Production static serving for the built CRA app through Express.

## Key Documentation

- [Architecture](./architecture.md)
- [Source Tree Analysis](./source-tree-analysis.md)
- [API Contracts](./api-contracts.md)
- [Data Models](./data-models.md)
- [Component Inventory](./component-inventory.md)
- [Development Guide](./development-guide.md)
- [Deployment Guide](./deployment-guide.md)

