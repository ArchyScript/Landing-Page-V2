<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import gsap from 'gsap';
import ImageLoader from '@/components/common/ImageLoader.vue';
import AppButton from '@/components/common/AppButton.vue';
import LandingSection from '@/components/common/LandingSection.vue';
import { DOWNLOAD_URL, EXTERNAL_LINK_TARGET } from '@/data/links';
import { assetUrl } from '@/utils/assets';

const heroRoot = ref<HTMLElement>();
let heroContext: gsap.Context | undefined;

onMounted(() => {
  if (!heroRoot.value) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set(heroRoot.value.querySelectorAll('.hero-animate'), {
      clearProps: 'all',
    });
    return;
  }

  heroContext = gsap.context(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 0.78,
        ease: 'power3.out',
      },
    });

    timeline
      .from('.hero-pill', { autoAlpha: 0, y: 16 })
      .from('.hero-title', { autoAlpha: 0, y: 24 }, '-=0.58')
      .from('.hero-copy', { autoAlpha: 0, y: 20 }, '-=0.55')
      .from('.hero-cta', { autoAlpha: 0, y: 16 }, '-=0.52')
      .from(
        '.hero-device',
        {
          autoAlpha: 0,
          y: 42,
          scale: 0.985,
          duration: 0.95,
        },
        '-=0.38',
      );
  }, heroRoot.value);
});

onBeforeUnmount(() => {
  heroContext?.revert();
});
</script>

<template>
  <LandingSection id="top" :reveal="false" class-name="bg-[#f7f7f7]">
    <div ref="heroRoot" class="container-page container-y-padding text-center">
      <span
        class="hero-pill hero-animate inline-flex max-w-full whitespace-nowrap rounded-full border border-neutral-50 bg-white px-2 py-2 text-[10px] font-medium text-black min-[400px]:px-3 min-[400px]:text-xs sm:px-4 sm:text-sm"
      >
        Supports over 30+ African currencies & your USDT/USDC
      </span>

      <h1
        class="hero-title hero-animate mx-auto mt-8 max-w-4xl font-display font-semibold text-neutral-100 sm:mt-12"
      >
        <span
          class="block whitespace-nowrap text-[2rem] leading-none min-[480px]:text-[2.5rem] md:text-[3.25rem] lg:text-[4rem]"
        >
          <span>SPEND</span>
          <span class="text-primary-100"> AFRICAN</span>
        </span>

        <span
          class="mt-3 block text-[2rem] leading-none min-[480px]:text-[2.5rem] md:mt-0 md:inline-block md:text-[3.25rem] lg:text-[4rem]"
        >
          <span class="text-primary-100">CURRENCY</span><span>.</span>
        </span>

        <span
          class="mx-auto mt-4 flex w-fit -rotate-[6deg] items-center gap-2 rounded-full bg-primary py-1 pl-1 sm:pl-2 pr-6 sm:mt-3 sm:inline-flex"
        >
          <img
            :src="assetUrl('images/globe.webp')"
            alt=""
            class="h-10 w-10 shrink-0 rounded-full object-cover min-[480px]:h-12 min-[480px]:w-12 sm:h-[60px] sm:w-[60px]"
          />
          <strong
            class="whitespace-nowrap text-[1.25rem] font-semibold leading-none text-white min-[480px]:text-[1.5rem] md:text-[2.25rem] lg:text-[2.5rem]"
          >
            ANYWHERE!
          </strong>
        </span>
      </h1>

      <p
        class="hero-copy hero-animate mx-auto mt-10 md:mt-12 max-w-[32rem] text-sm md:text-base leading-7 text-neutral-90 sm:mt-8 px-4 md:px-10"
      >
        No need to convert your African currency when you leave your country,
        download Greep pay. Top-up your wallet, send money home, and spend
        Anywhere! Anytime!
      </p>

      <AppButton
        class="hero-cta hero-animate mt-4 md:mt-12 px-8 py-4 text-sm sm:mt-8"
        :href="DOWNLOAD_URL"
        :target="EXTERNAL_LINK_TARGET"
      >
        Download GreepPay
      </AppButton>

      <div
        class="hero-device hero-animate mx-auto mt-16 grid h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] items-start justify-items-center overflow-hidden sm:mt-14 lg:mt-20"
      >
        <ImageLoader
          photo-url="/images/home-green-bg.webp"
          alt="GreepPay mobile app home screen"
          fit="cover"
          custom-class="overflow-hidden hidden md:block"
        />
        <ImageLoader
          photo-url="/images/home.webp"
          alt="GreepPay mobile app home screen"
          fit="contain"
          custom-class="overflow-hidden block   md:hidden"
        />
      </div>
    </div>
  </LandingSection>
</template>
