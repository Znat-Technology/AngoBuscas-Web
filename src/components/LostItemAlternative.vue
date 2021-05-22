<template>
  <div>
    <q-dialog v-model="zoom">
      <q-card style="width: 400px; max-width: 80vw">
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
              :name="index + 1"
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
    <div class="row justify-center">
      <div class="col-sm-12 col-md-11 col-xs-12 col-lg-12 col-xl-12">
        <!--q-carousel
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
          <q-carousel-slide
            v-for="(slides, ind) in 4"
            :key="ind"
            :name="ind + 1"
            class="column no-wrap"
          >
            <div
              class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
            >
              <q-img
                v-for="(infoBanner, index) in bannerData[ind]"
                :key="index"
                class="rounded-borders-x col-3 full-height"
                :src="infoBanner.images[0]"
              >
                <div class="absolute-bottom bg-transparent">
                  <div
                    class="text-caption q-px-sm rounded-borders text-bold bg-xxxx"
                  >
                    {{ infoBanner.name }}
                  </div>
                </div>
              </q-img>
            </div>
          </q-carousel-slide>
        </q-carousel-->
        <div v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
          <div class="q-mt-md our-listing bgc-f7 pb30-991 pt100-360">
            <div class="container">
              <div class="row">
                <div
                  v-for="info in infos"
                  :key="info._id"
                  class="q-mt-none col-sm-6 col-md-4 col-lg-4 col-xl-3"
                >
                  <card-vertical :info="info" />
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
        <card-vertical :info="info" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { fetch } from "../controllers/fecthAPIController";

export default {
  mixins: [fetch],
  props: {
    infos: Array,
    submited: Boolean,
    total: Number,
    type: String,
  },
  components: {
    "card-vertical": require("components/viewVertical.vue").default,
    "card-horizontal": require("components/viewHorizontal.vue").default,
  },
  computed: {
    ...mapState("provinces", ["provinces", "selectedProvince"]),
  },
  data() {
    return {
      accepted: [],
      slidesImage: [],
      slide: 1,
      autoplay: true,
      isFocused: false,
      slideBanner: 1,
      zoom: false,
      bannerData: [],
    };
  },
  methods: {
    ...mapActions("provinces", ["setProvinces"]),
    getSlide(data) {
      this.slidesImage = data;
      this.zoom = true;
    },
    async getFirst() {
      let response = await this.$axios.get(`${process.env.API}people/banner`);
      this.bannerData = response.data;
      this.bannerData = this.matrixify(this.bannerData, 4, 4);
      console.log(this.bannerData[0][0].images);
    },
    matrixify(array, n, m) {
      var result = [];
      for (var i = 0; i < n; i++) {
        result[i] = array.splice(0, m);
      }
      return result;
    },
  },
  created() {
    this.getFirst();
  },
  watch: {
    accepted(newValue) {
      this.$emit("submited", newValue);
    },
  },
};
</script>

<style lang="scss">
.bg-xxxx {
  background-color: rgba(0, 0, 0, 0.373);
}
</style>
