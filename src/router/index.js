import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/tabNieuw'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tabOverzicht'
      },
      {
        path: 'tabNieuw',
        component: () => import('@/views/TabNieuwPage.vue')
      },
      {
        path: 'tabOverzicht',
        component: () => import('@/views/TabOverzichtPage.vue')
      },
      {
        path: 'tabExperiment',
        component: () => import('@/views/TabExperimentPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
