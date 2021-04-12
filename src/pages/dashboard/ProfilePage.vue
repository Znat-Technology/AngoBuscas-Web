<template>
    <q-page class="q-pa-lg">
        <div class="row justify-between q-gutter-xs">
            <div class="col col-sm-4 col-md-4 col-xs-12">
              <div class="row justify-center">
                <q-list>
                  <q-item>
                    <q-avatar color="transparent" size="150px">
                       <q-img class="fit-image" :src="require('src/assets/perfil.jpg')" />
                    </q-avatar>
                  </q-item>
                 <q-item>
                    <q-file label="sem ficheiro">
                      <template v-slot:prepend>
                        <q-icon name="attach_file"></q-icon>
                      </template>
                    </q-file>
                 </q-item>
               </q-list>
              </div>
            </div>
            <div class="col col-sm-7 col-md-7 col-xs-12 q-mx-md">
                <div class="row q-gutter-lg">
                    <div class="full-width">
                       <q-item-label class="text-grey-8">
                           Dados pessoais:
                       </q-item-label>
                    <q-input
                      class="q-mt-md q-mb-lg"
                      hint="Seu nome"
                      outlined
                      square
                      dense
                    />
                   <q-input
                      hint="Seu email"
                      outlined
                      square
                      dense
                    />
                   </div>
                   <q-separator/>
                   <div class="full-width">
                       <q-item-label class="text-grey-8">
                           Redifinir Palavra passe:
                       </q-item-label>
                        <q-input
                        class="q-mb-lg q-mt-md"
                          v-model="password"
                          dense
                          outlined
                          square
                          type="password"
                          hint="Palavra passe anterior"
                        />
                         <q-input
                          v-model="password"
                          dense
                          outlined
                          square :type="isPwd ? 'password' : 'text'"
                          hint="Nova palavra passe anterior"
                        >
                            <template v-slot:append>
                              <q-icon
                                :name="isPwd ? 'visibility_off' : 'visibility'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                              />
                            </template>
                        </q-input>
                   </div>
                </div>
            </div>
        </div>
        <div class="q-mx-md q-my-xl float-right">
            <q-btn label="Guardar" color="primary"/>
        </div>
    </q-page>
</template>
<script>
export default {
  data () {
    return {
      message: 'Hello world',
      password: '',
      isPwd: true,
      path: null
    }
  },
  watch: {
    path: function () {
      console.log(this.path)
    }
  }
}
</script>
