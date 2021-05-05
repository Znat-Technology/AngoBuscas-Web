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
import { Category } from '../../../models/category'
import { Repository } from '../../../repositories/Repository'
export default {
  components: {
    'ango-page': require('components/responsivePage').default,
    'ango-form': require('components/CustomBasicForm').default,
    'ango-header': require('components/headerPage').default
  },
  data () {
    return {
      inputsLeft: Category.form.inputs_left,
      inputsRight: Category.form.inputs_right
    }
  },
  methods: {
    async sendToApi (data) {
      if (this.$route.path.includes('registrar')) {
        await Repository.post(data, Category.endpoint.register)
      } else if (this.$route.path.includes('actualizar')) {
        await Repository.put(data, `${Category.endpoint.update}/${data._id}`)
      }
      setTimeout(() => {
        this.$router.push(Category.redirect)
      }, 2000)
    }
  },
  computed: {
    titleHeader () {
      if (this.$route.path.includes('registrar')) return 'Nova categoria'
      return 'Alterar categoria'
    }
  }
}
</script>

<style>

</style>
