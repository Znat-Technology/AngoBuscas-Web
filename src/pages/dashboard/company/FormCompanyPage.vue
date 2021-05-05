<template>
  <ango-page>
     <template v-slot:header>
       <ango-header
          title="Znat Technology"
          :subtitle="titleHeader"
        >
         <template v-slot:right v-if="titleHeader.includes('Alterar')">
           <q-btn flat color="primary" label="Novo Anuncio" @click="promptAdvert=true"/>
         </template>
       </ango-header>
     </template>
     <template v-slot:main>
    <div class="q-gutter-y-md full-width">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="info" label="Info" />
          <q-tab name="adverts" label="Anuncios"  v-if="titleHeader.includes('Alterar')" />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated style="min-height: 400px">
          <q-tab-panel name="adverts">
            <div class="row q-gutter-md" v-if="advertCompany.length">
              <div v-for="(advert, index) in advertCompany" :key="index" class="col-3 col-sm-3 col-sm-3 col-xs-12">
                 <q-card class="my-card"  flat bordered >
                    <q-img
                      src="~assets/meat-123668_1920.jpg"
                      class="fit-image"
                    />
                    <q-item>
                      <q-item-section>
                        <q-item-label caption lines="2">
                        {{ advert.comments }}
                        </q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <div class="col-auto">
                            <q-btn color="grey-7" round flat icon="more_vert">
                              <q-menu cover auto-close>
                                <q-list>
                                  <q-item clickable>
                                    <q-item-section>Activar</q-item-section>
                                  </q-item>
                                  <q-item clickable @click="delAdvert(advert._id)">
                                    <q-item-section>Eliminar</q-item-section>
                                  </q-item>
                                </q-list>
                              </q-menu>
                            </q-btn>
                          </div>
                      </q-item-section>
                    </q-item>
                  </q-card>
              </div>
            </div>
            <div v-else class="absolute-center text-h6">
               Sem anuncios
            </div>
          </q-tab-panel>
          <q-tab-panel name="info">
           <ango-form
              :listInputLeft="inputsLeft"
              :listInputRight="inputsRight"
              @submit="sendToApi($event)"
            />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
     <q-dialog v-model="promptAdvert" persistent>
          <q-card style="min-width: 350px">
            <div class="text-subtitle text-grey-8 q-pa-md">Novo anuncio</div>
            <q-separator/>
          <div class="q-pa-sm">
            <q-form @submit="postAdvert">
              <q-card-section class="q-pt-none">
              <q-file outlined dense square v-model="advertModel.banner" label="Banner">
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
                </q-file>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <q-input outlined dense square v-model="advertModel.description" autogrow placeholder="Descriçao"/>
              </q-card-section>
              <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn flat label="Registrar" type="submit" v-close-popup />
              </q-card-actions>
            </q-form>
          </div>
      </q-card>
    </q-dialog>
      </div>
     </template>
  </ango-page>
</template>

<script>
import { Company } from '../../../models/company'
import { Repository } from '../../../repositories/Repository'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    'ango-page': require('components/responsivePage').default,
    'ango-form': require('components/CustomBasicForm').default,
    'ango-header': require('components/headerPage').default
  },
  data () {
    return {
      inputsLeft: Company.form.inputs_left,
      inputsRight: Company.form.inputs_right,
      advertModel: {
        banner: null,
        description: ''
      },
      tab: 'info',
      promptAdvert: false
    }
  },
  methods: {
    ...mapActions('company', ['getAdvertOfCOmpany', 'deleteAdvert']),
    async sendToApi (data) {
      data.company = this.$q.sessionStorage.getItem('company')
      if (this.$route.path.includes('registrar')) {
        await Repository.post(data, Company.endpoint.register)
      } else if (this.$route.path.includes('actualizar')) {
        await Repository.put(data, `${Company.endpoint.update}/${data._id}`)
      }
      setTimeout(() => {
        this.$router.push(Company.redirect)
      }, 2000)
    },
    async postAdvert () {
      const data = {
        banner: (this.advertModel.banner) ? 'foto.jpg' : 'img.2',
        comments: this.advertModel.description,
        company: window.id
      }
      await Repository.post(data, 'advert/register')
      this.getAdvert()
    },
    async getAdvert () {
      await this.getAdvertOfCOmpany(window.id)
    },
    async delAdvert (id) {
      await this.deleteAdvert(id)
      this.getAdvert()
    }
  },
  computed: {
    ...mapState('company', ['advertCompany']),
    titleHeader () {
      if (this.$route.path.includes('registrar')) return 'Registrar empresa'
      return 'Alterar empresa'
    }
  },
  mounted () {
    if (!window.info) {
      this.$router.push('/empresa/registrar')
    }
    this.getAdvert()
  }
}
</script>
<style lang="scss">
  .my-card {
    width: 100%;
    max-width: 300px;
  }
</style>
