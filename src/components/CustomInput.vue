<template>
     <div>
        <div class="row" v-if="input.type==='file'">
        <q-file
            v-model="inputModels[input['field']]"
            class="full-width"
            :label="input.label"
            outlined
            dense
        >
            <template v-slot:prepend>
              <q-icon :name="input.icon" />
            </template>
            </q-file>
        </div>
        <div v-else-if="input.type==='check'">
            <q-item-label class="q-mt-md q-mb-sm text-grey-8">
            {{ input.label }}
            </q-item-label>
        <q-list class="full-width" bordered>
            <q-item
                v-for="(check, index) in input.checks"
                :key="index"
                dense
            >
            <q-checkbox
                v-model="inputModels[input['field']]"
                :val="check.val"
                :label="check.label"
            />
            </q-item>
        </q-list>
        </div>
        <div v-else>
            <q-item-label class="text-grey-8">
                {{ input.label }}
            </q-item-label>
                <q-input
                v-model="model"
                dense
                class="q-my-md"
                outlined
                square
                :type="input.type"
            />
        </div>  
    </div>
</template>

<script>
export default {
  props: {
    input: Object,
  },
  data () {
    return {
      inputModels: {}
    }
  },
  methods: {
    show () {
      console.log(this.model)
    }
  },
  watch: {
    model: function (Oldvalue, newValue) {
      this.$emit('model', newValue)
    }  
  }
}
</script>

<style>

</style>
