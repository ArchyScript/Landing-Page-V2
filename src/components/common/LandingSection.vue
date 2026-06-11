<script setup lang="ts">
withDefaults(
  defineProps<{
    id?: string;
    reveal?: boolean;
    className?: string;
  }>(),
  {
    id: undefined,
    reveal: true,
    className: '',
  },
);
</script>

<template>
  <section
    v-if="reveal"
    v-reveal
    :id="id"
    :class="['landing-section', className]"
  >
    <slot />
  </section>
  <section
    v-else
    :id="id"
    :class="['landing-section', className]"
  >
    <slot />
  </section>
</template>

<style scoped>
.landing-section {
  position: relative;
}

.landing-section::before,
.landing-section::after {
  position: absolute;
  right: 0;
  left: 0;
  height: 1px;
  background: var(--color-theme-line);
  content: '';
}

.landing-section::before {
  top: 0;
}

.landing-section::after {
  bottom: 0;
}
</style>
