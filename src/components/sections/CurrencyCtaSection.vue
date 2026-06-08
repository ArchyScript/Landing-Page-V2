<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue';
import CurrencyMarquee from '@/components/common/CurrencyMarquee.vue';
import LandingSection from '@/components/common/LandingSection.vue';
import StoreButton from '@/components/common/StoreButton.vue';
import PlaceholderImage from '@/components/common/PlaceholderImage.vue';
import type { AvailableCurrency } from '@/data/currencies';

withDefaults(
  defineProps<{
    currencies?: AvailableCurrency[];
  }>(),
  {
    currencies: () => [],
  },
);
</script>

<template>
  <LandingSection id="currency-cta" class-name="py-12  md:py-16 lg:py-20">
    <div class="container-page">
      <div
        class="reveal-item relative min-h-[32rem] overflow-hidden rounded text-white md:min-h-[40rem]"
      >
        <PlaceholderImage
          photo-url="/images/currency.jpg"
          alt="Group of GreepPay users"
          label="Currency belongs here CTA photo"
          tone="green"
          fit="cover"
        />

        <div
          class="relative z-10 min-h-[32rem] md:min-h-[40rem] !h-full w-full bg-black-90 p-6 md:p-8 lg:p-12"
        >
          <h2
            class="max-w-md text-[1.75rem] font-semibold leading-[1.08] md:text-[2rem] lg:text-[2.25rem]"
          >
            Your currency belongs here.
          </h2>
          <p
            class="my-6 max-w-md text-sm lg:text-base leading-[1.8] text-white/85"
          >
            Join thousands of users already using GreepPay to send, spend, and
            manage money smarter.
          </p>

          <div class="w-fit">
            <StoreButton
              href="https://greep.io/download"
              label="Download GreepPay"
            />
          </div>
        </div>

        <div
          v-if="currencies.length"
          class="absolute bottom-8 left-0 right-0 z-10 md:bottom-10"
        >
          <CurrencyMarquee :currencies="currencies" />
        </div>
      </div>
    </div>
  </LandingSection>
</template>

<style scoped>
.reveal-item > :deep(.placeholder-image) {
  position: absolute;
  inset: 0;
}
</style>
