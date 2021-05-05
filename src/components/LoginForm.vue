<template>
   <div>
      <q-form @submit="login()">
         <q-card-section>
           <q-input
                class="q-mb-lg q-mt-md"
                v-model="loginData.name"
                placeholder="Nome de utilizador ou e-mail"
                autofocus
                :rules="[ val => (val && val.length > 0) || '*Campo obrigatorio']"
            >
            <template v-slot:prepend>
                <q-icon name="person"/>
            </template>
           </q-input>
            <q-input
               v-model="loginData.password"
                class="q-mb-lg q-mt-md"
                placeholder="Palavara passe"
                type="password"
                :rules="[ val => (val && val.length > 0) || '*Campo obrigatorio']"
            >
              <template v-slot:prepend>
                <q-icon name="password"/>
              </template>
            </q-input>
            <div class="text-caption text-red text-center">
               <router-link
                  to="/utilizador">
                  Esqueceu a sua palavra passe?
                </router-link>
            </div>
            <q-btn
                class="float-center q-mt-md full-width"
                rounded
                dense
                color="red"
                label="Entrar"
                type="submit"
            >
            </q-btn>
       </q-card-section>
      </q-form>
   </div>
</template>

<script>
import { notifies } from '../controllers/notifies'
import { userController } from '../controllers/userController'
export default {
  mixins: [userController, notifies],
  data () {
    return {
      loginData: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$axios.post(`${process.env.API}user/login`, this.loginData)
        .then((user) => {
          if (!user.data.auth) {
            this.showNotify(user.data.message)
            return
          }
          Object.keys(user.data).forEach(keyUser => {
            this.$q.sessionStorage.set(keyUser, user.data[keyUser])
          })
          let goToPage = 'dashboard'
          goToPage = (this.hasPermissionPage(goToPage)) ? `/${goToPage}` : '/utilizador/perfil'
          this.$router.push(goToPage)
        })
        .catch(() => {
          this.showNotify({ message: 'Utilizador nao encontrado', color: 'red', icon: 'warning' })
        })
    }
  }
}
</script>

<style>

</style>
