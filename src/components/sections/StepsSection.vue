<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue';
import LandingSection from '@/components/common/LandingSection.vue';
import SectionIntro from '@/components/common/SectionIntro.vue';
import StepCard from '@/components/common/StepCard.vue';
import type { Step } from '@/data/landing';

defineProps<{
  steps: Step[];
}>();
</script>

<template>
  <LandingSection class-name="py-20">
    <div class="container-page">
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
          :="step"
          :title="step.title"
          :text="step.text"
          :image-src="step.imageSrc"
          :descriptions="step.descriptions"
          :image-alt="step.imageAlt"
          :image-label="step.imageLabel"
        />
      </div>

      <div class="mt-10 md:mt-12 lg:mt-16 text-center">
        <AppButton href="#download">Download GreepPay</AppButton>
      </div>
    </div>
  </LandingSection>
</template>
