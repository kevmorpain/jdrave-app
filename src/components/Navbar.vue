<template>
  <nav
    class="flex justify-between items-center border-b bg-primary text-white py-4 px-4 md:px-16"
    :class="{ 'bg-transparent border-b-0': $route.meta.transparentNav }"
  >
    <ul class="flex items-center m-0">
      <RouterLink custom :to="{ name: 'home' }" v-slot="{ navigate }">
        <li
          class="m-0 hover:cursor-pointer py-2 px-4 hover:text-secondary transition-colors duration-200 ease-out"
          @click="navigate"
        >
          <LogoSvg class="w-[250px] h-14" />
        </li>
      </RouterLink>

      <template v-if="isAuthenticated">
        <RouterLink
          v-for="{ name, text } in links"
          custom
          :to="{ name }"
          :key="name"
          v-slot="{ navigate }"
        >
          <li
            class="m-0 hover:cursor-pointer py-2 px-4 hover:text-secondary transition-colors duration-200 ease-out"
            @click="navigate"
          >
            {{ text }}
            <template v-if="name === 'profile' && user">
              ({{ user.username }})
            </template>
          </li>
        </RouterLink>
      </template>
    </ul>

    <div v-if="!isLoading">
      <BaseButton v-if="isAuthenticated" @click="handleLogout">
        Se déconnecter
      </BaseButton>
      <BaseButton v-else @click="handleLogin">Se connecter</BaseButton>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import { useQuery } from '@vue/apollo-composable';
import GetCurrentUser from '@/services/users/GetCurrentUser.query.gql';
import IUserQuery from '@/types/services/UserQuery.interface';
import LogoSvg from '@/components/LogoSvg.vue';

const links = ref([
  {
    name: 'games',
    text: 'Jeux',
    needAuth: true,
  },
  {
    name: 'profile',
    text: 'Mon compte',
    needAuth: true,
  },
]);

const { loginWithPopup, logout, isAuthenticated, isLoading } = useAuth0();

const handleLogin = () => loginWithPopup();

const handleLogout = () =>
  logout({
    returnTo:
      process.env.NODE_ENV === 'production'
        ? 'https://kevmorpain.github.io/jdrave-app'
        : 'http://localhost:8080',
  });

const { result } = useQuery<IUserQuery>(GetCurrentUser);
const user = computed(() => result.value?.current_user[0]);
</script>
