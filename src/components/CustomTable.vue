<template>
  <div class="container">
    <q-table
      class="full-width"
      :dense="$q.screen.lt.md"
      :visible-columns="visible"
      :title="title"
      separator="vertical"
      :data="data"
      :columns="headers"
      row-key="name"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisar">
            <template v-slot:append>
            <q-icon name="search" />
            </template>
        </q-input>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th class="text-left"
            v-for="col in props.cols"
            :key="col.name"
          >
            {{ col.label }}
          </q-th>
          <q-th v-if="actions.length" class="text-center">
            Gerir
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            v-for="(col, index) in props.cols"
            :key="index"
          >
            {{ col.value }}
          </q-td>
           <q-td class="text-center">
             <div>
                <q-btn v-for="(btn, index) in actions" :key="index"
                  :icon="btn.icon"
                  round
                  flat
                  :to="btn.to"
                  :color="btn.color"
                  size="14px"
                  @click="getInfoRow({ row_data: props.row, action: btn.action, to: btn.to })"
                />
             </div>
           </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    headers: Array,
    visible: Array,
    actions: Array,
    title: String
  },
  data () {
    return {
      filter: ''
    }
  },
  methods: {
    getInfoRow (data) {
      this.$emit('rowClick', data)
    }
  }
}
</script>

<style>

</style>
