<template>
  <div ref="dropdownRef" class="relative">
    <label class="text-primary font-semibold flex items-end gap-x-1" @click="isOpen = !isOpen">
      {{ displayedValue ?? placeholder }}

      <ChevronDownIcon class="w-4 h-4 mb-0.5 transition-transform" :class="{
        'rotate-180': isOpen,
      }" />
    </label>

    <div class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 right-0" :class="{
      'absolute': isOpen,
      'hidden': !isOpen,
    }">
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

          <CheckIcon class="w-4 h-4" :class="{
            'invisible': key !== modelValue,
          }" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/20/solid';
import { onClickOutside } from '@vueuse/core';

import { computed, ref } from 'vue';

const props = defineProps<{
  modelValue: string | null
  options: Record<string, string>
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>()

const dropdownRef = ref<HTMLElement | null>(null)
const isOpen = ref<boolean>(false)

onClickOutside(dropdownRef, () => {
  isOpen.value = false
})

const displayedValue = computed<string | undefined>(() => props.modelValue ? props.options[props.modelValue] : undefined)

const handleOptionClick = (option: string): void => {
  emit('update:modelValue', option === props.modelValue ? null : option)
}
</script>
