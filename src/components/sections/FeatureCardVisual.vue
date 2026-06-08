<script setup lang="ts">
defineProps<{
  imageSrc?: string;
  imageAlt: string;
}>();
</script>

<template>
  <div
    class="grid min-h-80 place-items-center overflow-hidden lg:min-h-[28rem]"
  >
    <ImageLoader
      :photo-url="imageSrc"
      :alt="imageAlt"
      fit="contain"
      custom-class="block h-full w-full overflow-hidden"
    />
  </div>
</template>
