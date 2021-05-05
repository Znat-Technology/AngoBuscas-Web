<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="!$q.screen.xs" class="bg-white q-pa-sm" bordered>
      <q-toolbar class="bg-white">
        <q-toolbar-title class="text-white">
         <div class="row q-mt-xs">
           <div class=" text-grand-hotel text-weight-500 text-dark col">
              AngoBuscas
           </div>
           <l-tabs class="large-screen-only" :options="options"/>
         </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-footer class="small-screen-only">
       <q-tabs
           indicator-color="transparent"
           active-color="primary"
            no-caps
            class="bg-grey-2 text-dark"
          >
            <q-route-tab
              v-for="(option, index) in options"
              :key="index"
              class="q-mx-md"
              :icon="option.icon"
              :to="option.to"
            />
          </q-tabs>
    </q-footer>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  components: {
    'l-tabs': require('components/LocalTabs').default
  },
  data () {
    return {
      leftDrawerOpen: false,
      options: [
        {
          title: 'Inicio',
          name: 'menu',
          icon: 'home',
          label: 'Inicio',
          to: '/'
        },
        {
          title: 'Blog',
          name: 'location',
          label: 'Blog',
          to: '/',
          icon: 'rss_feed'
        },
        {
          title: 'Contactos',
          name: 'local',
          label: 'Contactos',
          icon: 'contact_support',
          to: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .q-toolbar__title {
    @media (max-width: $breakpoint-sm-max) {
      text-align: center;
    }
    font-size: 25px;
  }
  .font-text {
    font-size: 20px;
  }
  .q-footer .q-tab__icon{
    font-size: 22px;
  }
</style>>
