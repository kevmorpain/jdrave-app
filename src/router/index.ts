import { authGuard } from '@auth0/auth0-vue';
import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

function prefixRoutes(
  prefix: string,
  routes: RouteRecordRaw[]
): RouteRecordRaw[] {
  return routes.map(route => {
    route.path = prefix + '/' + route.path;

    return route;
  });
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: {
      transparentNav: true,
      fullWidth: true,
      isAuthenticationNeeded: false,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
  },
  ...prefixRoutes('/games', [
    {
      path: '',
      name: 'games',
      meta: {
        isAuthenticationNeeded: false,
      },
      component: () =>
        import(/* webpackChunkName: "games" */ '@/views/games/GamesList.vue'),
    },
    {
      path: ':gameId',
      name: 'game',
      props: true,
      meta: {
        isAuthenticationNeeded: false,
      },
      component: () =>
        import(/* webpackChunkName: "games" */ '@/views/games/GamePage.vue'),
    },
  ]),
  {
    path: '/characters',
    name: 'characters_list',
    meta: {
      isAuthenticationNeeded: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "characters" */ '@/views/characters/CharactersList.vue'
      ),
  },
  {
    path: '/characters/:characterId',
    name: 'character',
    props: true,
    meta: {
      isAuthenticationNeeded: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "characters" */ '@/views/characters/CharacterPage.vue'
      ),
  },
  {
    path: '/app',
    name: 'app',
    meta: {
      isAuthenticationNeeded: true,
    },
    beforeEnter: authGuard,
    component: () =>
      import(/* webpackChunkName: "app_app" */ '@/views/app/AppWrapper.vue'),
    children: [
      {
        path: 'new_game',
        name: 'new_game',
        meta: {
          isAuthenticationNeeded: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "app_games" */ '@/views/games/GameCreation.vue'
          ),
      },
      {
        path: ':gameId/new_character',
        name: 'new_character',
        props: true,
        meta: {
          isAuthenticationNeeded: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "app_characters" */ '@/views/characters/CharacterCreation.vue'
          ),
      },
      {
        path: 'character/:characterId/edit',
        name: 'edit_character',
        props: true,
        meta: {
          isAuthenticationNeeded: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "app_characters" */ '@/views/characters/CharacterEdition.vue'
          ),
      },
      {
        path: ':gameId/board',
        name: 'board',
        props: true,
        meta: {
          isAuthenticationNeeded: true,
          layout: defineAsyncComponent(() =>
            import(
              /* webpackChunkName: "board_layout" */ '@/components/layouts/LightLayout.vue'
            )
          ),
        },
        component: () =>
          import(/* webpackChunkName: "app_board" */ '@/views/BoardView.vue'),
      },
      {
        path: 'profile',
        name: 'profile',
        meta: {
          isAuthenticationNeeded: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "app_profile" */ '@/views/ProfileView.vue'
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
