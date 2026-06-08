<script setup lang="ts">
import UiIcon from "@/components/common/UiIcon.vue";

defineProps<{
  name: string;
  customClass?: string;
  extension?: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "plain" | "soft" | "solid" | "outline";
  label?: string;
}>();
</script>

<template>
  <UiIcon v-bind="$props" />
</template>
