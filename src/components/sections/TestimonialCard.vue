<script setup lang="ts">
import RatingStars from '@/components/common/RatingStars.vue';
import type { Testimonial } from '@/data/landing';

defineProps<{
  testimonial: Testimonial;
}>();
</script>

<template>
  <article
    class="testimonial-card mb-6 w-full break-inside-avoid rounded-2xl bg-brand-50/50 p-8 transition duration-300 ease-smooth hover:-translate-y-1 hover:shadow-soft"
  >
    <h3 class="text-lg font-semibold leading-snug text-primary-100">
      "{{ testimonial.quote }}"
    </h3>
    <p class="mt-6 font-medium text-sm leading-7 text-neutral-100">
      {{ testimonial.text }}
    </p>
    <div class="mt-8 flex items-center justify-between text-sm text-neutral-80">
      <span>- {{ testimonial.author }}</span>
      <RatingStars />
    </div>
  </article>
</template>
