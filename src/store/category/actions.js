import { Repository } from '../../repositories/Repository'
import Vue from 'vue'

export function postCategory ({ commit }, data) {
  return new Promise((resolve, reject) => {
    Repository.post(data, 'category/register')
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function deleteCategory ({ commit }, id) {
  return new Promise((resolve, reject) => {
    Repository.delete(`category/disable/${id}`)
      .then((response) => {
        resolve(response)
      })
      .catch(() => {
        reject('ksksk')
      })
  })
}
export function setActiveCategory ({ commit }) {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}Category/active`)
      .then((response) => {
        commit('ACTIVE_CATEGORY', response.data)
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
