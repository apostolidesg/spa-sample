# Section Theming via CSS Custom Properties

**Date:** 2026-05-10  
**Status:** Approved

## Problem

Section background and component text colors are decoupled. Setting a section to `$background-color-primary` (dark green) does not automatically adjust child text colors, so components like `ContactInfo` render dark text on a dark background — invisible. Colors must be fixed manually, one property at a time, per component.

## Solution

CSS custom properties set on section wrappers propagate to all descendants. Components use `var(--color-text)` instead of hardcoded SCSS variables. Changing a section's theme becomes a one-line mixin swap.

## SCSS Themes File

New file: `src/assets/scss/_themes.scss`

Three mixins, each setting the background and two text tokens:

- `theme-dark` → bg: `$background-color-primary`, text: white, text-secondary: `$background-color-secondary`
- `theme-light` → bg: `$background-color-secondary`, text: `$background-color-primary`, text-secondary: `$color-secondary`
- `theme-white` → no bg override, same text tokens as theme-light

## Pages Updated

Each section wrapper replaces `background-color: $var` with `@include theme-*`:

| Page | Section | Mixin |
|---|---|---|
| Home | `.about-section` | `theme-white` |
| Home | `.services-section` | `theme-dark` |
| Home | `.contact-info-section` | `theme-light` |
| ServicesAndContact | `.services-contact-section` | `theme-dark` |
| ServicesAndContact | `.form-section` | `theme-light` |
| ServicesAndContact | `.info-section` | `theme-dark` |
| About | `.about-section` | `theme-white` |
| About | `.faq-section` | `theme-dark` |
| Services | `.services-section` | `theme-dark` |
| Contact | `.contact-section` | `theme-white` |
| Contact | `.info-section` | `theme-light` |

## Components Updated

Hardcoded SCSS color values replaced with CSS custom properties:

| Component | Properties changed |
|---|---|
| `ContactInfo.vue` | All text `color` → `var(--color-text)` |
| `ServiceBlock.vue` | `&__title` color → `var(--color-text)` |
| `ServiceBlockItem.vue` | `&__label`, `&__extra-info` text colors → `var(--color-text)` / `var(--color-text-secondary)` |
| `ImageTextBlock.vue` | Title → `var(--color-text)`, description → `var(--color-text-secondary)` |
| `ContactUs.vue` | `&__title` → `var(--color-text)` |

## Left Unchanged

- `SectionSeparator` — has its own `theme` prop system, orthogonal to this change
- `FAQ.vue` — white card design; card text is intentionally self-contained
- `CriticsBlockItem.vue` — not currently placed inside a themed section
- `ServiceBlockItem` icon badge — fixed teal-on-dark design by intent
