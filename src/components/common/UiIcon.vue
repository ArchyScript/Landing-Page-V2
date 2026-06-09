<script setup lang="ts">
import { computed } from "vue";
import { assetUrl } from "@/utils/assets";

const props = withDefaults(
  defineProps<{
    name: string;
    customClass?: string;
    extension?: string;
    alt?: string;
    size?: "xs" | "sm" | "md" | "lg";
    variant?: "plain" | "soft" | "solid" | "outline";
    label?: string;
  }>(),
  {
    customClass: "",
    extension: "svg",
    alt: "",
    size: "md",
    variant: "plain",
    label: "",
  },
);

const iconSrc = computed(
  () => assetUrl(`images/icons/${props.name}.${props.extension}`),
);

const imgClass = computed(() => {
  if (props.customClass) return props.customClass;

  return {
    xs: "h-4 w-4",
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  }[props.size];
});

const accessibleLabel = computed(() => props.label || props.alt);
const variantClass = computed(
  () =>
    ({
      plain: "",
      soft: "h-10 w-10 rounded-xl bg-brand-50",
      solid: "h-10 w-10 rounded-xl bg-brand-600",
      outline: "h-10 w-10 rounded-xl border border-theme-line bg-theme-surface",
    })[props.variant],
);
</script>

<template>
  <span
    class="ui-icon inline-grid shrink-0 place-items-center"
    :class="variantClass"
    :aria-label="accessibleLabel || undefined"
    :aria-hidden="accessibleLabel ? undefined : true"
  >
    <img class="block object-contain" :src="iconSrc" :alt="accessibleLabel" :class="imgClass" />
  </span>
</template>
