<template>
  <q-page class="flex flex-center">
    <h1>Ango Buscas</h1>
  </q-page>
</template>

<script>
import { SessionStorage } from 'quasar'
setTimeout(() => {
  SessionStorage.clear()
  window.auth = false
}, 1000 * 60)
export default {
}
</script>

<style>

</style>
