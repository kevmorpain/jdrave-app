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
    },
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
  },
  ...prefixRoutes('/games', [
    {
      path: '',
      name: 'games',
      component: () =>
        import(/* webpackChunkName: "games" */ '@/views/games/GamesList.vue'),
    },
    {
      path: ':gameId',
      name: 'game',
      props: true,
      component: () =>
        import(/* webpackChunkName: "games" */ '@/views/games/GamePage.vue'),
    },
  ]),
  {
    path: '/characters',
    name: 'characters_list',
    component: () =>
      import(
        /* webpackChunkName: "characters" */ '@/views/characters/CharactersList.vue'
      ),
  },
  {
    path: '/characters/:characterId',
    name: 'character',
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "characters" */ '@/views/characters/CharacterPage.vue'
      ),
  },
  {
    path: '/app',
    name: 'app',
    component: () =>
      import(/* webpackChunkName: "app_app" */ '@/views/app/AppWrapper.vue'),
    children: [
      {
        path: 'new_game',
        name: 'new_game',
        component: () =>
          import(
            /* webpackChunkName: "app_games" */ '@/views/games/GameCreation.vue'
          ),
      },
      {
        path: ':gameId/new_character',
        name: 'new_character',
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "app_characters" */ '@/views/characters/CharacterCreation.vue'
          ),
      },
      {
        path: 'profile',
        name: 'profile',
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
});

export default router;
