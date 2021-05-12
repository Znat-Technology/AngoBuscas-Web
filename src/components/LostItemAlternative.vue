<template>
  <div>
    <q-dialog v-model="zoom">
        <q-card style="width: 400px; max-width: 80vw;">
        <div>
            <q-carousel
                animated
                v-model="slide"
                swipeable
                navigation
                control-color="primary"
                ref="carousel"
                infinite
            >
              <q-carousel-slide
                  v-for="(img, index) in slidesImage"
                  :key="index"
                  :name="index+1"
                  :img-src="img"
               >
              </q-carousel-slide>
              <!--template v-slot:control>
              <q-carousel-control
                position="bottom-right"
                :offset="[18, 18]"
                class="q-gutter-xs"
              >
            <q-btn
              push round dense color="primary" text-color="white" size="sm" icon="arrow_left"
              @click="$refs.carousel.previous()"
            />
            <q-btn
              push round dense color="primary" text-color="white" size="sm" icon="arrow_right"
              @click="$refs.carousel.next()"
            />
          </q-carousel-control>
        </template-->
            </q-carousel>
        </div>
        </q-card>
    </q-dialog>
          <!-- Divide em items procurados e anuncios -->
        <div class="row q-mx-sm">
          <div class="col-sm-12 col-md-8 col-xs-12 col-lg-8 col-xl-8">
            <q-carousel
              v-if="!$q.screen.xs && modelSearch === ''" 
              v-model="slideBanner"
              transition-prev="slide-right"
              transition-next="slide-left"
              swipeable
              infinite
              :autoplay="autoplay"
              animated
              control-color="primary"
              arrows
              height="260px"
              class="bg-transparent"
            >
              <q-carousel-slide v-for="(slides, ind) in 4" :key="ind" :name="ind+1" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                  <q-img v-for="(infoBanner, index) in bannerData[ind]" :key="index" class="rounded-borders-x col-3 full-height" :src="infoBanner.images[0]">
                   <div class="absolute-bottom bg-transparent">
                      <div class="text-caption q-px-sm rounded-borders text-bold bg-xxxx">{{ infoBanner.name }}</div>
                    </div>
                  </q-img>
                </div>
              </q-carousel-slide>
            </q-carousel>
            <div v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
                <div class="q-mt-md our-listing bgc-f7 pb30-991 pt100-360">
                <div class="container">
                    <div class="row q-mx-lg justify-center">
                      <div v-for="info in infos" :key="info._id" class="q-mt-none col-12">
                          <div class="feat_property list">
                            <div class="thumb" style="height:300px">
                              <q-img 
                                class="img-whp"
                                style="width:100%;height:100%"
                                :src="info.images[0]"
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
                                </div>
                                  <q-card-section class="q-pt-xs">
                                    <div class="text-subtitle1 text-bold">
                                      {{ info.name || info.onwner }}
                                    </div>
                                    <q-item-label caption lines="3">
                                    <div class="text-caption text-grey">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                    </q-item-label>
                                  </q-card-section>
                                  <div class="float-right">
                                <q-btn flat round color="primary" icon="image" @click="getSlide(info.images)">
                                  <q-tooltip>
                                    Outras imagens
                                  </q-tooltip>
                                </q-btn>
                                <q-btn flat round color="primary" @click="setDataDetails(info)" icon="visibility">
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
                </div>  
            </div>
          </div>
      </div>
      <!-- View para web-mobile -->
      <div v-if="$q.screen.xs || $q.screen.sm">
        <div v-for="info in infos" :key="info._id">
           <q-card class="my-card q-my-sm">
            <q-avatar class="full-width" square size="310px">
              <q-img
                class="col"
                :src="info.images[0]"
                style="width:100%;height:100%"
              />
            </q-avatar>
          <q-list class="q-my-md">
              <q-item dense>
                <q-badge dense color="primary">
                    <q-item-label>{{ info.category }}</q-item-label>
                </q-badge>
              </q-item>
          </q-list>
              <q-card-section class="q-pt-xs">
                  <div class="text-subtitle1">
                    {{ info.name || info.onwner }}
                  </div>
                  <q-item-label caption lines="3">
                    <div class="text-caption text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                  </q-item-label>
                </q-card-section>
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
      autoplay: true,
      isFocused: false,
      slideBanner: 1,
      zoom: false,
      bannerData: []
    }
  },
  methods: {
    setDataDetails (info) {
      window.info = info
      this.$router.push('/detalhe')
    },
    ...mapActions('provinces', ['setProvinces']),
    getSlide (data) {
      this.slidesImage = data
      this.zoom = true
    },
    async getFirst () {
      let response = await this.$axios.get(`${process.env.API}people/banner`)
      this.bannerData = response.data
      this.bannerData = this.matrixify(this.bannerData, 4, 4)
      console.log(this.bannerData[0][0].images)
    },
    matrixify(array, n, m) {
      var result = []
      for (var i = 0; i < n; i++) {
          result[i] = array.splice(0, m);
      }
      return result
    }
  },
  created () {
    this.getFirst()
  },
  watch: {
    accepted (newValue) {
      this.$emit('submited', newValue)
    }
  }
}
</script>

<style lang="scss">
  .my-card {
    width: 100%;
  }
  .bg-xxxx {
    background-color: rgba(0, 0, 0, 0.373);
  }
  .custom-caption{
    text-align: center;
    padding: 12px;
    color: white;
    background-color: red;
  }
  .rounded-borders-x {
    border-radius: 14px;
  }
</style>
