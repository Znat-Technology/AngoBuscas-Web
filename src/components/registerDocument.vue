<template>
  <q-scroll-area :thumb-style="thumbStyleRegPeople">

    <q-form @submit="send" class="q-mx-sm text-body2">
      <q-file
        class="full-width"
        name="images"
        v-model="images"
        :rules="[(val) => !!val || 'Este campo é obrigatorio']"
        label="Imagens"
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
      <q-select
        v-model.trim="dataAPI.category"
        :options="categorias"
        :rules="[(val) => !!val || 'Este campo é obrigatorio']"
        outlined
        dense
        square
        class="full-width q-my-sm"
        label="Categoria"
      />
      <q-input
        v-model.trim="dataAPI.onwner"
        :rules="[(val) => !!val || 'Este campo é obrigatorio']"
        class="full-width q-my-sm"
        outlined
        dense
        square
        label="Proprietario"
      />
      <q-input
        v-model.trim="dataAPI.description"
        :rules="[(val) => !!val || 'Este campo é obrigatorio']"
        class="full-width q-my-sm"
        outlined
        dense
        square
        type="textarea"
        label="Descriçao"
      />
          <fieldset class="q-my-md">
        <legend>Local de deposito</legend>
          <q-select
              v-model.trim="dataAPI.typePlace"
              :rules="[(val) => !!val || 'Este campo é obrigatorio']"
              :options="lugares"
              outlined
              dense
              square
              class="full-width q-my-sm"
              label="Tipo de instituicao"
            />
            <q-input
              v-model.trim="dataAPI.institute"
              :rules="[(val) => !!val || 'Este campo é obrigatorio']"
              outlined
              dense
              square
              class="full-width q-my-sm"
              label="Nome da Instuicao"
            />
          <q-select
            v-model.trim="dataAPI.province"
            :rules="[(val) => !!val || 'Este campo é obrigatorio']"
            outlined
            dense
            square
            :options="['Luanda']"
            class="full-width q-my-sm"
            label="Provincia"
          />
          <q-select
            v-model.trim="dataAPI.county"
            :rules="[(val) => !!val || 'Este campo é obrigatorio']"
            outlined
            :options="['cazenga']"
            dense
            square
            class="full-width q-my-sm"
            label="Municipio"
          />
          <q-input
            v-model.trim="dataAPI.street"
            :rules="[(val) => !!val || 'Este campo é obrigatorio']"
            outlined
            dense
            square
            class="full-width q-my-sm"
            label="Endereço"
          />
      </fieldset>
      <q-btn class="full-width q-mb-sm bg-primary text-white" glossy flat type="submit" label="Enviar" push color="primary"/>
    </q-form>

  </q-scroll-area>
</template>

<script>
export default {
  data () {
    return {
      categorias: [],
      lugares: [],
      images: null,
      dataAPI: {
        onwner: '',
        typePlace: '',
        county: '',
        province: '',
        institute: '',
        street: '',
        description: '',
        category: '',
        found: false
      },
      submitEmpty: false,
      submitResult: [],

      // Scrool Config
      thumbStyleRegPeople: {
        right: '0px',
        borderRadius: '5px',
        backgroundColor: '#fd6b70e1',
        width: '4.3px',
        opacity: 0.60
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
        await this.$axios.post(`${process.env.API}document/register`, formData)
        setTimeout(() => {
          this.$q.loading.hide()
          this.resetForm()
          this.$q.notify({
            message: 'Registro submetido',
            icon: 'done',
            color: 'positive'
          })
          this.$emit('ok', null)
        }, 2000)
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
        onwner: '',
        typePlace: '',
        county: '',
        province: '',
        institute: '',
        street: '',
        description: '',
        category: '',
        found: false
      }
      this.images = null
    },
    async getType () {
      let type = 'Documento'
      let response = await this.$axios.get(`${process.env.API}category/typefor/${type}`)
      response.data.forEach(element => {
        this.categorias.push(element.description)
      })
      type = 'lugar'
      response = await this.$axios.get(`${process.env.API}category/typefor/${type}`)
      response.data.forEach(element => {
        this.lugares.push(element.description)
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
