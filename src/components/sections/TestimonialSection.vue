<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LandingSection from "@/components/common/LandingSection.vue";
import SectionIntro from "@/components/common/SectionIntro.vue";
import TestimonialCard from "@/components/sections/TestimonialCard.vue";
import type { Testimonial } from "@/data/landing";

gsap.registerPlugin(ScrollTrigger);

defineProps<{
  testimonials: Testimonial[];
}>();

const testimonialGrid = ref<HTMLElement>();
let animationContext: gsap.Context | undefined;

onMounted(async () => {
  await nextTick();
  if (!testimonialGrid.value) return;

  const cards = testimonialGrid.value.querySelectorAll(".testimonial-card");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set(cards, { clearProps: "all" });
    return;
  }

  animationContext = gsap.context(() => {
    gsap.fromTo(
      cards,
      {
        autoAlpha: 0,
        y: 32,
        scale: 0.98,
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.72,
        stagger: 0.08,
        ease: "power3.out",
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          trigger: testimonialGrid.value,
          start: "top 82%",
          once: true,
        },
      },
    );
  }, testimonialGrid.value);
});

onBeforeUnmount(() => {
  animationContext?.revert();
});
</script>

<template>
  <LandingSection id="testimonials" class-name="py-20">
    <div class="container-page">
      <SectionIntro
        eyebrow="Trusted by thousands of users managing their money smarter."
        green-text="Loved by people"
        title="who want more control over their money"
        subtitle="Thousands of users rely on GreepPay for faster payments, smarter cards, and smoother finances."
      />

      <div
        ref="testimonialGrid"
        class="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3"
      >
        <TestimonialCard
          v-for="(testimonial, index) in testimonials.slice(0, 12)"
          :key="testimonial.quote"
          :testimonial="testimonial"
          :class="{
            'hidden md:block': index >= 6 && index < 8,
            'hidden lg:block': index >= 8,
          }"
        />
      </div>
    </div>
  </LandingSection>
</template>
