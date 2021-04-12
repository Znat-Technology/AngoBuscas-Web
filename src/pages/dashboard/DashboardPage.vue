<template>
  <q-page class="container q-pa-lg">
    <q-item-label class="text-h5 text-grey-8 q-my-lg">Bem vindo ao Painel do AngoBuscas</q-item-label>
     <div class="row justify-between q-gutter-md q-pa-lg">
       <q-card v-for="(item, index) in items" :key="index" class="col col-sm-3 col-xs-12 my-card">
         <q-item>
           <q-item-section class="text-h5 text-grey-8">
             {{ item.total }}
           </q-item-section>
          <q-item-section avatar>
             <q-avatar color="grey-2" size="60px">
               <q-icon color="primary" :name="item.icon"/>
             </q-avatar>
           </q-item-section>
         </q-item>
          <q-item>
           <q-item-section>
             {{ item.label }}
           </q-item-section>
         </q-item>
       </q-card>
     </div>
  </q-page>
</template>

<script>
export default {
  created () {
    console.log('From Dashboard Page')
    console.log(this.$q.sessionStorage.getItem('name'))
  },
  data () {
    return {
      items: [
        {
          label: 'Visualizacoes',
          icon: 'story',
          total: 0
        },
        {
          label: 'Documentos',
          icon: 'eva-file-outline',
          total: 0
        },
        {
          label: 'Pessoas',
          icon: 'eva-person-outline',
          total: 0
        }
      ]
    }
  }
}
</script>

<style>

</style>
