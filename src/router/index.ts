import CartPage from '@/components/pages/cartPage.vue'
import GiftPage from '@/components/pages/giftPage.vue'
import likes from '@/components/pages/likePage.vue'
import MainPage from '@/components/pages/mainPage.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "likes",
      path: "/likes",
      component: likes
    },
    {
      name: "main",
      path: "/",
      component: MainPage
    },
    {
      name: "cart",
      path: "/cart",
      component: CartPage
    },

    {
      name: "gift",
      path: "/gift",
      component: GiftPage
    }
  ],
})

export default router
