<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-1">
     <q-header class="bg-white" bordered>
        <q-toolbar>
          <q-btn class="small-screen-only" flat @click="drawer = !drawer" round color="red" dense icon="eva-menu" />
          <q-space/>
           <q-btn class="q-mx-xs" round to="/perfil" flat>
              <q-item>
                  <q-avatar v-if="profile.profile !== ''" size="28px">
                    <img style="width:100%;height:100%" :src="profile.profile">
                  </q-avatar>
                  <q-avatar v-else color="grey" size="28px">
                    <q-icon color="white" name="eva-person" size="sm"></q-icon>
                  </q-avatar>
                    <q-tooltip :offset="[0, 0]">
                    {{ nameUser }}
                  </q-tooltip>
              </q-item>
            </q-btn>
        </q-toolbar>
      </q-header>

     <q-drawer
        v-model="drawer"
        show-if-above
        :width="240"
        :breakpoint="1000"
        bordered
        content-class="bg-dark"
      >
        <q-scroll-area class="fit">
          <q-list>
            <div class="row justify-center q-mb-md q-py-lg">
              <q-item class="row justify-center">
                   <div class="text-grand-hotel text-white">
                      <q-icon class="text-pink-6" name="eva-home-outline"/> AngoBuscas
                    </div>
              </q-item>
            </div>
            <template v-for="(menuItem, index) in menuList">
                <q-expansion-item
                  v-if="menuItem.multiple && menuItem.yes"
                  :key="index"
                  @click="onExpansion()"
                  class="text-white text-weight-thin"
                  :header-class="classObject"
                  :content-inset-level="0.3"
                >
                 <template v-slot:header>
                    <q-item-section avatar>
                      <q-icon :name="menuItem.icon" size="xs"/>
                    </q-item-section>

                    <q-item-section>
                      {{ menuItem.label }}
                  </q-item-section>
                 </template>
                   <q-list>
                       <q-item
                           v-for="(item, index) in menuItem.items"
                          :key="index"
                          dense
                          exact
                          clickable
                          :to="item.to"
                          @click="link=item.label"
                          :active="link === item.label"
                          v-ripple
                        >
                         <q-item-section avatar>
                          <q-icon :name="item.icon" size="xs" />
                        </q-item-section>
                        <q-item-section>
                          {{ item.label }}
                        </q-item-section>
                       </q-item>
                   </q-list>
                </q-expansion-item>
              <q-item
                v-else-if="menuItem.yes"
                :key="index"
                clickable
                exact
                :to="menuItem.to"
                class="text-white text-weight-thin"
                active-class="option-active"
                @click="changeOption(menuItem.label)"
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" size="xs" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
            </template>
             <q-item
                clickable
                exact
                @click="logout()"
                v-ripple
                class="text-weight-thin text-white"
              >
                <q-item-section avatar>
                  <q-icon name="logout" size="xs" />
                </q-item-section>
                <q-item-section>
                  {{ 'Sair' }}
                </q-item-section>
              </q-item>

          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-footer>
         <div class="large-screen-only text-center bg-white text-grey-8">
           © {{ new Date().getFullYear() }} AngoBuscas by Znat Technology
           <q-btn label="Ok" @click="show()"/>
         </div>
      </q-footer>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { userController } from '../controllers/userController'

const menuList = [
  {
    icon: 'eva-grid-outline',
    label: 'Painel de controle',
    active: 'Painel de controle',
    separator: true,
    to: 'dashboard'
  },
  {
    icon: 'eva-browser-outline',
    label: 'Empresas',
    active: 'Empresas',
    separator: false,
    to: 'empresas'
  },
  {
    icon: 'eva-person-outline',
    label: 'Utilizadores',
    active: 'Utilizadores',
    separator: false,
    to: 'utilizadores'
  },
  {
    label: 'Entidades',
    icon: 'eva-search-outline',
    multiple: true,
    items: [
      {
        label: 'Documentos',
        icon: 'eva-file-outline',
        to: 'perfil'
      },
      {
        label: 'Pessoas',
        icon: 'eva-people-outline',
        to: 'msg'
      }
    ],
    active: 'Perdidos',
    separator: true,
    to: 'entidades'
  },
  {
    icon: 'eva-paper-plane-outline',
    label: 'Locais de entrega',
    active: 'Locais de entrega',
    separator: false,
    to: 'instituicoes'
  }
]

const profile = {
  name: 'Edgar Morcys',
  profile: '',
  email: 'patriciowilderbarrospedro@gmail.com'
}
export default {
  mixins: [userController],
  data () {
    return {
      drawer: false,
      menuList,
      test: true,
      profile,
      classObject: {
        'option-active': false
      },
      link: 'expands'
    }
  },
  computed: {
    nameUser () {
      return this.$q.sessionStorage.getItem('name')
    }
  },
  methods: {
    changeOption (value) {
      this.classObject['option-active'] = false
      this.link = value
    },
    onExpansion () {
      this.classObject['option-active'] = true
    },
    logout () {
      this.$q.sessionStorage.clear()
      this.$router.push('/login')
    }
  },
  mounted () {
    menuList.forEach((menu, index) => {
      menuList[index].yes = this.hasPermissionPage(menu.to)
    })
  }
}
</script>
<style lang="scss">
  .option-active {
    border-left: 2px solid $pink-6;
  }
</style>
