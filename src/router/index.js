import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import CartView from '../views/CartView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [{
  path: '/',
  name: 'home',
  component: HomeView
},
{
  path: '/men',
  name: 'men',
  component: ShopView,
  children: [
    {
      path: ':collection',
      component: ShopView,
      name: 'men',
      children: [
        {
          path: ':type',
          component: ShopView,
          name: 'men'
        }
      ]
    }
  ]
},
{
  path: '/women',
  name: 'women',
  component: ShopView,
  children: [
    {
      path: 'shoes',
      name: 'women_shoes',
      component: ShopView,
      children: [
        {
          path: ':id',
          component: ShopView
        }
      ]
    },
    {
      path: 'clothing',
      name: 'women_clothing',
      component: ShopView,
      children: [
        {
          path: ':id',
          component: ShopView
        }
      ]
    },
    {
      path: 'accessories',
      name: 'women_accessories',
      component: ShopView,
      children: [
        {
          path: ':id',
          component: ShopView
        }
      ]
    }
  ]
},
{
  path: '/kids',
  name: 'kids',
  component: ShopView,
  children: [
    {
      path: 'shoes',
      name: 'kids_shoes',
      component: ShopView,
      children: [
        {
          path: ':id',
          component: ShopView
        }
      ]
    },
    {
      path: 'clothing',
      name: 'kids_clothing',
      component: ShopView,
      children: [
        {
          path: ':id',
          component: ShopView
        }
      ]
    },
    {
      path: 'accessories',
      name: 'kids_accessories',
      component: ShopView,
      children: [
        {
          path: ':id',
          component: ShopView
        }
      ]
    }
  ]
},
{
  path: '/cart',
  name: 'cart',
  component: CartView
},
{
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFoundView
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
