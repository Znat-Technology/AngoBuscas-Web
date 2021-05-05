import Vue from 'vue'

export function setProvinces ({ commit }) {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get('https://angolaapi.herokuapp.com/api/v1/geography/provinces')
      .then((response) => {
        commit('PROVINCES', response.data)
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}