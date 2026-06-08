<script setup lang="ts">
defineProps<{
  imageSrc?: string;
  imageAlt: string;
}>();
</script>

<template>
  <div
    class="h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] w-full overflow-hidden"
  >
    <ImageLoader
      :photo-url="imageSrc"
      :alt="imageAlt"
      fit="cover"
      custom-class="block h-full w-full overflow-hidden"
    />
  </div>
</template>
