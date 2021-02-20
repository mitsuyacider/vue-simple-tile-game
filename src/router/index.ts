import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Game from '../views/Game.vue';
import GameEnd from '../views/GameEnd.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/game',
    name: 'Game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/Game.vue'),
    component: Game,
  },
  {
    path: '/game-end',
    name: 'GameEnd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/GameEnd.vue'),
    component: GameEnd,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// FIXME: This is debug value
router.replace('game');

export default router;
