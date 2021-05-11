<template>
  <div>
    <q-tabs
      indicator-color="transparent"
      inline-label
      active-color="primary"
      no-caps
       dense
      class="bg-white text-grey-8"
    >
    <q-route-tab
        v-for="(option, index) in options"
        :key="index"
        class="q-mx-md"
        :icon="option.icon"
        :to="option.to"
    >
      <q-tooltip
         transition-show="scale"
        transition-hide="scale"
      >
        {{ option.tooltip }}
      </q-tooltip>
    </q-route-tab>
    </q-tabs>
  </div>
</template>

<script>
export default {
  props: {
    options: [Array, Object]
  }
}
</script>

<style lang="scss">
 .q-tabs__content {
   padding: 1px;
 }
</style>
