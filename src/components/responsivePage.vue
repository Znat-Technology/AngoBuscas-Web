<template>
  <q-page class="q-pa-md bg-grey-2">
    <slot name="header"></slot>
  <div class="row justify-between q-pa-md bg-white">
      <slot name="main"></slot>
  </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      permissions: [
        'dashboard',
        'utilizadores',
        'empresas',
        'entidades',
        'instituicoes',
        'categorias',
        'anuncios'
      ]
    }
  }
}
</script>

<style>

</style>
