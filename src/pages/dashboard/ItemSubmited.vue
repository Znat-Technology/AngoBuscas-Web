<template>
  <ango-page>
    <template v-slot:header>
      <ango-header title="Znat Technology" subtitle="Documentos/Pessoas">
        <template v-slot:right>
           <q-btn flat color="primary" @click="send()" label="Enviar"/>
        </template>
      </ango-header>
    </template>
    <template v-slot:main>
      <div class="q-gutter-y-md full-width">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="docs" label="Documentos" />
          <q-tab name="person" label="Pessoas" />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated style="min-height: 400px">
          <q-tab-panel name="docs">
               <item-s
                 class="full-width"
                  type="Documento"
                  :infos="documentos"
                  :submited="true"
                  @submited="getList($event)"
                />
               <q-pagination
                v-if="maxPages > 1"
                  v-model="current"
                  class="row justify-center"
                  :max="maxPages"
                  direction-links
                  outline
                  color="primary"
                  active-color="primary"
              />
          </q-tab-panel>
          <q-tab-panel name="person">
            <item-s
              class="full-width"
              type="Pessoa"
              :infos="pessoas"
              :max="maxPages"
              :submited="true"
              @submited="getList($event)"
            />
                <q-pagination
                  v-if="maxPages > 1"
                  class="row justify-center"
                  v-model="current"
                  :max="maxPages"
                  direction-links
                  outline
                  color="primary"
                  active-color="primary"
                />
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </template>
  </ango-page>
</template>

<script>

export default {
  components: {
    'ango-page': require('components/responsivePage').default,
    'ango-header': require('components/headerPage').default,
    'item-s': require('components/LostItem.vue').default
  },
  data () {
    return {
      tab: 'docs',
      maxPages: 1,
      pessoas: [],
      documentos: [],
      current: 1,
      aceitos: []
    }
  },
  methods: {
    getList (list) {
      this.aceitos = list
    },
    async getCount () {
      const endpoint = (this.tab === 'docs') ? 'document' : 'people'
      const response = await this.$axios.get(`${process.env.API}${endpoint}/countSubmited`)
      this.maxPages = parseInt(Math.ceil(response.data / 10))
    },
    async getDocs () {
      const response = await this.$axios.get(`${process.env.API}document?page=${this.current}&limit=10`)
      this.documentos = response.data
      console.log(this.documentos)
    },
    async getPeoples () {
      const response = await this.$axios.get(`${process.env.API}people?page=${this.current}&limit=10`)
      this.pessoas = response.data
    },
    async send () {
      if (this.aceitos.length) {
        this.$q.loading.show()
        const endpoint = (this.tab === 'docs') ? 'document' : 'people'
        await this.$axios.put(`${process.env.API}${endpoint}/accepted`, {
          ids: this.aceitos
        })
        setTimeout(() => {
          this.$q.loading.hide()
          this.$q.notify({
            message: 'Enviados com sucesso',
            icon: 'done',
            color: 'positive'
          })
          if (this.tab === 'docs') {
            this.getDocs()
          } else {
            this.getPeoples()
          }
        }, 2000)
      }
    }
  },
  mounted () {
    this.getDocs()
    this.getPeoples()
    this.getCount()
  },
  watch: {
    current () {
      if (this.tab === 'docs') {
        this.getDocs()
      } else {
        this.getPeoples()
      }
    },
    tab () {
      this.getCount()
    }
  }
}
</script>

<style lang="scss">
  .q-carousel__slide {
    min-height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
  }
</style>
