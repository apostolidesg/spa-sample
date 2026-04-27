# Production Readiness Design — spa-sample CMS

**Date:** 2026-04-27
**Goal:** Get the site live on Netlify with Decap CMS working so the client can edit content at `/admin` using email/password login.

---

## Context

- Vue 3 SPA, Vite build, bilingual content (EN/EL) loaded from `/content/**/*.json`
- Decap CMS at `/admin`, GitHub backend, content committed back to the repo
- Currently tested locally only; production was a manually uploaded static dist on DNShost
- Client has no GitHub account — must use Netlify Identity (email/password)
- Netlify account already exists; DNShost keeps the domain, hosting/SSL on DNShost will be retired

---

## Code Changes (3 items)

### 1. Remove Footer
- Delete `src/components/Footer.vue`
- Remove `<Footer>` import and usage from `src/App.vue`
- Remove `hasGDPR` data property from `src/App.vue`

### 2. Fix CMS backend in `public/admin/config.yml`
- Change `backend.name` from `github` to `git-gateway`
- Remove `local_backend: true` (dev-only flag, breaks production)

### 3. Fix media folder path in `public/admin/config.yml`
- Change `media_folder` from `public/assets/images` to `public/images`
- Change `public_folder` from `/assets/images` to `/images`

---

## Netlify Setup (manual steps, one-time)

1. Connect GitHub repo `apostolidesg/spa-sample` to Netlify site
2. Set build command: `npm run build`, publish directory: `dist`
3. Enable Netlify Identity on the site
4. Enable Git Gateway under Identity → Services
5. Invite client by email via Netlify Identity dashboard

---

## DNS Update (in DNShost)

- Add the CNAME record Netlify provides (e.g. `yoursite.netlify.app`) as the target for the custom domain
- Netlify provisions SSL automatically via Let's Encrypt

---

## Flow After Launch

```
Client edits at /admin
  → logs in with email/password (Netlify Identity)
  → saves change
  → Decap commits JSON to GitHub (main branch)
  → Netlify detects commit → auto-rebuilds (~60 seconds)
  → live site updated
```

---

## Out of Scope
- GDPR/cookie consent (footer removed, not replaced)
- Any new features or content changes
