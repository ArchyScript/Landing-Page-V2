<script setup lang="ts">
import LegalPageLayout from '@/components/common/LegalPageLayout.vue';
import LegalSections from '@/components/common/LegalSections.vue';
import { consentItems, savingsDisclosureSections } from '@/data/legal';
</script>

<template>
  <LegalPageLayout
    eyebrow="Greep Payments Inc."
    title-accent="Savings"
    title="Feature Risk Disclosure and Consent Agreement"
    meta="Document Reference: GRP-SAVE-DISC-001 | Version 1.0"
  >
    <section
      class="mb-12 rounded-lg border border-primary-100/25 bg-brand-50 p-6 md:p-8"
    >
      <h2 class="text-lg font-semibold text-neutral-100">
        <strong class="font-semibold text-primary-100">Please read</strong>
        before activating Savings
      </h2>
      <p class="mt-3 leading-7 text-neutral-90">
        By clicking
        <strong class="font-semibold text-neutral-100">"I Agree,"</strong>
        you confirm that you have read and accepted these terms. This is a
        legally binding document.
      </p>
    </section>

    <div class="mb-12 space-y-5">
      <p class="leading-8 text-neutral-90">
        <strong class="font-semibold text-primary-100">This Agreement</strong>
        is issued by Greep Payments Incorporated, a company incorporated under
        the laws of the State of Delaware, United States of America. It governs
        your use of the Greep Pay Savings Feature, including Vault, Goal, Flex,
        and Auto-Save.
      </p>
      <p class="leading-8 text-neutral-90">
        <strong class="font-semibold text-primary-100">This Agreement</strong>
        supplements the Greep Pay General Terms of Service. Where there is a
        conflict relating to the Savings Feature, this Agreement takes
        precedence.
      </p>
    </div>

    <LegalSections :sections="savingsDisclosureSections" />

    <section
      v-reveal
      class="reveal-item mt-12 rounded-lg bg-neutral-100 p-7 text-white md:p-10"
    >
      <h2 class="font-display text-2xl font-semibold md:text-3xl">
        <strong class="font-semibold text-primary-100">Your</strong>
        Consent
      </h2>
      <p class="mt-4 leading-7 text-white/75">
        By clicking
        <strong class="font-semibold text-white">"I Agree,"</strong>
        you confirm that:
      </p>
      <ul class="mt-6 space-y-4">
        <li v-for="item in consentItems" :key="item" class="flex gap-3 leading-7">
          <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-100" />
          <span>{{ item }}</span>
        </li>
      </ul>
    </section>
  </LegalPageLayout>
</template>
