import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
// const MAIN_PAGE = 'dashboard'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */
import { SessionStorage } from 'quasar'

const freeRoutes = ['/login', '/', '/alternative', '/noticias', '/sobre', '/detalhe']
// const MAIN_PAGE = 'dashboard'

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUEROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })
  Router.beforeEach((to, from, next) => {
    const isFreeRoute = freeRoutes.some(free => free === to.path)
    if (isFreeRoute) next()
    else {
      const isAuthenticated = SessionStorage.getItem('auth')
      if (isAuthenticated) {
        next()
      } else {
        next('/login')
      }
    }
  })
  return Router
}
