<template>
  <div>
    <q-dialog v-model="zoom">
        <q-card style="width: 400px; max-width: 80vw;">
        <div>
            <q-carousel
                animated
                v-model="slide"
                arrows
                navigation
                swipeable
                ref="carousel"
                infinite
            >
              <q-carousel-slide
                  v-for="(img, index) in slidesImage"
                  :key="index"
                  :name="index+1"
                  :img-src="`http://localhost:3000/${img}`"
               >
              </q-carousel-slide>
              <template v-slot:control>
          <q-carousel-control
            position="bottom-right"
            :offset="[18, 18]"
            class="q-gutter-xs"
          >
            <q-btn
              push round dense color="primary" text-color="white" icon="arrow_left"
              @click="$refs.carousel.previous()"
            />
            <q-btn
              push round dense color="primary" text-color="white" icon="arrow_right"
              @click="$refs.carousel.next()"
            />
          </q-carousel-control>
        </template>
            </q-carousel>
        </div>
        </q-card>
    </q-dialog>
    <div v-if="$q.screen.sm || $q.screen.md || $q.screen.lg" class="wrapper constrain-3">
      <section class="our-listing bgc-f7 pb30-991 pt100-360">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
                <div class="row justify-around">
                  <div class="col-7">
                    <div class="row items-center">
                    <div class="grid_list_search_result full-width">
                      <div class="left_area tac-xsd">
                        <p> {{ total }} Resultados</p>
                    </div>
                  </div>
                        <div v-for="info in infos" :key="info._id" class="q-mt-none col-12">
                              <div class="feat_property list">
                                <div class="thumb" style="height:200px">
                                  <q-img 
                                    class="img-whp"
                                    style="width:100%;height:100%"
                                    :src="`http://localhost:3000/${info.images[0]}`"
                                   />
                                </div>
                                <div class="details">
                                  <div class="tc_content">
                                    <div class="dtls_headr">
                                      <ul class="tag">
                                        <li class="list-inline-item full-width q-px-md">
                                         <a href="#">
                                           {{ info.category }}
                                         </a>
                                        </li>
                                      </ul>
                                      <a class="fp_price" href="#">$13,000<small>/mo</small></a>
                                    </div>
                                    <h4>{{ info.name || info.onwner }}</h4>
                                    <div style="max-width: 350px">
                                    <q-list>
                                      <q-item dense>
                                        <q-item-section>
                                          <q-item-label class="text-subtitle1" lines="4">
                                              sksjkjdjddkjdkdkkkkkkkkkkkkkkkkkkkkkkkdkdkdkdkdkdkdkdkdkdkdkdkddkdkdkkd
                                          </q-item-label>
                                        </q-item-section>
                                      </q-item>
                                    </q-list>
                                    </div>
                                     <div class="float-right">
                                    <q-btn flat round color="primary" icon="image" @click="getSlide(info.images)">
                                      <q-tooltip>
                                        Outras imagens
                                      </q-tooltip>
                                    </q-btn>
                                    <q-btn flat round color="primary" icon="visibility">
                                      <q-tooltip>
                                        Mais detalhes
                                      </q-tooltip>
                                    </q-btn>
                                  </div>
                                  </div>
                                </div>
                              </div>
                        </div>
                    </div>
                  </div>
               <div class="col-4">
                <div class="sidebar_listing_grid1 dn-991">
                  <div class="sidebar_listing_list">
                    <div class="sidebar_advanced_search_widget">
                      <h4 class="title mb25">Criterios de busca</h4>
                     	<div class="row q-gutter-y-md">
                          <q-input class="col-12" dense v-model="modelSearch" :autofocus="isFocused" outlined placeholder="Buscar por...">
                            <template v-slot:prepend>
                              <q-icon name="search" size="xs"/>
                            </template>
                          </q-input>	
                          <q-select class="col-12" label="Buscar por" v-model="searchPeopleOrDocument" dense outlined :options="['Pessoas', 'Documentos']">
                            <template v-slot:prepend>
                              <q-icon name="location_on" size="xs"/>
                            </template>
                          </q-select>
                            <q-select class="col-12" label="Categoria" v-model="modelCategory" dense outlined :options="categories">
                            <template v-slot:prepend>
                              <q-icon name="category" size="xs"/>
                            </template>
                          </q-select>
                          <q-select class="col-12" label="Provincia" v-model="modelProvince" :options="provinces" dense outlined>
                            <template v-slot:prepend>
                              <q-icon name="location_on" size="xs"/>
                            </template>
                          </q-select>
                          <q-btn class="col-12" label="Buscar" color="primary"/>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <div v-else>
        <div v-for="info in infos" :key="info._id">
           <q-card class="my-card q-my-sm">
         <q-avatar class="full-width" square size="220px">
           <q-img
            class="col"
            :src="`http://localhost:3000/${info.images[0]}`"
            style="width:100%;height:100%"
          />
         </q-avatar>
          <q-list class="q-my-md">
              <q-item dense>
                <q-badge dense color="primary">
                    <q-item-label>{{ info.category }}</q-item-label>
                </q-badge>
              </q-item>
              <q-item dense>
                  <q-item-label><h4>{{ info.name || info.onwner }}</h4></q-item-label>
              </q-item>
              <q-item dense>
                 <div style="max-width: 350px">
                  <q-list>
                    <q-item dense>
                      <q-item-section>
                        <q-item-label caption lines="4">{{ info.description }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                  </div>
              </q-item>
          </q-list>
          <q-card-actions align="left">
             <q-toggle v-if="submited" color="primary" label="Aceitar" v-model="accepted" :val="info._id" />
             <q-btn flat round color="primary" icon="image" @click="getSlide(info.images)">
                  <q-tooltip>
                     Outras imagens
                  </q-tooltip>
                </q-btn>
                <q-btn flat round color="primary" icon="visibility">
                  <q-tooltip>
                     Mais detalhes
                  </q-tooltip>
                </q-btn>
          </q-card-actions>
        </q-card>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { fetch } from '../controllers/fecthAPIController'

export default {
  mixins: [fetch],
  props: {
    infos: Array,
    submited: Boolean,
    total: Number,
    type: String
  },
  computed: {
    ...mapState('provinces', ['provinces', 'selectedProvince'])
  },
  data () {
    return {
      accepted: [],
      slidesImage: [],
      slide: 1,
      isFocused: false,
      zoom: false
    }
  },
  methods: {
    ...mapActions('provinces', ['setProvinces']),
    getSlide (data) {
      this.slidesImage = data
      this.zoom = true
    }
  },
  watch: {
    accepted (newValue) {
      this.$emit('submited', newValue)
    }
  }
}
</script>

<style>
  .my-card {
    width: 100%;
  }
</style>
