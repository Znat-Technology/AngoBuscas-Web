<template>
  <div>
          <div v-if="!submited" class="col-3 col-sm-3 col-md-3 col-xs-12 q-mt-sm">
      <q-list class="q-py-sm q-px-sm" style="min-height:250px" bordered>
         <q-select
          class="q-my-sm"
           outlined
           square
            dense
            :options="['osos', 'oso']"
            label="Categoria"
         />
          <q-select
          class="q-my-sm"
           outlined
           square
            dense
            :options="['osos', 'oso']"
            label="Local"
         >
           <template v-slot:prepend>
             <q-icon name="location_on" size="xs"/>
           </template>
        </q-select>
        <div class="row q-gutter-xs q-my-sm">
            <q-input
              class="col"
              dense
              outlined
              square
              v-model="date"
              filled type="date"
              hint="Data inicial"
            />
            <q-input
              class="col"
              outlined
              square
              dense
              v-model="date"
              filled type="date"
              hint="Data final"
            />
        </div>
        <q-btn class="full-width q-mt-lg" color="primary" label="Filtrar"/>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
