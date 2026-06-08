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
    className: "",
  },
);
</script>

<template>
  <section
    v-if="reveal"
    v-reveal
    :id="id"
    :class="className"
  >
    <slot />
  </section>
  <section
    v-else
    :id="id"
    :class="className"
  >
    <slot />
  </section>
</template>
