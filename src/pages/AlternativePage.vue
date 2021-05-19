<template>
  <q-page id="items" :class="($q.screen.xs)? 'bg-white' : 'bgc-f7 pb30-991 pt100-360'">
    <q-dialog
      v-model="showDialogCad"
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
      <q-dialog
      v-else
      v-model="showDialogCad"
      persistent
      >
        <q-card style="width: 790px; max-width: 80vw;">
        <q-toolbar>
          <div class="text-h5">
            Registrar
          </div>
          <q-space/>
          <q-btn class="text-white" round size="md" icon="close" v-close-popup color="primary"></q-btn>
        </q-toolbar>

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
        </div>
      </div>
      <q-page-sticky  v-if="!$q.screen.xs" position="bottom-right" :offset="[18, 18]">
            <q-btn fab padding="sm" icon="add" color="primary" @click="showDialog()">
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
      cadChoice: 'doc'
    }
  }
}
</script>

<style>

</style>
