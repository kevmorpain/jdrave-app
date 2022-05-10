import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { authGuard } from '@/plugins/auth';

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
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
  },
  ...prefixRoutes('/games', [
    {
      path: '',
      name: 'games',
      component: () =>
        import(/* webpackChunkName: "games" */ '@/views/games/index.vue'),
    },
    {
      path: ':gameId',
      name: 'game',
      props: true,
      component: () =>
        import(/* webpackChunkName: "games" */ '@/views/games/_id.vue'),
    },
    {
      path: ':gameId/new_character',
      name: 'new_character',
      props: true,
      component: () =>
        import(
          /* webpackChunkName: "games" */ '@/views/characters/creation.vue'
        ),
    },
  ]),
  {
    path: '/characters/:characterId',
    name: 'character',
    props: true,
    component: () =>
      import(/* webpackChunkName: "characters" */ '@/views/characters/_id.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '@/views/Profile.vue'),
    beforeEnter: authGuard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
