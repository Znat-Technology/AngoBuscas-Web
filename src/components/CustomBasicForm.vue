<template>
  <q-form :dense="$q.screen.lt.xs" class="full-width q-my-md" @submit.prevent.stop="sendData">
   <div class="row justify-between q-gutter-md bg-white  form-size full-width">
        <div class="col col-sm-5 col-md-5 col-xs-12">
        <div v-for="(input, index) in listInputLeft" :key="index">
           <div class="row" v-if="input.type==='file'">
             <q-item-label class="q-mt-md q-mb-sm text-grey-8">
                    {{ input.label }}
             </q-item-label>
            <q-file
              v-model="inputModels[input['field']]"
              :rules="input.rules"
              class="full-width q-my-md"
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
                <q-list class="full-width q-my-md" bordered>
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
        </div>
      </div>
      <div class="col col-sm-5 col-md-5 col-xs-12">
        <div v-for="(input, index) in listInputRight" :key="index">
           <div class="row" v-if="input.type==='file'">
              <q-item-label class="q-my-sm text-grey-8">
                    {{ input.label }}
             </q-item-label>
            <q-file
              v-model="inputModels[input['field']]"
              :ref="input['field']"
              :rules="input.rules"
              class="full-width q-my-md"
              outlined
              dense
            >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </div>
            <div v-else-if="input.type === 'check' && input.checks">
              <q-item-label class="q-mt-md q-mb-sm text-grey-8">
                    {{ input.label }}
                  </q-item-label>
                <q-list class="full-width q-my-md" bordered>
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
        </div>
        <div class="float-right q-mt-md">
              <q-btn label="Guardar" type="submit" color="primary"/>
        </div>
        </div>
    </div>
   </q-form>
</template>

<script>
export default {
  props: {
    listInputLeft: Array,
    listInputRight: Array
  },
  data () {
    return {
      inputModels: {}
    }
  },
  methods: {
    editForm () {
      if (window.info) {
        this.inputModels = window.info
      } else {
        this.initModels()
      }
    },
    sendData () {
      this.$emit('submit', this.inputModels)
    },
    show () {
      console.log(this.inputModels)
    },
    initModels () {
      this.listInputLeft.forEach(input => {
        if (input.type === 'check') {
          this.$set(this.inputModels, input.field, (input.checks) ? [input.checks[0].val] : false)
        }
      })
      this.listInputLeft.forEach(input => {
        if (input.type === 'check') {
          this.$set(this.inputModels, input.field, [input.checks[0].val])
        }
      })
    }
  },
  mounted () {
    this.editForm()
  }
}
</script>

<style>

</style>
