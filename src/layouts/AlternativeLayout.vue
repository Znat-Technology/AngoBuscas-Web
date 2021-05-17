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

    <!-- Categories and Filter -->
    <q-drawer
      v-if="isSearchRoute"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="280"
      :breakpoint="500"
      class="text-dark"
    >

      <!-- Scroll Config -->
      <q-scroll-area
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        class="fit"
      >

      <!-- Label Separator -->
      <q-list class="q-mt-md q-mb-sm q-ml-md">
        <q-item-label class="text-left text-grey-7 text-subtitle1">Buscar por:</q-item-label>
      </q-list>

      <!-- Document or People -->
      <q-list>
        <q-btn-toggle
          class="q-mx-lg q-mb-lg my-custom-toggle"
          v-model="searchPeopleOrDocument"
          spread
          toggle-color="primary"
          no-caps
          color="white"
          unelevated
          bord
          text-color="black"
          :options="[
            {label: 'Pessoas', value: 'Pessoas'},
            {label: 'Documentos', value: 'Documentos'}
          ]"
        />
      </q-list>

      <!-- Label Separator -->
      <q-list><q-separator inset></q-separator></q-list>
      <q-list class="q-mt-md q-mb-sm q-ml-md">
        <q-item-label class="text-left text-grey-7 text-subtitle1">Critérios de Busca</q-item-label>
      </q-list>

      <!-- Criterio de Busca -->
      <q-list class="q-mb-md">
        <!-- Provincias -->
        <q-expansion-item
          expand-separator
          icon="eva-pin-outline"
          label="Provincias"
          class="q-ml-md text-bold text-body2 q-mb-sm q-mr-sm"
        >
          <q-card>
            <q-card-section>
              <!-- All -->
              <q-item
                dense
                clickable
                v-ripple
                class="text-caption"
                >
                  <q-checkbox dense v-model="choice" label="Todas"></q-checkbox>
              </q-item> 

              <q-item
                dense
                clickable
                v-ripple
                v-for="(province, index) in provinces" :key="index"
                class="text-caption"
                >
                <q-checkbox dense v-model="choice" :label="province"></q-checkbox>
              </q-item>           
            </q-card-section>
          </q-card>

        </q-expansion-item>

        <!-- Categoria --> 
        <q-expansion-item
          expand-separator
          icon="view_list"
          label="Categorias"
          class="q-ml-md text-bold text-body2 q-mb-sm q-mr-sm"
        >
          <q-card>
            <q-card-section>
              <!-- All -->
              <q-item
                dense
                clickable
                v-ripple
                class="text-caption"
                >
                  <q-checkbox dense v-model="choice" label="Todas"></q-checkbox>
              </q-item> 

              <q-item
                dense
                clickable
                v-ripple
                v-for="(category, index) in categories" :key="index"
                class="text-caption"
                >
                <q-checkbox dense v-model="modelCategory" :label="category.description"></q-checkbox>
              </q-item>           
            </q-card-section>
          </q-card>

        </q-expansion-item>

        <!-- Data Time -->
        <q-input class="q-mx-md q-pl-sm" dense square outlined v-model="email" hint="Data Inicial" type="date">
          <template v-slot:prepend>
            <q-icon class="bg-bold" name="today" />
          </template>
        </q-input>
        <q-input class="q-mx-md q-mt-md q-pl-sm" dense square outlined v-model="email" hint="Data Final" type="date">
          <template v-slot:prepend>
            <q-icon class="bg-bold" name="today" />
          </template>
        </q-input>

      </q-list>


      <!-- Label Separator -->
      <q-list><q-separator inset></q-separator></q-list>
      <q-list class="q-mt-md q-mb-sm q-ml-md">
        <q-item-label class="text-left text-grey-7 text-subtitle1">Mais Pesquisados</q-item-label>
      </q-list>
      

      <!-- Mais Pesquisados -->
      <q-list dense padding class="rounded-borders q-ml-md text-body2">
      <q-item clickable v-ripple>
        <q-item-section>
          Bilhete Identidade
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          Carta de Condução
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          Cedula Pessoal
        </q-item-section>
      </q-item>
    </q-list>


      </q-scroll-area>
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

    <!-- Content of page -->
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
      choice: false,
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
        },
      ],
      // Scrool Config
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#fd6b70e1',
        width: '5px',
        opacity: 0.80
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        width: '9px',
        opacity: 0.2
      }
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
