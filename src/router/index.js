import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import guest from '../middleware/guest'
import auth from '../middleware/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      middleware: [
        guest
      ]
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      middleware: [
        auth
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware

  const context = {
      to,
      from,
      next
  }
  return middleware[0]({
      ...context
  })
})

export default router
