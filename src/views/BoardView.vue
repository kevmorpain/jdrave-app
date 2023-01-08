<template>
  <p v-if="loading">Characters are loading</p>

  <template v-else-if="game">
    <div class="grid--board grid p-2 pb-0 gap-x-2 flex-1">
      <div class="sidebar__players">
        <ul>
          <li
            v-for="character in pcList"
            :key="character.id"
            class="mb-2"
            @click="handleCharacterSelection(character)"
          >
            <CharacterSummaryCard
              :character="character"
              :is-selected="isCharacterSelected(character.id)"
            />
          </li>
        </ul>
      </div>

      <div class="grid grid-cols-3 gap-x-2">
        <CharacterCard
          v-if="selectedCharacters[0]"
          :key="selectedCharacters[0].character.id"
          class="character-item"
          :character="selectedCharacters[0].character"
          :selected-stat="selectedCharacters[0].stat"
          is-attacker
          @select-stat="(stat) => handleSelectStat(stat, 0)"
        />

        <TestCard
          v-if="selectedCharacters.length > 0"
          class="self-center"
          :characters="selectedCharacters"
          @characters-switch="switchSelectedCharacters"
        />

        <CharacterCard
          v-if="selectedCharacters[1]"
          :key="selectedCharacters[1].character.id"
          class="character-item"
          :character="selectedCharacters[1].character"
          :selected-stat="selectedCharacters[1].stat"
          @select-stat="(stat) => handleSelectStat(stat, 1)"
        />
      </div>

      <div class="sidebar__npcs">
        <ul>
          <li
            v-for="character in npcList"
            :key="character.id"
            class="mb-2"
            @click="handleCharacterSelection(character)"
          >
            <CharacterSummaryCard
              :character="character"
              :is-selected="isCharacterSelected(character.id)"
            />
          </li>
        </ul>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import CharacterCard from '@/components/board/CharacterCard.vue';
import TestCard, { ISelectedCharacter } from '@/components/board/TestCard.vue';
import IGameBoardQueryResponse from '@/types/services/games/GameBoardQuery.interface';
import CharacterSummaryCard from '@/components/board/CharacterSummaryCard.vue';

import { computed, ref, watchEffect } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { useMagicKeys } from '@vueuse/core';
import GameBoardQuery from '@/services/games/GameBoard.query.gql';

import ICharacter from '@/types/Character.interface';
import IGame from '@/types/Game';
import IStat from '@/types/Stat.interface';

const props = defineProps<{
  gameId: string;
}>();

const { result, loading } = useQuery<IGameBoardQueryResponse>(
  GameBoardQuery,
  () => ({
    gameId: props.gameId,
  })
);

const characters = computed<ICharacter[]>(() => result.value?.characters ?? []);
const game = computed<IGame | undefined>(() => result.value?.game);

const pcList = computed<ICharacter[]>(() =>
  characters.value.filter(({ isNpc }) => !isNpc)
);
const npcList = computed<ICharacter[]>(() =>
  characters.value.filter(({ isNpc }) => isNpc)
);

const selectedCharacters = ref<ISelectedCharacter[]>([]);

const handleCharacterSelection = (character: ICharacter): void => {
  const alreadySelectedCharacterIndex = selectedCharacters.value.findIndex(
    ({ character: { id } }) => character.id === id
  );

  if (alreadySelectedCharacterIndex >= 0) {
    selectedCharacters.value.splice(alreadySelectedCharacterIndex, 1);
  } else {
    selectedCharacters.value.push({
      character,
      stat: null,
      dieResult: null,
    });
  }
};

const isCharacterSelected = (characterId: string): boolean =>
  selectedCharacters.value.some(({ character: { id } }) => id === characterId);

const { shift, ctrl, z } = useMagicKeys();
watchEffect(() => {
  // Empty selection
  if (shift.value && ctrl.value && z.value) {
    selectedCharacters.value = [];
  }
});

const switchSelectedCharacters = (): void => {
  selectedCharacters.value.reverse();
};

const handleSelectStat = (stat: IStat, index: number): void => {
  const selectedStat = selectedCharacters.value[index].stat;

  if (selectedStat) {
    const isSelected =
      selectedStat.name === stat.name && selectedStat.value === stat.value;

    if (isSelected) {
      selectedCharacters.value[index].stat = null;
      selectedCharacters.value[index].dieResult = null;
    } else {
      selectedCharacters.value[index].stat = stat;
      selectedCharacters.value[index].dieResult = 0;
    }
  } else {
    selectedCharacters.value[index].stat = stat;
    selectedCharacters.value[index].dieResult = 0;
  }
};
</script>

<style lang="scss" scoped>
.grid--board {
  grid-template-columns: 240px 1fr 240px;
}

.character-item {
  max-height: calc(100vh - 0.5rem);
}
</style>
