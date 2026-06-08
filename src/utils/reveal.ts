import type { ObjectDirective } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type RevealElement = HTMLElement & {
  __gsapRevealContext?: gsap.Context;
};

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const delayFromClass = (element: HTMLElement) => {
  if (element.classList.contains('delay-3')) return 0.33;
  if (element.classList.contains('delay-2')) return 0.22;
  if (element.classList.contains('delay-1')) return 0.11;
  return 0;
};

export const revealDirective: ObjectDirective<RevealElement> = {
  mounted(element) {
    const targets = element.classList.contains('reveal-item')
      ? [element]
      : Array.from(element.querySelectorAll<HTMLElement>('.reveal-item'));

    if (prefersReducedMotion()) {
      gsap.set(targets, {
        clearProps: 'all',
      });
      return;
    }

    element.__gsapRevealContext = gsap.context(() => {
      targets.forEach((target) => {
        const staggerItems = target.matches('[data-gsap-stagger]')
          ? Array.from(target.children)
          : [];

        gsap.fromTo(
          target,
          {
            autoAlpha: 0,
            y: 28,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            delay: delayFromClass(target),
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: target,
              start: 'top 88%',
              once: true,
            },
          },
        );

        if (staggerItems.length) {
          gsap.fromTo(
            staggerItems,
            {
              autoAlpha: 0,
              y: 22,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.62,
              stagger: 0.09,
              delay: delayFromClass(target) + 0.12,
              ease: 'power3.out',
              clearProps: 'opacity,visibility,transform',
              scrollTrigger: {
                trigger: target,
                start: 'top 88%',
                once: true,
              },
            },
          );
        }
      });
    }, element);
  },

  unmounted(element) {
    element.__gsapRevealContext?.revert();
  },
};
