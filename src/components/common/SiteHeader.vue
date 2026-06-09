<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import gsap from 'gsap';
import AppButton from '@/components/common/AppButton.vue';
import BrandLogo from '@/components/common/BrandLogo.vue';
import IconButton from '@/components/common/IconButton.vue';
import NavLinkItem from '@/components/common/NavLinkItem.vue';
import type { NavLink } from '@/data/landing';
import { DOWNLOAD_URL, EXTERNAL_LINK_TARGET } from '@/data/links';
import { prefersReducedMotion } from '@/utils/reveal';

defineProps<{
  links: NavLink[];
}>();

const mobileMenuOpen = ref(false);
const siteHeader = ref<HTMLElement>();
let headerContext: gsap.Context | undefined;

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const menuEnter = async (element: Element, done: () => void) => {
  await nextTick();
  if (prefersReducedMotion()) {
    done();
    return;
  }

  const items = element.querySelectorAll('.mobile-menu-item');
  const timeline = gsap.timeline({ onComplete: done });

  timeline.fromTo(
    element,
    { autoAlpha: 0, y: -14 },
    { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power3.out' },
  );
  timeline.fromTo(
    items,
    { autoAlpha: 0, x: -18 },
    {
      autoAlpha: 1,
      x: 0,
      duration: 0.45,
      stagger: 0.06,
      ease: 'power3.out',
    },
    '-=0.2',
  );
};

const menuLeave = (element: Element, done: () => void) => {
  if (prefersReducedMotion()) {
    done();
    return;
  }

  gsap.to(element, {
    autoAlpha: 0,
    y: -12,
    duration: 0.28,
    ease: 'power2.in',
    onComplete: done,
  });
};

onMounted(() => {
  if (!siteHeader.value || prefersReducedMotion()) return;

  headerContext = gsap.context(() => {
    gsap.fromTo(
      siteHeader.value!,
      { autoAlpha: 0, y: -16 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        clearProps: 'opacity,visibility,transform',
      },
    );
  }, siteHeader.value);
});

onBeforeUnmount(() => {
  headerContext?.revert();
});
</script>

<template>
  <header
    ref="siteHeader"
    class="sticky top-0 z-50 w-full border-b border-theme-line/80 bg-white/90 backdrop-blur-[18px]"
  >
    <nav class="container-page flex h-16 items-center justify-between">
      <BrandLogo />

      <div class="hidden items-center gap-8 lg:flex">
        <NavLinkItem
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :label="link.label"
        />
      </div>

      <span class="hidden lg:flex">
        <AppButton
          class="py-3"
          :href="DOWNLOAD_URL"
          :target="EXTERNAL_LINK_TARGET"
          icon="download"
        >
          Download the app
        </AppButton>
      </span>

      <IconButton
        class="cursor-pointer lg:hidden"
        icon="menu"
        label="Open menu"
        :expanded="mobileMenuOpen"
        controls="mobile-menu"
        @click="mobileMenuOpen = true"
      />
    </nav>

    <Transition :css="false" @enter="menuEnter" @leave="menuLeave">
      <div
        v-if="mobileMenuOpen"
        id="mobile-menu"
        class="mobile-menu-panel fixed inset-0 z-50 min-h-screen bg-white lg:hidden"
      >
        <div
          class="container-page flex h-16 items-center justify-between border-b border-theme-line/80"
        >
          <BrandLogo @click="closeMobileMenu" />

          <IconButton
            icon="close"
            label="Close menu"
            @click="closeMobileMenu"
          />
        </div>

        <div
          class="container-page flex min-h-[calc(100vh-4rem)] flex-col items-start pt-8"
        >
          <NavLinkItem
            v-for="link in links"
            :key="link.href"
            class="mobile-menu-item"
            :href="link.href"
            :label="link.label"
            mode="mobile"
            @click="closeMobileMenu"
          />

          <AppButton
            class="mobile-menu-item mt-10 bg-[#129b64] text-base"
            :href="DOWNLOAD_URL"
            :target="EXTERNAL_LINK_TARGET"
            icon="download"
            @click="closeMobileMenu"
          >
            Download GreepPay
          </AppButton>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.mobile-menu-panel {
  background:
    linear-gradient(
      to right,
      transparent 2rem,
      rgb(217 228 223 / 0.7) 2rem,
      rgb(217 228 223 / 0.7) calc(2rem + 1px),
      transparent calc(2rem + 1px)
    ),
    linear-gradient(
      to right,
      transparent calc(100% - 2rem),
      rgb(217 228 223 / 0.7) calc(100% - 2rem),
      rgb(217 228 223 / 0.7) calc(100% - 2rem + 1px),
      transparent calc(100% - 2rem + 1px)
    ),
    #fff;
}
</style>
