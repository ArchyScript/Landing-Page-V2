<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title?: string;
  greenText?: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="reveal-item mx-auto max-w-3xl md:px-4 text-center sm:px-6">
    <span
      v-if="eyebrow"
      class="inline-flex rounded-full border border-theme-line px-4 py-2 text-sm"
    >
      {{ eyebrow }}
    </span>

    <slot name="title">
      <h2
        class="mt-4 font-display text-4xl font-bold leading-[1.08] text-neutral-100 sm:text-5xl lg:text-6xl"
      >
        <span v-if="greenText" class="text-primary-100">{{ greenText }}</span>
        <template v-if="greenText"><br /></template>
        {{ title }}
      </h2>
    </slot>

    <slot name="subtitle">
      <p
        v-if="subtitle"
        class="mx-auto mt-4 max-w-2xl text-lg font-medium leading-6 text-neutral-70 sm:mt-5 sm:text-lg sm:leading-7"
      >
        {{ subtitle }}
      </p>
    </slot>
  </div>
</template>
