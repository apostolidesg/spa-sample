# CMS i18n UX Improvement Design

**Date:** 2026-04-27
**Goal:** Reduce Decap CMS sidebar from 12 collections to 6 by enabling built-in i18n support, so the client edits both languages in one form with a language tab switcher.

---

## Context

- Decap CMS at `/admin` currently has 12 collections: one per page per language (e.g. `Home Page (EN)` + `Home Page (EL)`)
- Client is a non-technical everyday user who needs to edit both Greek and English content
- Content files already live in `content/en/` and `content/el/` — which matches Decap's `multiple_folders` i18n structure exactly

---

## What Changes

**Only `public/admin/config.yml`** — no changes to the Vue app, no changes to content JSON files, no file moves.

---

## Design

### Global i18n config (added at top of config.yml)

```yaml
i18n:
  structure: multiple_folders
  locales: [en, el]
  default_locale: el
```

- `multiple_folders`: Decap reads/writes `content/en/` and `content/el/` automatically
- `default_locale: el`: Greek is shown first (primary language for this client)

### Collections (12 → 6)

Each pair of EN+EL collections is merged into one:

| New collection | Label | Replaces |
|---|---|---|
| `common` | Navbar & Footer | `common_en` + `common_el` |
| `home` | Home Page | `home_en` + `home_el` |
| `about` | About Page | `about_en` + `about_el` |
| `services` | Services Page | `services_en` + `services_el` |
| `servicesContact` | Services & Contact Page | `servicesContact_en` + `servicesContact_el` |
| `contact` | Contact Page | `contact_en` + `contact_el` |

Each collection gets:
- `folder: "content"` (was `folder: "content/en"` or `"content/el"`)
- `i18n: true` at collection level
- All content fields get `i18n: true`
- The hidden `file_name` field gets `i18n: duplicate` (same value in both locales)

### Client experience

1. Client opens `/admin`
2. Sidebar shows 6 clearly named collections
3. Client clicks e.g. "About Page"
4. Form opens with a language tab switcher at the top: **EL | EN**
5. Client fills Greek under EL tab, English under EN tab
6. Client hits Publish — both `content/el/about.json` and `content/en/about.json` are committed

---

## Out of Scope

- CMS visual preview of the live site
- Field hint text / descriptions
- Any changes to the Vue app or content files
