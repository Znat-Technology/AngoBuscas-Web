import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import users from './users'
import provinces from './provinces'
import company from './company'
import blog from './blog'
import place from './place'
import category from './category'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      users,
      company,
      provinces,
      blog,
      place,
      category
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
