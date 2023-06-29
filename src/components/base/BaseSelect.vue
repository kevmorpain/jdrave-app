<template>
  <div ref="dropdownRef" class="relative">
    <label
      v-if="label"
      class="inline-block mb-2 transition-colors cursor-pointer"
      :class="{ 'text-primary': isOpen }"
      @click="toggleOpen"
    >
      {{ label }}
    </label>

    <div
      class="flex justify-between items-center border border-gray-300 text-sm rounded-lg transition-colors p-2.5"
      :class="{
        'ring-primary border-primary rounded-b-none': isOpen,
        'bg-gray-50': !readonly,
        'bg-gray-100 focus:border-gray-300': readonly,
      }"
      @click="toggleOpen"
    >
      <span class="flex-1">{{ displayedValue ?? placeholder }}</span>

      <ChevronDownIcon
        class="flex-none w-5 h-5 transition-transform"
        :class="{
          'rotate-180': isOpen,
        }"
      />
    </div>

    <div
      class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow inset-x-0 text-sm max-h-[140px] overflow-y-auto"
      :class="{
        'absolute rounded-t-none': isOpen,
        hidden: !isOpen,
      }"
    >
      <ul class="py-2">
        <li
          v-for="(value, key) in options"
          :key="key"
          class="px-4 py-2 hover:bg-gray-100 transition-colors flex justify-between items-center gap-x-1 cursor-pointer"
          :class="{
            'font-semibold': key === modelValue,
          }"
          @click="handleOptionClick(key)"
        >
          {{ value }}

          <CheckIcon
            class="w-4 h-4"
            :class="{
              invisible: key !== modelValue,
            }"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO: change for a select design and not dropdown

import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/20/solid';
import { onClickOutside } from '@vueuse/core';

import { computed, ref } from 'vue';

const props = defineProps<{
  modelValue: string | null;
  options: Record<string, string>;
  label?: string;
  placeholder?: string;
  readonly?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void;
}>();

const dropdownRef = ref<HTMLElement | null>(null);
const isOpen = ref<boolean>(false);

const toggleOpen = (): void => {
  isOpen.value = !isOpen.value;
};

onClickOutside(dropdownRef, () => {
  isOpen.value = false;
});

const displayedValue = computed<string | undefined>(() =>
  props.modelValue ? props.options[props.modelValue] : undefined
);

const handleOptionClick = (option: string): void => {
  toggleOpen();
  emit('update:modelValue', option === props.modelValue ? null : option);
};
</script>
