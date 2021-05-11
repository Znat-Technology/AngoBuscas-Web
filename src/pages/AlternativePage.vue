<template>
  <q-page id="items" :class="($q.screen.xs)? 'bg-white' : 'bgc-f7 pb30-991 pt100-360'">
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
        <div v-if="skeletonAlive">
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
      maximizedToggle: true,
      categories: [],
      dialodCad: false,
      cadChoice: 'doc'
    }
  }
}
</script>

<style>

</style>
