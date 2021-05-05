<template>
  <ango-page>
    <template v-slot:header>
      <ango-header title="Znat Technology" subtitle="Utililizadores">
         <template v-slot:right>
           <q-btn flat color="primary" label="Registrar" to="/utilizador/registrar"/>
         </template>
      </ango-header>
    </template>
    <template v-slot:main>
      <ango-table
        class="full-width"
        title="Todos anuncios"
        :data="data"
        :headers="headers"
        :actions="actions"
        @rowClick="handleApi($event)"
      />
    </template>
  </ango-page>
</template>

<script>

import { User } from '../../../models/user'
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
      headers: User.table.header,
      actions: User.table.actions
    }
  },
  computed: {
    ...mapState('users', ['activeUsers'])
  },
  methods: {
    ...mapActions('users', ['setActiveUsers', 'deleteUser']),
    async delUser (btn) {
      await this.deleteUser(btn.row_data._id)
      setTimeout(() => {
        this.getUsers()
      }, 1500)
    },
    async handleApi (btn) {
      switch (btn.action) {
        case 'DELETE':
          await this.delUser(btn)
          break
        case 'EDIT':
          this.$router.push({ path: btn.to })
          window.info = btn.row_data
          break
      }
    },
    async getUsers () {
      await this.setActiveUsers()
      this.data = this.activeUsers
    }
  },
  mounted () {
    this.getUsers()
  }
}
</script>

<style>

</style>
