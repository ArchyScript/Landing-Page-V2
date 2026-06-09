<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue';
import BrandLogo from '@/components/common/BrandLogo.vue';
import { consentItems, savingsDisclosureSections } from '@/data/legal';

const homeHref = import.meta.env.BASE_URL;
</script>

<template>
  <main class="min-h-screen bg-white text-theme-ink">
    <header class="sticky top-0 z-30 border-b border-theme-line/80 bg-white/95 backdrop-blur-xl">
      <div class="container-page flex h-16 items-center justify-between">
        <BrandLogo :href="homeHref" />
        <AppButton :href="homeHref">Back to homepage</AppButton>
      </div>
    </header>

    <article class="container-page max-w-4xl py-16 md:py-24">
      <header class="pb-12">
        <p class="text-sm font-semibold uppercase text-primary-100">Greep Payments Inc.</p>
        <h1 class="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl md:text-5xl">
          Savings Feature Risk Disclosure and Consent Agreement
        </h1>
        <p class="mt-6 text-sm text-theme-muted">
          Document Reference: GRP-SAVE-DISC-001 | Version 1.0
        </p>
      </header>

      <section class="my-10 rounded-lg border border-primary-100/25 bg-brand-50 p-6 md:p-8">
        <h2 class="text-lg font-semibold text-neutral-100">Please read before activating Savings</h2>
        <p class="mt-3 leading-7 text-neutral-90">
          By clicking “I Agree,” you confirm that you have read and accepted these terms. This is a legally binding document.
        </p>
      </section>

      <div class="space-y-12">
        <section>
          <p class="leading-8 text-neutral-90">
            This Agreement is issued by Greep Payments Incorporated, a company incorporated under the laws of the State of Delaware, United States of America. It governs your use of the Greep Pay Savings Feature, including Vault, Goal, Flex, and Auto-Save.
          </p>
          <p class="mt-5 leading-8 text-neutral-90">
            This Agreement supplements the Greep Pay General Terms of Service. Where there is a conflict relating to the Savings Feature, this Agreement takes precedence.
          </p>
        </section>

        <section
          v-for="section in savingsDisclosureSections"
          :key="section.title"
          v-reveal
          class="reveal-item scroll-mt-24"
        >
          <h2 class="font-display text-xl font-semibold text-neutral-100 md:text-2xl">
            {{ section.title }}
          </h2>

          <p
            v-for="paragraph in section.paragraphs"
            :key="paragraph"
            class="mt-5 leading-8 text-neutral-90"
          >
            {{ paragraph }}
          </p>

          <ul v-if="section.bullets" class="mt-5 space-y-3 pl-5 text-neutral-90">
            <li v-for="bullet in section.bullets" :key="bullet" class="list-disc pl-2 leading-7">
              {{ bullet }}
            </li>
          </ul>

          <div v-if="section.subsections" class="mt-7 space-y-8">
            <section v-for="subsection in section.subsections" :key="subsection.title">
              <h3 class="text-lg font-semibold text-neutral-100">{{ subsection.title }}</h3>
              <p
                v-for="paragraph in subsection.paragraphs"
                :key="paragraph"
                class="mt-3 leading-8 text-neutral-90"
              >
                {{ paragraph }}
              </p>
            </section>
          </div>
        </section>

        <section v-reveal class="reveal-item rounded-lg bg-neutral-100 p-7 text-white md:p-10">
          <h2 class="font-display text-2xl font-semibold md:text-3xl">Your Consent</h2>
          <p class="mt-4 leading-7 text-white/75">By clicking “I Agree,” you confirm that:</p>
          <ul class="mt-6 space-y-4">
            <li v-for="item in consentItems" :key="item" class="flex gap-3 leading-7">
              <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-100" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </section>
      </div>

      <footer class="mt-14 pt-8 text-sm leading-6 text-theme-muted">
        <p>Greep Payments Incorporated | Delaware, United States of America</p>
        <p class="mt-2">GRP-SAVE-DISC-001 | Version 1.0</p>
      </footer>
    </article>
  </main>
</template>
