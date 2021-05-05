import { Repository } from '../../repositories/Repository'
import Vue from 'vue'

export function postCompany ({ commit }, data) {
  return new Promise((resolve, reject) => {
    Repository.post(data, 'company/register')
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function deleteCompany ({ commit }, id) {
  return new Promise((resolve, reject) => {
    Repository.delete(`company/disable/${id}`)
      .then((response) => {
        resolve(response)
      })
      .catch(() => {
        reject('ksksk')
      })
  })
}
export function deleteAdvert ({ commit }, id) {
  return new Promise((resolve, reject) => {
    Repository.delete(`advert/disable/${id}`)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function setActiveCompany ({ commit }) {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}company/active`)
      .then((response) => {
        commit('ACTIVE_COMPANY', response.data)
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function getAdvertOfCOmpany ({ commit }, id) {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}advert/company/${id}`)
      .then((response) => {
        commit('ADVERT_COMPANY', response.data)
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
