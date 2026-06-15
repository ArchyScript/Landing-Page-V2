<script setup lang="ts">
import LandingSection from '@/components/common/LandingSection.vue';
import ImageLoader from '@/components/common/ImageLoader.vue';
</script>

<template>
  <LandingSection>
    <div class="container-page container-y-padding flex flex-col gap-8">
      <h2
        class="max-w-[29rem] -mt-10 py-2 font-display text-[2.45rem] font-bold leading-[0.96] tracking-normal text-neutral-100"
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
