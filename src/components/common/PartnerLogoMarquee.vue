<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import gsap from 'gsap';
import { assetUrl } from '@/utils/assets';

type Partner = {
  name: string;
  logo?: string;
};

const partners: Partner[] = [
  {
    name: 'Stellar',
    logo: '/images/brands/stellar-logo.png',
  },
  {
    name: 'Bridge',
    logo: '/images/brands/bridge-logo.png',
  },
  {
    name: 'Yellow Card',
    logo: '/images/brands/yellow-card-logo.png',
  },
  {
    name: 'Flutterwave',
    logo: '/images/brands/flutterwave-logo.png',
  },
];

const marquee = ref<HTMLElement>();
const track = ref<HTMLElement>();
let marqueeContext: gsap.Context | undefined;

onMounted(() => {
  if (!marquee.value || !track.value) return;

  marqueeContext = gsap.context(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.to(track.value!, {
      xPercent: -50,
      duration: 15,
      ease: 'none',
      repeat: -1,
    });
  }, marquee.value);
});

onBeforeUnmount(() => {
  marqueeContext?.revert();
});
</script>

<template>
  <div
    ref="marquee"
    class="relative overflow-hidden"
    aria-label="Companies backing GreepPay"
  >
    <div ref="track" class="flex w-max items-center">
      <div
        v-for="copy in 2"
        :key="copy"
        class="flex shrink-0 items-center"
        :aria-hidden="copy === 2"
      >
        <div
          v-for="partner in partners"
          :key="`${copy}-${partner.name}`"
          class="flex h-16 !min-w-40 shrink-0 items-center justify-center px-6"
        >
          <img
            v-if="partner.logo"
            :src="assetUrl(partner.logo)"
            :alt="copy === 1 ? partner.name : ''"
            class="max-h-8 max-w-24 object-contain"
          />
          <span
            v-else
            class="text-lg font-semibold tracking-normal text-neutral-100"
          >
            {{ partner.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
