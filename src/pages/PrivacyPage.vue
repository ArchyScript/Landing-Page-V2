<script setup lang="ts">
import LegalPageLayout from '@/components/common/LegalPageLayout.vue';
import LegalSections from '@/components/common/LegalSections.vue';
import { privacySections } from '@/data/legal';
</script>

<template>
  <LegalPageLayout
    eyebrow="Greep Payments Inc."
    title-accent="Privacy"
    title="Policy"
    meta="Last updated May 27, 2025"
  >
    <section
      class="mb-12 rounded-lg border border-primary-100/25 bg-brand-50 p-6 md:p-8"
    >
      <h2 class="text-lg font-semibold text-neutral-100">
        <strong class="font-semibold text-primary-100">Your privacy</strong>
        matters
      </h2>
      <p class="mt-3 leading-7 text-neutral-90">
        <strong class="font-semibold text-neutral-100">This policy</strong>
        explains what personal data Greep collects, why we use it, when we
        share it, and the choices available to you.
      </p>
    </section>

    <LegalSections :sections="privacySections" />
  </LegalPageLayout>
</template>
