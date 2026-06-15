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
    class="grid min-h-fit snap-start grid-rows-[7.8rem_13rem] bg-white transition duration-300 ease-smooth sm:grid-rows-[8.2rem_14rem] lg:grid-rows-[9.2rem_13.5rem] xl:grid-rows-[9.5rem_14.5rem]"
  >
    <h3
      class="flex !border-[0.1px] border-[#D9D9D980] items-start px-4 py-4 text-[1rem] font-semibold leading-[1.24] text-neutral-100 sm:px-5 sm:py-5 lg:px-6 lg:py-6 lg:text-[1.02rem]"
    >
      {{ title }}
    </h3>

    <div class="min-h-0 overflow-hidden">
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
