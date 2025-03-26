<template>
  <div class="contact-us">
    <form @submit.prevent="submitForm">
      <div class="contact-us__form-group">
        <label for="firstName">{{ $t("contact.form.firstName") }}</label>
        <input id="firstName" v-model="form.firstName" type="text" required />
      </div>

      <div class="contact-us__form-group">
        <label for="lastName">{{ $t("contact.form.lastName") }}</label>
        <input id="lastName" v-model="form.lastName" type="text" required />
      </div>

      <div class="contact-us__form-group">
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

      <button class="contact-us__button" type="submit">Send Message</button>

      <p v-if="successMessage">{{ successMessage }}</p>
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
      successMessage: "",
    };
  },
  methods: {
    submitForm() {
      if (!this.form.firstName || !this.form.lastName || !this.form.email) {
        alert("Please fill in all fields.");
        return;
      }

      console.log("Form submitted:", this.form);
      this.successMessage = "Your message has been sent successfully!";

      this.form.firstName = "";
      this.form.lastName = "";
      this.form.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
.contact-us {
}
</style>
