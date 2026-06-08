<script setup lang="ts">
import { computed } from "vue";
import ImageLoader from "@/components/common/ImageLoader.vue";

const props = withDefaults(
  defineProps<{
    photoUrl?: string;
    src?: string;
    alt: string;
    label: string;
    tone?: "mint" | "green" | "dark" | "warm" | "neutral";
    fit?: "cover" | "contain" | "fill";
  }>(),
  {
    photoUrl: "",
    src: "",
    tone: "mint",
    fit: "cover",
  },
);

const toneClass = computed(
  () =>
    ({
      mint: "bg-[#e8f7f0]",
      green: "bg-primary-100",
      dark: "bg-[linear-gradient(90deg,rgb(0_0_0_/_0.72),rgb(0_0_0_/_0.28)),linear-gradient(135deg,#1c2f2a,#8aa69a)]",
      warm: "bg-[linear-gradient(135deg,#f7efe7,#cfa678)]",
      neutral: "bg-[linear-gradient(135deg,#d9e4df,#899e97)]",
    })[props.tone],
);
</script>

<template>
  <div
    class="placeholder-image relative grid h-full min-h-[inherit] w-full place-items-center overflow-hidden"
    :class="toneClass"
  >
    <ImageLoader
      :photo-url="photoUrl"
      :src="src"
      :alt="alt"
      :label="label"
      :fit="fit"
    />
  </div>
</template>

<style scoped>
.placeholder-image {
  isolation: isolate;
}

.placeholder-image::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, transparent 20%, rgb(255 255 255 / 0.28) 45%, transparent 70%);
  content: "";
  opacity: 0;
  transform: translateX(-45%);
  transition:
    opacity 400ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
}

.placeholder-image:hover::after {
  opacity: 1;
  transform: translateX(45%);
}
</style>
