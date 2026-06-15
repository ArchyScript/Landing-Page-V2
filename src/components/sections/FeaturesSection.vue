<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LandingSection from '@/components/common/LandingSection.vue';
import SectionIntro from '@/components/common/SectionIntro.vue';
import FeatureCard from '@/components/sections/FeatureCard.vue';
import type { Audience, Feature } from '@/data/landing';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
  individualFeatures: Feature[];
  merchantFeatures: Feature[];
}>();

const cardsRoot = ref<HTMLElement>();
const activeAudience = ref<Audience>('individual');
const activeFeatureIndex = ref(props.individualFeatures.length - 1);
const featureOrder = ref(
  Array.from({ length: props.individualFeatures.length }, (_, index) => index),
);

const audiences: { label: string; value: Audience }[] = [
  { label: 'Individual User', value: 'individual' },
  { label: 'Merchants', value: 'merchant' },
];

const features = computed(() =>
  activeAudience.value === 'merchant'
    ? props.merchantFeatures
    : props.individualFeatures,
);

const orderedFeatures = computed(() => {
  return featureOrder.value
    .map((originalIndex) => ({
      feature: features.value[originalIndex],
      originalIndex,
    }))
    .filter(({ feature }) => Boolean(feature));
});

const setAudience = (audience: Audience) => {
  if (activeAudience.value === audience) return;
  activeAudience.value = audience;
  const featureCount =
    audience === 'merchant'
      ? props.merchantFeatures.length
      : props.individualFeatures.length;

  featureOrder.value = Array.from(
    { length: featureCount },
    (_, index) => index,
  );
  activeFeatureIndex.value = featureCount - 1;
};

const toggleFeature = (index: number) => {
  if (index === activeFeatureIndex.value) return;

  const selectedPosition = featureOrder.value.indexOf(index);
  const lastPosition = featureOrder.value.length - 1;
  if (selectedPosition < 0 || lastPosition < 0) return;

  const nextOrder = [...featureOrder.value];
  [nextOrder[selectedPosition], nextOrder[lastPosition]] = [
    nextOrder[lastPosition],
    nextOrder[selectedPosition],
  ];

  featureOrder.value = nextOrder;
  activeFeatureIndex.value = index;
};

const refreshStackLayout = async () => {
  await nextTick();
  ScrollTrigger.refresh();
};

onMounted(() => {
  void refreshStackLayout();
});

watch(activeAudience, () => {
  void refreshStackLayout();
});

watch(featureOrder, () => {
  void refreshStackLayout();
});
</script>

<template>
  <LandingSection id="features">
    <div class="container-page container-y-padding">
      <SectionIntro
        green-text="Everything You Need."
        title="One App."
        subtitle="One app for how Africans actually move money across borders. Send, spend, save, sell."
      />

      <div
        class="reveal-item delay-1 mx-auto mt-10 grid max-w-fit grid-cols-2 bg-theme-muted-bg border-[0.5px] border-neutral-50-50 rounded-lg p-1"
      >
        <button
          v-for="audience in audiences"
          :key="audience.value"
          class="rounded-md w-41 px-4 py-3 text-sm font-medium text-[#080808] transition duration-300 cursor-pointer ease-smooth !outline-none"
          type="button"
          :class="{
            'bg-white   !border-[0.5px] border-[#E6E6E670]  ':
              activeAudience === audience.value,
          }"
          @click="setAudience(audience.value)"
        >
          {{ audience.label }}
        </button>
      </div>

      <TransitionGroup
        id="cards"
        name="feature-list"
        tag="div"
        ref="cardsRoot"
        data-gsap-stagger
        class="reveal-item delay-2 mt-12 flex flex-col gap-4 lg:gap-5"
      >
        <FeatureCard
          v-for="({ feature, originalIndex }, orderIndex) in orderedFeatures"
          :key="`${activeAudience}-${feature.title}`"
          :title="feature.title"
          :descriptions="feature.descriptions"
          :image-src="feature.imageSrc"
          :image-alt="feature.imageAlt"
          :is-active="activeFeatureIndex === originalIndex"
          :stack-index="orderIndex"
          :panel-id="`feature-panel-${originalIndex}`"
          @toggle="toggleFeature(originalIndex)"
        />
      </TransitionGroup>
    </div>
  </LandingSection>
</template>

<style scoped>
.feature-list-move {
  transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
}
</style>
