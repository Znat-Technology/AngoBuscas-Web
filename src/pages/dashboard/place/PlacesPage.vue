<template>
  <ango-page>
    <template v-slot:header>
      <ango-header title="Znat Technology" subtitle="Institutos">
         <template v-slot:right>
           <q-btn flat color="primary" label="Registrar" to="/instituicao/registrar"/>
         </template>
      </ango-header>
    </template>
    <template v-slot:main>
      <ango-table
        class="full-width"
        title="Instituicoes"
        :data="data"
        :headers="headers"
        :actions="actions"
        @rowClick="handleApi($event)"
      />
    </template>
  </ango-page>
</template>

<script>

import { Place } from '../../../models/place'
import { notifies } from '../../../controllers/notifies'
import { mapActions, mapState } from 'vuex'

export default {
  mixins: [notifies],
  components: {
    'ango-page': require('components/responsivePage').default,
    'ango-header': require('components/headerPage').default,
    'ango-table': require('components/CustomTable').default
  },
  data () {
    return {
      data: [],
      headers: Place.table.header,
      actions: Place.table.actions
    }
  },
  computed: {
    ...mapState('place', ['activePlace'])
  },
  methods: {
    ...mapActions('place', ['setActivePlace', 'deletePlace']),
    async delPlace (btn) {
      await this.deletePlace(btn.row_data._id)
      setTimeout(() => {
        this.getPlace()
      }, 1500)
    },
    async handleApi (btn) {
      switch (btn.action) {
        case 'DELETE':
          await this.delPlace(btn)
          break
        case 'EDIT':
          window.info = btn.row_data
          window.id = btn.row_data._id
          this.$router.push({ path: btn.to })
          break
      }
    },
    async getPlace () {
      await this.setActivePlace()
      this.data = this.activePlace
      console.log(this.data)
    }
  },
  mounted () {
    this.getPlace()
  }
}
</script>

<style>

</style>
