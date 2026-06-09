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
        title="Three steps from signup to spending."
        subtitle="Create secure virtual cards for subscriptions, online payments, or everyday spending."
      />

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
