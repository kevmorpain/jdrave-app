<template>
  <div
    class="p-2 rounded-md transition-all cursor-pointer shadow-md flex gap-x-2"
    :class="{
      'bg-white hover:bg-gray-100': !isSelected,
      'bg-primary text-white hover:bg-primary-hover': isSelected,
    }"
  >
    <img
      :src="character.picture"
      class="w-20 h-20 object-center object-cover flex-none rounded"
    />

    <div class="flex-1 flex flex-col justify-between">
      <p class="font-semibold">{{ character.name }}</p>
      <p>PV : {{ character.currentHp }}/{{ character.maxHp }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ICharacter from '@/types/Character.interface';

defineProps<{
  character: ICharacter;
  isSelected?: boolean;
}>();
</script>
