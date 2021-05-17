<template>
  <div class="q-mx-sm">
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
              @click="setDataDetails(info)"
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
    info: Object
  },
  methods: {
    setDataDetails(info) {
      window.info = info;
      this.$router.push("/detalhe");
    }
  }
}
</script>

<style></style>
