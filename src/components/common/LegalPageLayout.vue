<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue';
import BrandLogo from '@/components/common/BrandLogo.vue';

defineProps<{
  title: string;
  titleAccent: string;
  eyebrow: string;
  meta: string;
}>();

const homeHref = import.meta.env.BASE_URL;
</script>

<template>
  <main class="min-h-screen bg-white text-theme-ink">
    <header
      class="sticky top-0 z-30 border-b border-theme-line/80 bg-white/95 backdrop-blur-xl"
    >
      <div
        class="container-page flex h-16 items-center justify-between [border-inline:0]"
      >
        <BrandLogo :href="homeHref" />
        <AppButton :href="homeHref" class="px-4 py-3">
          Back to homepage
        </AppButton>
      </div>
    </header>

    <article class="container-page max-w-4xl py-16 md:py-24">
      <header class="pb-10 md:pb-12">
        <p class="text-sm font-semibold uppercase text-primary-100">
          {{ eyebrow }}
        </p>
        <h1
          class="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl md:text-5xl"
        >
          <strong class="font-semibold text-primary-100">
            {{ titleAccent }}
          </strong>
          {{ title }}
        </h1>
        <p class="mt-6 text-sm text-theme-muted">{{ meta }}</p>
      </header>

      <slot />

      <footer
        class="mt-14 border-t border-theme-line pt-8 text-sm leading-6 text-theme-muted"
      >
        <p>Greep Payments Incorporated | Delaware, United States of America</p>
        <p class="mt-2">{{ meta }}</p>
      </footer>
    </article>
  </main>
</template>
