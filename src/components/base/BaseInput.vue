<template>
  <div class="mb-6">
    <label
      :for="id"
      class="inline-block mb-2 font-medium text-gray-900 dark:text-gray-300"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      :min="min"
      :max="max"
      :type="type"
      :value="modelValue"
      @input="emitValue"
    />
  </div>
</template>

<script setup lang="ts">
import { v4 as getRandomId } from 'uuid';

const id = getRandomId();
withDefaults(
  defineProps<{
    modelValue: string | number;
    label?: string;
    type?: string;
    max?: number;
    min?: number;
  }>(),
  {
    type: 'text',
  }
);

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
