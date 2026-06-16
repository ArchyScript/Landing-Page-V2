<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import gsap from 'gsap';
import AppButton from '@/components/common/AppButton.vue';
import LandingSection from '@/components/common/LandingSection.vue';
import UseCaseCard from '@/components/common/UseCaseCard.vue';
import type { UseCase } from '@/data/landing';
import { DOWNLOAD_URL, EXTERNAL_LINK_TARGET } from '@/data/links';

const props = defineProps<{
  useCases: UseCase[];
}>();

const marquee = ref<HTMLElement>();
const track = ref<HTMLElement>();
let marqueeContext: gsap.Context | undefined;
let marqueeTween: gsap.core.Tween | undefined;

const pause = () => marqueeTween?.pause();
const play = () => marqueeTween?.play();

onMounted(async () => {
  await nextTick();
  if (!marquee.value || !track.value) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  marqueeContext = gsap.context(() => {
    marqueeTween = gsap.to(track.value!, {
      xPercent: -50,
      duration: 50,
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
  <LandingSection>
    <div  >
      <div
        class="container-page py-10 md:py-12 lg:py-14 reveal-item flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between border-b border-border-neutral"
      >
        <h2
          class="max-w-3xl font-display text-[1.9rem] font-bold leading-[0.98] text-black sm:text-[2.2rem] lg:text-[2.95rem]"
        >
          What you'll actually<br />
          use <span class="text-primary-100">Greep</span> for.
        </h2>

        <AppButton
          class="w-fit px-5 py-3 text-[0.82rem] font-medium"
          :href="DOWNLOAD_URL"
          :target="EXTERNAL_LINK_TARGET"
        >
          Download GreepPay
        </AppButton>
      </div>

      <div class="container-page pb-10 md:pb-12 lg:pb-14">
        <div
          ref="marquee"
          class="reveal-item delay-1 -mx-4 overflow-hidden border- b border-border-neutral md:-mx -5 lg:-mx-6 xl:mx-0"
          @mouseenter="pause"
          @mouseleave="play"
        >
          <div
            ref="track"
            data-gsap-stagger
            class="use-case-track flex w-max will-change-transform"
          >
            <div
              v-for="group in 2"
              :key="group"
              class="flex shrink-0"
              :aria-hidden="group === 2"
            >
              <UseCaseCard
                v-for="useCase in props.useCases"
                :key="`${group}-${useCase.title}`"
                class="use-case-card w-[78vw] max-w-[19rem] shrink-0 sm:w-[20rem] md:w-[18.5rem] lg:w-[19.5rem] xl:w-[13.15rem]"
                :title="useCase.title"
                :image-src="useCase.imageSrc"
                :image-alt="group === 1 ? useCase.imageAlt : ''"
                :image-label="useCase.imageLabel"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </LandingSection>
</template>

<style scoped>
.use-case-track {
  scrollbar-width: none;
}

.use-case-track::-webkit-scrollbar {
  display: none;
}

.use-case-card {
  margin-left: -1px;
}

.use-case-card:first-child {
  margin-left: 0;
}
</style>
