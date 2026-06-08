<script setup lang="ts">
withDefaults(
  defineProps<{
    count?: number;
    label?: string;
  }>(),
  {
    count: 5,
    label: '5 star rating',
  },
);
</script>

<template>
  <span
    class="inline-flex gap-0.5 font-extrabold text-theme-accent"
    :aria-label="label"
    role="img"
  >
    <span v-for="star in count" :key="star" aria-hidden="true">⭐</span>
  </span>
</template>
