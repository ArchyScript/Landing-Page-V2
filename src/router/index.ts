import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import TermsPage from '@/pages/TermsPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsPage,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
