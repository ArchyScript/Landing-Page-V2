<script setup lang="ts">
import SiteFooter from '@/components/common/SiteFooter.vue';
import SiteHeader from '@/components/common/SiteHeader.vue';
import BenefitsSection from '@/components/sections/BenefitsSection.vue';
import CurrencyCtaSection from '@/components/sections/CurrencyCtaSection.vue';
import DownloadSection from '@/components/sections/DownloadSection.vue';
import FeaturesSection from '@/components/sections/FeaturesSection.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import StatsSection from '@/components/sections/StatsSection.vue';
import StepsSection from '@/components/sections/StepsSection.vue';
import TestimonialSection from '@/components/sections/TestimonialSection.vue';
import UseCasesSection from '@/components/sections/UseCasesSection.vue';
import { availableCurrencies } from '@/data/currencies';
import {
  individualFeatures,
  merchantFeatures,
  navLinks,
  stats,
  steps,
  testimonials,
  useCases,
} from '@/data/landing';
</script>

<template>
  <main class="min-h-screen overflow-hidden bg-white text-theme-ink">
    <SiteHeader :links="navLinks" />

    <HeroSection />

    <StatsSection :stats="stats" />

    <FeaturesSection
      :individual-features="individualFeatures"
      :merchant-features="merchantFeatures"
    />

    <BenefitsSection />

    <StepsSection :steps="steps" />

    <TestimonialSection :testimonials="testimonials" />

    <CurrencyCtaSection :currencies="availableCurrencies" />

    <UseCasesSection :use-cases="useCases" />

    <DownloadSection />

    <SiteFooter />
  </main>
</template>
