<template>
  <Teleport to="body">
    <aside
      v-if="isVisible"
      class="fixed inset-0 bg-primary/50 flex justify-center items-center"
    >
      <div
        ref="modalRef"
        class="flex-1 flex flex-col gap-y-4 bg-white max-w-3xl rounded-xl py-4"
        :class="[modalClass]"
      >
        <h1 v-if="title" class="text-xl font-semibold text-center py-4">
          {{ title }}
        </h1>

        <div class="px-8">
          <slot />
        </div>

        <div
          v-if="!hideActions"
          class="flex justify-between items-center p-4 pb-0"
        >
          <BaseButton
            :class="{
              invisible: hideCancel,
            }"
            @click="$emit('cancel')"
          >
            {{ cancelText }}
          </BaseButton>

          <BaseButton class="primary" @click="$emit('validate')">
            {{ validateText }}
          </BaseButton>
        </div>
      </div>
    </aside>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

withDefaults(
  defineProps<{
    isVisible: boolean;
    modalClass?: string;
    title?: string;
    hideActions?: boolean;
    hideCancel?: boolean;
    cancelText?: string;
    validateText?: string;
  }>(),
  {
    modalClass: undefined,
    title: undefined,
    cancelText: 'Annuler',
    validateText: 'Valider',
  }
);

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'cancel'): void;
  (e: 'validate'): void;
}>();

const modalRef = ref<HTMLElement | null>(null);

onClickOutside(modalRef, (): void => emit('close'));
</script>
