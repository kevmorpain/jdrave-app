<template>
  <h1 class="page-title mb-8">Éditer le <span>profil</span></h1>

  <div class="max-w-lg mx-auto">
    <div v-if="loading">Chargement</div>

    <div v-if="!loading && user" class="mb-6">
      <BaseInput class="mb-6" v-model="user.username" label="Pseudo" />
      <BaseInput
        class="mb-6"
        v-model="user.email"
        label="Adresse mail"
        readonly
      />
      <BaseButton
        class="primary circled"
        :is-loading="isUpdating"
        @click="updateUser"
      >
        Enregistrer
      </BaseButton>
    </div>

    <div>stats?</div>
  </div>
</template>

<script setup lang="ts">
import { useMutation, useQuery } from '@vue/apollo-composable';
import GetCurrentUser from '@/services/users/GetCurrentUser.query.gql';
import UpdateUser from '@/services/users/UpdateUser.mutation.gql';
import IUserQuery from '@/types/services/UserQuery.interface';
import { ref, watchEffect } from 'vue';
import IUser from '@/types/User.interface';

const { result, loading, refetch } = useQuery<IUserQuery>(GetCurrentUser);

const user = ref<IUser | null>(null);

watchEffect(() => {
  if (result.value) {
    user.value = { ...result.value?.current_user[0] };
  }
});

const {
  mutate: updateUser,
  loading: isUpdating,
  onDone: updateCache,
} = useMutation(UpdateUser, () => ({
  variables: {
    id: user.value?.id,
    username: user.value?.username,
  },
}));

updateCache(() => {
  refetch();
});
</script>
