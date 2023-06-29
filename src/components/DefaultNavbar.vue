<template>
  <nav
    ref="navRef"
    class="flex justify-between items-center bg-primary text-white py-4 px-4 md:px-16 transition-all duration-500"
    :class="{
      'bg-transparent': $route.meta.transparentNav && !hasPassedHero,
      'py-1': !$route.meta.transparentNav || hasPassedHero,
    }"
  >
    <ul class="flex items-center m-0">
      <RouterLink custom :to="{ name: 'home' }" v-slot="{ navigate }">
        <li class="m-0 hover:cursor-pointer py-2 px-4" @click="navigate">
          <LogoSvg class="w-[170px] md:w-[250px] h-14" />
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
      <BaseButton v-if="isAuthenticated" class="circled" @click="handleLogout">
        Se déconnecter
      </BaseButton>
      <BaseButton v-else class="circled" @click="handleLogin">
        Se connecter
      </BaseButton>
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
import { useNavScroll } from '@/utils/updateNavScroll';

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

const { hasPassedHero, navRef } = useNavScroll();
</script>
