<template>
  <div class="contact-info-block">
    <div class="contact-info-block__hours">
      <span class="contact-info-block__hours-title">{{
        $t("contact.workingHours.title")
      }}</span>
      <span class="contact-info-block__hours-item">{{
        $t("contact.workingHours.weekdays")
      }}</span>
      <span class="contact-info-block__hours-item">{{
        $t("contact.workingHours.saturday")
      }}</span>
      <span class="contact-info-block__hours-item">{{
        $t("contact.workingHours.sunday")
      }}</span>
    </div>
    <div class="contact-info-block__locations">
      <span class="contact-info-block__locations-title">{{
        $t("contact.practiceLocations.title")
      }}</span>
      <div class="contact-info-block__locations-list">
        <div
          v-for="location in locations"
          class="contact-info-block__locations-list--item"
        >
          <span>{{
            $t(`contact.practiceLocations.${location.value}.name`)
          }}</span>
          <span>{{
            $t(`contact.practiceLocations.${location.value}.street`)
          }}</span>
          <span>{{
            $t(`contact.practiceLocations.${location.value}.city`)
          }}</span>
          <span>{{
            $t(`contact.practiceLocations.${location.value}.email`)
          }}</span>
          <div class="line-separator"></div>
          <span>{{
            $t(`contact.practiceLocations.${location.value}.tel`)
          }}</span>
          <span>{{
            $t(`contact.practiceLocations.${location.value}.fax`)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LOCATIONS_ITEMS } from "../constants/commonConstants";

export default {
  name: "ContactInfoBlock",
  data() {
    return {
      locations: LOCATIONS_ITEMS,
    };
  },
};
</script>

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
      color: $background-color-primary;
      margin-bottom: 0.5em;
      font-weight: 700;
    }
  }
  &__hours {
    &-item {
      font-size: 1.1em;
      color: $background-color-primary;
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
        color: $background-color-primary;

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
    background-color: #064848;
    margin: 20px 0;
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
