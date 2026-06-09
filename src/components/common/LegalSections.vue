<script setup lang="ts">
import type { LegalSection } from '@/data/legal';

defineProps<{
  sections: LegalSection[];
}>();

const splitHeading = (heading: string) => {
  const numberedHeading = heading.match(/^(\d+(?:\.\d+)?\.?\s+\S+)(.*)$/);
  if (numberedHeading) {
    return {
      accent: numberedHeading[1],
      remainder: numberedHeading[2],
    };
  }

  const [accent, ...remainder] = heading.split(' ');
  return {
    accent,
    remainder: remainder.length ? ` ${remainder.join(' ')}` : '',
  };
};
</script>

<template>
  <div class="space-y-12">
    <section
      v-for="section in sections"
      :key="section.title"
      v-reveal
      class="reveal-item scroll-mt-24"
    >
      <h2
        class="font-display text-xl font-semibold text-neutral-100 md:text-2xl"
      >
        <strong class="font-semibold text-primary-100">
          {{ splitHeading(section.title).accent }}
        </strong>
        {{ splitHeading(section.title).remainder }}
      </h2>

      <p
        v-for="paragraph in section.paragraphs"
        :key="paragraph"
        class="mt-5 leading-8 text-neutral-90"
      >
        {{ paragraph }}
      </p>

      <ul v-if="section.bullets" class="mt-5 space-y-3 pl-5 text-neutral-90">
        <li
          v-for="bullet in section.bullets"
          :key="bullet"
          class="list-disc pl-2 leading-7"
        >
          {{ bullet }}
        </li>
      </ul>

      <div v-if="section.subsections" class="mt-7 space-y-8">
        <section
          v-for="subsection in section.subsections"
          :key="subsection.title"
        >
          <h3 class="text-lg font-semibold text-neutral-100">
            <strong class="font-semibold text-primary-100">
              {{ splitHeading(subsection.title).accent }}
            </strong>
            {{ splitHeading(subsection.title).remainder }}
          </h3>
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
  </div>
</template>
