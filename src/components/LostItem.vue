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
                  :img-src="img"
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
    <div class="row justify-around">
     <div class="col-10 col-sm-10 col-md-10 col-xs-12">
       <q-list class="full-width q-pa-md bg-white q-my-sm" bordered>
        <q-item-label class="text-grey-8">
            {{ total }} Resultados
        </q-item-label>
      </q-list>
      <div v-for="info in infos" :key="info._id">
        <q-card v-if="$q.screen.sm || $q.screen.md || $q.screen.lg" class="my-card q-my-sm" flat bordered>
            <q-card-section horizontal>
              <q-avatar square size="200px">
                <q-img
                  class="col"
                  style="width:100%;height:100%"
                  :src="info.images[0]"
                />
              </q-avatar>
               <div
                  class="col"
                >
            <q-list v-if="type==='Documento'" class="q-my-md" >
                 <q-item>
                <q-item-section>
                  <q-item-label>Categoria</q-item-label>
                  <q-item-label caption lines="2">{{ info.category }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Proprietario</q-item-label>
                  <q-item-label caption lines="2"> {{ info.onwner }} </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Descriçao</q-item-label>
                  <q-item-label caption lines="2">{{ info.description }}</q-item-label>
                </q-item-section>
              </q-item>
          </q-list>
           <q-list v-else>
                 <q-item>
                <q-item-section>
                  <q-item-label>Tipo de pessoa</q-item-label>
                  <q-item-label caption lines="2">{{ info.category }}</q-item-label>
                </q-item-section>
              </q-item>
               <q-item>
                <q-item-section>
                  <q-item-label>Nome</q-item-label>
                  <q-item-label caption lines="2"> {{ info.name }} </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Idade</q-item-label>
                  <q-item-label caption lines="2"> {{ info.age }} </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Descriçao</q-item-label>
                  <q-item-label caption lines="2">{{ info.description }}</q-item-label>
                </q-item-section>
              </q-item>
          </q-list>
               </div>
              <q-card-actions vertical class="justify-around">
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
            </q-card-section>
      </q-card>
       <q-card v-else class="my-card q-my-sm">
         <q-avatar class="full-width" square size="220px">
           <q-img
            class="col"
            :src="info.images[0]"
            style="width:100%;height:100%"
          />
         </q-avatar>
          <q-list v-if="type==='Documento'">
                 <q-item dense>
                <q-item-section>
                  <q-item-label>Categoria</q-item-label>
                  <q-item-label caption lines="2">{{ info.category }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item dense>
                <q-item-section>
                  <q-item-label>Proprietario</q-item-label>
                  <q-item-label caption lines="2"> {{ info.onwner }} </q-item-label>
                </q-item-section>
              </q-item>
              <q-item dense>
                <q-item-section>
                  <q-item-label>Descriçao</q-item-label>
                  <q-item-label caption lines="2">{{ info.description }}</q-item-label>
                </q-item-section>
              </q-item>
          </q-list>
           <q-list v-else>
                 <q-item dense>
                <q-item-section>
                  <q-item-label>Tipo de pessoa</q-item-label>
                  <q-item-label caption lines="2">{{ info.category }}</q-item-label>
                </q-item-section>
              </q-item>
               <q-item dense>
                <q-item-section>
                  <q-item-label>Nome</q-item-label>
                  <q-item-label caption lines="2"> {{ info.name }} </q-item-label>
                </q-item-section>
              </q-item>
              <q-item dense>
                <q-item-section>
                  <q-item-label>Idade</q-item-label>
                  <q-item-label caption lines="2"> {{ info.age }} </q-item-label>
                </q-item-section>
              </q-item>
              <q-item dense>
                <q-item-section>
                  <q-item-label>Descriçao</q-item-label>
                  <q-item-label caption lines="2">{{ info.description }}</q-item-label>
                </q-item-section>
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
  </div>
</template>

<script>
export default {
  props: {
    infos: Array,
    submited: Boolean,
    total: Number,
    type: String
  },
  data () {
    return {
      accepted: [],
      slidesImage: [],
      slide: 1,
      zoom: false
    }
  },
  methods: {
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
