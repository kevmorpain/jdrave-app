<template>
  <button
    class="bg-white rounded-lg py-2 px-3 text-primary hover:bg-slate-50 transition-colors duration-200 ease-out inline-flex items-center font-medium gap-x-2"
    :disabled="isLoading"
  >
    <BaseSpinner v-if="isLoading" class="inline w-4 h-4" />
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isLoading?: boolean;
}>();
</script>

<style lang="scss" scoped>
.primary {
  @apply bg-primary text-white hover:bg-primary-hover;
}
.secondary {
  @apply bg-secondary text-white hover:bg-secondary-hover;
}

.tertiary {
  @apply bg-gray-100 text-primary hover:bg-gray-200;
}

.warning {
  @apply bg-red-500 text-white hover:bg-red-600;
}

.icon {
  @apply p-2;
}

.small {
  @apply text-sm py-1 px-2;
}

.circled {
  @apply rounded-full;
}
</style>
