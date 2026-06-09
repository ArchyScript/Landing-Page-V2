<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import gsap from 'gsap';
import AppButton from '@/components/common/AppButton.vue';
import LandingSection from '@/components/common/LandingSection.vue';
import UseCaseCard from '@/components/common/UseCaseCard.vue';
import type { UseCase } from '@/data/landing';

defineProps<{
  useCases: UseCase[];
}>();

const mobileTrack = ref<HTMLElement>();
let mobileMarquee: gsap.core.Tween | undefined;
let mobileMedia: gsap.MatchMedia | undefined;

onMounted(() => {
  const track = mobileTrack.value;
  if (!track) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  mobileMedia = gsap.matchMedia();
  mobileMedia.add('(max-width: 767px)', () => {
    mobileMarquee = gsap.to(track, {
      xPercent: -50,
      duration: 26,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      mobileMarquee?.kill();
      gsap.set(track, { clearProps: 'transform' });
    };
  });

});

onBeforeUnmount(() => {
  mobileMedia?.revert();
  mobileMarquee?.kill();
});
</script>

<template>
  <LandingSection class-name="py-12  md:py-16 lg:py-20">
    <div class="container-page">
      <div
        class="reveal-item mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center"
      >
        <h2
          class="max-w-[30rem] font-display text-[1.75rem] font-semibold leading-tight text-black md:text-[2rem] lg:text-[2.25rem]"
        >
          What you'll actually use
          <span class="text-primary-100">Greep</span> for.
        </h2>
        <AppButton href="#download" class="w-fit"> Download GreepPay </AppButton>
      </div>

      <div
        class="-mx-4 overflow-hidden px-4 md:hidden"
        @pointerdown="mobileMarquee?.pause()"
        @pointerup="mobileMarquee?.play()"
        @pointercancel="mobileMarquee?.play()"
      >
        <div
          ref="mobileTrack"
          class="flex w-max will-change-transform"
        >
          <div
            v-for="group in 2"
            :key="group"
            class="flex shrink-0 gap-4 pr-4"
            :aria-hidden="group === 2"
          >
            <UseCaseCard
              v-for="useCase in useCases"
              :key="`${group}-${useCase.title}`"
              class="w-[78vw] max-w-sm shrink-0"
              :title="useCase.title"
              :image-src="useCase.imageSrc"
              :image-alt="useCase.imageAlt"
              :image-label="useCase.imageLabel"
              :tone="useCase.tone"
            />
          </div>
        </div>
      </div>

      <div
        data-gsap-stagger
        class="reveal-item delay-1 hidden overflow-hidden border-[0.5px] border-theme-line md:grid md:grid-cols-2 lg:grid-cols-4"
      >
        <UseCaseCard
          v-for="useCase in useCases"
          :key="useCase.title"
          :title="useCase.title"
          :image-src="useCase.imageSrc"
          :image-alt="useCase.imageAlt"
          :image-label="useCase.imageLabel"
          :tone="useCase.tone"
        />
      </div>
    </div>
  </LandingSection>
</template>
