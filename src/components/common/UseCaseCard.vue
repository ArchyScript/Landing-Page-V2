<script setup lang="ts">
import PlaceholderImage from '@/components/common/PlaceholderImage.vue';

defineProps<{
  title: string;
  imageSrc?: string;
  imageAlt: string;
  imageLabel: string;
  tone?: 'mint' | 'green' | 'dark' | 'warm' | 'neutral';
}>();
</script>

<template>
  <article
    class="grid min-h-fit border-[0.5px] border-white transition duration-300 ease-smooth hover:-translate-y-0.5 border-[0.5px] border-theme-line"
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
      <!-- <PlaceholderImage
        :src="imageSrc"
        :alt="imageAlt"
        :label="imageLabel"
        :tone="tone"
        fit="cover"
      /> -->
    </div>
  </article>
</template>
