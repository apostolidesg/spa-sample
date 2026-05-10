<template>
  <div class="contact-form">
    <h2 class="contact-form__title">{{ $t("contact.form.title") }}</h2>

    <div class="contact-form__card">
      <div v-if="submitted" class="contact-form__success">
        {{ $t("contact.form.successMessage") }}
      </div>

      <form
        v-else
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="submitForm"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <div class="contact-form__fields">
          <div class="contact-form__field">
            <label for="firstName">{{ $t("contact.form.firstName") }}</label>
            <input
              id="firstName"
              v-model="form.firstName"
              type="text"
              name="firstName"
              placeholder="Maria"
              required
            />
          </div>

          <div class="contact-form__field">
            <label for="lastName">{{ $t("contact.form.lastName") }}</label>
            <input
              id="lastName"
              v-model="form.lastName"
              type="text"
              name="lastName"
              placeholder="Konstantinou"
              required
            />
          </div>

          <div class="contact-form__field">
            <label for="email">{{ $t("contact.form.email") }}</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div class="contact-form__field">
            <label for="phone">{{ $t("contact.form.phone") }}</label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              name="phone"
              placeholder="+30 690 000 0000"
              required
            />
          </div>

          <div class="contact-form__field contact-form__field--full">
            <label for="address">{{ $t("contact.form.address") }}</label>
            <input
              id="address"
              v-model="form.address"
              type="text"
              name="address"
              placeholder="Street, City"
              required
            />
          </div>
        </div>

        <div class="contact-form__footer">
          <button type="submit" class="contact-form__submit" :disabled="submitting">
            <span>{{ $t("contact.form.cta") }}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33331 8H12.6666" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <p class="contact-form__privacy">{{ $t("contact.form.privacyNote") }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
      },
      submitting: false,
      submitted: false,
    };
  },
  methods: {
    async submitForm() {
      this.submitting = true;
      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name": "contact",
            ...this.form,
          }).toString(),
        });
        this.submitted = true;
      } catch {
        // silently fail — fields remain so the user can retry
      } finally {
        this.submitting = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  &__title {
    font-family: "Fraunces", serif;
    font-size: 44px;
    font-weight: 400;
    line-height: 1.1;
    color: var(--color-text);
    text-align: center;
    margin: 0;
  }

  &__card {
    width: 100%;
    background: $default-white;
    border-radius: 24px;
    box-shadow: 0px 24px 64px -24px rgba(6, 72, 72, 0.22);
    padding: 48px;
    box-sizing: border-box;
  }

  &__success {
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 1.1em;
    font-weight: 500;
    color: $background-color-primary;
    padding: 2em 0;
  }

  &__fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 32px;
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &--full {
      grid-column: 1 / -1;
    }

    label {
      font-family: "Inter", sans-serif;
      font-size: 13.6px;
      font-weight: 500;
      line-height: 20.4px;
      letter-spacing: 0.27px;
      color: $color-secondary;
    }

    input {
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

      &::placeholder {
        color: rgba(153, 178, 174, 0.8);
      }

      &:focus {
        outline: 2px solid $background-color-primary;
      }
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 25px;
    border-top: 1px solid $background-color-secondary;
  }

  &__submit {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px 24px;
    background: $background-color-primary;
    color: $default-white;
    font-family: "Inter", sans-serif;
    font-size: 15.2px;
    font-weight: 500;
    letter-spacing: 0.15px;
    border: none;
    border-radius: 16px;
    box-shadow: 0px 8px 24px -8px rgba(6, 72, 72, 0.5);
    cursor: pointer;
    transition: background 0.2s ease, box-shadow 0.2s ease;

    &:hover:not(:disabled) {
      background: $background-color-primary-light;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  &__privacy {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: $color-primary;
    text-align: center;
    margin: 0;
  }

  @media (max-width: $breakpoint-tablet) {
    &__title {
      font-size: 32px;
    }

    &__card {
      padding: 32px 24px;
    }

    &__fields {
      grid-template-columns: 1fr;

      &--full {
        grid-column: 1;
      }
    }
  }
}
</style>
