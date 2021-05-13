<template>
  <q-tabs
      indicator-color="transparent"
      active-color="primary"
      shrink stretch
      no-caps
      align="right"
      exact
      class="bg-white text-grey-8"
    >
    <q-route-tab
        v-for="(option, index) in options"
        :key="index"
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
