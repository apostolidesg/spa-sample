# Nav Active State & Contact Form Comment Field

**Date:** 2026-05-11  
**Status:** Approved

## Feature 1: Active Navigation State

### Problem
The navbar renders all route items identically regardless of the current page. There is no visual indicator of which page the user is on.

### Solution
Use Vue Router's `$route.name` to detect the active route. Bind an `--active` modifier class on the matching nav item. Style it with `color: $background-color-secondary` (same as hover) plus a 2px underline to visually distinguish active from hover.

### Files Changed
- `src/components/Navbar.vue` — add `currentRouteName` computed, bind active class, add active style

### Behaviour
- Active class applies on both desktop and mobile views (same elements)
- Updates reactively on every navigation
- Does not affect the language switcher

---

## Feature 2: Comment Field in Contact Form

### Problem
Visitors have no way to include a free-text note or context with their contact request.

### Solution
Add an optional `<textarea>` field labelled "Σχόλια / Comments" as a full-width row below the address field, above the footer. Styled to match the existing inputs (same border radius, outline, font, focus ring). Not required.

The value is wired into the existing Netlify form submission via URLSearchParams so it appears in the Netlify Forms dashboard alongside the other fields.

### Files Changed
- `src/components/ContactUs.vue` — add textarea, `form.message` data property, pass in URLSearchParams
- `content/contact/el/form.json` — add `"message"` label
- `content/contact/en/form.json` — add `"message"` label
- `public/admin/config.yml` — add `message` field to EL and EN contact-form entries
