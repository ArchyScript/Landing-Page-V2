<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    href?: string;
    icon?: string;
    variant?: 'primary' | 'light' | 'outline';
    customClass?: string;
  }>(),
  {
    href: '#download',
    icon: '',
    variant: 'primary',
    customClass: '',
  },
);

const variantClass = computed(
  () => 'bg-primary-100 hover:bg-primary',
);

const iconClass = computed(() => 'h-4 w-4 brightness-0 invert');
</script>

<template>
  <a
    class="button-lift inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-medium leading-5 !text-white transition duration-300 ease-smooth hover:-translate-y-px focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 disabled:cursor-not-allowed disabled:opacity-50"
    :class="`${variantClass} ${props.customClass}`"
    :href="href"
  >
    <UiIcon v-if="icon" :name="icon" :custom-class="iconClass" />
    <slot />
  </a>
</template>
