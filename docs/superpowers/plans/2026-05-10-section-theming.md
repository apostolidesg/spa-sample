# Section Theming via CSS Custom Properties Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace hardcoded SCSS color variables in content components with CSS custom properties so that setting a section's background automatically pairs it with the correct text colors.

**Architecture:** A new `_themes.scss` file defines three SCSS mixins (`theme-dark`, `theme-light`, `theme-white`). Each mixin sets `background-color` plus two CSS custom properties (`--color-text`, `--color-text-secondary`). Page section wrappers apply a mixin; child components inherit the tokens via `var()`.

**Tech Stack:** Vue 2, SCSS (sass), CSS custom properties

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/assets/scss/_themes.scss` | Create | Defines the three theme mixins |
| `src/pages/Home.vue` | Modify | Apply theme mixins to section wrappers |
| `src/pages/ServicesAndContact.vue` | Modify | Apply theme mixins to section wrappers |
| `src/pages/About.vue` | Modify | Apply theme mixins to section wrappers |
| `src/pages/Services.vue` | Modify | Apply theme mixins to section wrappers |
| `src/pages/Contact.vue` | Modify | Apply theme mixins to section wrappers |
| `src/components/ContactInfo.vue` | Modify | Replace hardcoded colors with `var()` |
| `src/components/ServiceBlock.vue` | Modify | Replace hardcoded title color with `var()` |
| `src/components/common/ServiceBlockItem.vue` | Modify | Replace hardcoded label/extra-info colors with `var()` |
| `src/components/common/ImageTextBlock.vue` | Modify | Replace hardcoded title/description colors with `var()` |
| `src/components/ContactUs.vue` | Modify | Replace hardcoded title color with `var()` |

---

### Task 1: Create `_themes.scss`

**Files:**
- Create: `src/assets/scss/_themes.scss`

- [ ] **Step 1: Create the file with the three mixins**

```scss
// _themes.scss
@use "variables" as *;

@mixin theme-dark {
  background-color: $background-color-primary;
  --color-text: #{$default-white};
  --color-text-secondary: #{$background-color-secondary};
}

@mixin theme-light {
  background-color: $background-color-secondary;
  --color-text: #{$background-color-primary};
  --color-text-secondary: #{$color-secondary};
}

@mixin theme-white {
  --color-text: #{$background-color-primary};
  --color-text-secondary: #{$color-secondary};
}
```

- [ ] **Step 2: Commit**

```bash
git add src/assets/scss/_themes.scss
git commit -m "feat: add theme mixins for CSS custom property theming"
```

---

### Task 2: Update page section wrappers

**Files:**
- Modify: `src/pages/Home.vue`
- Modify: `src/pages/ServicesAndContact.vue`
- Modify: `src/pages/About.vue`
- Modify: `src/pages/Services.vue`
- Modify: `src/pages/Contact.vue`

- [ ] **Step 1: Update `Home.vue` styles**

Replace the existing `<style>` block:

```scss
<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
@use "../assets/scss/themes" as *;

.about-section {
  @include theme-white;
}
.services-section {
  @include theme-dark;
}
.contact-info-section {
  @include theme-light;
}
</style>
```

- [ ] **Step 2: Update `ServicesAndContact.vue` styles**

Replace the existing `<style>` block:

```scss
<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
@use "../assets/scss/themes" as *;

.services-contact-section {
  @include theme-dark;
}
.form-section {
  @include theme-light;
  padding: 5em 0 6em;
}
.info-section {
  @include theme-dark;
}
</style>
```

- [ ] **Step 3: Update `About.vue` styles**

Replace the existing `<style>` block:

```scss
<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
@use "../assets/scss/themes" as *;

.faq-section {
  @include theme-dark;
}
.about-section {
  @include theme-white;
}
</style>
```

- [ ] **Step 4: Update `Services.vue` styles**

Replace the existing `<style>` block:

```scss
<style lang="scss" scoped>
@use "../assets/scss/themes" as *;

.services-section {
  @include theme-dark;
}
</style>
```

- [ ] **Step 5: Update `Contact.vue` styles**

Replace the existing `<style>` block:

```scss
<style lang="scss" scoped>
@use "../assets/scss/themes" as *;

.contact-section {
  @include theme-white;
}
.info-section {
  @include theme-light;
}
</style>
```

- [ ] **Step 6: Commit**

```bash
git add src/pages/Home.vue src/pages/ServicesAndContact.vue src/pages/About.vue src/pages/Services.vue src/pages/Contact.vue
git commit -m "feat: apply theme mixins to all page section wrappers"
```

---

### Task 3: Update `ContactInfo.vue`

**Files:**
- Modify: `src/components/ContactInfo.vue`

This component is currently broken when placed on a dark background — all its text uses `$background-color-primary` (dark green), which is invisible on a dark green background. It is used on dark bg in `ServicesAndContact` and on light bg in `Contact` and `Home`.

- [ ] **Step 1: Replace all hardcoded text colors**

In `src/components/ContactInfo.vue`, update the `<style>` block. Replace every `color: $background-color-primary` with `color: var(--color-text)` and the `background-color: #064848` in `.line-separator` with `background-color: var(--color-text)`. Also update the social link hover and the `@use` import:

```scss
<style lang="scss" scoped>
@use "../assets/scss/variables" as *;

.contact-info-block {
  display: flex;
  justify-content: space-evenly;

  &__hours,
  &__locations {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    &-title {
      font-size: 2em;
      color: var(--color-text);
      margin-bottom: 0.5em;
      font-weight: 700;
    }
  }
  &__hours {
    &-item {
      font-size: 1.1em;
      color: var(--color-text);
      min-height: 30px;
    }
  }
  &__locations {
    &-list {
      display: flex;
      gap: 2em;
      &--item {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        font-size: 1.1em;
        color: var(--color-text);

        span {
          min-height: 30px;
        }
      }
    }
  }
  .line-separator {
    display: block;
    width: 40px;
    height: 2px;
    background-color: var(--color-text);
    margin: 20px 0;
  }
  .social-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    color: var(--color-text);
    text-decoration: none;
    transition: color 0.2s ease;

    i {
      font-size: 1.3em;
    }

    &:hover {
      color: $default-black;
    }
  }
  @media (max-width: $breakpoint-laptop) {
    font-size: 0.8em;
  }
  @media (max-width: $breakpoint-mobile) {
    flex-direction: column;
    align-items: center;

    &__hours,
    &__locations {
      min-width: 260px;
    }

    &__locations-list {
      flex-direction: column;
    }
  }
}
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ContactInfo.vue
git commit -m "feat: use CSS custom properties for text color in ContactInfo"
```

---

### Task 4: Update `ServiceBlock.vue` and `ServiceBlockItem.vue`

**Files:**
- Modify: `src/components/ServiceBlock.vue`
- Modify: `src/components/common/ServiceBlockItem.vue`

`ServiceBlock` is always placed on dark sections; its title is `$default-white`. Switching to `var(--color-text)` makes it correct by inheritance without breaking current appearance. `ServiceBlockItem` label and extra-info text are hardcoded white — same fix.

The icon badge (`&__icon`) stays hardcoded (`color: #064848; background: #d8efed`) — it's a pill badge intentionally styled against its own bg, not the section.

- [ ] **Step 1: Update `ServiceBlock.vue` title color**

In `src/components/ServiceBlock.vue`, in the `<style>` block, change `&__title`:

```scss
  &__title {
    font-size: 2em;
    color: var(--color-text);
    text-align: center;
  }
```

- [ ] **Step 2: Update `ServiceBlockItem.vue` label and extra-info colors**

In `src/components/common/ServiceBlockItem.vue`, in the `<style>` block, change `&__label` and `&__extra-info`:

```scss
  &__label {
    width: 60%;
    color: var(--color-text);
    font-size: 1.5em;
    line-height: 1.5em;

    &-content {
      font-size: 0.7em;
    }
  }
  &__extra-info {
    color: var(--color-text-secondary);
    font-size: 1.2em;
    line-height: 1.5em;
  }
```

Also update `&__number` (used when `showIcon=false`, on dark bg in Home):

```scss
  &__number {
    width: 20%;
    text-align: center;
    font-size: 2em;
    color: var(--color-text);
  }
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ServiceBlock.vue src/components/common/ServiceBlockItem.vue
git commit -m "feat: use CSS custom properties for text colors in ServiceBlock and ServiceBlockItem"
```

---

### Task 5: Update `ImageTextBlock.vue`

**Files:**
- Modify: `src/components/common/ImageTextBlock.vue`

Currently only placed on white sections, but the colors are hardcoded. Switching to CSS vars makes it correct by inheritance and future-proof.

The decorative colored blocks behind the image (`left-block--active`, `right-block--active`) use `$background-color-primary` as their background — these are intentional decorative elements, not text, so they stay hardcoded.

- [ ] **Step 1: Update title and description colors**

In `src/components/common/ImageTextBlock.vue`, in the `<style>` block, change `&__content`:

```scss
  &__content {
    flex-direction: column;
    gap: 2em;

    &--title {
      font-size: 2em;
      font-weight: 700;
      color: var(--color-text);
    }
    &--descr {
      font-size: 1.5em;
      color: var(--color-text-secondary);
    }
    .bullet {
      display: list-item;
      list-style-type: disc;
      margin-left: 20px;
    }
  }
```

- [ ] **Step 2: Commit**

```bash
git add src/components/common/ImageTextBlock.vue
git commit -m "feat: use CSS custom properties for text colors in ImageTextBlock"
```

---

### Task 6: Update `ContactUs.vue`

**Files:**
- Modify: `src/components/ContactUs.vue`

Only the `&__title` (the heading above the white card) needs to adapt. Everything inside the card has its own white background and is self-contained.

- [ ] **Step 1: Update title color**

In `src/components/ContactUs.vue`, in the `<style>` block, change `&__title`:

```scss
  &__title {
    font-family: "Fraunces", serif;
    font-size: 44px;
    font-weight: 400;
    line-height: 1.1;
    color: var(--color-text);
    text-align: center;
    margin: 0;
  }
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ContactUs.vue
git commit -m "feat: use CSS custom property for title color in ContactUs"
```

---

### Task 7: Final verification commit

- [ ] **Step 1: Verify all pages render correctly**

Open each page in the browser and check:
- `Home` — about section (white bg, dark text), services section (dark bg, white text), contact info section (light bg, dark text)
- `ServicesAndContact` — services list (dark bg, white text), form section (light bg, dark title above card), info section (dark bg, white text)
- `About` — about section (white bg, dark text), FAQ section (dark bg, white cards)
- `Services` — services list (dark bg, white text)
- `Contact` — contact form (white bg, dark title), info section (light bg, dark text)

- [ ] **Step 2: Final commit with design doc**

```bash
git add docs/superpowers/specs/2026-05-10-section-theming-design.md docs/superpowers/plans/2026-05-10-section-theming.md
git commit -m "docs: add section theming spec and implementation plan"
```
