<template>
  <ango-page>
     <template v-slot:header>
       <ango-header
          title="Znat Technology"
          :subtitle="titleHeader"
        />
     </template>
     <template v-slot:main>
        <ango-form
          :listInputLeft="inputsLeft"
          :listInputRight="inputsRight"
          @submit="sendToApi($event)"
        />
     </template>
  </ango-page>
</template>

<script>
import { User } from '../../../models/user'
import { Repository } from '../../../repositories/Repository'
export default {
  components: {
    'ango-page': require('components/responsivePage').default,
    'ango-form': require('components/CustomBasicForm').default,
    'ango-header': require('components/headerPage').default
  },
  data () {
    return {
      inputsLeft: User.form.inputs_left,
      inputsRight: User.form.inputs_right
    }
  },
  methods: {
    async sendToApi (data) {
      data.company = this.$q.sessionStorage.getItem('company')
      if (this.$route.path.includes('registrar')) {
        await Repository.post(data, User.endpoint.register)
      } else if (this.$route.path.includes('actualizar')) {
        await Repository.put(data, `${User.endpoint.update}/${data._id}`)
      }
      setTimeout(() => {
        this.$router.push(User.redirect)
      }, 2000)
    }
  },
  computed: {
    titleHeader () {
      if (this.$route.path.includes('registrar')) return 'Registrar Utilizador'
      return 'Alterar utilizador'
    }
  }
}
</script>

<style>

</style>
