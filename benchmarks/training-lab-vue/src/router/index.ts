import { createRouter, createWebHistory } from '@ionic/vue-router';
import {
  RouteRecordRaw,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router';
import Tabs from '../views/Tabs.vue';

const checkAuthStatus = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  if (to.matched.some(r => r.meta.requiresAuth)) {
    // TODO: check that we are authenticated
    const authenticated = true;
    if (!authenticated) {
      return next('/login');
    }
  }
  next();
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1',
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1',
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(checkAuthStatus);

export default router;
