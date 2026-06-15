<script setup lang="ts">
import LandingSection from '@/components/common/LandingSection.vue';
import ImageLoader from '@/components/common/ImageLoader.vue';
</script>

<template>
  <LandingSection>
    <div class="container-page container-y-padding flex flex-col gap-8">
      <h2
        class="-mt-8 max-w-[40rem] font-display text-4xl font-bold leading-[1.08] text-neutral-100 sm:text-5xl lg:text-6xl"
      >
        Trusted by <span class="text-primary-100">4000+</span> Africans in the
        diaspora
      </h2>

      <div class="reveal-item h-[30rem] overflow-hidden">
        <ImageLoader
          photo-url="/images/trusted-by.webp"
          alt="GreepPay customer"
          fit="cover"
        />
      </div>
    </div>
  </LandingSection>
</template>
