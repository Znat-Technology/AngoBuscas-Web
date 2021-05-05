<template>
    <div class="row bg-white justify-between q-mb-md">
        <q-item>
            <q-item-section side>
                <q-avatar size="100px">
                <q-img src="~assets/znat.jpg"/>
              </q-avatar>
            </q-item-section>
            <q-item-section class="text-h6">
              <q-item-label class="text-grey-8">
                {{ title }}
              </q-item-label>
              <q-item-label class="full-width" caption>
                 {{ subtitle }}
              </q-item-label>
            </q-item-section>
        </q-item>
        <div class="q-my-auto q-mr-sm">
           <slot name="right"></slot>
        </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style>

</style>
