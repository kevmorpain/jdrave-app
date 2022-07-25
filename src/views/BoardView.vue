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
          :character="selectedCharacters[0].character"
          :selected-stat="selectedCharacters[0].stat"
          class="character-item"
          @select-stat="stat => handleSelectStat(stat, 0)"
        />

        <div
          v-if="selectedCharacters.length > 0"
          class="self-center bg-primary text-white relative px-4 py-6 rounded-md"
        >
          <div
            v-if="selectedCharacters.length > 1"
            class="absolute -top-4 left-1/2 -translate-x-1/2 z-1"
          >
            <BaseButton
              class="tertiary icon shadow-lg"
              @click="switchSelectedCharacters"
            >
              <SwitchHorizontalIcon class="w-6 h-6" />
            </BaseButton>
          </div>

          <div class="relative" ref="testKindSelectorRef">
            <p
              class="flex items-center gap-x-1 cursor-pointer"
              @click="isTestKindSelectorVisible = !isTestKindSelectorVisible"
            >
              {{ $t(`test_kind.${testKind}`) }}
              <ChevronDownIcon class="w-4 h-4" />
            </p>

            <ul
              v-show="isTestKindSelectorVisible"
              class="absolute bg-white top-full left-1/2 -translate-x-1/2 mt-2 z-2 shadow-lg rounded overflow-hidden min-w-[170px] text-dark"
            >
              <li
                v-for="kind in testKindOptions"
                :key="kind"
                class="p-2 hover:bg-tertiary cursor-pointer"
                @click="changeTestKind(kind)"
              >
                {{ $t(`test_kind.${kind}`) }}
              </li>
            </ul>
          </div>

          <div class="grid grid-cols-2 gap-x-2 mt-4">
            <div
              v-for="({ stat }, index) in selectedCharacters"
              :key="index"
              class="flex gap-x-1"
            >
              <template v-if="stat">
                <span class="font-semibold">
                  {{ $t(`features.${stat.name}`) }}
                </span>
                <span>{{ stat.value }}</span>
              </template>
            </div>

            <div v-for="({ stat }, index) in selectedCharacters" :key="index">
              <template v-if="stat">
                <BaseInput
                  v-model="selectedCharacters[index].dieResult"
                  type="number"
                  @right-label-click="randomizeResult(index)"
                >
                  <template #right-label>
                    <D100 class="w-7 h-7" result="100" />
                  </template>
                </BaseInput>
              </template>
            </div>
          </div>

          <div class="text-center mt-4">
            <BaseButton @click="handleTest">Test</BaseButton>
          </div>

          <div v-if="testResult" class="mt-4">
            <ul>
              <li>
                {{ testResult.isSuccessful ? $t('success') : $t('fail') }}
                {{ testResult.isCritical ? $t('critical') : '' }}
              </li>
              <li v-if="testResult.DR">
                Degré de réussite : {{ testResult.DR }}
              </li>
              <li v-if="testResult.damages">
                Dommages causés : {{ testResult.damages }}
              </li>
              <li v-if="testResult.lostHp">
                PV perdus : {{ testResult.lostHp }}
              </li>
            </ul>
          </div>
        </div>

        <CharacterCard
          v-if="selectedCharacters[1]"
          :key="selectedCharacters[1].character.id"
          :character="selectedCharacters[1].character"
          :selected-stat="selectedCharacters[1].stat"
          class="character-item"
          @select-stat="stat => handleSelectStat(stat, 1)"
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
import CharacterSummaryCard from '@/components/board/CharacterSummaryCard.vue';
import D100 from '@/components/dices/D100.vue';
import { ChevronDownIcon } from '@heroicons/vue/solid';
import { SwitchHorizontalIcon } from '@heroicons/vue/outline';

import { computed, ref, watchEffect } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { useMagicKeys, onClickOutside } from '@vueuse/core';
import GameBoardQuery from '@/services/games/GameBoard.query.gql';

import ICharacter from '@/types/Character.interface';
import IGame from '@/types/Game';
import IGameBoardQueryResponse from '@/types/services/games/GameBoardQuery.interface';
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

interface ISelectedCharacter {
  character: ICharacter;
  stat: IStat | null;
  dieResult: number | null;
}
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

enum ETestKind {
  Simple = 'simple',
  Dramatic = 'dramatic',
  Opposed = 'opposed',
  OpposedMelee = 'opposed_melee',
}

const testKind = ref<ETestKind>(ETestKind.Simple);
const testKindOptions = computed<ETestKind[]>(() =>
  Object.values(ETestKind).filter(kind => kind !== testKind.value)
);
const isTestKindSelectorVisible = ref<boolean>(false);
const changeTestKind = (kind: ETestKind) => {
  testKind.value = kind;
  isTestKindSelectorVisible.value = false;
};

const testKindSelectorRef = ref<HTMLElement | null>(null);
onClickOutside(
  testKindSelectorRef,
  () => (isTestKindSelectorVisible.value = false)
);

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

interface IResult {
  isCritical: boolean;
  isNegative: boolean;
  SR: number;
  diff: number;
}

const getResult = (index: number, stat: IStat): IResult => {
  // 100 = critical hit
  // any double digit = critical hit
  const dieResult = selectedCharacters.value[index].dieResult;

  if (dieResult) {
    const splitResult = String(dieResult).split('');
    const isCritical =
      dieResult >= 11 &&
      (dieResult === 100 || splitResult[0] === splitResult[1]);

    const isNegative = stat.value - dieResult < 0;

    const diff = Math.floor(stat.value / 10) - Math.floor(dieResult / 10);

    const SR = isNegative && diff === 0 ? -0 : diff;

    return {
      SR,
      isCritical,
      isNegative,
      diff,
    };
  } else {
    throw 'missing dice result';
  }
};

interface ITestResult {
  isCritical: boolean;
  isSuccessful: boolean;
  DR?: number;
  damages?: number;
  lostHp?: number;
}

const handleSimpleTest = (): ITestResult => {
  // Only the first selected character
  const stat = selectedCharacters.value[0].stat;

  if (stat) {
    const { isCritical } = getResult(0, stat);

    const isSuccessful =
      !!selectedCharacters.value[0].dieResult &&
      selectedCharacters.value[0].dieResult <= stat.value;

    return {
      isCritical,
      isSuccessful,
    };
  } else {
    throw 'missing selected stat';
  }
};

const handleDramaticTest = (): ITestResult => {
  // Only the first selected character
  const stat = selectedCharacters.value[0].stat;

  if (stat) {
    const { isCritical, SR } = getResult(0, stat);

    const isSuccessful =
      !!selectedCharacters.value[0].dieResult &&
      selectedCharacters.value[0].dieResult <= stat.value;

    return {
      isCritical,
      isSuccessful,
      DR: SR,
    };
  } else {
    throw 'missing selected stat';
  }
};

const handleOpposedTest = (): ITestResult => {
  const charactersScore = selectedCharacters.value.map(({ stat }, index) => {
    if (stat) {
      const { SR, isCritical } = getResult(index, stat);

      return {
        SR,
        isCritical,
      };
    } else {
      throw 'missing selected stat for both character';
    }
  });

  const isSuccessful = charactersScore[0].SR > charactersScore[1].SR;
  const DR = Math.abs(charactersScore[0].SR - charactersScore[1].SR);

  return {
    isCritical: charactersScore[0].isCritical,
    isSuccessful,
    DR,
  };
};

const handleOpposedMeleeTest = (): ITestResult => {
  const charactersScore = selectedCharacters.value.map(({ stat }, index) => {
    if (stat) {
      const { SR, isCritical } = getResult(index, stat);

      return {
        SR,
        isCritical,
      };
    } else {
      throw 'missing selected stat for both character';
    }
  });

  const isSuccessful = charactersScore[0].SR > charactersScore[1].SR;
  const DR = Math.abs(charactersScore[0].SR - charactersScore[1].SR);

  let damages = 0;
  let lostHp = 0;
  if (isSuccessful) {
    // reussite
    const baseF = Math.floor(
      Number(
        Object.entries(
          selectedCharacters.value[0].character.features.stats
        ).find(([key]) => key === 'f')?.[1] ?? 0
      ) / 10
    );
    damages = DR + baseF;

    const baseE = Math.floor(
      Number(
        Object.entries(
          selectedCharacters.value[1].character.features.stats
        ).find(([key]) => key === 'e')?.[1] ?? 0
      ) / 10
    );
    lostHp = damages - baseE;
    if (lostHp < 1) lostHp = 1;
  }

  return {
    DR,
    isCritical: charactersScore[0].isCritical,
    isSuccessful,
    damages,
    lostHp,
  };
};

const testResult = ref<ITestResult | undefined>();
const handleTest = (): void => {
  try {
    let result: ITestResult;

    switch (testKind.value) {
      case ETestKind.Simple:
        result = handleSimpleTest();
        break;
      case ETestKind.Dramatic:
        result = handleDramaticTest();
        break;
      case ETestKind.Opposed:
        result = handleOpposedTest();
        break;
      case ETestKind.OpposedMelee:
        result = handleOpposedMeleeTest();
        break;
    }

    testResult.value = result;
  } catch (e) {
    console.error(e);
  }
};

const randomizeResult = (index: number): void => {
  selectedCharacters.value[index].dieResult = Math.floor(
    Math.random() * 100 + 1
  );
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
