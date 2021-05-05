<template>
  <div>
    <form @submit="senData()">
    <q-scroll-area style="height: 200px">
     <q-dialog v-model="showDialog" persistent>
        <q-card style="min-width: 380px">
          <div class="text-subtitle text-grey-8 q-pa-md">{{ title }}</div>
          <q-separator/>
         <div class="q-pa-sm">
            <q-card-section v-for="(input, index) in listInput" :key="index" class="q-pt-none">
              <div class="row" v-if="input.type==='file'">
             <q-item-label class="q-mt-md q-mb-sm text-grey-8">
                    {{ input.label }}
             </q-item-label>
            <q-file
              v-model="inputModels[input['field']]"
              :rules="input.rules"
              class="full-width"
              outlined
              dense
            >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </div>
            <div v-else-if="input.type==='check' && input.checks">
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
                  :rules="input.rules"
                  :val="check.val"
                  :label="check.label"
                />
              </q-item>
            </q-list>
            </div>
            <div v-else-if="input.type==='check'">
                <q-checkbox
                  v-model="inputModels[input['field']]"
                  :rules="input.rules"
                  :label="input.label"
                />
            </div>
             <div v-else-if="input.type==='select'">
               <q-item-label class="text-grey-8">
                 {{ input.label }}
                </q-item-label>
                  <q-select
                    v-model="inputModels[input['field']]"
                    :rules="input.rules"
                    dense
                    emit-value
                    map-options
                    :options="input.options"
                    class="q-my-sm"
                    outlined
                    square
                  />
            </div>
            <div v-else>
               <q-item-label class="text-grey-8">
                 {{ input.label }}
                </q-item-label>
                  <q-input
                    v-model="inputModels[input['field']]"
                    :rules="input.rules"
                    dense
                    class="q-my-sm"
                    outlined
                    square
                    :type="input.type"
                />
            </div>
            </q-card-section>
            <q-card-actions align="right" class="text-primary">
               <q-btn label="Guardar" type="submit" flat color="primary"/>
                <q-btn flat label="Cancelar" @click="show=false"/>
            </q-card-actions>
          </div>
      </q-card>
     </q-dialog>
    </q-scroll-area>
    </form>
  </div>
</template>

<script>
import { formController } from '../controllers/formController'
export default {
  mixins: [formController],
  props: {
    title: String,
    listInput: Array,
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputModels: {}
    }
  },
  computed: {
    showDialog () {
      return this.show
    }
  }
}
</script>

<style>

</style>
