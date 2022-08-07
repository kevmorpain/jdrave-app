<template>
  <div>
    <label :for="id" class="inline-block mb-2 cursor-pointer">
      {{ label }}
    </label>
    <textarea
      :id="id"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      rows="4"
      :value="modelValue"
      @input="emitValue"
    />
  </div>
</template>

<script setup lang="ts">
import { v4 as getRandomId } from 'uuid';

const id = getRandomId();
defineProps<{
  modelValue: string | number;
  label?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const emitValue = (event: Event): void => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
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
