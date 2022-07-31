<template>
  <div class="p-2 pb-10 rounded-t-md bg-white shadow-md overflow-y-auto">
    <div class="text-primary font-bold font-secondary text-3xl text-center">
      {{ $t(`common.${isAttacker ? 'attacker' : 'opponent'}`) }}
    </div>
    <div class="flex justify-between">
      <p class="font-semibold">{{ character.name }}</p>
      <p>PV : {{ character.currentHp }}/{{ character.maxHp }}</p>
    </div>

    <div class="mt-4">
      <p class="font-semibold">Stats</p>

      <ul
        class="border border-gray-200 rounded-md flex max-w-fit"
        v-if="character.features?.stats"
      >
        <li
          v-for="(value, name, index) in character.features.stats"
          :key="name"
          class="py-1 px-2 cursor-pointer"
          :class="{
            'border-l border-gray-200': index !== 0,
            'bg-secondary': selectedStat?.name === name,
          }"
          @click="handleSelectStat({ name, value })"
        >
          <p class="uppercase font-semibold">{{ name }}</p>
          <p>{{ value }}</p>
        </li>
      </ul>

      <ul
        class="border border-gray-200 rounded-md max-w-fit mt-3"
        v-if="character.features?.features"
      >
        <li
          v-for="({ key: name, value }, index) in sortedFeatures"
          :key="name"
          class="flex justify-between cursor-pointer"
          :class="{
            'border-t border-gray-200': index !== 0,
            'bg-secondary': selectedStat?.name === name,
          }"
          @click="handleSelectStat({ name, value })"
        >
          <p class="py-1 px-2 font-semibold">
            {{ $t(`features.${name}`) }}
          </p>
          <p class="py-1 px-2 border-l border-gray-200">{{ value }}</p>
        </li>
      </ul>
    </div>

    <div class="mt-4">
      <p class="font-semibold">Équipement</p>
      <p class="whitespace-pre-wrap">{{ character.equipment }}</p>
    </div>

    <div class="mt-4">
      <p class="font-semibold">Inventaire</p>
      <p class="whitespace-pre-wrap">{{ character.inventory }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import ICharacter from '@/types/Character.interface';
import IStat from '@/types/Stat.interface';

const props = defineProps<{
  character: ICharacter;
  selectedStat: IStat | null;
  isAttacker?: boolean;
}>();

const emit = defineEmits<{
  (e: 'select-stat', stat: IStat): void;
}>();

const { t } = useI18n();

const sortedFeatures = computed(() =>
  Object.keys(props.character.features.features)
    .sort((a, b) => t(`features.${a}`).localeCompare(t(`features.${b}`)))
    .map(key => ({
      key,
      value: props.character.features.features[key],
    }))
);

const handleSelectStat = (stat: IStat): void => {
  emit('select-stat', stat);
};
</script>
