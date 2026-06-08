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
    class="grid min-h-[25rem] grid-rows-[12rem_1fr] border-[0.5px] border-border-dark transition duration-300 ease-smooth hover:-translate-y-0.5 [&+&]:border-t md:[&+&]:border-l md:[&+&]:border-t-0"
  >
    <h3 class="p-6 text-lg font-bold leading-7 text-neutral-100 md:p-8 md:text-xl md:leading-8">
      {{ title }}
    </h3>

    <div class="min-h-66">
      <PlaceholderImage
        :src="imageSrc"
        :alt="imageAlt"
        :label="imageLabel"
        :tone="tone"
      />
    </div>
  </article>
</template>
