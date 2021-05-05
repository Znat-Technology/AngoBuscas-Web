<template>
  <ango-page>
    <template v-slot:header>
      <ango-header title="Znat Technology" subtitle="Empresas">
         <template v-slot:right>
           <q-btn flat color="primary" label="Registrar" to="/empresa/registrar"/>
         </template>
      </ango-header>
    </template>
    <template v-slot:main>
      <ango-table
        class="full-width"
        title="Empresas"
        :data="data"
        :headers="headers"
        :actions="actions"
        @rowClick="handleApi($event)"
      />
    </template>
  </ango-page>
</template>

<script>

import { Company } from '../../../models/company'
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
      headers: Company.table.header,
      actions: Company.table.actions
    }
  },
  computed: {
    ...mapState('company', ['activeCompany'])
  },
  methods: {
    ...mapActions('company', ['setActiveCompany', 'deleteCompany']),
    async delCompany (btn) {
      await this.deleteCompany(btn.row_data._id)
      setTimeout(() => {
        this.getCompany()
      }, 1500)
    },
    async handleApi (btn) {
      switch (btn.action) {
        case 'DELETE':
          await this.delCompany(btn)
          break
        case 'EDIT':
          window.info = btn.row_data
          window.id = btn.row_data._id
          this.$router.push({ path: btn.to })
          break
      }
    },
    async getCompany () {
      await this.setActiveCompany()
      this.data = this.activeCompany
      console.log(this.data)
    }
  },
  mounted () {
    this.getCompany()
  }
}
</script>

<style>

</style>
