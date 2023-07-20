import { authGuard } from '@auth0/auth0-vue';
import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

function prefixRoutes(
  prefix: string,
  routes: RouteRecordRaw[]
): RouteRecordRaw[] {
  return routes.map((route) => {
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
      layout: defineAsyncComponent(
        () =>
          import(
            /* webpackChunkName: "app_layout" */ '@/components/layouts/AppLayout.vue'
          )
      ),
    },
    beforeEnter: authGuard,
    component: () =>
      import(/* webpackChunkName: "app_app" */ '@/views/app/AppWrapper.vue'),
    redirect: {
      name: 'dashboard',
    },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () =>
          import(
            /* webpackChunkName: "app_dashboard" */ '@/views/app/DashboardPage.vue'
          ),
      },
      {
        path: 'campagnes',
        component: () =>
          import(
            /* webpackChunkName: "app_games" */ '@/views/app/game/GameWrapper.vue'
          ),
        children: [
          {
            path: '',
            name: 'games_list',
            meta: {
              isLayoutList: true,
            },
            component: () =>
              import(
                /* webpackChunkName: "app_games" */ '@/views/app/game/GamesList.vue'
              ),
          },
          {
            path: ':gameId',
            name: 'game_page',
            props: true,
            component: () =>
              import(
                /* webpackChunkName: "app_games" */ '@/views/app/game/GamePage.vue'
              ),
          },
        ],
      },
      {
        path: 'personnages',
        component: () =>
          import(
            /* webpackChunkName: "app_characters" */ '@/views/app/character/CharacterWrapper.vue'
          ),
        children: [
          {
            path: '',
            name: 'characters_list',
            meta: {
              isLayoutList: true,
            },
            component: () =>
              import(
                /* webpackChunkName: "app_characters" */ '@/views/app/character/CharactersList.vue'
              ),
          },
          {
            path: ':characterId',
            name: 'character_page',
            props: true,
            component: () =>
              import(
                /* webpackChunkName: "app_characters" */ '@/views/app/character/CharacterPage.vue'
              ),
          },
        ],
      },
      {
        path: 'objets',
        component: () =>
          import(
            /* webpackChunkName: "app_objects" */ '@/views/app/object/ObjectWrapper.vue'
          ),
        children: [
          {
            path: '',
            name: 'objects_list',
            meta: {
              isLayoutList: true,
            },
            component: () =>
              import(
                /* webpackChunkName: "app_objects" */ '@/views/app/object/ObjectsList.vue'
              ),
          },
          {
            path: ':objectId',
            name: 'object_page',
            props: true,
            component: () =>
              import(
                /* webpackChunkName: "app_objects" */ '@/views/app/object/ObjectPage.vue'
              ),
          },
        ],
      },
      {
        path: 'profile',
        name: 'profile',
        component: () =>
          import(
            /* webpackChunkName: "app_profile" */ '@/views/ProfileView.vue'
          ),
      },
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
    ],
  },
  {
    path: '/:gameId/board',
    name: 'board',
    props: true,
    meta: {
      isAuthenticationNeeded: true,
      layout: defineAsyncComponent(
        () =>
          import(
            /* webpackChunkName: "board_layout" */ '@/components/layouts/LightLayout.vue'
          )
      ),
    },
    component: () =>
      import(/* webpackChunkName: "app_board" */ '@/views/BoardView.vue'),
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
