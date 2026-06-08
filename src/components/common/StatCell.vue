<script setup lang="ts">
withDefaults(
  defineProps<{
    value: string;
    label: string;
    eyebrow?: string;
    compact?: boolean;
  }>(),
  {
    eyebrow: "",
    compact: false,
  },
);
</script>

<template>
  <div class="flex min-h-72 flex-col justify-between p-8">
    <small v-if="eyebrow" class="text-sm text-theme-muted md:text-base">{{ eyebrow }}</small>
    <strong
      class="text-black"
      :class="compact ? 'text-3xl leading-tight' : 'text-5xl leading-none'"
    >
      {{ value }}
    </strong>
    <span class="text-sm text-theme-muted md:text-base">{{ label }}</span>
  </div>
</template>
