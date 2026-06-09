<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    href: string;
    label: string;
    mode?: "desktop" | "mobile";
  }>(),
  {
    mode: "desktop",
  },
);

defineEmits<{
  click: [];
}>();

const modeClass = computed(() =>
  props.mode === "mobile"
    ? "py-[0.85rem] text-base text-black hover:translate-x-1"
    : "text-sm text-theme-ink",
);
</script>

<template>
  <a
    class="font-medium transition duration-300 ease-smooth hover:text-neutral-100 hover:underline hover:underline-offset-4"
    :class="modeClass"
    :href="href"
    @click="$emit('click')"
  >
    {{ label }}
  </a>
</template>
