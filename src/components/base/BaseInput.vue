<template>
  <div class="mb-6">
    <label
      :for="id"
      class="inline-block mb-2 font-medium transition-colors dark:text-gray-300"
      :class="{ 'text-primary': isFocused }"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      class="border border-gray-300 text-sm rounded-lg transition-colors focus:ring-primary focus:border-primary block w-full p-2.5"
      :class="{
        'bg-gray-50': !readonly,
        'bg-gray-100 focus:border-gray-300': readonly,
      }"
      :min="min"
      :max="max"
      :type="type"
      :value="modelValue"
      :readonly="readonly"
      @input="emitValue"
      @focus="isFocused = !readonly && true"
      @blur="isFocused = false"
    />
  </div>
</template>

<script setup lang="ts">
import { v4 as getRandomId } from 'uuid';
import { ref } from 'vue';

const id = getRandomId();
withDefaults(
  defineProps<{
    modelValue: string | number;
    label?: string;
    type?: string;
    max?: number;
    min?: number;
    readonly?: boolean;
  }>(),
  {
    type: 'text',
  }
);

const emit = defineEmits(['update:modelValue']);

const emitValue = (event: Event): void => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};

const isFocused = ref<boolean>(false);
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
