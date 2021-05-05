<template>
  <q-form @submit="send" ref="myForm" @reset="resetForm">
    <q-scroll-area class="q-px-md" style="height: 370px">
    <q-file
      class="full-width q-my-sm"
      name="images"
      v-model="dataAPI.files"
       :rules="[(val) => !!val || 'Este campo eh obrigatorio']"
      label="Imagens da pessoa perdida"
      dense
      outlined
      use-chips
      multiple
      append
    >
      <template v-slot:prepend>
        <q-icon name="attach_file"/>
      </template>
    </q-file>
    <q-checkbox
       v-model.trim="dataAPI.found"
       label="Marque, se encontrou essa pessoa perdida"
       :rules="[(val) => !!val || 'Este campo eh obrigatorio']"
       class="full-width q-my-sm"
       outlined
       dense
       square
    />
    <q-select
      v-model.trim="dataAPI.category"
      :rules="[(val) => !!val || 'Este campo eh obrigatorio']"
      outlined
      dense
      :options="categorias"
      square
      class="full-width q-my-sm"
      label="Categoria"
    />
     <q-input
      v-model.trim="dataAPI.name"
      :rules="[(val) => !!val || 'Este campo eh obrigatorio']"
      class="full-width q-my-sm"
      outlined
      dense
      square
      label="Nome"
    />
    <q-input
      v-model.number="dataAPI.age"
      :rules="[(val) => !!val || 'Este campo eh obrigatorio']"
      class="full-width q-my-sm"
      max="150"
      min="0"
      outlined
      dense
      square
      type="number"
      label="Idade aproximada"
    />
     <q-input
       v-model.trim="dataAPI.description"
       :rules="[(val) => !!val || 'Este campo eh obrigatorio']"
       class="full-width q-my-sm"
       outlined
       dense
       square
       type="textarea"
       label="Descriçao"
    />
    <q-btn class="float-right" type="submit" label="Enviar" color="primary" push/>
    </q-scroll-area>
  </q-form>
</template>

<script>
export default {
  data () {
    return {
      categorias: [],
      dataAPI: {
        description: '',
        category: '',
        name: '',
        files: null,
        age: '',
        found: false
      }
    }
  },
  methods: {
    async send (evt) {
      const formData = new FormData(evt.target)
      Object.keys(this.dataAPI).forEach(key => {
        formData.append(key, this.dataAPI[key])
      })
      try {
        this.$q.loading.show()
        const response = await this.$axios.post(`${process.env.API}people/register`, formData)
        setTimeout(() => {
          this.$q.loading.hide()
          this.resetForm()
          this.$emit('ok', null)
          this.$q.notify({
            message: 'Registro submetido',
            icon: 'done',
            color: 'positive'
          })
        }, 2000)
        console.log(response)
      } catch (error) {
        this.$q.notify({
          message: 'Falha ao submeter, tente novamente.',
          icon: 'warning',
          color: 'negative'
        })
      }
    },
    resetForm () {
      this.dataAPI = {
        description: null,
        category: null,
        name: null,
        files: null,
        age: null,
        found: false
      }
      this.$refs.myForm.resetValidation()
    },
    async getType () {
      const type = 'Pessoa'
      const response = await this.$axios.get(`${process.env.API}category/typefor/${type}`)
      response.data.forEach(element => {
        this.categorias.push(element.description)
      })
    }
  },
  mounted () {
    this.getType()
  }
}
</script>

<style>

</style>
