import CardInfoPage from '@/components/pages/CardInfoPage.vue'
import CartPage from '@/components/pages/cartPage.vue'
import FormComponent from '@/components/component/FormComponent.vue'
import GiftPage from '@/components/pages/giftPage.vue'
import likes from '@/components/pages/likePage.vue'
import MainPage from '@/components/pages/mainPage.vue'

import { createRouter, createWebHistory } from 'vue-router'
import CatalogPage from '@/components/pages/CatalogPage.vue'
import AdminPanelPages from '@/components/pages/AdminPanelPages.vue'

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
    },
    {
      name: "CardInfo",
      path: "/cardInfo/:id",
      component: CardInfoPage
    },
    {
      name: "Form",
      path: "/form",
      component: FormComponent
    },
    {
      name: "Catalog",
      path: "/catalog",
      component: CatalogPage
    },
    {
      name: "AdminPanel",
      path: "/admin",
      component: AdminPanelPages
    },
    

  ],
})

export default router
