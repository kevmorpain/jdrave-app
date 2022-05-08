<template>
  <header class="flex justify-between align-middle mb-8">
    <h1 class="page-title" v-html="title" />
    <BaseButton class="warning" @click="deleteCharacter">Supprimer</BaseButton>
  </header>

  <p v-if="loading">Character is loading</p>

  <div v-else class="border rounded-xl p-6 grid grid-cols-3 gap-6">
    <div class="col-span-2 grid grid-cols-2 gap-x-6 place-content-start">
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

      <div>
        <BaseButton
          class="primary"
          @click="updateCharacter"
          :is-loading="isUpdating"
        >
          Valider
        </BaseButton>
      </div>
    </div>

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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue';
import { useMutation, useQuery, useResult } from '@vue/apollo-composable';
import CharacterQuery from '@/services/characters/Character.query.gql';
import CharacterMutation from '@/services/characters/Character.mutation.gql';
import CharacterPictureMutation from '@/services/characters/CharacterPicture.mutation.gql';
import DeleteCharacter from '@/services/characters/DeleteCharacter.mutation.gql';
import { useRouter } from 'vue-router';
import { useFormattedTitle } from '@/utils/title';
import ICharacterQuery from '@/types/services/characters/CharacterQuery.interface';
import { uploadImage } from '@/plugins/cloudinary';

export default defineComponent({
  name: 'CharacterPage',
  props: {
    characterId: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const name = ref<string>('');
    const features = ref<string>('');
    const maxHp = ref<number>(0);
    const currentHp = ref<number>(0);
    const picture = ref<string>('');
    const pictureInputRef = ref<InstanceType<typeof HTMLInputElement> | null>(
      null
    );

    const { result, loading } = useQuery<ICharacterQuery>(
      CharacterQuery,
      () => ({
        characterId: props.characterId,
      })
    );

    const character = useResult(result, null, data => data.character);

    let title = computed(() => '');

    watchEffect(() => {
      if (character.value) {
        name.value = character.value.name || '';
        features.value = JSON.stringify(character.value.features);
        maxHp.value = character.value.maxHp;
        currentHp.value = character.value.currentHp;
        picture.value = character.value.picture;
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

    return {
      loading,
      character,
      name,
      features,
      currentHp,
      maxHp,
      updateCharacter,
      deleteCharacter,
      title,
      isUpdating,
      picture,
      handlePictureUpload,
      triggerFileInputFocus,
      pictureInputRef,
    };
  },
});
</script>
