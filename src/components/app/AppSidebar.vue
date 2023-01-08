<template>
  <nav
    class="bg-white pt-5 flex flex-col border-r border-gray-200 items-center gap-7"
  >
    <RouterLink custom :to="{ name: 'app' }" v-slot="{ navigate }">
      <div class="text-dark" @click="navigate">
        <LogoSvg class="w-[200px] h-[46px]" />
      </div>
    </RouterLink>
    <BaseButton class="primary !px-12">Créer</BaseButton>

    <ul class="w-full flex flex-col gap-4 mb-auto px-3">
      <RouterLink
        v-for="{ name, icon } in primaryNav"
        :key="name"
        custom
        :to="{ name }"
        v-slot="{ navigate, isActive }"
      >
        <SidebarItem
          :name="name"
          :icon="icon"
          :is-active="isActive"
          @click="navigate"
        />
      </RouterLink>
    </ul>

    <ul class="w-full flex flex-col gap-4 py-6 px-3 border-t border-gray-200">
      <RouterLink
        v-for="{ name, icon } in bottomNav"
        :key="name"
        custom
        :to="{ name }"
        v-slot="{ navigate, isActive }"
      >
        <SidebarItem
          :name="name"
          :icon="icon"
          :is-active="isActive"
          @click="navigate"
        />
      </RouterLink>

      <SidebarItem name="logout" :icon="LogoutIcon" @click="handleLogout" />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import LogoSvg from '@/components/LogoSvg.vue';
import SidebarItem from '@/components/app/SidebarItem.vue';
import {
  BookOpenIcon,
  ViewGridIcon,
  UserGroupIcon,
  BeakerIcon,
  UserCircleIcon,
} from '@heroicons/vue/solid';
import { LogoutIcon } from '@heroicons/vue/outline';
import { FunctionalComponent } from 'vue';

interface INavItem {
  name: string;
  icon: FunctionalComponent;
}

const primaryNav: INavItem[] = [
  {
    name: 'dashboard',
    icon: ViewGridIcon,
  },
  {
    name: 'campaigns',
    icon: BookOpenIcon,
  },
  {
    name: 'characters',
    icon: UserGroupIcon,
  },
  {
    name: 'objects',
    icon: BeakerIcon,
  },
];

const bottomNav: INavItem[] = [
  {
    name: 'profile',
    icon: UserCircleIcon,
  },
];

const handleLogout = (): void => {
  //
};
</script>
