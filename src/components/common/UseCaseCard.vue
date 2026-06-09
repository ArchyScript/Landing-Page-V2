<script setup lang="ts">
import ImageLoader from '@/components/common/ImageLoader.vue';

defineProps<{
  title: string;
  imageSrc?: string;
  imageAlt: string;
  imageLabel: string;
}>();
</script>

<template>
  <article
    class="grid min-h-fit border border-theme-line transition duration-300 ease-smooth hover:-translate-y-0.5"
  >
    <h3
      class="p-8 text-lg font-semibold leading-6 text-neutral-100 md:p-8 md:text-xl md:leading-8"
    >
      {{ title }}
    </h3>

    <div class="min-h-[18rem]">
      <ImageLoader
        :photo-url="imageSrc"
        :src="imageSrc"
        :alt="imageAlt"
        :label="imageLabel"
        fit="cover"
      />
    </div>
  </article>
</template>
