<script setup lang="ts">
import LandingSection from '@/components/common/LandingSection.vue';
import ImageLoader from '@/components/common/ImageLoader.vue';
import type { Stat } from '@/data/landing';

defineProps<{
  stats: Stat[];
}>();
</script>

<template>
  <LandingSection class-name="py-12 md:py-16 lg:py-20">
    <div class="container-page flex flex-col gap-8">
      <h2
        class="max-w-2xl font-display text-[1.75rem] font-semibold leading-tight text-neutral-100 md:text-[2rem] lg:text-[2.25rem]"
      >
        Trusted by <span class="text-primary-100">4000+</span> Africans in the
        diaspora
      </h2>

      <div class="reveal-item h-[30rem] overflow-hidden">
        <ImageLoader
          photo-url="/images/trusted-by.jpg"
          alt="GreepPay customer"
          fit="cover"
        />
      </div>

      <!-- <div class="mt-12 grid border border-theme-line sm:grid-cols-3 [&>*+*]:border-t [&>*+*]:border-theme-line sm:[&>*+*]:border-l sm:[&>*+*]:border-t-0">
        <StatCell class="reveal-item" :value="stats[0]?.value || ''" :label="stats[0]?.label || ''" />
        <div class="reveal-item delay-1 flex min-h-72 flex-col justify-between p-8">
          <small class="text-[1.15rem] text-theme-muted">Backed by</small>
          <div class="flex flex-wrap items-center gap-6">
            <img
              src="/images/brands/stellar-logo.png"
              alt="Stellar"
              class="h-10 w-auto object-contain"
            />
            <img
              src="/images/brands/yellow-card-logo.png"
              alt="Yellow Card"
              class="h-10 w-auto object-contain"
            />
          </div>
          <span class="text-[1.15rem] text-theme-muted">Infrastructure partners</span>
        </div>
        <StatCell class="reveal-item delay-2" :value="stats[1]?.value || ''" :label="stats[1]?.label || ''" />
      </div> -->
    </div>
  </LandingSection>
</template>
