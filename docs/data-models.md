---
title: Data Models
project: gullet-stuffer
generated: 2026-06-04
scan_level: deep
---

# Data Models

This project does not use a database, ORM, schema migration system, or persistent local backend data store. Its data model is a combination of static JavaScript content modules and normalized third-party feed payloads.

## Static Content Modules

| File | Export | Purpose |
| --- | --- | --- |
| `src/data/years.js` | `years_data` | Historical event records used by the History page. Includes year, title, food, poster/logo media, video URL, descriptions, and competitor results. |
| `src/data/hof.js` | `hof_data` | Hall of Fame categories such as champions, notable competitors, iconic moments, and top fundraisers. |
| `src/data/gs8_contestants.js` | `gs8_contestants`, `gs7_contestants` alias | GSVIII athlete roster split into amateur and professional divisions. |
| `src/data/gs7_contestants.js` | `gs7_contestants` | Legacy GS7 contestant roster. |
| `src/data/gs8_foods.js` | `gs8_foods` | Food metadata for GSVIII-related displays. |

## GSVIII Contestant Shape

```js
{
  name: "Crosby Schultz",
  nickname: "Crozbaby",
  experience: 1,
  finishes: [
    {
      food: "Gyoza",
      year: 2025,
      rank: "Professional",
      place: 8
    }
  ],
  campaignUrl: "https://go.dojiggy.io/...",
  img: "https://storage.googleapis.com/..."
}
```

## Historical Year Shape

```js
{
  year: 2025,
  title: "Gullet Stuffer VII",
  food: "Gyoza",
  event_poster: "https://...",
  logo: "https://...",
  video: "https://www.youtube.com/embed/...",
  desc: "HTML-like markup string",
  competitors: [
    {
      firstName: "Name",
      lastName: "Name",
      rank: "Amateur | Professional",
      result: "100",
      img: "https://..."
    }
  ]
}
```

## Normalized Feed Data

`server.js` normalizes upstream DoJiggy and Instagram responses before the React app consumes them. The client should treat those endpoint contracts as the application data model for live integrations.

## Data Rules

- Keep event, athlete, food, sponsor, and historical content in `src/data` when it is reused or large.
- Do not introduce a database for static event content unless the product requirement explicitly calls for editorial/admin workflows.
- Preserve server-side normalization for third-party data so the UI receives stable shapes.

