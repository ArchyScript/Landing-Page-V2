<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue';

// defineProps<{
//   href: string;
//   label: string;
//   icon?: string;
//   target?: string;
// }>();

withDefaults(
  defineProps<{
    href: string;
    label: string;
    icon?: string;
    target?: string;
    customClasss?: string;
  }>(),
  {
    target: '_blank',
  },
);
</script>

<template>
  <span
    role="button"
    class="min-w-34 !max-w-fit  py-[0.85rem] select-none text-neutral-100 flex cursor-pointer items-center rounded-md border-[0.5px] border-border-dark bg-theme-surface px-4 text-sm font-medium transition duration-300 ease-smooth hover:bg-theme-canvas focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-100"
    :href="href"
    :target="target"
    :class="customClasss"
  >
    <UiIcon v-if="icon" :name="icon" class="mr-2" />
    <span class="font-medium">{{ label }}</span>
  </span>
</template>
