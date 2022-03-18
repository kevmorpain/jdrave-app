<template>
  <label :for="id">{{ label }}</label>
  <input
    :value="modelValue"
    :id="id"
    :type="type"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref, withDefaults } from 'vue';

let inputId = 0;

const id = ref(inputId++);
withDefaults(
  defineProps<{
    modelValue: string;
    label?: string;
    type: string;
  }>(),
  {
    type: 'text',
  }
);

defineEmits(['update:modelValue']);
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
