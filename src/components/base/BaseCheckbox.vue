<template>
  <div class="flex items-center gap-x-2">
    <input
      :id="id"
      type="checkbox"
      value=""
      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 checked:border-transparent checked:bg-primary appearance-none cursor-pointer transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
      :checked="modelValue"
      @click="$emit('update:modelValue', !modelValue)"
    />

    <label v-if="label" :for="id">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { v4 as getRandomId } from 'uuid';

const id = getRandomId();

defineProps<{
  modelValue: boolean;
  label?: string;
}>();

defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();
</script>

<style scoped>
[type='checkbox']:checked {
  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E);
}
</style>
