<template>
  <div>
      <q-card flat bordered class="my-card q-my-sm q-mx-sm">
            <q-avatar class="full-width" square>
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
</template>

<script>
export default {
  props: {
    info: Object
  }
}
</script>

<style>

</style>