<template>
  <q-page>
    <ango-form
      :listInputLeft="left"
      :listInputRight="right"
    />
  </q-page>
</template>

<script>
export default {
  compenents: {
    'ango-form': require('components/CustomBasicForm.vue').default
  },
  data () {
    return {
      left: [
        {
          label: 'Teste left',
          type: 'text',
          field: 'campo1'
        }
      ],
      right: [
        {
          label: 'Teste right',
          type: 'text',
          field: 'campo2'
        }
      ]
    }
  }
}
</script>

<style>

</style>
