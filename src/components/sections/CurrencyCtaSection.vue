<script setup lang="ts">
import CurrencyMarquee from '@/components/common/CurrencyMarquee.vue';
import LandingSection from '@/components/common/LandingSection.vue';
import PlaceholderImage from '@/components/common/PlaceholderImage.vue';
import StoreButton from '@/components/common/StoreButton.vue';
import type { AvailableCurrency } from '@/data/currencies';
import { DOWNLOAD_URL } from '@/data/links';

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
  <LandingSection id="currency-cta">
    <div class="container-page container-y-padding">
      <div
        class="reveal-item relative min-h-[32rem] overflow-hidden rounded text-white md:min-h-[40rem]"
      >
        <PlaceholderImage
          photo-url="/images/currency.webp"
          alt="Group of GreepPay users"
          label="Currency belongs here CTA photo"
          tone="green"
          fit="cover"
        />

        <div
          class="relative z-10 min-h-[32rem] h-full w-full bg-black-90 p-6 md:min-h-[40rem] md:p-8 lg:p-12"
        >
          <h2
            class="max-w-lg font-semibold leading-[1.08] text-5xl lg:text-6xl"
          >
            Your currency belongs here.
          </h2>
          <p class="my-6 max-w-md text-base leading-7 text-white/85 lg:text-lg">
            Join thousands of users already using GreepPay to send, spend, and
            manage money smarter.
          </p>

          <div class="w-fit">
            <StoreButton
              :href="DOWNLOAD_URL"
              label="Download GreepPay"
              custom-class="!text-neutral-100 !min-w-[170px]"
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
