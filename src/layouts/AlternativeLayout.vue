<template>
  <q-layout view="hHh Lpr lFf" class=" bgc-f7 pb30-991 pt100-360">
    <q-header  v-if="!$q.screen.xs" class="bg-white" bordered>
      <q-toolbar class="bg-white">
        <q-toolbar-title class="col-2">
           <strong  class=" text-grand-hotel text-weight-500 text-dark">
             AngoBuscas
            </strong>
        </q-toolbar-title>
        <q-space/> 
           <div v-if="$route.fullPath==='/alternative'" class="col-6">
              <div class="row justify-center">
                <q-input
                  class="col-12"
                  input-class="text-dark"
                  outlined
                  rounded
                  dense
                  debounce="600"
                  v-model.lazy="modelSearch"
                  placeholder="Buscar por..."
                >
                  <template v-slot:prepend>
                      <q-icon name="search" color="dark" size="xs"/>
                  </template>
                  <template v-slot:append>
                      <q-btn v-if="modelSearch !== ''" round icon="close" @click="clearSearch" flat color="dark" size="sm"/>
                  </template>
                </q-input>
              </div>
           </div>
           <q-space/>
           <div> 
              <l-tabs class="large-screen-only" :options="options"/>
           </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-if="isSearchRoute"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="250"
      :breakpoint="500"
    >
        <q-list class="q-pa-md q-mt-lg">
        <div class="row q-gutter-y-md justify-center">
            <q-select
              class="col-12 text-dark"
              v-model="searchPeopleOrDocument"
              dense
              outlined
              transition-show="jump-up"
              transition-hide="jump-up"
              :options="['Pessoas', 'Documentos']"
            >
            <template v-slot:prepend>
                <q-icon name="search" size="xs" color="dark"/>
            </template>
            </q-select>
            <q-select 
              class="col-12 text-dark"
              v-model="modelCategory"
               transition-show="jump-up"
              transition-hide="jump-up"
              dense
              outlined
              :options="categories"
            >
            <template v-slot:prepend>
                <q-icon name="category" size="xs" color="dark"/>
            </template>
            </q-select>
            <q-select
              class="col-12 text-dark"
               transition-show="jump-up"
              transition-hide="jump-up"
              v-model="modelProvince"
              :options="provinces"
              dense
              outlined
            >
            <template v-slot:prepend>
                <q-icon name="location_on" color="dark" size="xs"/>
            </template>
            </q-select>
        </div>
        </q-list>
    </q-drawer>
      
    <!-- Rodape Ango Buscas -->
    <q-footer  bordered class="bg-white text-primary">
     <p class="large-screen-only q-pa-xs float-right"> {{ total }} Resultados</p>
       <q-tabs
           indicator-color="transparent"
           active-color="primary"
            no-caps
            class="bg-grey-2 text-dark small-screen-only"
          >
            <q-route-tab
              v-for="(option, index) in options"
              :key="index"
              class="q-mx-md"
              :icon="option.icon"
              :to="option.to"
            />
          </q-tabs>
    </q-footer>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { fetch } from '../controllers/fecthAPIController'

export default {
  mixins: [fetch],
  components: {
    'l-tabs': require('components/LocalTabs').default
  },
  data () {
    return {
      leftDrawerOpen: true,
      options: [
        {
          title: 'Inicio',
          name: 'menu',
          icon: 'home',
          label: 'Inicio',
          tooltip: 'Inicio',
          to: '/alternative'
        },
        {
          title: 'Blog',
          name: 'location',
          label: 'Blog',
          tooltip: 'Noticias',
          to: '/noticias',
          icon: 'rss_feed'
        },
        {
          title: 'Contactos',
          name: 'local',
          label: 'Contactos',
          tooltip: 'Sobre a plataforma',
          icon: 'contact_support',
          to: '/sobre'
        }
      ]
    }
  },
  computed: {
    isSearchRoute () {
      return this.$route.fullPath === '/alternative' || this.$route.fullPath === '/noticias' 
    }
  },
  methods: {
    clearSearch () {
      this.modelSearch = ''
    }
  }
}
</script>

<style lang="scss">
 /*.q-field {
    &--dense
      .q-field__control, .q-field__marginal {
        height: 35px !important;
      }
  }*/
  .q-toolbar__title {
    @media (max-width: $breakpoint-sm-max) {
      text-align: center;
    }
    font-size: 25px;
  }
  .font-text {
    font-size: 20px;
  }
  .q-footer .q-tab__icon{
    font-size: 22px;
  }
  .q-tabs__content .q-tab__icon {
    font-size: 20px;
  }
</style>
