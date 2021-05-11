<template>
  <div>
      <div class="row q-mx-sm">
          <div class="col-sm-12 col-md-8 col-xs-12 col-lg-8 col-xl-8">
            <div v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
                <div class="q-mt-md our-listing bgc-f7 pb30-991 pt100-360">
                <div class="container">
                    <div class="row q-mx-lg justify-center">
                      <div v-for="info in 5" :key="info" class="q-mt-none col-12">
                          <div class="feat_property list">
                              <q-card-section horizontal>
                                <q-skeleton animation="fade" height="210px" width="230px" square />
                              </q-card-section>
                            <div class="details">
                              <div class="tc_content">
                                <div class="dtls_headr">
                                    <q-item-label style="width:50px">
                                          <q-skeleton animation="fade" type="text" />
                                    </q-item-label>
                                  <a class="fp_price" href="#"> <q-item-label style="width:50px">
                                          <q-skeleton animation="fade" type="text" />
                                    </q-item-label> </a>
                                </div>
                                  <q-card-section class="q-pt-xs">
                                    <q-item-label caption>
                                      <q-skeleton animation="fade" type="text" />
                                    </q-item-label>
                                    <q-item-label v-for="i in 5" :key="i" caption>
                                      <q-skeleton animation="fade" type="text"/>
                                    </q-item-label>
                                  </q-card-section>
                                  <div class="float-right row  q-mb-sm">
                                    <q-skeleton animation="fade" class="q-mr-xs" height="34px" width="34px" dense type="QAvatar" />
                                    <q-skeleton animation="fade" height="34px" width="34px" type="QAvatar" />
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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
