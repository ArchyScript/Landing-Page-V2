<script setup lang="ts">
defineProps<{
  title: string;
  links?: Array<{ label: string; href: string }>;
}>();
</script>

<template>
  <div>
    <h3 class="mb-5 font-medium text-neutral-80">{{ title }}</h3>

    <template v-if="links">
      <a
        v-for="link in links"
        :key="link.label"
        class="mt-[0.9rem] block font-semibold text-neutral-100 transition duration-300 ease-smooth hover:text-brand-600"
        :href="link.href"
      >
        {{ link.label }}
      </a>
    </template>
    <slot />
  </div>
</template>
