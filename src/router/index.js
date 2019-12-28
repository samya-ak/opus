import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Favourites from '../views/Favourites.vue'
import Admin from '../views/admin/Admin.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import Items from '../views/admin/Items.vue'
import AddItem from '../views/admin/AddItem.vue'
import Category from '../views/Category.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    // must not be authorized
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    // must not be authorized
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
    props: true
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    props: true
  },
  {
    // must be authorized
    path: '/favourites',
    name: 'favourites',
    component: Favourites
  },

  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'items',
        component: Items
      },
      {
        path: 'additems',
        component: AddItem
      }

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
