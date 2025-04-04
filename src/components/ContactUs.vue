<template>
  <div class="contact-us">
    <div class="contact-us__form">
      <div class="contact-us__form-group">
        <label for="firstName">{{ $t("contact.form.firstName") }}</label>
        <input id="firstName" v-model="form.firstName" type="text" required />
      </div>

      <div class="contact-us__form-group">
        <label for="lastName">{{ $t("contact.form.lastName") }}</label>
        <input id="lastName" v-model="form.lastName" type="text" required />
      </div>

      <div class="contact-us__form-group contact-us__form-group--email">
        <label for="email">{{ $t("contact.form.email") }}</label>
        <input id="email" v-model="form.email" type="email" required />
      </div>

      <div class="contact-us__form-group">
        <label for="phone">{{ $t("contact.form.phone") }}</label>
        <input id="phone" v-model="form.phone" type="text" required />
      </div>

      <div class="contact-us__form-group">
        <label for="address">{{ $t("contact.form.address") }}</label>
        <input id="address" v-model="form.address" type="text" required />
      </div>

      <button class="contact-us__form-group--cta">
        {{ $t("contact.form.cta") }}
      </button>
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
      successMessage: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
.contact-us {
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
