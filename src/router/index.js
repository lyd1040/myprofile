import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from '../views/portfolio.vue';
import About from '../views/about.vue';

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
