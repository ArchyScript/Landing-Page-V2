<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string;
    label: string;
    icon?: string;
    target?: string;
    customClass?: string;
  }>(),
  {
    target: '_blank',
  },
);
</script>

<template>
  <a
    class="flex min-w-34 w-fit text-sm select-none items-center rounded-md border border-border-dark bg-theme-surface px-4 py-[0.85rem] font-medium text-neutral-100 transition duration-300 ease-smooth hover:bg-theme-canvas focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-100"
    :href="href"
    :target="target"
    rel="noopener noreferrer"
    :class="customClass"
  >
    <UiIcon
      v-if="icon"
      :name="icon"
      custom-class="mr-2 h-5 w-5 md:h-6 md:w-6"
    />
    <span>{{ label }}</span>
  </a>
</template>
