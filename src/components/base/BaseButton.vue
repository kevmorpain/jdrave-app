<template>
  <button
    class="bg-white rounded-full py-2 px-4 text-primary hover:bg-slate-50 transition-colors duration-200 ease-out inline-flex items-center font-medium"
    :disabled="isLoading"
  >
    <BaseSpinner v-if="isLoading" class="inline w-4 h-4 mr-3" />
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
.warning {
  @apply bg-red-500 text-white hover:bg-red-600;
}
</style>
