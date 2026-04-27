# Production Readiness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Get the site live on Netlify with Decap CMS working so the client can edit content at `/admin` using email/password login.

**Architecture:** Three code changes in the repo (remove footer, fix CMS backend, fix media path), followed by manual one-time setup steps in Netlify dashboard and DNShost DNS panel.

**Tech Stack:** Vue 3, Vite, Decap CMS, Netlify Identity + Git Gateway

---

## Files Changed

| Action | File |
|--------|------|
| Delete | `src/components/Footer.vue` |
| Modify | `src/App.vue` |
| Modify | `public/admin/config.yml` |

---

## Task 1: Remove Footer

**Files:**
- Delete: `src/components/Footer.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: Delete Footer.vue**

Delete the file `src/components/Footer.vue` entirely.

- [ ] **Step 2: Clean up App.vue**

Open `src/App.vue`. Replace the entire file with:

```vue
<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <component :is="Component" :key="$route.path" />
  </router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}

.testimonial {
  white-space: pre-line;
}
</style>
```

- [ ] **Step 3: Verify locally**

Run `npm run dev` and open the site. Confirm no footer appears on any page and no console errors about Footer.

- [ ] **Step 4: Commit**

```bash
git add src/App.vue
git rm src/components/Footer.vue
git commit -m "remove footer component"
```

---

## Task 2: Fix CMS Config for Production

**Files:**
- Modify: `public/admin/config.yml`

- [ ] **Step 1: Update the backend block**

Open `public/admin/config.yml`. Replace the top section:

```yaml
backend:
  name: github
  repo: apostolidesg/spa-sample
  branch: main

local_backend: true

media_folder: "public/assets/images"
public_folder: "/assets/images"
```

With:

```yaml
backend:
  name: git-gateway
  branch: main

media_folder: "public/images"
public_folder: "/images"
```

Three things changed:
- `name: github` → `name: git-gateway` (uses Netlify Identity instead of direct GitHub login)
- `local_backend: true` removed (dev-only flag, breaks production)
- Media folder paths fixed to match where images actually live (`public/images`)

- [ ] **Step 2: Verify the rest of the file is untouched**

Scroll through the rest of `config.yml` and confirm all collections (common, home, about, services, servicesContact, contact — EN and EL) are still present.

- [ ] **Step 3: Commit**

```bash
git add public/admin/config.yml
git commit -m "fix cms config for production: git-gateway backend, correct media path"
```

- [ ] **Step 4: Push to GitHub**

```bash
git push origin main
```

---

## Task 3: Netlify Setup (manual — in browser)

These steps are done in the Netlify dashboard, not in the code.

- [ ] **Step 1: Create a new Netlify site from the GitHub repo**

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **Add new site → Import an existing project**
3. Choose **GitHub** and select `apostolidesg/spa-sample`
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**

Wait for the first deploy to finish (green checkmark). You'll get a temporary URL like `https://random-name.netlify.app` — open it and confirm the site loads correctly.

- [ ] **Step 2: Enable Netlify Identity**

1. In the Netlify dashboard, go to your site → **Identity** tab
2. Click **Enable Identity**

- [ ] **Step 3: Enable Git Gateway**

1. Still in the **Identity** tab, scroll down to **Services**
2. Click **Enable Git Gateway**

This is what allows Decap CMS to commit to GitHub on behalf of the client without the client needing a GitHub account.

- [ ] **Step 4: Invite the client**

1. In the **Identity** tab, click **Invite users**
2. Enter the client's email address
3. The client receives an email with a link to set their password

- [ ] **Step 5: Verify CMS login works**

1. Open `https://your-netlify-url.netlify.app/admin`
2. Click **Login with Netlify Identity**
3. Use the client's email + password
4. Confirm the CMS loads with all collections (Home, About, Services, etc.)
5. Make a small test edit and save — confirm Netlify triggers a new deploy and the change appears on the live site after ~60 seconds

---

## Task 4: Connect Custom Domain (manual — in DNShost + Netlify)

- [ ] **Step 1: Add your domain in Netlify**

1. In Netlify dashboard → your site → **Domain management**
2. Click **Add a domain**
3. Enter your domain (e.g. `yoursite.gr`)
4. Netlify will show you DNS records to add

- [ ] **Step 2: Update DNS in DNShost**

Log in to DNShost and go to the DNS settings for your domain. Add the record(s) Netlify gave you. This is usually one of:

- A CNAME record pointing `www` → `your-netlify-name.netlify.app`
- Or two A records pointing the root domain at Netlify's load balancer IPs (Netlify shows the exact IPs)

DNS changes can take up to 24 hours to propagate globally, but usually happen within 1 hour.

- [ ] **Step 3: Provision SSL**

1. Back in Netlify → **Domain management → HTTPS**
2. Click **Verify DNS configuration** once the DNS has propagated
3. Click **Provision certificate**

Netlify provisions a free Let's Encrypt SSL certificate automatically. Once done, your site is live at `https://yoursite.gr`.

- [ ] **Step 4: Final verification**

1. Open `https://yoursite.gr` — site loads correctly
2. Open `https://yoursite.gr/admin` — CMS loads and client can log in
3. Make a test edit in the CMS, save, and confirm the live site updates within ~60 seconds
