<script setup lang="ts">
import LandingSection from '@/components/common/LandingSection.vue';
import PlaceholderImage from '@/components/common/PlaceholderImage.vue';
import SectionIntro from '@/components/common/SectionIntro.vue';

const moneyInMinutes = [
  {
    icon: 'money',
    title: '60 seconds.',
    description: 'Average transfer time on the Greeppay network.',
  },
  {
    icon: 'card',
    title: '3 minutes.',
    description: 'Average virtual card issuance.',
  },
  {
    icon: 'clock',
    title: '24/7.',
    description: 'No banking hours. No holidays.',
  },
];
</script>

<template>
  <LandingSection id="benefits" class-name="py-12  md:py-16 lg:py-20">
    <div class="container-page">
      <SectionIntro
        green-text="Money in Minutes."
        title="Not hours or Days."
        subtitle="One app for how Africans actually move money across borders. Send, spend, save, sell."
      />

      <div
        data-gsap-stagger
        class="reveal-item delay-1 mt-14 grid overflow-hidden rounded-2xl sm:rounded-3xl bg-primary-100 text-white lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div class="grid gap-6 md:gap-8 lg:gap-12 p-6 lg:p-12">
          <div
            v-for="(benefit, index) in moneyInMinutes"
            :key="index"
            class="flex flex-col gap-2 items-start"
          >
            <UiIcon
              :name="benefit.icon"
              custom-class="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8"
            />
            <h3 class="text-xl font-medium text-white md:text-2xl lg:text-3xl">
              {{ benefit.title }}
            </h3>
            <p class="text-white text-sm sm:text-base md:text-lg">
              {{ benefit.description }}
            </p>
          </div>
        </div>

        <div class="min-h-[26rem] overflow-hidden pt-10">
          <PlaceholderImage
            photo-url="/images/transfer-receipt-phone.png"
            alt="GreepPay transfer received app screen"
            label="Benefits phone screenshot"
            tone="green"
            fit="fill"
          />
        </div>
      </div>
    </div>
  </LandingSection>
</template>
