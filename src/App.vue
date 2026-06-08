<script setup lang="ts">
import gsap from "gsap";

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const pageEnter = (element: Element, done: () => void) => {
  if (reducedMotion()) {
    done();
    return;
  }

  gsap.fromTo(
    element,
    { autoAlpha: 0, y: 18 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.55,
      ease: "power3.out",
      clearProps: "opacity,visibility,transform",
      onComplete: done,
    },
  );
};

const pageLeave = (element: Element, done: () => void) => {
  if (reducedMotion()) {
    done();
    return;
  }

  gsap.to(element, {
    autoAlpha: 0,
    y: -10,
    duration: 0.25,
    ease: "power2.in",
    onComplete: done,
  });
};
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition
      mode="out-in"
      :css="false"
      @enter="pageEnter"
      @leave="pageLeave"
    >
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template>
