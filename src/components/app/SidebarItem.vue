<template>
  <li
    class="flex items-center gap-x-3 p-2 rounded-lg font-medium cursor-pointer hover:text-primary group transition-colors"
    :class="{ 'bg-secondary-light': isActive }"
  >
    <component
      :is="icon"
      class="w-6 h-6 text-gray-700 group-hover:text-inherit transition-colors"
    />
    {{ $t(`app.nav.${name}`) }}
  </li>
</template>

<script setup lang="ts">
import { FunctionalComponent } from 'vue';

defineProps<{
  name: string;
  icon: FunctionalComponent;
  isActive?: boolean;
}>();
</script>
