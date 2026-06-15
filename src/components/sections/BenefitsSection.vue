<script setup lang="ts">
import LandingSection from '@/components/common/LandingSection.vue';
import PlaceholderImage from '@/components/common/PlaceholderImage.vue';
import SectionIntro from '@/components/common/SectionIntro.vue';

const moneyInMinutes = [
  {
    icon: 'money',
    title: '60 seconds.',
    description: 'Average transfer time on the GreepPay network.',
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
  <LandingSection id="benefits">
    <div class="container-page container-y-padding">
      <SectionIntro
        green-text="Money in Minutes."
        title="Not hours or Days."
        subtitle="One app for how Africans actually move money across borders. Send, spend, save, sell."
      />

      <div
        data-gsap-stagger
        class="reveal-item delay-1 mt-14 grid overflow-hidden rounded-2xl bg-primary-100 text-white sm:rounded-3xl lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div class="grid gap-10 p-6 md:gap-12 lg:gap-16 lg:p-12">
          <div
            v-for="(benefit, index) in moneyInMinutes"
            :key="index"
            class="flex flex-col items-start gap-2"
          >
            <UiIcon
              :name="benefit.icon"
              custom-class="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8"
            />
            <h3 class="text-xl font-bold text-white md:text-2xl lg:text-3xl">
              {{ benefit.title }}
            </h3>
            <p class="text-sm text-white font-medium sm:text-base md:text-lg">
              {{ benefit.description }}
            </p>
          </div>
        </div>

        <div class="min-h-[26rem] overflow-hidden pt-10 md:pl-10 lg:pl-14">
          <PlaceholderImage
            photo-url="/images/transfer-receipt-phone.webp"
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
