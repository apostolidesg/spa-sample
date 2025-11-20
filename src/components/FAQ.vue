<template>
  <div class="faq-container">
    <div class="faq-list">
      <div v-for="(_, index) in faqItems" :key="index" class="faq-list__item">
        <div class="faq-list__item--question" @click="toggleAccordion(index)">
          {{ $t(`about.FAQ.item-${index}.question`) }}
          <i
            class="fa-solid fa-angle-up faq-list__item--question-icon"
            :class="{ 'is-expanded': isExpandedItem(index) }"
          ></i>
        </div>
        <div
          v-if="isExpandedItem(index)"
          class="faq-list__item--answer testimonial"
          @click="toggleAccordion(index)"
        >
          {{ $t(`about.FAQ.item-${index}.answer`) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FAQlength } from "../constants/commonConstants";
export default {
  data() {
    return {
      isExpanded: false,
      currentIndex: null,
    };
  },
  created() {
    this.faqItems = FAQlength;
  },
  methods: {
    toggleAccordion(index) {
      if (this.currentIndex === index) {
        this.currentIndex = null;
      } else {
        this.currentIndex = index;
      }
    },
    isExpandedItem(index) {
      return this.currentIndex === index;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;

.faq-container {
  max-width: 800px;
  margin: 0 auto;

  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 1em;

    &__item {
      border-radius: 8px;
      background-color: $default-white;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      &--question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
        padding: 16px;
        font-size: 1.2em;
        font-weight: 700;
        color: $background-color-primary;
        text-align: left;

        &-icon {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .is-expanded {
          transform: rotate(180deg);
        }
      }

      &--answer {
        padding: 16px;
        font-size: 1em;
        color: $color-secondary;
        border-radius: 0 0 8px 8px;
        animation: fadeIn 0.3s ease;
      }
    }
  }
}

@media (max-width: $breakpoint-mobile) {
  .faq-container {
    .faq-list {
      &__item {
        &--question {
          font-size: 1em;
        }
      }
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
