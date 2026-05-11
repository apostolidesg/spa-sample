# Nav Active State & Contact Form Comment Field Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an active visual state to the current navbar route item, and add an optional comment/message textarea to the contact form.

**Architecture:** The active nav state uses Vue Router's reactive `$route.name` in a computed property to bind a BEM modifier class on the matching item. The comment field is a textarea wired into the existing `form` data object and Netlify URLSearchParams submission — no structural changes to the form pattern.

**Tech Stack:** Vue 2 Options API, Vue Router, SCSS (BEM), Netlify Forms, vue-i18n

---

## File Map

| File | Action | What changes |
|---|---|---|
| `src/components/Navbar.vue` | Modify | Add `currentRouteName` computed, bind `--active` class, add active SCSS style |
| `src/components/ContactUs.vue` | Modify | Add `message` textarea, add `message` to `form` data and URLSearchParams |
| `content/contact/el/form.json` | Modify | Add `"message": "Σχόλια"` key |
| `content/contact/en/form.json` | Modify | Add `"message": "Comments"` key |
| `public/admin/config.yml` | Modify | Add `message` field to EL and EN contact-form entries |

---

### Task 1: Active nav state in Navbar.vue

**Files:**
- Modify: `src/components/Navbar.vue`

- [ ] **Step 1: Add `currentRouteName` computed**

In `src/components/Navbar.vue`, add a `computed` block after the existing `computed: { isMobileView() { ... } }`:

```js
computed: {
  isMobileView() {
    return this.isMobile ? "mobile" : "desktop";
  },
  currentRouteName() {
    return this.$route.name;
  },
},
```

- [ ] **Step 2: Bind the active class on each route item**

In the template, replace the route item `div`:

```html
<div
  v-for="route in routes"
  :key="route.name"
  class="navigation-bar__desktop--routes-item"
  :class="{ 'navigation-bar__desktop--routes-item--active': route.name === currentRouteName }"
  @click="navigateTo(route.name)"
>
  {{ $t(route.label) }}
</div>
```

- [ ] **Step 3: Add the active style**

In the `<style>` block, inside `&__desktop > &--routes > &-item`, add the modifier after the existing `&-item:hover` rule:

```scss
&-item--active {
  color: $background-color-secondary;
  border-bottom: 2px solid $background-color-secondary;
  padding-bottom: 2px;
}
```

The full updated `&__desktop` block becomes:

```scss
&__desktop {
  &--routes {
    display: flex;
    justify-content: end;
    align-items: center;
    flex: 2;
    gap: 1em;

    &-item {
      text-align: center;
    }

    &-item:hover {
      cursor: pointer;
      color: $background-color-secondary;
    }

    &-item--active {
      color: $background-color-secondary;
      border-bottom: 2px solid $background-color-secondary;
      padding-bottom: 2px;
    }
  }
  &--language-switcher:hover {
    cursor: pointer;
    color: $background-color-secondary;
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.vue
git commit -m "feat: add active state to current navbar route item"
```

---

### Task 2: Comment textarea in ContactUs.vue

**Files:**
- Modify: `src/components/ContactUs.vue`

- [ ] **Step 1: Add `message` to the `form` data object**

In the `data()` return, add `message: ""`:

```js
data() {
  return {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    },
    submitting: false,
    submitted: false,
  };
},
```

- [ ] **Step 2: Add the textarea to the template**

After the address field div (line ending `</div>`) and before `</div>` that closes `contact-form__fields`, add a new full-width field:

```html
<div class="contact-form__field contact-form__field--full">
  <label for="message">{{ $t("contact.form.message") }}</label>
  <textarea
    id="message"
    v-model="form.message"
    name="message"
    rows="4"
    :placeholder="$t('contact.form.message')"
  ></textarea>
</div>
```

- [ ] **Step 3: Style the textarea to match the inputs**

In the `<style>` block, inside `&__field`, add a `textarea` rule after the existing `input` rule:

```scss
textarea {
  font-family: "Inter", sans-serif;
  font-size: 15.2px;
  font-weight: 400;
  color: $color-secondary;
  background: $default-white;
  border: none;
  outline: 1px solid #cfdedb;
  border-radius: 14px;
  padding: 14px 16px;
  transition: outline-color 0.2s ease;
  resize: vertical;

  &::placeholder {
    color: rgba(153, 178, 174, 0.8);
  }

  &:focus {
    outline: 2px solid $background-color-primary;
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ContactUs.vue
git commit -m "feat: add optional comment textarea to contact form"
```

---

### Task 3: Add `message` i18n keys to content JSON files

**Files:**
- Modify: `content/contact/el/form.json`
- Modify: `content/contact/en/form.json`

- [ ] **Step 1: Add Greek label**

In `content/contact/el/form.json`, add `"message"` before `"cta"`:

```json
{
  "title": "Επικοινωνήστε μαζί μου",
  "firstName": "Όνομα",
  "lastName": "Επώνυμο",
  "email": "Email",
  "phone": "Τηλέφωνο",
  "address": "Διεύθυνση",
  "message": "Σχόλια",
  "cta": "Αποστολή μηνύματος",
  "privacyNote": "Τα στοιχεία σας είναι απόρρητα και χρησιμοποιούνται μόνο για να σας απαντήσουμε.",
  "successMessage": "Ευχαριστούμε! Το μήνυμά σας εστάλη με επιτυχία."
}
```

- [ ] **Step 2: Add English label**

In `content/contact/en/form.json`, add `"message"` before `"cta"`:

```json
{
  "title": "Get in touch",
  "firstName": "First name",
  "lastName": "Last name",
  "email": "Email",
  "phone": "Phone",
  "address": "Address",
  "message": "Comments",
  "cta": "Send message",
  "privacyNote": "Your details are kept private and used only to reply to you.",
  "successMessage": "Thank you! Your message has been sent successfully."
}
```

- [ ] **Step 3: Commit**

```bash
git add content/contact/el/form.json content/contact/en/form.json
git commit -m "feat: add message label to contact form i18n content"
```

---

### Task 4: Add `message` field to CMS config

**Files:**
- Modify: `public/admin/config.yml`

The contact-form entry for EL currently ends with `{label: "Μήνυμα Επιτυχίας", name: "successMessage", widget: "string"}`. Add `message` before `cta` in both EL and EN entries.

- [ ] **Step 1: Add to EL contact-form**

Find the EL contact-form fields block and add after `address`:

```yaml
          - { label: "Σχόλια", name: "message", widget: "text" }
```

The full EL contact-form fields list becomes:

```yaml
        fields:
          - { label: "Τίτλος Φόρμας", name: "title", widget: "string" }
          - { label: "Όνομα", name: "firstName", widget: "string" }
          - { label: "Επώνυμο", name: "lastName", widget: "string" }
          - { label: "Email", name: "email", widget: "string" }
          - { label: "Τηλέφωνο", name: "phone", widget: "string" }
          - { label: "Διεύθυνση", name: "address", widget: "string" }
          - { label: "Σχόλια", name: "message", widget: "text" }
          - { label: "Κείμενο Κουμπιού", name: "cta", widget: "string" }
          - { label: "Σημείωση Απορρήτου", name: "privacyNote", widget: "string" }
          - { label: "Μήνυμα Επιτυχίας", name: "successMessage", widget: "string" }
```

- [ ] **Step 2: Add to EN contact-form**

Find the EN contact-form fields block and add after `address`:

```yaml
          - { label: "Comments", name: "message", widget: "text" }
```

The full EN contact-form fields list becomes:

```yaml
        fields:
          - { label: "Form Title", name: "title", widget: "string" }
          - { label: "First Name", name: "firstName", widget: "string" }
          - { label: "Last Name", name: "lastName", widget: "string" }
          - { label: "Email", name: "email", widget: "string" }
          - { label: "Phone", name: "phone", widget: "string" }
          - { label: "Address", name: "address", widget: "string" }
          - { label: "Comments", name: "message", widget: "text" }
          - { label: "Submit Button", name: "cta", widget: "string" }
          - { label: "Privacy Note", name: "privacyNote", widget: "string" }
          - { label: "Success Message", name: "successMessage", widget: "string" }
```

- [ ] **Step 3: Commit**

```bash
git add public/admin/config.yml
git commit -m "feat: add message field to CMS contact form config"
```

---

### Task 5: Final doc commit

- [ ] **Step 1: Commit spec and plan**

```bash
git add docs/superpowers/specs/2026-05-11-nav-active-state-and-comment-field-design.md docs/superpowers/plans/2026-05-11-nav-active-state-and-comment-field.md
git commit -m "docs: add nav active state and comment field spec and plan"
```
