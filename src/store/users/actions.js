import { Repository } from '../../repositories/Repository'
import Vue from 'vue'

export function postUser ({ commit }, data) {
  return new Promise((resolve, reject) => {
    Repository.post(data, 'user/register')
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function deleteUser ({ commit }, id) {
  return new Promise((resolve, reject) => {
    Repository.delete(`user/disable/${id}`)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function setActiveUsers ({ commit }) {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}user/active`)
      .then((response) => {
        commit('ACTIVE_USERS', response.data)
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
