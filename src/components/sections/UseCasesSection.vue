<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue';
import LandingSection from '@/components/common/LandingSection.vue';
import UseCaseCard from '@/components/common/UseCaseCard.vue';
import type { UseCase } from '@/data/landing';

defineProps<{
  useCases: UseCase[];
}>();
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
        data-gsap-stagger
        class="reveal-item delay-1 grid overflow-hidden border border-theme-line md:grid-cols-2 lg:grid-cols-4"
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
