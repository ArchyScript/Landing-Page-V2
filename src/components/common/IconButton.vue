<script setup lang="ts">
defineProps<{
  icon: 'menu' | 'close';
  label: string;
  expanded?: boolean;
  controls?: string;
}>();

defineEmits<{
  click: [];
}>();
</script>

<template>
  <button
    class="grid h-12 w-12 place-items-center rounded-xl border border-theme-line bg-white text-white transition duration-300 ease-smooth hover:-translate-y-px hover:border-brand-600/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
    type="button"
    :aria-label="label"
    :aria-expanded="expanded"
    :aria-controls="controls"
    @click="$emit('click')"
  >
    <UiIcon :name="icon" size="sm" />
  </button>
</template>
