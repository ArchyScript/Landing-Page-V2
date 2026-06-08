<script setup lang="ts">
import PlaceholderImage from '@/components/common/PlaceholderImage.vue';

defineProps<{
  index: number;
  title: string;
  text: string;
  descriptions?: string[];
  extraText?: string;
  isBullet?: boolean;
  imageSrc?: string;
  imageAlt: string;
  imageLabel: string;
}>();
</script>

<template>
  <article class="transition duration-300 ease-smooth hover:-translate-y-1">
    <div class="h-[22rem] overflow-hidden rounded-[1.25rem]">
      <PlaceholderImage
        :src="imageSrc"
        :alt="imageAlt"
        :label="imageLabel"
        :tone="index === 1 ? 'green' : 'mint'"
      />
    </div>

    <h3 class="mt-6 text-lg font-bold text-black md:text-xl">
      <span class="text-[#129b64] pr-2">{{ index + 1 }}</span> {{ title }}
    </h3>

    <div v-if="descriptions" class="pt-2">
      <p
        v-for="(desc, index) in descriptions"
        :key="index"
        class="text-sm leading-7 text-neutral-80 lg:text-base lg:leading-8"
      >
        <span v-if="isBullet" class="text-xl"> • </span>
        {{ desc }}
      </p>
    </div>

    <p class="mt-3 leading-[1.7] text-neutral-80">{{ extraText }}</p>
  </article>
</template>
