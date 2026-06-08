<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string;
    label?: string;
  }>(),
  {
    href: "#top",
    label: "GreepPay",
  },
);
</script>

<template>
  <a
    class="inline-flex items-center gap-2 font-display text-lg font-semibold text-theme-ink"
    :href="href"
    :aria-label="`${label} home`"
  >
    <img class="h-8 w-[7.375rem] object-contain" src="/images/icons/greep-ful-logo.svg" :alt="label" />
  </a>
</template>
