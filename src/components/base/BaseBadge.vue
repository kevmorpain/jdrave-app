<template>
  <span class="rounded-md py-0.5 px-3 text-sm">
    <slot />
  </span>
</template>

<style scoped>
.primary {
  @apply bg-primary text-white;
}

.secondary {
  @apply bg-secondary text-white;
}

.tertiary {
  @apply bg-white text-primary;
}
</style>
