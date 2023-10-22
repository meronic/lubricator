import { createRouter, createWebHistory } from 'vue-router';
import CraneDashboard from '../views/CraneDashboard.vue';
import CraneMessage from '../views/CraneMessage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: CraneDashboard,
  },
  {
    path: '/about',
    name: 'About',
    component: CraneMessage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
