import { Repository } from '../../repositories/Repository'
import Vue from 'vue'

export function postBlog ({ commit }, data) {
  return new Promise((resolve, reject) => {
    Repository.post(data, 'Blog/register')
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function deleteBlog ({ commit }, id) {
  return new Promise((resolve, reject) => {
    Repository.delete(`blog/disable/${id}`)
      .then((response) => {
        resolve(response)
      })
      .catch(() => {
        reject('ksksk')
      })
  })
}
export function setActiveBlog ({ commit }) {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}blog/active`)
      .then((response) => {
        commit('ACTIVE_BLOG', response.data)
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
