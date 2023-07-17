<template>
  <div v-if="loading">Chargement...</div>

  <AppCard v-if="object">
    <div class="flex gap-4 flex-wrap">
      <div
        class="flex-none max-w-[300px] w-full flex flex-col gap-2 items-center"
      >
        <img
          :src="object.picture_url"
          class="h-[300px] w-full rounded-lg bg-zinc-300 object-cover object-center"
        />

        <BaseButton class="secondary" @click="triggerFileInputFocus">
          Changer l'image
        </BaseButton>

        <input
          ref="pictureInputRef"
          class="hidden"
          type="file"
          @change="handlePictureUpload"
        />
      </div>

      <div class="flex-1 flex flex-col gap-4">
        <div class="flex gap-4 flex-wrap">
          <BaseInput class="flex-1" label="Nom" v-model="object.name" />

          <BaseSelect
            class="flex-1"
            :label="$t('app.create_modal.steps.object.fields.kind')"
            :options="kindOptions"
            v-model="object.kind"
          />

          <div class="flex-1">
            <p>Campagne</p>
            <BaseBadge
              v-for="{ game } in object.games"
              :key="game.id"
              class="primary"
            >
              {{ game.title }}
            </BaseBadge>
          </div>
        </div>

        <BaseTextarea label="Description" v-model="object.description" />
      </div>
    </div>

    <div class="mt-4 flex justify-end">
      <BaseButton
        class="primary"
        :is-loading="updateLoading"
        @click="handleUpdateObject"
      >
        Enregistrer les modifications
      </BaseButton>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import AppCard from '@/components/app/AppCard.vue';

import { ref } from 'vue';
import { useCloudinary } from '@/plugins/cloudinary';
import { useI18n } from 'vue-i18n';
import { useMutation, useQuery } from '@vue/apollo-composable';
import UpdateObjectMutation from '@/services/objects/UpdateObject.mutation.gql';
import ObjectQuery from '@/services/app/Object.query.gql';

import IObject from '@/types/Object.interface';
import IObjectQuery from '@/types/services/app/ObjectQuery.interface';
import { ECloudinaryFolder } from '@/plugins/cloudinary';

const props = defineProps<{
  objectId: string;
}>();

const { tm } = useI18n();

const { onResult, loading } = useQuery<IObjectQuery>(ObjectQuery, () => ({
  objectId: props.objectId,
}));

const object = ref<IObject | undefined>(undefined);
onResult((result) => {
  if (result.data?.object) {
    object.value = structuredClone(result.data.object);
  }
});

const kindOptions: Record<string, string> = tm('common.object_kinds');

const { uploadImage } = useCloudinary();
const pictureInputRef = ref<InstanceType<typeof HTMLInputElement> | null>(null);
const triggerFileInputFocus = (): void => {
  pictureInputRef.value?.click();
};

const handlePictureUpload = async (event: Event): Promise<void> => {
  const file = (event.target as HTMLInputElement).files?.[0];

  if (file && object.value) {
    const { url } = await uploadImage(file, ECloudinaryFolder.Objects);

    object.value.picture_url = url;
  }
};

const handleUpdateObject = (): void => {
  updateObject();
};

const { mutate: updateObject, loading: updateLoading } = useMutation(
  UpdateObjectMutation,
  () => {
    if (object.value) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, __typename, games, ...objectData } = object.value;

      return {
        variables: {
          id,
          object: objectData,
        },
      };
    }

    return {};
  }
);
</script>
