<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  greenText?: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="reveal-item mx-auto max-w-3xl px-4 text-center sm:px-6">
    <span
      v-if="eyebrow"
      class="inline-flex rounded-full border border-theme-line px-4 py-2 text-sm"
    >
      {{ eyebrow }}
    </span>

    <h2
      class="mt-4 font-display text-[1.75rem] font-semibold leading-[1.08] text-neutral-100 sm:text-[2rem] lg:text-[2.5rem]"
    >
      <span v-if="greenText" class="text-primary-100">{{ greenText }}</span>
      <template v-if="greenText"><br /></template>
      {{ title }}
    </h2>

    <p
      v-if="subtitle"
      class="mx-auto mt-4 max-w-2xl text-sm font-medium leading-6 text-neutral-70 sm:mt-5 sm:text-base sm:leading-7"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
