<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <span class="grid h-11 w-11 place-items-center rounded-full bg-white text-xs font-extrabold text-theme-ink md:h-16 md:w-16 md:text-base">
    {{ label }}
  </span>
</template>
