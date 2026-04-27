# Decap CMS Redesign — Minimal files Collection

**Date:** 2026-04-27
**Status:** Approved

## Problem

Six `folder` collections are used for content that is always single-file-per-locale. Decap CMS `folder` collections expect multiple entries and try to infer a top-level `title` field to label entry cards. Three collections (`common`, `home`, `servicesContact`) lack a top-level `title`, causing console errors on every page load. The `servicesContact` collection holds only one field. The `footer` field in `common` is unused — no component renders it.

## Goal

Replace all 6 `folder` collections with one `files` collection containing 5 named entries. Eliminate dead content. Absorb the one-field `servicesContact` collection into `services`. The CMS sidebar goes from 6 ambiguous items to 1 collapsible group with clearly labelled pages.

## CMS Collections — After

One collection named `"site"` / label `"Site"`, `files` type, `i18n: true`.

| Entry name | Label | Source file | Notes |
|---|---|---|---|
| `menu` | Menu | `content/common/{locale}/common.json` | `footer` field removed |
| `home` | Home | `content/home/{locale}/home.json` | unchanged |
| `about` | About | `content/about/{locale}/about.json` | unchanged |
| `services` | Services | `content/services/{locale}/services.json` | add `servicesContactHero.title` |
| `contact` | Contact | `content/contact/{locale}/contact.json` | unchanged |

`content/servicesContact/` is deleted.

## Fields — Changes Only

### `menu` (was `common`)
- Remove: `footer` object and its `copyrights` child field

### `services`
- Add at top level:
  ```
  servicesContactHero (object)
    └─ title (string) — "Services & Contact" hero title
  ```
  Populated from the deleted `servicesContact.json` values.

## Content File Changes

| File | Action |
|---|---|
| `content/common/el/common.json` | Remove `footer` key |
| `content/common/en/common.json` | Remove `footer` key |
| `content/services/el/services.json` | Add `servicesContactHero: { title: "Υπηρεσίες & Επικοινωνία" }` |
| `content/services/en/services.json` | Add `servicesContactHero: { title: "Services & Contact" }` |
| `content/servicesContact/` | Delete entire folder |

## App Code Changes

### `src/i18n.js` — `transformContent` function

- Remove the `servicesContact` branch
- In the `services` branch, after setting `transformed.services = data`, also set:
  ```js
  transformed.servicesAndContact = { hero: data.servicesContactHero };
  ```
  This preserves the existing `$t('servicesAndContact.hero.title')` key used in `ServicesAndContact.vue` — no Vue component changes needed.

### No other app code changes

`ServicesAndContact.vue` continues to use `$t('servicesAndContact.hero.title')` unchanged. All other components are unaffected.

## What Is Not Changing

- File names and folder structure for the 5 remaining content pages
- All Vue components
- `contentLoader.js`
- `router/index.js`
- The `src/locales/` fallback files (these are separate from CMS-managed content)

## Why `files` Collection Fixes the Error

`files` collections have no entry listing view — each file is addressed by name, not as a card in a list. Decap never needs to infer a title field. The error disappears for all collections.

## Implementation Risk

The exact `file` path value for each entry in a `files` collection combined with `multiple_folders` i18n needs to be verified against Decap 3.x behaviour. The most likely correct form is the path without the locale folder (e.g. `content/common/common.json`), and Decap inserts the locale subfolder automatically — matching how `folder` collections work. If this does not behave as expected, the fallback is to keep `folder` collections and add `identifier_field: file_name` to each (a 3-line config fix that resolves the error with zero structural change).
