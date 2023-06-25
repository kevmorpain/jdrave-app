<template>
  <div>
    <label
      v-if="label"
      :for="id"
      class="inline-block mb-2 transition-colors cursor-pointer"
      :class="{ 'text-primary': isFocused }"
    >
      {{ label }}
    </label>

    <div class="flex">
      <input
        :id="id"
        class="border border-gray-300 text-sm rounded-lg transition-colors focus:ring-primary focus:border-primary block w-full p-2.5 flex-1 appearance-none text-dark"
        :class="{
          'bg-gray-50': !readonly,
          'bg-gray-100 focus:border-gray-300': readonly,
          'rounded-r-none': slots['right-label'],
        }"
        :min="min"
        :max="max"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        :readonly="readonly"
        @input="emitValue"
        @focus="isFocused = !readonly && true"
        @blur="isFocused = false"
      />

      <div
        v-if="!!slots['right-label']"
        class="cursor-pointer flex justify-center items-center px-2 border text-sm rounded-lg rounded-l-none border-l-0 select-none"
        :class="{
          'bg-secondary text-primary border-secondary': !readonly,
          'bg-gray-100 border-gray-300': readonly,
        }"
        @click="emit('right-label-click')"
      >
        <slot name="right-label" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { v4 as getRandomId } from 'uuid';
import { ref, useSlots } from 'vue';

const id = getRandomId();
const props = withDefaults(
  defineProps<{
    modelValue: string | number | null;
    label?: string;
    type?: string;
    max?: number;
    min?: number;
    readonly?: boolean;
    placeholder?: string;
  }>(),
  {
    type: 'text',
    label: undefined,
    max: undefined,
    min: undefined,
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: typeof props.modelValue): void;
  (e: 'right-label-click'): unknown;
}>();

const slots = useSlots();

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

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
