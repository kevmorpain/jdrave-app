<template>
  <header class="flex justify-between align-middle mb-8">
    <h1 class="page-title" v-html="title" />
    <BaseButton class="warning" @click="deleteCharacter">Supprimer</BaseButton>
  </header>

  <p v-if="loading">Character is loading</p>

  <div
    v-else
    class="md:border rounded-xl md:p-6 grid md:grid-cols-3 gap-y-6 md:gap-6"
  >
    <div class="text-center">
      <img class="rounded w-96 h-96 object-cover mb-6" :src="picture" />

      <BaseButton class="primary" @click="triggerFileInputFocus">
        Changer la photo
      </BaseButton>
      <input
        ref="pictureInputRef"
        class="hidden"
        type="file"
        @change="handlePictureUpload"
      />
    </div>

    <div class="md:col-span-2 grid grid-cols-2 gap-6 place-content-start">
      <BaseInput label="Nom" v-model="name" />
      <BaseInput
        class="row-start-2"
        label="PV actuel"
        v-model="currentHp"
        :max="maxHp"
        type="number"
      />
      <BaseInput
        class="row-start-2"
        label="PV max"
        v-model="maxHp"
        type="number"
      />

      <BaseTextarea class="col-span-full" label="Features" v-model="features" />

      <div class="col-span-full">
        <ul class="flex items-center gap-x-6">
          <li
            v-for="filter in itemFilters"
            :key="filter"
            class="text-lg decoration-secondary decoration-2 mb-2 cursor-pointer"
            :class="{ 'underline font-semibold': filter === selectedFilter }"
            @click="selectedFilter = filter"
          >
            {{ $t(`item_kind.${filter}`) }}
          </li>
        </ul>

        <ul>
          <li
            v-for="(item, index) in filteredItems"
            :key="`${item.kind}-${index}`"
            class="mb-4 border rounded p-4"
          >
            <div class="flex justify-between items-center mb-2">
              <p>
                <span class="font-semibold">{{ item.name }}</span>
                <span class="italic">- {{ $t(`item_kind.${item.kind}`) }}</span>
              </p>
              <span class="p-1 cursor-pointer" @click="removeEquipment(index)">
                <TrashIcon class="w-4 h-4" />
              </span>
            </div>

            <div class="flex gap-x-4">
              <BaseInput label="Bonus" v-model="item.bonus" type="number" />
              <BaseInput
                label="Quantité"
                v-model="item.quantity"
                type="number"
              />
              <BaseInput label="Statut" v-model="item.status" />
              <BaseInput label="Effet" v-model="item.effect" />
              <BaseCheckbox label="Équipé" v-model="item.is_equipped" />
            </div>
          </li>
          <li>
            <BaseButton
              class="tertiary small"
              @click="isEquipmentModalVisible = true"
            >
              <PlusIcon class="mr-1 w-4 h-4" /> Ajouter un objet
            </BaseButton>
          </li>
        </ul>

        <BaseModal
          :is-visible="isEquipmentModalVisible"
          @validate="addEquipment"
          @close="closeEquipmentModal"
        >
          <template #modal-header>
            Ajouter un équipement
          </template>

          <ul class="flex justify-center items-center gap-x-2 mb-6">
            <li
              v-for="kind in equipmentKind"
              :key="kind"
              class="py-2 px-4 border rounded cursor-pointer transition-colors hover:bg-primary/10"
              :class="{ 'font-semibold': selectedEquipmentKind === kind }"
              @click="selectedEquipmentKind = kind"
            >
              {{ $t(`item_kind.${kind}`) }}
            </li>
          </ul>

          <ul class="grid grid-cols-2 gap-4">
            <li
              v-for="object in objectList"
              :key="object.id"
              class="border rounded py-2 px-4 cursor-pointer transition-colors"
              :class="{
                'border-primary bg-primary/10 hover:bg-primary/20':
                  object.id === selectedEquipment?.id,
                'hover:bg-secondary/10': object.id !== selectedEquipment?.id,
              }"
              @click="
                selectedEquipment =
                  object.id === selectedEquipment?.id ? null : object
              "
            >
              <p>{{ object.name }}</p>
              <p class="italic">{{ object.description }}</p>
            </li>
          </ul>
        </BaseModal>
      </div>

      <div>{{ character?.equipment }}</div>

      <div>
        <BaseButton
          class="primary"
          @click="handleUpdateCharacter"
          :is-loading="isUpdating"
        >
          Valider
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlusIcon, TrashIcon } from '@heroicons/vue/solid';

import { computed, ref, watchEffect } from 'vue';
import { useMutation, useQuery } from '@vue/apollo-composable';
import { useRouter } from 'vue-router';
import { useFormattedTitle } from '@/utils/title';
import { uploadImage } from '@/plugins/cloudinary';

import CharacterQuery from '@/services/characters/Character.query.gql';
import CharacterMutation from '@/services/characters/Character.mutation.gql';
import CharacterPictureMutation from '@/services/characters/CharacterPicture.mutation.gql';
import DeleteCharacter from '@/services/characters/DeleteCharacter.mutation.gql';
import DeleteCharacterObjectMutation from '@/services/characters/DeleteCharacterObject.mutation.gql';
import InsertCharacterObjectsMutation from '@/services/characters/InsertCharacterObject.mutation.gql';

import ICharacter from '@/types/Character.interface';
import ICharacterObject from '@/types/CharacterObject.interface';
import ICharacterQuery from '@/types/services/characters/CharacterQuery.interface';
import { EObjectKind } from '@/types/ObjectKind.enum';
import IObject from '@/types/Object.interface';

const props = defineProps<{
  characterId: string;
}>();

const name = ref<string>('');
const features = ref<string>('');
const maxHp = ref<number>(0);
const currentHp = ref<number>(0);
const picture = ref<string>('');
const pictureInputRef = ref<InstanceType<typeof HTMLInputElement> | null>(null);
const equipments = ref<ICharacterObject[]>([]);

const { result, loading } = useQuery<ICharacterQuery>(CharacterQuery, () => ({
  characterId: props.characterId,
}));

const character = computed<ICharacter | null>(
  () => result.value?.character ?? null
);

let title = computed(() => '');

watchEffect(() => {
  if (character.value) {
    name.value = character.value.name || '';
    features.value = JSON.stringify(character.value.features);
    maxHp.value = character.value.maxHp;
    currentHp.value = character.value.currentHp;
    picture.value = character.value.picture;
    if (character.value.items) {
      equipments.value = structuredClone(character.value.items);
    }
  }

  title = useFormattedTitle(name);
});

const {
  mutate: updateCharacter,
  loading: isUpdating,
  onDone: onUpdateDone,
} = useMutation(CharacterMutation, () => ({
  variables: {
    characterId: props.characterId,
    name: name.value,
    features: JSON.parse(features.value),
    currentHp: currentHp.value,
    maxHp: maxHp.value,
  },
}));

onUpdateDone(() => {
  console.log('Done!');
});

const { mutate: deleteCharacter, onDone: onDeleteDone } = useMutation(
  DeleteCharacter,
  () => ({
    variables: {
      characterId: props.characterId,
    },
  })
);

const router = useRouter();

onDeleteDone(({ data }): void => {
  router.replace({
    name: 'game',
    params: {
      gameId: data.deleteCharacter.gameId,
    },
  });
});

const { mutate: updateCharacterPicture } = useMutation(
  CharacterPictureMutation
);

const handlePictureUpload = async (event: Event): Promise<void> => {
  const file = (event.target as HTMLInputElement).files?.[0];

  if (file) {
    const { url } = await uploadImage(file);

    await updateCharacterPicture({
      characterId: props.characterId,
      pictureUrl: url,
    });
  }
};

const triggerFileInputFocus = (): void => {
  pictureInputRef.value?.click();
};

const itemFilters = [EObjectKind.Weapon, EObjectKind.Armor, 'other'];
const selectedFilter = ref<string>(EObjectKind.Weapon);
const filteredItems = computed(() =>
  equipments.value.filter(item => {
    if (selectedFilter.value === 'other') {
      return (
        item.kind !== EObjectKind.Weapon && item.kind !== EObjectKind.Armor
      );
    } else {
      return item.kind === selectedFilter.value;
    }
  })
);

const isEquipmentModalVisible = ref<boolean>(false);
const selectedEquipment = ref<IObject | null>(null);
type EEquipmentKind = EObjectKind.Weapon | EObjectKind.Armor;
const equipmentKind = [EObjectKind.Weapon, EObjectKind.Armor];
const selectedEquipmentKind = ref<EEquipmentKind>(EObjectKind.Weapon);
const objectList = computed<IObject[]>(
  () =>
    result.value?.objects.filter(
      object => object.kind === selectedEquipmentKind.value
    ) ?? []
);

const closeEquipmentModal = (): void => {
  isEquipmentModalVisible.value = false;
  selectedEquipment.value = null;
};

const addEquipment = (): void => {
  if (selectedEquipment.value) {
    equipments.value.push({
      character_id: props.characterId,
      object_id: selectedEquipment.value.id,
      name: selectedEquipment.value.name,
      bonus: 0,
      effect: null,
      is_equipped: false,
      quantity: 1,
      status: null,
      kind: selectedEquipment.value.kind,
    });
  }

  closeEquipmentModal();
};

const { mutate: insertCharacterObjects } = useMutation<
  ICharacterObject[],
  { objects: Omit<ICharacterObject, 'name' | 'kind'>[] }
>(InsertCharacterObjectsMutation);

const { mutate: deleteCharacterObject } = useMutation<
  { id: string },
  { characterId: string; objectId: string; id: string }
>(DeleteCharacterObjectMutation);

const removeEquipment = (index: number): void => {
  if (character.value?.items) {
    const equipment = equipments.value[index];
    const alreadyItemIndex = character.value?.items.findIndex(
      item => item.id === equipment.id
    );

    if (alreadyItemIndex >= 0) {
      const item = character.value?.items[alreadyItemIndex];

      deleteCharacterObject({
        characterId: item.character_id,
        objectId: item.object_id,
        id: item.id as string,
      });
      equipments.value.splice(index, 1);
    } else if (index >= 0) {
      equipments.value.splice(index, 1);
    }
  }
};

const handleUpdateCharacter = async (): Promise<void> => {
  try {
    await updateCharacter();
    await insertCharacterObjects({
      objects: equipments.value.map(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ({ name, kind, __typename, ...equipment }) => equipment
      ),
    });
  } catch (e) {
    console.error(e);
  }
};
</script>
