# Decap CMS Redesign — Minimal files Collection — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace 6 broken `folder` collections with 1 `files` collection (5 entries), remove dead footer content, and absorb the one-field `servicesContact` collection into `services`.

**Architecture:** Content JSON files are updated first so the app never breaks mid-migration. `i18n.js` is updated to source `servicesAndContact.hero.title` from `services.servicesContactHero` before the `servicesContact` folder is deleted. The CMS config is rewritten last, after all content is in its final shape.

**Tech Stack:** Vue 3, Vue-i18n 11, Decap CMS 3.x, Vite

---

## File Map

| File | Change |
|---|---|
| `content/services/el/services.json` | Add `servicesContactHero.title` |
| `content/services/en/services.json` | Add `servicesContactHero.title` |
| `content/common/el/common.json` | Remove `footer` key |
| `content/common/en/common.json` | Remove `footer` key |
| `content/servicesContact/el/servicesContact.json` | Delete |
| `content/servicesContact/en/servicesContact.json` | Delete |
| `src/i18n.js` | Update `transformContent` — remove `servicesContact` branch, extract `servicesAndContact` from `services` |
| `public/admin/config.yml` | Rewrite: 6 `folder` collections → 1 `files` collection with 5 entries |

---

## Task 1: Add `servicesContactHero` to services.json

**Files:**
- Modify: `content/services/el/services.json`
- Modify: `content/services/en/services.json`

- [ ] **Step 1: Update the Greek services file**

Replace the full content of `content/services/el/services.json` with:

```json
{
  "file_name": "services",
  "title": "Πως μπορούμε να βοηθήσουμε;",
  "hero": {
    "title": "Υπηρεσίες"
  },
  "readMore": "Περισσότερα",
  "items": [
    {
      "title": "Ατομική CBT Ψυχοθεραπεία",
      "content": "Θεραπευτική υποστήριξη με βάση τη Γνωσιακή-Συμπεριφορική Θεραπεία για ενήλικες και εφήβους.",
      "duration": "60 λ.",
      "price": "20 €"
    },
    {
      "title": "Συμβουλευτική για Γονείς",
      "content": "Καθοδήγηση και ενίσχυση δεξιοτήτων γονέων για θετική ανατροφή και ενσυναισθητική επικοινωνία.",
      "duration": "60 λ.",
      "price": "20 €"
    },
    {
      "title": "Υποστήριξη Ευάλωτων Ομάδων",
      "content": "Στοχευμένες παρεμβάσεις για παιδιά στο φάσμα του αυτισμού και άλλες ευάλωτες κοινωνικές ομάδες.",
      "duration": "60 λ.",
      "price": "20 €"
    },
    {
      "title": "Διαδικτυακές Ψυχολογικές Συνεδρίες",
      "content": "Ατομικές συνεδρίες ψυχοθεραπείας online ή με φυσική παρουσία, με έμφαση στη διαθεσιμότητα και την προσβασιμότητα.",
      "duration": "60 λ.",
      "price": "20 €"
    }
  ],
  "testimonials": {
    "title": "Ευχαριστημένοι Πελάτες",
    "items": [
      {
        "name": "Dave Reddington",
        "content": "Είμαι μια συστάση. Επεξεργαστείτε με και προσθέστε κείμενο που λέει κάτι καλό για εσάς και τις υπηρεσίες σας. Αφήστε τους πελάτες σας να σας κρίνουν και να πούν στους φίλους τους πόσο καλοί είστε."
      },
      {
        "name": "Amelia Banks",
        "content": "Είμαι μια συστάση. Επεξεργαστείτε με και προσθέστε κείμενο που λέει κάτι καλό για εσάς και τις υπηρεσίες σας. Αφήστε τους πελάτες σας να σας κρίνουν και να πούν στους φίλους τους πόσο καλοί είστε."
      },
      {
        "name": "Kenny Stutes",
        "content": "Είμαι μια συστάση. Επεξεργαστείτε με και προσθέστε κείμενο που λέει κάτι καλό για εσάς και τις υπηρεσίες σας. Αφήστε τους πελάτες σας να σας κρίνουν και να πούν στους φίλους τους πόσο καλοί είστε."
      }
    ]
  },
  "servicesContactHero": {
    "title": "Υπηρεσίες & Επικοινωνία"
  }
}
```

- [ ] **Step 2: Update the English services file**

Replace the full content of `content/services/en/services.json` with:

```json
{
  "file_name": "services",
  "title": "How can we help?",
  "hero": {
    "title": "Our Services"
  },
  "readMore": "Read More",
  "items": [
    {
      "title": "Individual CBT Therapy",
      "content": "Therapeutic support based on Cognitive Behavioral Therapy for adults and adolescents.",
      "duration": "60 min",
      "price": "€20"
    },
    {
      "title": "Parenting Counseling",
      "content": "Guidance and skills enhancement for parents to support positive upbringing and empathetic communication.",
      "duration": "60 min",
      "price": "€20"
    },
    {
      "title": "Support for Vulnerable Groups",
      "content": "Targeted interventions for children on the autism spectrum and other vulnerable social groups.",
      "duration": "60 min",
      "price": "€20"
    },
    {
      "title": "Online Psychotherapy Sessions",
      "content": "Individual psychotherapy sessions online or in person, with emphasis on accessibility and flexibility.",
      "duration": "60 min",
      "price": "€20"
    }
  ],
  "testimonials": {
    "title": "Satisfied Customers",
    "items": [
      {
        "name": "Dave Reddington",
        "content": "'I am a testimonial. Edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.'"
      },
      {
        "name": "Amelia Banks",
        "content": "'I am a testimonial. Edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.'"
      },
      {
        "name": "Kenny Stutes",
        "content": "'I am a testimonial. Edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.'"
      }
    ]
  },
  "servicesContactHero": {
    "title": "Services & Contact"
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add content/services/el/services.json content/services/en/services.json
git commit -m "content: add servicesContactHero to services for both locales"
```

---

## Task 2: Update i18n.js transform

**Files:**
- Modify: `src/i18n.js`

- [ ] **Step 1: Replace the `transformContent` function**

In `src/i18n.js`, replace the entire `transformContent` function (lines 36–64) with:

```js
function transformContent(content) {
  const transformed = {};

  for (const [file, data] of Object.entries(content)) {
    if (file === 'common') {
      transformed.navbar = data.navbar;
    } else if (file === 'home') {
      transformed.home = data;
    } else if (file === 'about') {
      transformed.about = data;
    } else if (file === 'services') {
      transformed.services = data;
      transformed.servicesAndContact = { hero: data.servicesContactHero };
    } else if (file === 'contact') {
      transformed.contact = data;
    }
  }

  return transformed;
}
```

Key changes from the old version:
- The `common` branch no longer sets `transformed.footer`
- The `services` branch now also sets `transformed.servicesAndContact` using `data.servicesContactHero`
- The `servicesContact` branch is removed entirely

- [ ] **Step 2: Start the dev server and verify ServicesAndContact renders**

```bash
npm run dev
```

Open `http://localhost:5173` in the browser. Navigate to the Services & Contact page. Verify:
- The hero title at the top reads "Υπηρεσίες & Επικοινωνία" (Greek) or "Services & Contact" (English)
- No console errors about undefined i18n keys

Stop the dev server with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
git add src/i18n.js
git commit -m "feat: source servicesAndContact hero from services.servicesContactHero"
```

---

## Task 3: Remove footer from common.json

**Files:**
- Modify: `content/common/el/common.json`
- Modify: `content/common/en/common.json`

- [ ] **Step 1: Update the Greek common file**

Replace the full content of `content/common/el/common.json` with:

```json
{
  "file_name": "common",
  "navbar": {
    "logo": {
      "name": "Αλέξανδρος Ρέμπελος,",
      "title": "Ψυχολόγος & CBT Θεραπευτής"
    },
    "routes": {
      "home": "Αρχική",
      "about": "Σχετικά",
      "services": "Υπηρεσίες",
      "contact": "Επικοινωνία",
      "servicesAndContact": "Υπηρεσίες & Επικοινωνία"
    },
    "language": "EN"
  }
}
```

- [ ] **Step 2: Update the English common file**

Replace the full content of `content/common/en/common.json` with:

```json
{
  "file_name": "common",
  "navbar": {
    "logo": {
      "name": "Alexandros Test No2 Rembelos,",
      "title": "Psychologist & CBT Therapist"
    },
    "routes": {
      "home": "Home",
      "about": "About",
      "services": "Services",
      "contact": "Contact",
      "servicesAndContact": "Services & Contact"
    },
    "language": "GR"
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add content/common/el/common.json content/common/en/common.json
git commit -m "content: remove unused footer from common"
```

---

## Task 4: Delete servicesContact folder

**Files:**
- Delete: `content/servicesContact/el/servicesContact.json`
- Delete: `content/servicesContact/en/servicesContact.json`

- [ ] **Step 1: Delete the servicesContact content folder**

```bash
rm -rf content/servicesContact
```

- [ ] **Step 2: Verify the app still works**

```bash
npm run dev
```

Open `http://localhost:5173`. Navigate to all pages: Home, About, Services, Contact, Services & Contact. Verify no pages are blank and no console errors appear. Stop the dev server.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "content: delete servicesContact folder (absorbed into services)"
```

---

## Task 5: Rewrite config.yml

**Files:**
- Modify: `public/admin/config.yml`

> **Note on file paths:** Decap CMS `files` collections with `multiple_folders` i18n expect the `file` key to be the path *without* the locale subfolder. Decap inserts the locale automatically (same behaviour as `folder` collections). So `file: "content/common/common.json"` → Decap reads `content/common/el/common.json` for locale `el`. If the CMS fails to load files after this change, see the **Fallback** section at the end.

- [ ] **Step 1: Replace the entire config.yml**

Replace the full content of `public/admin/config.yml` with:

```yaml
backend:
  name: git-gateway
  branch: main

media_folder: "public/images"
public_folder: "/images"

i18n:
  structure: multiple_folders
  locales: [en, el]
  default_locale: el

collections:
  - name: "site"
    label: "Site"
    i18n: true
    files:
      - name: "menu"
        label: "Menu"
        file: "content/common/common.json"
        i18n: true
        fields:
          - {label: "File Name", name: "file_name", widget: "hidden", default: "common", i18n: duplicate}
          - label: "Navbar"
            name: "navbar"
            widget: "object"
            fields:
              - label: "Logo"
                name: "logo"
                widget: "object"
                fields:
                  - {label: "Name", name: "name", widget: "string"}
                  - {label: "Title", name: "title", widget: "string"}
              - label: "Routes"
                name: "routes"
                widget: "object"
                fields:
                  - {label: "Home", name: "home", widget: "string"}
                  - {label: "About", name: "about", widget: "string"}
                  - {label: "Services", name: "services", widget: "string"}
                  - {label: "Contact", name: "contact", widget: "string"}
                  - {label: "Services & Contact", name: "servicesAndContact", widget: "string"}
              - {label: "Language Toggle", name: "language", widget: "string"}

      - name: "home"
        label: "Home"
        file: "content/home/home.json"
        i18n: true
        fields:
          - {label: "File Name", name: "file_name", widget: "hidden", default: "home", i18n: duplicate}
          - label: "Hero Section"
            name: "hero"
            widget: "object"
            fields:
              - {label: "Name", name: "name", widget: "string"}
              - {label: "Subtitle", name: "subtitle", widget: "string"}
              - {label: "Button Text", name: "buttonText", widget: "string"}
          - label: "About Section"
            name: "about"
            widget: "object"
            fields:
              - {label: "Title", name: "title", widget: "string"}
          - label: "Services Section"
            name: "services"
            widget: "object"
            fields:
              - {label: "Title", name: "title", widget: "string"}
          - label: "Contact Section"
            name: "contact"
            widget: "object"
            fields:
              - {label: "Title", name: "title", widget: "string"}

      - name: "about"
        label: "About"
        file: "content/about/about.json"
        i18n: true
        fields:
          - {label: "File Name", name: "file_name", widget: "hidden", default: "about", i18n: duplicate}
          - {label: "Title", name: "title", widget: "string"}
          - {label: "Description", name: "description", widget: "text"}
          - {label: "Image Alt Text", name: "imageAlt", widget: "string"}
          - label: "Hero"
            name: "hero"
            widget: "object"
            fields:
              - {label: "Title", name: "title", widget: "string"}
          - label: "Education"
            name: "education"
            widget: "object"
            fields:
              - {label: "Title", name: "title", widget: "string"}
              - {label: "Image Alt", name: "imageAlt", widget: "string"}
              - label: "Education Items"
                name: "items"
                widget: "list"
                field: {label: "Item", name: "item", widget: "text"}
          - label: "FAQ"
            name: "faq"
            widget: "object"
            fields:
              - {label: "Title", name: "title", widget: "string"}
              - label: "FAQ Items"
                name: "items"
                widget: "list"
                fields:
                  - {label: "Question", name: "question", widget: "string"}
                  - {label: "Answer", name: "answer", widget: "text"}

      - name: "services"
        label: "Services"
        file: "content/services/services.json"
        i18n: true
        fields:
          - {label: "File Name", name: "file_name", widget: "hidden", default: "services", i18n: duplicate}
          - {label: "Title", name: "title", widget: "string"}
          - {label: "Read More Text", name: "readMore", widget: "string"}
          - label: "Hero"
            name: "hero"
            widget: "object"
            fields:
              - {label: "Title", name: "title", widget: "string"}
          - label: "Service Items"
            name: "items"
            widget: "list"
            fields:
              - {label: "Title", name: "title", widget: "string"}
              - {label: "Content", name: "content", widget: "text"}
              - {label: "Duration", name: "duration", widget: "string"}
              - {label: "Price", name: "price", widget: "string"}
          - label: "Testimonials"
            name: "testimonials"
            widget: "object"
            fields:
              - {label: "Title", name: "title", widget: "string"}
              - label: "Testimonial Items"
                name: "items"
                widget: "list"
                fields:
                  - {label: "Name", name: "name", widget: "string"}
                  - {label: "Content", name: "content", widget: "text"}
          - label: "Services & Contact Hero"
            name: "servicesContactHero"
            widget: "object"
            fields:
              - {label: "Title", name: "title", widget: "string"}

      - name: "contact"
        label: "Contact"
        file: "content/contact/contact.json"
        i18n: true
        fields:
          - {label: "File Name", name: "file_name", widget: "hidden", default: "contact", i18n: duplicate}
          - label: "Hero"
            name: "hero"
            widget: "object"
            fields:
              - {label: "Title", name: "title", widget: "string"}
          - {label: "Info Label", name: "info", widget: "string"}
          - label: "Working Hours"
            name: "workingHours"
            widget: "object"
            fields:
              - {label: "Title", name: "title", widget: "string"}
              - {label: "Weekdays", name: "weekdays", widget: "string"}
              - {label: "Saturday", name: "saturday", widget: "string"}
              - {label: "Sunday", name: "sunday", widget: "string"}
          - label: "Practice Locations"
            name: "practiceLocations"
            widget: "object"
            fields:
              - {label: "Title", name: "title", widget: "string"}
              - label: "Locations"
                name: "locations"
                widget: "list"
                fields:
                  - {label: "Name", name: "name", widget: "string"}
                  - {label: "Street", name: "street", widget: "string"}
                  - {label: "City", name: "city", widget: "string"}
                  - {label: "Email", name: "email", widget: "string"}
                  - {label: "Phone", name: "tel", widget: "string"}
                  - {label: "Fax", name: "fax", widget: "string"}
                  - {label: "Instagram URL", name: "instagram", widget: "string"}
                  - {label: "Instagram Label", name: "instagramLabel", widget: "string"}
                  - {label: "Facebook URL", name: "facebook", widget: "string"}
                  - {label: "Facebook Label", name: "facebookLabel", widget: "string"}
          - label: "Contact Form"
            name: "form"
            widget: "object"
            fields:
              - {label: "First Name", name: "firstName", widget: "string"}
              - {label: "Last Name", name: "lastName", widget: "string"}
              - {label: "Email", name: "email", widget: "string"}
              - {label: "Phone", name: "phone", widget: "string"}
              - {label: "Address", name: "address", widget: "string"}
              - {label: "Submit Button", name: "cta", widget: "string"}
```

- [ ] **Step 2: Start the CMS proxy and verify the admin panel**

In one terminal:
```bash
npm run cms-proxy
```

In a second terminal:
```bash
npm run dev
```

Open `http://localhost:5173/admin`. Verify:
- No "Field title is missing" errors in the browser console
- The sidebar shows one "Site" collection
- Clicking "Site" shows 5 entries: Menu, Home, About, Services, Contact
- Clicking each entry opens the editor with the correct fields

Stop both servers.

- [ ] **Step 3: Commit**

```bash
git add public/admin/config.yml
git commit -m "feat: replace folder collections with files collection in Decap CMS config"
```

---

## Fallback: If `files` collection file paths don't resolve with i18n

If the CMS admin panel loads but shows empty or mismatched content (wrong locale), the `files` collection may not be inserting the locale folder automatically. In that case, revert Task 5 and instead fix the original `folder` collections by adding `identifier_field: file_name` to each collection that was missing a `title` field:

In `public/admin/config.yml`, add the following line to the `common`, `home`, and `servicesContact` collection blocks (directly under `i18n: true`):

```yaml
identifier_field: file_name
```

This tells Decap to use the `file_name` hidden field as the entry label, eliminating the console error with zero structural change. Tasks 1–4 remain valid regardless.
