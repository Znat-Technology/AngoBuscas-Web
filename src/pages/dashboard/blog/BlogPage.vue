<template>
  <ango-page>
    <template v-slot:header>
      <ango-header title="Znat Technology" subtitle="Blog">
         <template v-slot:right>
           <q-btn flat color="primary" label="Noticia" to="/blog/registrar"/>
         </template>
      </ango-header>
    </template>
    <template v-slot:main>
      <ango-table
        class="full-width"
        title="Blog"
        :data="data"
        :headers="headers"
        :actions="actions"
        @rowClick="handleApi($event)"
      />
    </template>
  </ango-page>
</template>

<script>

import { Blog } from '../../../models/blog'
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
      headers: Blog.table.header,
      actions: Blog.table.actions
    }
  },
  computed: {
    ...mapState('blog', ['activeBlog'])
  },
  methods: {
    ...mapActions('blog', ['setActiveBlog', 'deleteBlog']),
    async delBlog (btn) {
      await this.deleteBlog(btn.row_data._id)
      setTimeout(() => {
        this.getBlog()
      }, 1500)
    },
    async handleApi (btn) {
      switch (btn.action) {
        case 'DELETE':
          await this.delBlog(btn)
          break
        case 'EDIT':
          window.info = btn.row_data
          window.id = btn.row_data._id
          this.$router.push({ path: btn.to })
          break
      }
    },
    async getBlog () {
      await this.setActiveBlog()
      this.data = this.activeBlog
      console.log(this.data)
    }
  },
  mounted () {
    this.getBlog()
  }
}
</script>

<style>

</style>
