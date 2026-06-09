<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { assetUrl } from '@/utils/assets';

const props = withDefaults(
  defineProps<{
    photoUrl?: string;
    src?: string;
    alt?: string;
    label?: string;
    fit?: 'cover' | 'contain' | 'fill';
    customClass?: string;
    customStyle?: string;
    canShowFullImage?: boolean;
  }>(),
  {
    photoUrl: '',
    src: '',
    alt: '',
    label: 'Image placeholder',
    fit: 'cover',
    customClass: '',
    customStyle: '',
    canShowFullImage: false,
  },
);

const isLoaded = ref(false);
const hasError = ref(false);
const loadedImage = ref('');
const previewIsOpen = ref(false);

const source = computed(() => props.photoUrl || props.src);
const imageUrl = computed(() => {
  if (!source.value) return '';
  if (source.value.startsWith('/images/')) {
    return assetUrl(source.value);
  }
  return source.value;
});

const setImage = () => {
  isLoaded.value = false;
  hasError.value = false;
  loadedImage.value = '';

  if (!imageUrl.value) return;

  const image = new Image();
  image.onload = () => {
    loadedImage.value = imageUrl.value;
    isLoaded.value = true;
  };
  image.onerror = () => {
    hasError.value = true;
  };
  image.src = imageUrl.value;
};

const handleClick = (event: MouseEvent) => {
  if (!props.canShowFullImage || !loadedImage.value) return;
  event.stopPropagation();
  previewIsOpen.value = true;
};

watch(imageUrl, () => setImage());

onMounted(() => setImage());
</script>

<template>
  <div
    class="image-loader relative grid h-full min-h-[inherit] w-full cursor-default place-items-center"
    :class="customClass"
    :style="customStyle"
    @click="handleClick"
  >
    <img
      v-if="loadedImage && !hasError"
      class="image-loader-media absolute inset-0 h-full w-full opacity-0 transition duration-700 ease-smooth"
      :class="[
        fit === 'contain'
          ? 'object-contain'
          : fit === 'fill'
            ? 'object-fill'
            : 'object-cover',
        { 'is-loaded': isLoaded },
      ]"
      :src="loadedImage"
      :alt="alt"
      loading="lazy"
    />

    <div
      v-if="!source || hasError || !isLoaded"
      class="image-loader-state relative z-10 grid min-h-48 w-[min(80%,22rem)] place-items-center rounded-[1.25rem] border border-dashed border-theme-ink/25 bg-white/50 p-6 text-center text-theme-ink transition duration-500 ease-smooth"
      role="img"
      :aria-label="alt"
    >
      <UiIcon name="wallet" variant="soft" />
      <span class="text-base font-bold">{{ label }}</span>
      <small class="text-theme-muted">{{
        hasError ? 'Image failed to load' : 'Replace with exported image'
      }}</small>
    </div>

    <slot />

    <Teleport to="body">
      <div
        v-if="previewIsOpen"
        class="image-preview fixed inset-0 z-[9999] grid place-items-center bg-black/90 px-6"
        role="dialog"
        aria-modal="true"
        aria-label="Image preview"
      >
        <button
          class="image-preview-close absolute right-4 grid h-11 w-11 place-items-center rounded-full bg-white"
          type="button"
          aria-label="Close image preview"
          @click="previewIsOpen = false"
        >
          <UiIcon name="close" custom-class="w-5 h-5" />
        </button>
        <img
          class="max-h-full max-w-full object-contain"
          :src="loadedImage"
          :alt="alt || 'Full image preview'"
        />
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.image-loader-media {
  transition:
    opacity 450ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 450ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
}

.image-loader-media.is-loaded {
  opacity: 1;
}

.image-loader:hover .image-loader-media.is-loaded {
  filter: saturate(1.04);
  transform: scale(1.025);
}

.image-loader:hover .image-loader-state {
  border-color: rgb(31 107 79 / 0.5);
  transform: translateY(-3px);
}

.image-preview {
  padding: max(1.5rem, env(safe-area-inset-top)) 1.5rem
    max(1.5rem, env(safe-area-inset-bottom));
}

.image-preview-close {
  top: max(1rem, env(safe-area-inset-top));
}
</style>
