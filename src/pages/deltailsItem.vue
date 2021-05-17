<template>
  <q-page class="constrain-2">
    <div class="row q-my-xl">
      <div class="col">
        <q-carousel swipeable animated v-model="slide" thumbnails infinite>
          <q-carousel-slide
            v-for="(img, index) in data.images"
            :key="index"
            :name="index + 1"
            :img-src="`http://localhost:3000/${img}`"
          />
        </q-carousel>
      </div>
      <div class="col">
        <div class="q-mx-md">
          <div class="row">
            <div class="col-md-12">
              <div class="additional_details">
                <div class="row">
                  <div class="col-lg-12">
                    <h4 class="mb15"></h4>
                  </div>
                  <div class="col-md-12 col-lg-6 col-xl-4">
                    <ul v-if="!data.name" class="list-inline-item">
                      <li><p>Proprietario:</p></li>
                      <li><p>Categoria:</p></li>
                      <li><p>Localizacao:</p></li>
                    </ul>
                    <ul v-else class="list-inline-item">
                      <li><p>Nome:</p></li>
                      <li><p>Categoria:</p></li>
                      <li><p>Idade:</p></li>
                      <li><p>Localizacao:</p></li>
                    </ul>
                    <ul class="list-inline-item">
                      <li>
                        <p>
                          <span>{{ data.name || data.onwner }}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>{{ data.category }}</span>
                        </p>
                      </li>
                      <li v-if="data.name">
                        <p>
                          <span>{{ data.age }}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>
                            <q-btn
                              label="Lar do Zola, Luanda"
                              icon="location_on"
                              flat
                              no-caps
                            >
                              <q-tooltip>
                                Clicar para ver a localizaçao no map
                              </q-tooltip>
                            </q-btn>
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 q-mt-md">
			  <q-list class="bg-white" style="height:148px">
				  <q-separator />
      <q-item-label header>Descriçao</q-item-label>

      <q-item>
        <q-item-section>
          <q-item-label caption>{{ data.description }}</q-item-label>
        </q-item-section>
      </q-item>
			  </q-list>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      data: window.info,
    };
  },
};
</script>

<style></style>
