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
      class="image-loader-media absolute inset-0 z-10 h-full w-full opacity-0 transition duration-700 ease-smooth"
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
      v-if="source && !hasError && !isLoaded"
      class="image-loader-skeleton absolute inset-0 h-full w-full overflow-hidden bg-brand-50"
      role="status"
      :aria-label="alt ? `Loading ${alt}` : 'Loading image'"
    >
      <span class="sr-only">Loading image</span>
    </div>

    <div
      v-else-if="!source || hasError"
      class="image-loader-state absolute inset-0 grid h-full min-h-[inherit] w-full place-items-center bg-brand-50/95 p-6 text-center text-theme-ink"
      role="img"
      :aria-label="alt"
    >
      <div class="grid max-w-xs place-items-center gap-3">
        <UiIcon name="wallet" variant="soft" />
        <span class="text-base font-bold">{{ label }}</span>
        <small class="text-theme-muted">
          {{ hasError ? 'Image failed to load' : 'Replace with exported image' }}
        </small>
      </div>
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

.image-loader-skeleton::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 25%,
    rgb(255 255 255 / 0.72) 45%,
    rgb(255 255 255 / 0.9) 50%,
    transparent 70%
  );
  content: '';
  transform: translateX(-100%);
  animation: image-skeleton-shimmer 1.45s ease-in-out infinite;
}

.image-preview {
  padding: max(1.5rem, env(safe-area-inset-top)) 1.5rem
    max(1.5rem, env(safe-area-inset-bottom));
}

.image-preview-close {
  top: max(1rem, env(safe-area-inset-top));
}

@keyframes image-skeleton-shimmer {
  to {
    transform: translateX(100%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .image-loader-skeleton::after {
    animation: none;
  }
}
</style>
