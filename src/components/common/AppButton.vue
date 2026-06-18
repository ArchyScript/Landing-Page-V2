<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string;
    icon?: string;
    target?: string;
  }>(),
  {
    href: '#download',
    icon: '',
    target: undefined,
  },
);
</script>

<template>
  <a
    class="button-lift inline-flex items-center justify-center gap-2 rounded-sm bg-primary-100 px-4 py-[10px] md:px-4 md:py-3 text-sm font-medium leading-5 !text-white transition duration-300 ease-smooth ring ring-primary-light"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
  >
    <UiIcon
      v-if="icon"
      :name="icon"
      custom-class="h-4 w-4 brightness-0 invert"
    />
    <slot />
  </a>
</template>
