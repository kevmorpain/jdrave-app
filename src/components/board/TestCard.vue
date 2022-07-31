<template>
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
        @click="$emit('characters-switch')"
      >
        <SwitchHorizontalIcon class="w-6 h-6" />
      </BaseButton>
    </div>

    <div class="relative" ref="testKindSelectorRef">
      <p
        class="inline-flex items-center gap-x-1 cursor-pointer"
        @click="isTestKindSelectorVisible = !isTestKindSelectorVisible"
      >
        {{ $t(`test_kind.${testKind}`) }}
        <ChevronDownIcon class="w-4 h-4" />
      </p>

      <ul
        v-show="isTestKindSelectorVisible"
        class="absolute bg-white top-full left-0 mt-2 z-2 shadow-lg rounded overflow-hidden min-w-[170px] text-dark"
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
        :class="[`col-start-${index + 1}`]"
      >
        <template v-if="stat">
          <span class="font-semibold">
            {{ $t(`features.${stat.name}`) }}
          </span>
          <span>{{ stat.value }}</span>
        </template>
      </div>

      <div
        v-for="({ stat }, index) in selectedCharacters"
        :key="index"
        :class="[`col-start-${index + 1}`]"
      >
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

          <div>
            <ul>
              <li
                v-for="(value, key) in modifiers[index]"
                :key="key"
                class="flex gap-x-1"
              >
                <label :for="`${key}-${index}`" class="flex-none">
                  {{ $t(`modifiers.${key}`) }} :
                </label>

                <input
                  :id="`${key}-${index}`"
                  class="bg-transparent w-5"
                  type="number"
                  v-model="modifiers[index][key]"
                />
              </li>
            </ul>
            <p>{{ modifiersTotal[index] }}</p>
          </div>
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
        <li v-if="typeof testResult.DR === 'number'">
          Degré de réussite : {{ testResult.DR }}
        </li>
        <li v-if="testResult.damages">
          Dommages causés : {{ testResult.damages }}
        </li>
        <li v-if="testResult.lostHp">PV perdus : {{ testResult.lostHp }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import D100 from '@/components/dices/D100.vue';
import { ChevronDownIcon } from '@heroicons/vue/solid';
import { SwitchHorizontalIcon } from '@heroicons/vue/outline';

import { computed, ref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useRandom } from '@/utils/random';

import ICharacter from '@/types/Character.interface';
import IStat from '@/types/Stat.interface';

export interface ISelectedCharacter {
  character: ICharacter;
  stat: IStat | null;
  dieResult: number | null;
}

const props = defineProps<{
  characters: ISelectedCharacter[];
}>();

watch(
  () => props.characters,
  () => (selectedCharacters.value = props.characters)
);

defineEmits<{
  (e: 'characters-switch'): void;
}>();

const selectedCharacters = ref<ISelectedCharacter[]>(props.characters);

interface IModifiers {
  difficulty: number;
  advantages: number;
  weapon: number;
  armor: number;
  // other: number; what for?
}

const modifiers = ref<IModifiers[]>([
  {
    difficulty: 0,
    advantages: 0,
    weapon: 0,
    armor: 0,
  },
  {
    difficulty: 0,
    advantages: 0,
    weapon: 0,
    armor: 0,
  },
]);

const modifiersTotal = computed<number[]>(() =>
  modifiers.value.map(modifier =>
    Object.values(modifier).reduce((sum, val) => (val ? sum + val : sum))
  )
);

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

    const difficulty = modifiers.value[index].difficulty;
    const advantages = modifiers.value[index].advantages;
    const diff =
      Math.floor(stat.value / 10) +
      difficulty +
      advantages -
      Math.floor(dieResult / 10);

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
  const index = 0;
  const stat = selectedCharacters.value[index].stat;
  const difficulty = modifiers.value[index].difficulty;

  if (stat) {
    const { isCritical } = getResult(index, stat);

    const isSuccessful =
      !!selectedCharacters.value[index].dieResult &&
      selectedCharacters.value[index].dieResult <= stat.value + difficulty * 10;

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
  const index = 0;
  const stat = selectedCharacters.value[index].stat;
  const difficulty = modifiers.value[index].difficulty;

  if (stat) {
    const { isCritical, SR } = getResult(index, stat);

    const isSuccessful =
      !!selectedCharacters.value[index].dieResult &&
      selectedCharacters.value[index].dieResult <= stat.value + difficulty * 10;

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
    const weapon = modifiers.value[0].weapon;
    damages = DR + baseF + weapon;

    const baseE = Math.floor(
      Number(
        Object.entries(
          selectedCharacters.value[1].character.features.stats
        ).find(([key]) => key === 'e')?.[1] ?? 0
      ) / 10
    );
    const armor = modifiers.value[1].armor;
    lostHp = damages - baseE - armor;
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

const random = useRandom();
const randomizeResult = (index: number): void => {
  selectedCharacters.value[index].dieResult = random.integer(1, 100);
};
</script>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
