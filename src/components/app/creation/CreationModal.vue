<template>
  <BaseModal
    :is-visible="isVisible"
    modal-class="pt-8"
    :validate-text="$t('app.create_modal.validate_action')"
    :hide-actions="currentStep !== 0"
    :hide-cancel="currentStep === 0"
    @close="handleClose"
    @validate="handleNextStep"
  >
    <h1 class="text-center text-xl font-semibold mb-10">
      {{ steps[currentStep].title }}
    </h1>

    <Component
      :is="steps[currentStep].component"
      :selected-entity="selectedEntity"
      @cancel="handleCancel"
      @entity-select="handleEntitySelect"
      @entity-created="handleEntityCreated"
    />
  </BaseModal>
</template>

<script setup lang="ts">
import EntityChoiceStep from './EntityChoiceStep.vue';
import GameStep from './GameStep.vue';
import ObjectStep from './ObjectStep.vue';

import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import type { Component } from 'vue';
import { EEntity } from '@/types/Entity.enum';

const { t } = useI18n();

defineProps<{
  isVisible: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const selectedEntity = ref<EEntity | null>(null);

const currentStep = ref<number>(0);

const steps = computed<
  {
    title: string;
    component: Component;
  }[]
>(() => {
  const list = [
    {
      title: t('app.create_modal.title'),
      component: EntityChoiceStep,
    },
  ];

  if (selectedEntity.value === EEntity.Game) {
    list.push({
      title: t('app.create_modal.steps.game.title'),
      component: GameStep,
    });
  }

  if (selectedEntity.value === EEntity.Object) {
    list.push({
      title: t('app.create_modal.steps.object.title'),
      component: ObjectStep,
    });
  }

  return list;
});

const handleEntitySelect = (entity: EEntity): void => {
  selectedEntity.value = selectedEntity.value === entity ? null : entity;
};

const handleNextStep = (): void => {
  if (selectedEntity.value) {
    currentStep.value++;
  }
};

const handleClose = (): void => {
  currentStep.value = 0;
  selectedEntity.value = null;
  emit('close');
};

const handleCancel = (): void => {
  currentStep.value = 0;
};

const handleEntityCreated = (): void => {
  handleClose();

  // TODO: redirect to entity page
};
</script>
