<template>
  <div class="flex flex-col gap-y-4">
    <BaseInput
      :label="$t('app.create_modal.steps.object.fields.name')"
      v-model="newObject.name"
    />

    <BaseTextarea
      :label="$t('app.create_modal.steps.object.fields.description')"
      v-model="newObject.description"
    />

    <BaseSelect
      :label="$t('app.create_modal.steps.object.fields.kind')"
      :options="kindOptions"
      v-model="newObject.kind"
    />

    <BaseCheckbox
      :label="$t('app.create_modal.steps.object.fields.can_be_equipped')"
      v-model="newObject.can_be_equipped"
    />

    <BaseSelect
      :label="$t('app.create_modal.steps.object.fields.status')"
      :options="statusesOptions"
      v-model="newObject.status"
    />

    <div class="flex flex-col gap-y-2">
      <p>{{ $t('app.create_modal.steps.object.fields.picture_url') }}</p>

      <img
        v-if="newObject.picture_url"
        class="rounded-lg w-40 h-40 object-cover bg-gray-100"
        :src="newObject.picture_url"
      />
      <div
        v-else
        class="rounded-lg w-40 h-40 object-cover bg-gray-50 grid place-content-center"
      >
        <BeakerIcon class="w-32 h-32" />
      </div>

      <div>
        <BaseButton class="secondary" @click="triggerFileInputFocus">
          {{ $t('app.create_modal.steps.object.fields.picture_upload_action') }}
        </BaseButton>
      </div>

      <input
        ref="pictureInputRef"
        class="hidden"
        type="file"
        @change="handlePictureUpload"
      />
    </div>
  </div>

  <div class="flex justify-between items-center mt-6 -mx-8 px-4">
    <BaseButton @click="$emit('cancel')">
      {{ $t('app.create_modal.steps.object.actions.cancel') }}
    </BaseButton>

    <BaseButton
      class="primary"
      :is-loading="loading"
      @click="handleCreateClick"
    >
      {{ $t('app.create_modal.steps.object.actions.validate') }}
    </BaseButton>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { BeakerIcon } from '@heroicons/vue/20/solid';

import { ref } from 'vue';
import { useCloudinary } from '@/plugins/cloudinary';
import { useI18n } from 'vue-i18n';
import { useMutation } from '@vue/apollo-composable';
import CreateObjectMutation from '@/services/objects/CreateObject.mutation.gql';
import ObjectsQuery from '@/services/app/Objects.query.gql';

import IObject, { INewObject } from '@/types/Object.interface';
import IObjectsQuery from '@/types/services/app/ObjectsQuery.interface';
import { ECloudinaryFolder } from '@/plugins/cloudinary';
import { EObjectKind } from '@/types/ObjectKind.enum';
import { EStatus } from '@/types/Status.enum';

const emit = defineEmits<{
  (e: 'cancel'): void;
  (e: 'entity-created', id?: string): void;
}>();

const { tm } = useI18n();

const kindOptions: Record<string, string> = tm('common.object_kinds');
const statusesOptions: Record<string, string> = tm('common.statuses');

const newObject = ref<INewObject>({
  name: '',
  description: '',
  kind: EObjectKind.Usable,
  can_be_equipped: false,
  picture_url: null,
  status: EStatus.Draft,
});

const { uploadImage } = useCloudinary();
const pictureInputRef = ref<InstanceType<typeof HTMLInputElement> | null>(null);
const triggerFileInputFocus = (): void => {
  pictureInputRef.value?.click();
};

const handlePictureUpload = async (event: Event): Promise<void> => {
  const file = (event.target as HTMLInputElement).files?.[0];

  if (file) {
    const { url } = await uploadImage(file, ECloudinaryFolder.Objects);

    newObject.value.picture_url = url;
  }
};

const handleCreateClick = (): void => {
  createObject();
};

const {
  mutate: createObject,
  onDone: onCreationDone,
  loading,
} = useMutation<
  {
    insert_objects_one: IObject;
  },
  {
    object: INewObject;
  }
>(CreateObjectMutation, () => ({
  variables: {
    object: newObject.value,
  },
  update: (cache, { data }) => {
    let newData = cache.readQuery<IObjectsQuery>({
      query: ObjectsQuery,
    });

    if (newData && data) {
      newData = {
        ...newData,
        objects: [...newData.objects, data.insert_objects_one],
      };
    }

    cache.writeQuery({
      query: ObjectsQuery,
      data: newData,
    });
  },
}));

onCreationDone(({ data }) => {
  emit('entity-created', data?.insert_objects_one.id);
});
</script>
