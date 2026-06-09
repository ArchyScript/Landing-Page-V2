import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import PrivacyPage from '@/pages/PrivacyPage.vue';
import SavingsPage from '@/pages/SavingsPage.vue';
import TermsPage from '@/pages/TermsPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { title: 'GreepPay' },
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsPage,
      meta: { title: 'Terms & Conditions | GreepPay' },
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPage,
      meta: { title: 'Privacy Policy | GreepPay' },
    },
    {
      path: '/savings-policy',
      alias: '/savings',
      name: 'savings-policy',
      component: SavingsPage,
      meta: { title: 'Savings Policy | GreepPay' },
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'GreepPay';
});

export default router;
