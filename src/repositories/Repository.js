import Vue from 'vue'
import { Loading, Notify, Dialog } from 'quasar'

export const Repository = {
  post: (data, uri) => {
    return new Promise((resolve, reject) => {
      Loading.show()
      Vue.prototype.$axios.post(`${process.env.API}${uri}`, data)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
        .finally(() => {
          setTimeout(() => {
            Loading.hide()
            Notify.create({
              message: 'Registro efectuado com sucesso!!',
              color: 'positive',
              icon: 'done'
            })
          }, 1500)
        })
    })
  },
  delete: (uri) => {
    return new Promise((resolve, reject) => {
      Dialog.create({
        title: 'Apagar',
        message: 'Deseja realmente apagar este registro?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        Loading.show()
        Vue.prototype.$axios.put(`${process.env.API}${uri}`, { value: false })
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
          .finally(() => {
            setTimeout(() => {
              Loading.hide()
              Notify.create({
                message: 'Registro deletado!',
                color: 'waring',
                icon: 'done'
              })
            }, 1500)
          })
      })
    })
  },
  put: (data, uri) => {
    return new Promise((resolve, reject) => {
      Dialog.create({
        title: 'Alterar',
        message: 'Deseja realmente alterar este registro?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        Loading.show()
        Vue.prototype.$axios.put(`${process.env.API}${uri}`, data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
          .finally(() => {
            setTimeout(() => {
              Loading.hide()
              Notify.create({
                message: 'Registro Alterado com sucesso!',
                color: 'positive',
                icon: 'done'
              })
            }, 1500)
          })
      })
    })
  }
}
