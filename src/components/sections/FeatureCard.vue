<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';
import gsap from 'gsap';
import FeatureCardVisual from '@/components/sections/FeatureCardVisual.vue';

const props = defineProps<{
  title: string;
  descriptions: string[];
  note?: string;
  imageSrc?: string;
  imageAlt: string;
  imageLabel: string;
  isActive: boolean;
  panelId: string;
}>();

const featureVisual = ref<HTMLElement>();

watch(
  () => props.isActive,
  async (isActive) => {
    if (!isActive || !featureVisual.value) return;
    await nextTick();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.fromTo(
      featureVisual.value,
      { autoAlpha: 0.65, y: 16, scale: 0.99 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.65,
        ease: 'power3.out',
        overwrite: true,
      },
    );
  },
);

defineEmits<{ toggle: [] }>();
</script>

<template>
  <article
    :id="panelId"
    class="feature-card relative cursor-pointer overflow-hidden rounded-3xl border border-theme-line bg-white shadow-[0_18px_60px_rgb(16_35_29_/_0.07)] focus:outline-none focus-visible:shadow-[inset_0_0_0_3px_rgb(31_107_79_/_0.28)]"
    :class="{
      'is-active z-10 shadow-[0_24px_80px_rgb(16_35_29_/_0.11)]': isActive,
    }"
    role="button"
    tabindex="0"
    :aria-expanded="isActive"
    data-testid="feature-card"
    @click="$emit('toggle')"
    @keydown.enter.prevent="$emit('toggle')"
    @keydown.space.prevent="$emit('toggle')"
  >
    <div
      class="feature-card-content grid h-[30rem] sm:h-[36rem] md:h-[40rem] lg:h-[46rem] lg:grid-cols-[0.38fr_0.62fr]"
    >
      <div class="p-6 lg:p-10">
        <h3
          class="text-lg md:text-xl font-semibold leading-tight text-neutral-100"
        >
          {{ title }}
        </h3>

        <div class="mt-2 sm:mt-3 max-w-sm">
          <p
            v-for="(description, index) in descriptions"
            :key="index"
            class="text-sm md:text-base leading-5 sm:leading-6 text-neutral-800"
          >
            {{ description }}
          </p>
        </div>
      </div>

      <div
        ref="featureVisual"
        class="flex items-end flex-col h-[28rem] sm:h-[30rem] md:h-[36rem] rounded-t-2xl"
      >
        <ImageLoader
          :photo-url="imageSrc"
          :alt="imageAlt"
          fit="cover"
          custom-class="block h-full w-full overflow-hidden rounded-t-2xl"
        />
        <!-- <FeatureCardVisual :image-src="imageSrc" :image-alt="imageAlt" /> -->
      </div>
    </div>
  </article>
</template>

<style scoped>
.feature-card {
  max-height: 7.5rem;
  margin-top: -2rem;
  transition:
    max-height 700ms cubic-bezier(0.22, 1, 0.36, 1),
    margin 550ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 350ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
}

.feature-card:first-child {
  margin-top: 0;
}

.feature-card:hover {
  transform: translateY(-2px);
}

.feature-card.is-active {
  max-height: 40rem;
  margin-bottom: 2rem;
}

@media (max-width: 1023px) {
  .feature-card {
    max-height: 7.25rem;
  }

  .feature-card.is-active {
    max-height: 52rem;
  }

  .feature-card-content {
    grid-template-rows: auto minmax(20rem, 1fr);
  }
}
</style>
