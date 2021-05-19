<template>
  <div class="q-mx-xs">
        <q-dialog
      v-model="dialodCad"
      persistent
      :maximized="maximizedToggle"
       transition-show="slide-left"
      transition-hide="slide-right"
    >
        <q-card class="bgc-f7 pb30-991 pt100-360 text-white">
          <q-bar class="bg-primary">
            <q-btn
              dense
              flat
              no-caps
              :label="!$q.screen.xs ? 'Voltar' : ''"
              :round="$q.screen.xs"
              icon="arrow_back"
              v-close-popup
            >
            </q-btn>
            <q-space />
            <q-item-label class="text-bold">
              {{ titleDetail }}
            </q-item-label>
            <q-space />
          </q-bar>

        <q-card-section v-if="!$q.screen.xs && feedbackDone"> 
          hh
        </q-card-section>
        <div>
          <div v-if="!feedbackDone" class="constrain-2">
            <div class="q-gutter-sm">
              <q-banner
                inline-actions
                class="bg-grey-4 q-mb-xl text-grey-8 text-center"
              >
                A plataforma AngoBuscas vai ocultar o seu documento das buscas
                assim que confirmares que ja o tens em sua posse, por favor
                digite o seu email e o n° telefone para dares um feedback, em
                seguida veras os detalhes!
              </q-banner>
            </div>
            <q-form @submit="send" class="constrain-4 q-px-md">
              <q-input
                v-model="liftingData.email"
                :rules="[(val) => !!val || 'Este campo eh obrigatorio']"
                class="full-width"
                outlined
                dense
                square
                type="text"
                label="Email"
              >
                <template v-slot:prepend>
                  <q-icon name="email" size="xs" />
                </template>
              </q-input>
              <q-input
                v-model="liftingData.telephone_number"
                :rules="[(val) => !!val || 'Este campo eh obrigatorio']"
                class="full-width q-my-sm"
                outlined
                dense
                square
                type="text"
                label="N° telefone"
                prefix="+244"
                mask="#########"
              >
                <template v-slot:prepend>
                  <q-icon name="phone" size="xs" />
                </template>
              </q-input>
              <div class="row">
                <q-btn class="full-width" label="Enviar" type="submit" color="primary" />
              </div>
            </q-form>
          </div>
          <div v-else class="row constrain">
            <div class="col col-md-6 col-lg-6 col-xl-6 col-xs-12">
              <q-carousel
                swipeable
                animated
                v-model="slide"
                navigation
                control-color="primary"
                infinite
              >
                <q-carousel-slide
                  v-for="(img, index) in data.images"
                  :key="index"
                  :name="index + 1"
                  :img-src="{img}"
                />
              </q-carousel>
            </div>
            <div class="col col-md-6 col-xs-12">
              <div :class="(!$q.screen.xs) ?'q-mx-xs' : ''">
                 <q-list
                bordered
                padding
                class="text-grey-8 text-body2 text-bold bg-white rounded-borders"
              >
                <q-item clickable v-ripple>
                  <q-item-section side>
                    <q-icon name="assignment" size="xs" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{
                      !data.name ? "Proprietario" : "Nome"
                    }}</q-item-label>
                    <q-item-label caption>
                      {{ data.name || data.onwner }}
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section side>
                    <q-icon name="category" size="xs" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Categoria</q-item-label>
                    <q-item-label caption>
                      {{ data.category }}
                    </q-item-label>
                  </q-item-section> </q-item
                ><q-item clickable v-ripple v-if="data.name">
                  <q-item-section side>
                    <q-icon name="event" size="xs" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Idade</q-item-label>
                    <q-item-label caption>
                      {{ data.age }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section side>
                    <q-icon name="location_on" size="xs" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Localizacao</q-item-label>
                    <q-item-label caption> Lar do Zola, Luanda </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
              <q-list
                bordered
                padding
                style="min-height: 180px"
                class="q-mt-xs text-grey-8 bg-white rounded-borders"
              >
                <q-item>
                  <q-item-section side>
                    <q-icon name="assignment" size="xs" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Descriçao</q-item-label>
                    <q-item-label caption>
                      {{ data.description }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
              </div>
            </div>
          </div>
        </div>
      </q-card>
    </q-dialog>
    <!-- Listagem dos items -->
    <q-card flat>
      <div class="feat_property home7 style4">
        <q-avatar class="full-width" size="200px" square>
          <q-img
            class="col"
            src="~assets/perfil.jpg"
            style="width: 100%; height: 100%"
          />
        </q-avatar>
        <div class="details">
          <div class="q-pa-sm">
            <p class="text-thm">
              <q-badge dense color="primary">
                <q-item-label>{{ info.category }}</q-item-label>
              </q-badge>
            </p>
            <div class="text-subtitle1">
              {{ info.name || info.onwner }}
            </div>
            <p>
              <q-item-label caption lines="2">
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </q-item-label>
            </p>
          </div>
          <div>
            <q-toggle
              v-if="submited"
              color="primary"
              label="Aceitar"
              v-model="accepted"
              :val="info._id"
            />
            <q-btn
              flat
              round
              color="primary"
              icon="image"
              @click="getSlide(info.images)"
            >
              <q-tooltip> Outras imagens </q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              color="primary"
              icon="visibility"
              @click="showInfo(info)"
            >
              <q-tooltip> Mais detalhes </q-tooltip>
            </q-btn>
            <div class="float-right text-caption q-mx-sm">4 years ago</div>
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  data() {
    return {
      data: {},
      feedbackDone: false,
      liftingData: {
        documents: "",
        email: "",
        telephone_number: "",
      },
      dialodCad: false,
      maximizedToggle: true,
      slide: 1,
    };
  },
  computed: {
    titleDetail() {
      return this.data.onwner ? "Detalhes do documento" : "Detalhes da pessoa";
    },
  },
  methods: {
    showInfo(info) {
      this.dialodCad = true;
      this.data = info;
    },
    async send() {
      this.liftingData.documents = this.data._id;
      try {
        this.$q.loading.show();
        await this.$axios.post(
          `${process.env.API}lifting/register`,
          this.liftingData
        );
        setTimeout(() => {
          this.$q.loading.hide();
          this.$q.notify({
            message: "Obrigado por colabar, a plataforma agradece!!",
            icon: "done",
            color: "positive",
          });
          this.$emit("ok", null);
          this.feedbackDone = true
        }, 2000);
      } catch (error) {
        this.$q.notify({
          message: "Falha ao submeter, por favor tente novamente.",
          icon: "warning",
          color: "negative",
        });
      }
    },
  },
};
</script>

<style></style>
