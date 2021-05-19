<template>
  <q-page id="items" :class="($q.screen.xs)? 'bg-white' : 'bgc-f7 pb30-991 pt100-360'">
    <q-dialog
      v-model="dialodCad"
      v-if="$q.screen.xs"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-white">
        <q-bar class="bg-dark text-white">
          <q-btn dense flat  label="Voltar" icon="arrow_back" v-close-popup>
          </q-btn>
          <q-space />
        </q-bar>

        <q-card-section class="constrain-2">
          <q-radio class="col" v-model="cadChoice" val="doc" label="Documento" />
          <q-radio class="col" v-model="cadChoice" val="pessoa" label="Pessoa" />
        </q-card-section>

        <q-card-section class="q-pb-xl constrain-2">
          <form-doc v-if="cadChoice==='doc'" @ok="reverse()"/>
          <form-people v-else @ok="reverse()"/>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Dialog for Add People or Document -->
    <q-dialog v-model="dialodCad">
      <q-card style="width: 57vw; max-width: 80vw;">

        <!-- Header of Register -->
        <q-card-section dense class="row items-center q-pb-none q-pt-sm">
          <q-space />
          <div class="text-h6 text-primary">REGISTRAR</div>
          <q-space />
          <q-btn icon="cancel" class="text-primary" flat round dense v-close-popup />
        </q-card-section>

        <!-- Content Register Person or Document -->
        <q-card-section>
          <q-tabs
              v-model="tab"
              active-color="primary"
              align="justify"
              class="q-mb-sm"
              inline-label
              dense
          >
            <q-tab class="text-body2" icon="perm_identity" name="person" label="Pessoa" />
            <q-tab class="text-body2" icon="description" name="document" label="Documento" />
          </q-tabs>

          <!-- Register Person -->
          <q-tab-panels
            v-model="tab"
          >
            <q-tab-panel name="person">
              <div class="row">
                <div class="col-md-6 col-sm-6 text-center" style="min-height: 480px">
                  
                  <q-icon name="info" class="text-grey-8 q-pt-lg" style="font-size: 4.4em;" />

                  <q-item-label class="q-px-lg q-pt-md">
                    <span class="text-body1 text-bold text-dark">INFORMAÇÃO</span>
                    <h6 class="text-body1 text-dark text-center">Ao efectuar o registro na plataforma AngoBusca, os seus dados passaram por uma avalição antes de estarem disponiveis para as buscas.</h6>
                    <span class="text-caption text-dark">No máximo 12h</span>
                  </q-item-label>
                  
                  
                </div>
                <!-- <div class="col-md-6">
                  <q-img
                    src="https://scontent.flad2-1.fna.fbcdn.net/v/t1.6435-9/147555919_1407306752981596_6805250478903034093_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHy-ajSHDBkOwnfYKpAVtKWjHs_FE4f_TaMez8UTh_9NgWXY3dwl8PCV-nVA9Tjjb4xgwVJsHIh44kY57GAMAgf&_nc_ohc=cLne3cc_hKgAX8mHqvQ&_nc_ht=scontent.flad2-1.fna&oh=5ce6c2486caf61ff34606a5466da4ab7&oe=60CA79C0"
                    style="width: 100%; min-height: 480px"
                    native-context-menu
                  >
                  </q-img>
                  
                </div> -->
                <div class="col-md-6 col-sm-6">
                    <form-people class="fit" />
                </div>
              </div>            
            </q-tab-panel>
          </q-tab-panels>

          <!-- Register Document -->
          <q-tab-panels
            v-model="tab"
          >
            <q-tab-panel name="document">

              <div class="row">                
                <div class="col-md-6 col-sm-6 text-center" style="min-height: 480px">
                  
                  <q-icon name="info" class="text-grey-8 q-pt-lg" style="font-size: 4.4em;" />

                  <q-item-label class="q-px-lg q-pt-md">
                    <span class="text-body1 text-bold text-dark">INFORMAÇÃO</span>
                    <h6 class="text-body1 text-dark text-center">Ao efectuar o registro na plataforma AngoBusca, os seus dados passaram por uma avalição antes de estarem disponiveis para as buscas.</h6>
                    <span class="text-caption text-dark">No máximo 12h</span>
                  </q-item-label>                  
                  
                </div>
                <div class="col-md-6">
                    <form-doc class="fit" />
                </div>
              </div>
              
            </q-tab-panel>
          </q-tab-panels>

        </q-card-section>
        
      </q-card>
    </q-dialog>
    
    
    <!-- HEADER (NAV) -->
    <q-header class="bg-white" v-if="$q.screen.xs" bordered>
      <q-toolbar class="bg-white text-dark">
        <q-toolbar-title class="text-grand-hotel text-right"><strong>AngoBuscas</strong></q-toolbar-title>
        <q-space/>
        <q-btn flat  dense label="Filtros" icon="menu" class="q-mr-xs" />
      </q-toolbar>
            <q-toolbar class="bg-white text-dark">
        	<q-input class="full-width" dense  placeholder="Buscar por..."/>
        <q-space />
        <q-btn flat round dense icon="search" class="q-mr-xs" />
      </q-toolbar>
   </q-header>
      <div>
        <div v-if="skeleton">
          <mobile-skeleton v-if="$q.screen.xs || $q.screen.sm"/>
          <web-skeleton v-else/>
        </div>
        <div v-else>
            <items-lost
              :infos="data"
              :type="'Pessoa'"
              :total="total"
            />
            <div v-if="total === 0" class="text-h6 text-center absolute-center">
              <div class="column">
               Nenhum resultado encontrado
               <small class="text-grey-6">Tente uma busca diferente</small>
              </div>
            </div>
          <a href="#items">
            <q-pagination
              v-if="maxPages > 1"
              class="row justify-center q-mb-md"
              v-model="current"
              :max="maxPages"
              direction-links
              rounded
              color="primary"
              active-color="primary"
            />
          </a>
        </div>
      </div>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab padding="sm" icon="add" color="primary" @click="dialodCad=true">
               <q-tooltip>
                 Registrar
               </q-tooltip>
            </q-btn>
      </q-page-sticky>
  </q-page>
</template>

<script>
import { fetch } from '../controllers/fecthAPIController'

export default {
  mixins: [fetch],
  components: {
    'items-lost': require('components/LostItemAlternative.vue').default,
    'form-doc': require('components/registerDocument.vue').default,
    'form-people': require('components/registerPeople.vue').default,
    'mobile-skeleton': require('components/skeletonMobile.vue').default,
    'web-skeleton': require('components/skeletonWeb.vue').default
  },
  data () {
    return {
      slide: 1,
      autoplay: true,
      current: 1,
      maxPages: 2,
      pesquisa: '',
      skeleton: false,
      maximizedToggle: true,
      categories: [],
      dialodCad: false,
      cadChoice: 'doc',
      tab: 'person',
      name: null,
      age: null,

      accept: false,
    }
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style>

</style>
