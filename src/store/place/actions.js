import { Repository } from '../../repositories/Repository'
import Vue from 'vue'

export function postPLace ({ commit }, data) {
  return new Promise((resolve, reject) => {
    Repository.post(data, 'place/register')
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function deletePlace ({ commit }, id) {
  return new Promise((resolve, reject) => {
    Repository.delete(`place/disable/${id}`)
      .then((response) => {
        resolve(response)
      })
      .catch(() => {
        reject('ksksk')
      })
  })
}
export function setActivePlace ({ commit }) {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}place/active`)
      .then((response) => {
        commit('ACTIVE_PLACE', response.data)
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
