<script setup lang="ts">
import { computed, ref } from 'vue';
import LandingSection from '@/components/common/LandingSection.vue';
import SectionIntro from '@/components/common/SectionIntro.vue';
import FeatureCard from '@/components/sections/FeatureCard.vue';
import type { Audience, Feature } from '@/data/landing';

const props = defineProps<{
  individualFeatures: Feature[];
  merchantFeatures: Feature[];
}>();

const activeAudience = ref<Audience>('individual');
const openFeatureIndexes = ref<number[]>([3]);

const audiences: { label: string; value: Audience }[] = [
  { label: 'Individual User', value: 'individual' },
  { label: 'Merchants', value: 'merchant' },
];

const features = computed(() =>
  activeAudience.value === 'merchant'
    ? props.merchantFeatures
    : props.individualFeatures,
);

const setAudience = (audience: Audience) => {
  activeAudience.value = audience;
  openFeatureIndexes.value = [];
};

const toggleFeature = (index: number) => {
  openFeatureIndexes.value = openFeatureIndexes.value.includes(index)
    ? openFeatureIndexes.value.filter((openIndex) => openIndex !== index)
    : [...openFeatureIndexes.value, index];
};
</script>

<template>
  <LandingSection id="features" class-name="py-12 md:py-16 lg:py-20">
    <div class="container-page">
      <SectionIntro
        green-text="Everything You Need."
        title="One App."
        subtitle="One app for how Africans actually move money across borders. Send, spend, save, sell."
      />

      <div
        class="reveal-item delay-1 mx-auto mt-10 grid max-w-md grid-cols-2 bg-theme-muted-bg border-[0.5px] border-neutral-50-50 rounded-lg p-1"
      >
        <button
          v-for="audience in audiences"
          :key="audience.value"
          class="rounded-md px-4 py-3 text-sm text-neutral-100 transition duration-300 cursor-pointer ease-smooth"
          type="button"
          :class="{
            'bg-white text-theme-ink shadow-[0_6px_40px_rgb(16_35_29_/_0.06)]':
              activeAudience === audience.value,
          }"
          @click="setAudience(audience.value)"
        >
          {{ audience.label }}
        </button>
      </div>

      <div
        id="cards"
        data-gsap-stagger
        class="reveal-item delay-2 mt-12 flex flex-col"
      >
        <FeatureCard
          v-for="(feature, index) in features"
          :key="`${activeAudience}-${feature.title}`"
          :title="feature.title"
          :descriptions="feature.descriptions"
          :note="feature.note"
          :image-src="feature.imageSrc"
          :image-alt="feature.imageAlt"
          :image-label="feature.imageLabel"
          :is-active="openFeatureIndexes.includes(index)"
          :panel-id="`feature-panel-${index}`"
          @toggle="toggleFeature(index)"
        />
      </div>
    </div>
  </LandingSection>
</template>
