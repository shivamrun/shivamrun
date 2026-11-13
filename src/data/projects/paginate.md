---
title: Paginate
description: A type-safe TypeScript pagination toolkit with page, offset, and cursor strategies for multiple ORMs and data sources.
timeline: Open source
key: paginate
link: https://paginate.evensurface.com
github: https://github.com/evensurface/paginate
coverImage: https://github.com/evensurface.png
containerClassName: p-4 sm:p-6 bg-accent
---

Paginate is an open-source TypeScript toolkit for adding consistent pagination to applications without rewriting pagination math and metadata for every endpoint.

It supports **numbered pages, native offsets, and forward-only cursor pagination**, with an ORM-agnostic core and dedicated integrations for Drizzle ORM and Better Auth database adapters.

The project is documented at [paginate.evensurface.com](https://paginate.evensurface.com), and its source code is available on [GitHub](https://github.com/evensurface/paginate).

## Why I built it

Pagination is common in APIs, admin dashboards, search results, and user directories, but implementing it correctly takes more than applying `LIMIT` and `OFFSET`.

Applications also need input parsing, safe page-size limits, record counts, out-of-range handling, typed results, and useful metadata for the frontend. Rebuilding these details across routes creates duplication and inconsistent behavior.

I built Paginate to move those repeated decisions into small, reusable utilities while leaving database queries and application logic under the developer's control.

## Three pagination strategies

- **Page pagination:** Uses a page number and limit, performs a count, and returns totals, total pages, and previous/next navigation metadata.
- **Offset pagination:** Preserves a caller-supplied zero-based offset for APIs that expose `offset` and `limit` directly.
- **Cursor pagination:** Uses typed opaque cursors and keyset traversal to move through ordered data without a total-count query or increasingly deep offsets.

Developers choose the approach that suits their data source and user interface, instead of forcing every use case into one pagination model.

## What it handles

- Parsing and normalizing pagination inputs from API requests
- Configurable defaults and minimum/maximum page sizes
- Safe limit and offset calculations
- Count-aware page navigation and item-range metadata
- Handling empty result sets and out-of-range page requests
- Typed data results and reusable pagination metadata
- Count-free forward cursor traversal with lookahead
- A framework-independent API that does not generate routes or UI components

## Integrations and developer experience

Paginate is organized into installable packages:

- [`@evensurface/paginate`](https://www.npmjs.com/package/@evensurface/paginate) — ORM-agnostic core.
- [`@evensurface/paginate-drizzle`](https://www.npmjs.com/package/@evensurface/paginate-drizzle) — Drizzle ORM integration with inferred row types.
- [`@evensurface/paginate-better-auth`](https://www.npmjs.com/package/@evensurface/paginate-better-auth) — helpers for Better Auth database adapters.

The library returns records alongside structured pagination data, so applications can feed the result into an API response or transform it into their preferred response contract.

## Public project stats

For the latest available 30-day npm reporting period (**October 13–November 11, 2026**), checked on **November 13, 2026**:

- **1,071 downloads** — [`@evensurface/paginate`](https://api.npmjs.org/downloads/point/last-month/@evensurface/paginate)
- **987 downloads** — [`@evensurface/paginate-drizzle`](https://api.npmjs.org/downloads/point/last-month/@evensurface/paginate-drizzle)
- **384 downloads** — [`@evensurface/paginate-better-auth`](https://api.npmjs.org/downloads/point/last-month/@evensurface/paginate-better-auth)

That is **2,442 package download events across the three packages** in the period. Downloads are not a count of unique developers or installations, and these numbers will change.

## Open source

Paginate is MIT-licensed and developed publicly. Its [repository](https://github.com/evensurface/paginate) contains the core library, adapters, tests, examples, and documentation for integrating pagination into different application stacks.
