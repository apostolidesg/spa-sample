<template>
  <div class="contact-us">
    <div v-if="submitted" class="contact-us__success">
      <p>{{ $t("contact.form.successMessage") }}</p>
    </div>

    <form
      v-else
      class="contact-us__form"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="submitForm"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />

      <div class="contact-us__form-group">
        <label for="firstName">{{ $t("contact.form.firstName") }}</label>
        <input id="firstName" v-model="form.firstName" type="text" name="firstName" required />
      </div>

      <div class="contact-us__form-group">
        <label for="lastName">{{ $t("contact.form.lastName") }}</label>
        <input id="lastName" v-model="form.lastName" type="text" name="lastName" required />
      </div>

      <div class="contact-us__form-group contact-us__form-group--email">
        <label for="email">{{ $t("contact.form.email") }}</label>
        <input id="email" v-model="form.email" type="email" name="email" required />
      </div>

      <div class="contact-us__form-group">
        <label for="phone">{{ $t("contact.form.phone") }}</label>
        <input id="phone" v-model="form.phone" type="text" name="phone" required />
      </div>

      <div class="contact-us__form-group">
        <label for="address">{{ $t("contact.form.address") }}</label>
        <input id="address" v-model="form.address" type="text" name="address" required />
      </div>

      <button type="submit" class="contact-us__form-group--cta" :disabled="submitting">
        {{ $t("contact.form.cta") }}
      </button>
    </form>
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
        // silently fail — form fields remain so the user can retry
      } finally {
        this.submitting = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
.contact-us {
  &__success {
    text-align: center;
    padding: 3em;
    font-size: 1.2em;
    color: $background-color-primary;
    font-weight: bold;
  }

  &__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    column-gap: 2em;
    row-gap: 2em;
    width: 80%;
    margin: auto;

    &-group {
      display: flex;
      flex-direction: column;
      gap: 0.5em;

      &--email,
      &--cta {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      &--cta {
        width: 70%;
        font-size: 1em;
        font-weight: 700;
        padding: 1em 2em;
        color: $default-white;
        background: $background-color-primary;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: background 0.3s ease, color 0.3s ease;
        margin: auto;

        &:hover {
          color: $color-primary;
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      }

      label {
        font-size: 1em;
        color: $background-color-primary;
        font-weight: bold;
      }

      input {
        border: none;
        border-bottom: 2px solid $background-color-primary;
        outline: none;
        padding: 1em;
        font-size: 1em;
        color: $color-secondary;
      }
    }
  }
  @media (max-width: 768px) {
    &__form {
      display: flex;
      flex-direction: column;

      &-group {
        &--cta {
          width: 100%;
        }
      }
    }
  }
}
</style>
