<template>
  <div
    class="border border-gray-200 rounded-lg bg-white p-4 flex flex-col gap-y-4"
    :class="{
      'hover:bg-gray-50 transition-colors cursor-pointer': isClickable,
    }"
  >
    <p class="font-semibold">{{ draftEntity.title }}</p>

    <div v-if="draftEntity.picture_url">
      <img
        class="w-full h-[150px] rounded-lg object-center object-cover"
        :src="draftEntity.picture_url"
      />
    </div>

    <p class="text-sm text-dark-light line-clamp-3">
      {{ draftEntity.description }}
    </p>

    <ul class="mt-auto flex flex-wrap gap-2">
      <li>
        <BaseBadge class="secondary">
          {{ $t(`entities.${draftEntity.entity}`) }}
        </BaseBadge>
      </li>
      <li v-if="draftEntity.kind">
        <BaseBadge class="secondary">
          {{ $t(`item_kind.${draftEntity.kind}`) }}
        </BaseBadge>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import IDraftEntity from '@/types/DraftEntity.interface';

defineProps<{
  draftEntity: IDraftEntity;
  isClickable?: boolean;
}>();
</script>
