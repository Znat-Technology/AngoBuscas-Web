<template>
  <div>
      <div v-for="info in 1" :key="info">
           <q-card class="my-card q-my-sm">
            <q-skeleton animation="fade" height="200px" square />
          <q-list class="q-my-md">
            <q-item-label>
              <q-skeleton animation="fade" type="text" />
            </q-item-label>
          </q-list>
              <q-card-section class="q-pt-xs">
                  <q-item-label caption>
                    <q-skeleton animation="fade" type="text" />
                  </q-item-label>
                <q-item-label v-for="i in 3" :key="i" caption>
                  <q-skeleton animation="fade" type="text"/>
                </q-item-label>
                </q-card-section>
          <q-card-actions align="left">
             <q-toggle v-if="submited" color="primary" label="Aceitar" v-model="accepted" :val="info._id" />
              <q-skeleton animation="fade" dense type="QBtn" />
              <q-skeleton animation="fade" type="QBtn" />
          </q-card-actions>
        </q-card>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>