<template>
  <div class="group relative">
    <slot />

    <div
      role="tooltip"
      class="tooltip inline-block absolute z-10 py-2 px-3 text-sm font-medium text-white bg-dark rounded-lg shadow-sm transition-opacity duration-300 left-1/2 -translate-x-1/2 mb-2.5 bottom-full opacity-0 invisible group-hover:opacity-100 group-hover:visible before:border-transparent before:border-6 before:border-t-dark before:absolute before:top-full before:left-1/2 before:translate-x-1/2
      "
    >
      {{ tooltipText }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tooltipText: string;
}>();
</script>

<style lang="scss">
.tooltip:before {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
