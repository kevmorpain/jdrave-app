<template>
  <Teleport to="body">
    <aside
      v-if="isVisible"
      class="fixed inset-0 bg-primary/75 flex justify-center items-center"
    >
      <div ref="modalRef" class="flex-1 bg-white max-w-4xl rounded-xl">
        <h1 class="text-xl font-semibold text-center p-4">
          <slot name="modal-header" />
        </h1>

        <div class="px-8">
          <slot />
        </div>

        <div class="flex justify-between items-center p-4">
          <BaseButton @click="$emit('close')">
            {{ closeText }}
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
    closeText?: string;
    validateText?: string;
  }>(),
  {
    closeText: 'Fermer',
    validateText: 'Valider',
  }
);

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'validate'): void;
}>();

const modalRef = ref<HTMLElement | null>(null);

onClickOutside(modalRef, (): void => emit('close'));
</script>
