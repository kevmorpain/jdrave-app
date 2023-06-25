<template>
  <ul class="flex items-center gap-x-4">
    <li v-for="entity in entities" :key="entity.value" class="flex-1">
      <div
        class="flex flex-col items-center gap-y-6 px-4 py-5 rounded-lg border border-gray-200 text-primary hover:bg-gray-50 transition-colors cursor-pointer"
        :class="{
          'border-primary bg-primary-light font-semibold':
            selectedEntity === entity.value,
        }"
        @click="$emit('entity-select', entity.value)"
      >
        <Component :is="entity.icon" class="w-8 h-8" />

        <p>{{ entity.name }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { BeakerIcon, BookOpenIcon, UserIcon } from '@heroicons/vue/20/solid';

import { useI18n } from 'vue-i18n';

import { EEntity } from '@/types/Entity.enum';

defineProps<{
  selectedEntity: EEntity | null;
}>();

defineEmits<{
  (e: 'entity-select', entity: EEntity): void;
}>();

const { t } = useI18n();

const entities = [
  {
    value: EEntity.Game,
    name: t('app.create_modal.entities.game'),
    icon: BookOpenIcon,
  },
  {
    value: EEntity.Character,
    name: t('app.create_modal.entities.character'),
    icon: UserIcon,
  },
  {
    value: EEntity.Object,
    name: t('app.create_modal.entities.object'),
    icon: BeakerIcon,
  },
];
</script>
