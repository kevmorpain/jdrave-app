<template>
  <nav
    class="bg-white pt-5 flex flex-col border-r border-gray-200 items-center gap-7"
  >
    <RouterLink custom :to="{ name: 'app' }" v-slot="{ navigate }">
      <div class="text-dark" @click="navigate">
        <LogoSvg class="w-[200px] h-[46px]" />
      </div>
    </RouterLink>

    <BaseButton class="primary circled !px-12" @click="handleCreateClick">
      {{ $t('app.nav.create_action') }}

      <PlusIcon class="w-5 h-5" />
    </BaseButton>

    <CreationModal
      :is-visible="isCreationModalVisible"
      @close="isCreationModalVisible = false"
    />

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

      <SidebarItem
        name="logout"
        :icon="ArrowRightOnRectangleIcon"
        @click="handleLogout"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import CreationModal from '@/components/app/creation/CreationModal.vue';
import LogoSvg from '@/components/LogoSvg.vue';
import SidebarItem from '@/components/app/SidebarItem.vue';
import {
  ArrowRightOnRectangleIcon,
  BookOpenIcon,
  Squares2X2Icon,
  UserGroupIcon,
  BeakerIcon,
  UserCircleIcon,
  PlusIcon,
} from '@heroicons/vue/20/solid';

import { FunctionalComponent, ref } from 'vue';

interface INavItem {
  name: string;
  icon: FunctionalComponent;
}

const primaryNav: INavItem[] = [
  {
    name: 'dashboard',
    icon: Squares2X2Icon,
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

const isCreationModalVisible = ref<boolean>(false);
const handleCreateClick = (): void => {
  isCreationModalVisible.value = true;
};

const handleLogout = (): void => {
  // TODO: logout and redirect to homepage
};
</script>
