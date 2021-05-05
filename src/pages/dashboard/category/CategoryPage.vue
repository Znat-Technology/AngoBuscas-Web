<template>
  <ango-page>
    <template v-slot:header>
      <ango-header title="Znat Technology" subtitle="Categorias">
         <template v-slot:right>
           <q-btn flat color="primary" label="Registrar" to="/categoria/registrar"/>
         </template>
      </ango-header>
    </template>
    <template v-slot:main>
      <ango-table
        class="full-width"
        title="Categorias"
        :data="data"
        :headers="headers"
        :actions="actions"
        @rowClick="handleApi($event)"
      />
    </template>
  </ango-page>
</template>

<script>

import { Category } from '../../../models/category'
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
      headers: Category.table.header,
      actions: Category.table.actions
    }
  },
  computed: {
    ...mapState('category', ['activeCategory'])
  },
  methods: {
    ...mapActions('category', ['setActiveCategory', 'deleteCategory']),
    async delCategory (btn) {
      await this.deleteCategory(btn.row_data._id)
      setTimeout(() => {
        this.getCategory()
      }, 1500)
    },
    async handleApi (btn) {
      switch (btn.action) {
        case 'DELETE':
          await this.delCategory(btn)
          break
        case 'EDIT':
          window.info = btn.row_data
          window.id = btn.row_data._id
          this.$router.push({ path: btn.to })
          break
      }
    },
    async getCategory () {
      await this.setActiveCategory()
      this.data = this.activeCategory
      console.log(this.data)
    }
  },
  mounted () {
    this.getCategory()
  }
}
</script>

<style>

</style>
