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
import { Blog } from '../../../models/blog'
import { Repository } from '../../../repositories/Repository'
export default {
  components: {
    'ango-page': require('components/responsivePage').default,
    'ango-form': require('components/CustomBasicForm').default,
    'ango-header': require('components/headerPage').default
  },
  data () {
    return {
      inputsLeft: Blog.form.inputs_left,
      inputsRight: Blog.form.inputs_right
    }
  },
  methods: {
    async sendToApi (data) {
      if (this.$route.path.includes('registrar')) {
        await Repository.post(data, Blog.endpoint.register)
      } else if (this.$route.path.includes('actualizar')) {
        await Repository.put(data, `${Blog.endpoint.update}/${data._id}`)
      }
      setTimeout(() => {
        this.$router.push(Blog.redirect)
      }, 2000)
    }
  },
  computed: {
    titleHeader () {
      if (this.$route.path.includes('registrar')) return 'Nova noticia'
      return 'Alterar noticia'
    }
  }
}
</script>

<style>

</style>
