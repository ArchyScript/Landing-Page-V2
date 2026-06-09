<script setup lang="ts">
import BrandLogo from '@/components/common/BrandLogo.vue';
import LandingSection from '@/components/common/LandingSection.vue';
import StoreButton from '@/components/common/StoreButton.vue';
import { DOWNLOAD_URL } from '@/data/links';
</script>

<template>
  <LandingSection id="download" class-name="text-center">
    <div class="container-page container-y-padding">
      <BrandLogo class="reveal-item mx-auto mb-8" />

      <h2
        class="reveal-item delay-1 mx-auto max-w-4xl font-display text-[1.75rem] font-semibold leading-tight text-black sm:text-[2rem] lg:text-[2.5rem]"
      >
        Join the Future of
        <span class="text-primary-100">African Payments;</span><br />
        <span class="text-primary-100">Send money. Pay businesses.</span><br />
        <span class="text-primary-100">Save smarter;</span> All in one place.
      </h2>

      <p
        class="reveal-item delay-2 mx-auto mt-6 max-w-2xl text-base text-theme-muted"
      >
        Download Greep. Sign up in minutes. Get your virtual card. Start living
        like your money has no borders.
      </p>

      <div class="reveal-item delay-3 mt-8 flex justify-center gap-4">
        <StoreButton
          :href="DOWNLOAD_URL"
          icon="apple"
          label="App Store"
        />
        <StoreButton
          :href="DOWNLOAD_URL"
          icon="google-play"
          label="Google Play"
        />
      </div>
    </div>
  </LandingSection>
</template>
