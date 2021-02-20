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
    component: Game,
  },
  {
    path: '/game-end',
    name: 'GameEnd',
    component: GameEnd,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// FIXME: This is debug value
// router.replace('game');

export default router;
