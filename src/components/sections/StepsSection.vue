<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue';
import LandingSection from '@/components/common/LandingSection.vue';
import SectionIntro from '@/components/common/SectionIntro.vue';
import StepCard from '@/components/common/StepCard.vue';
import type { Step } from '@/data/landing';
import { DOWNLOAD_URL, EXTERNAL_LINK_TARGET } from '@/data/links';

defineProps<{
  steps: Step[];
}>();
</script>

<template>
  <LandingSection>
    <div class="container-page container-y-padding">
      <SectionIntro
        eyebrow="How It Works"
        subtitle="Create secure virtual cards for subscriptions, online payments, or everyday spending."
      >
        <template #title>
          <h2
            class="mt-4 font-display text-[2rem] font-bold leading-[1.08] text-neutral-100 sm:text-[2.25rem] lg:text-[2.75rem]"
          >
            Three steps from signup to
            <span class="text-primary-100"> spending </span>
            .
          </h2>
        </template>

        <template #subtitle>
          <p
            class="mx-auto mt-4 max-w-2xl text-base font-medium leading-6 text-neutral-70 sm:mt-5 sm:text-lg sm:leading-7"
          >
            Create secure virtual cards
          </p>
          <p
            class="mx-auto mt-1 max-w-2xl text-base font-medium leading-6 text-neutral-70 sm:text-lg sm:leading-7"
          >
            for subscriptions, online payments, or everyday spending.
          </p>
        </template>
      </SectionIntro>

      <div
        data-gsap-stagger
        class="reveal-item delay-1 mt-14 grid gap-6 lg:grid-cols-3"
      >
        <StepCard
          v-for="(step, index) in steps"
          :key="step.title"
          :index="index"
          :title="step.title"
          :image-src="step.imageSrc"
          :descriptions="step.descriptions"
          :extra-text="step.extraText"
          :is-bullet="step.isBullet"
          :image-alt="step.imageAlt"
          :image-label="step.imageLabel"
        />
      </div>

      <div class="mt-10 md:mt-12 lg:mt-16 text-center">
        <AppButton :href="DOWNLOAD_URL" :target="EXTERNAL_LINK_TARGET">
          Download GreepPay
        </AppButton>
      </div>
    </div>
  </LandingSection>
</template>
