<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import gsap from 'gsap';
import type { AvailableCurrency } from '@/data/currencies';
import { assetUrl } from '@/utils/assets';

const props = withDefaults(
  defineProps<{
    currencies: AvailableCurrency[];
    duration?: number;
  }>(),
  {
    duration: 34,
  },
);

const marquee = ref<HTMLElement>();
const track = ref<HTMLElement>();
let marqueeContext: gsap.Context | undefined;
let marqueeTween: gsap.core.Tween | undefined;

const iconNames: Record<string, string> = {
  BWP: 'bwp',
  CAD: 'ca',
  CDF: 'cd',
  COP: 'co',
  EGP: 'eg',
  ETB: 'et',
  EUR: 'eur',
  GHS: 'ghs',
  INR: 'in',
  KES: 'kes',
  MAD: 'ma',
  MWK: 'mwk',
  MZN: 'mz',
  NGN: 'ngn',
  PKR: 'pk',
  RWF: 'rwf',
  SDG: 'sd',
  SLE: 'sl',
  SLL: 'sl',
  SSP: 'ss',
  SZL: 'sz',
  TZS: 'tz',
  UGX: 'ugx',
  USD: 'usd',
  XAF: 'xaf',
  XOF: 'ci',
  ZAR: 'zar',
  ZMW: 'zmw',
  ZWL: 'zwl',
};

const iconPath = (currency: AvailableCurrency) =>
  assetUrl(
    `images/icons/flags/${iconNames[currency.code] || currency.code.toLowerCase()}.${currency.icon_extension}`,
  );

const marqueeCurrencies = computed(() =>
  props.currencies.filter((currency) => currency.code !== 'BIF'),
);

const pause = () => marqueeTween?.pause();
const play = () => marqueeTween?.play();

onMounted(async () => {
  await nextTick();
  if (!marquee.value || !track.value) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  marqueeContext = gsap.context(() => {
    marqueeTween = gsap.to(track.value!, {
      xPercent: -50,
      duration: props.duration,
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
    class="w-full overflow-hidden"
    @mouseenter="pause"
    @mouseleave="play"
  >
    <div
      ref="track"
      class="flex w-max gap-10 md:gap-12 lg:gap-16 will-change-transform"
    >
      <div
        v-for="group in 2"
        :key="group"
        class="flex shrink-0 items-center gap-10 md:gap-12 lg:gap-16"
        :aria-hidden="group === 2"
      >
        <div
          v-for="currency in marqueeCurrencies"
          :key="`${group}-${currency.code}`"
          class="flex shrink-0 items-center rounded-full backdrop-blur-sm"
        >
          <img
            class="h-10 w-10 rounded-full border border-white/30 bg-white object-cover md:h-12 md:w-12"
            :src="iconPath(currency)"
            :alt="group === 1 ? `${currency.code} currency icon` : ''"
          />
        </div>
      </div>
    </div>
  </div>
</template>
