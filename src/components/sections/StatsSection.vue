<script setup lang="ts">
import LandingSection from '@/components/common/LandingSection.vue';
import PartnerLogoMarquee from '@/components/common/PartnerLogoMarquee.vue';
</script>

<template>
  <LandingSection>
    <div class="overflow-hidden bg-white">
      <div
        class="container-page py-10 md:py-12 lg:py-14 reveal-item flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between border-b border-border-neutral"
      >
        <h2
          class="max-w-[32rem] font-display text-[2rem] font-bold leading-12 tracking-normal text-neutral-100 sm:text-[2.15rem] lg:text-[2.45rem]"
        >
          Trusted by <span class="text-primary-100">4000+</span> Africans
          <span class="block">in the diaspora</span>
        </h2>
      </div>

      <div class="container-page !px-0">
        <div
          class="flex flex-col lg:grid lg:min-h-[24rem] lg:grid-cols-[1fr_1.15fr_1fr]"
        >
          <div
            class="flex min-h-[24rem] flex-col justify-between border-b border-border-neutral px-5 py-5 sm:min-h-[28rem] sm:px-6 sm:py-6 lg:min-h-0 lg:border-b-0 lg:border-r lg:px-8 lg:py-7"
          >
            <strong
              class="text-4xl font-semibold leading-none text-neutral-100 sm:text-5xl lg:text-6xl"
            >
              180+
            </strong>
            <span
              class="text-base sm:text-lg md:text-xl font-medium text-neutral-80"
            >
              Vendors and Merchants
            </span>
          </div>

          <div
            class="flex min-h-[24rem] flex-col justify-between overflow-hidden border-b border-border-neutral sm:min-h-[28rem] lg:min-h-0 lg:border-b-0 lg:border-r"
          >
            <div class="px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
              <span class="text-sm md:text-base font-medium text-neutral-80">
                Backed by
              </span>
              <p
                class="mt-3 max-w-[15rem] text-xl font-semibold leading-10 text-neutral-100 sm:text-2xl lg:text-3xl"
              >
                Stellar, Bridge, Yellow Card, and Flutterwave
              </p>
            </div>

            <PartnerLogoMarquee />
          </div>

          <div
            class="flex min-h-[24rem] flex-col justify-between px-5 py-5 sm:min-h-[28rem] sm:px-6 sm:py-6 lg:min-h-0 lg:px-8 lg:py-7"
          >
            <strong
              class="text-4xl font-semibold leading-none text-neutral-100 sm:text-5xl lg:text-6xl"
            >
              52+
            </strong>
            <span
              class="text-base sm:text-lg md:text-xl font-medium text-neutral-80"
            >
              Countries
            </span>
          </div>
        </div>
      </div>
    </div>
  </LandingSection>
</template>
