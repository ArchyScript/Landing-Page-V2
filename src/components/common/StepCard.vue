<script setup lang="ts">
import PlaceholderImage from '@/components/common/PlaceholderImage.vue';

defineProps<{
  index: number;
  title: string;
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

    <h3
      class="mt-6 text-lg sm:text-xl font-semibold text-neutral-100 md:text-2xl"
    >
      <span class="pr-2 text-[#129b64]">{{ index + 1 }}</span> {{ title }}
    </h3>

    <div v-if="descriptions" class="pt-2">
      <p
        v-for="(description, descriptionIndex) in descriptions"
        :key="descriptionIndex"
        class="text-sm leading-6 text-neutral-80 font-medium lg:text-base lg:leading-8"
        :class="{ 'pl-2': isBullet }"
      >
        <span v-if="isBullet" class="mr-1 text-xl">&bull;</span>
        {{ description }}
      </p>
    </div>

    <p
      v-if="extraText"
      class="mt-3 text-sm leading-6 text-neutral-80 font-medium lg:text-base lg:leading-8"
    >
      {{ extraText }}
    </p>
  </article>
</template>
