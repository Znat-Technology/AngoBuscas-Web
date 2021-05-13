<template>
  <div>
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