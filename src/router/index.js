import { createRouter, createWebHistory } from 'vue-router';
import CraneDashboard from '../views/CraneDashboard.vue';
import CraneDashboard2 from '../views/CraneDashboard2.vue';
import CraneMessage from '../views/CraneMessage.vue';


const routes = [
  {
    path: '/',
    name: 'main_page1',
    component: CraneDashboard,
  },
  {
    path: '/1',
    name: 'page1',
    component: CraneDashboard,
  },
  {
    path: '/2',
    name: 'page2',
    component: CraneDashboard2,
  },
  {
    path: '/message',
    name: 'Message',
    component: CraneMessage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
