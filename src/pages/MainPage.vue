<template>
  <q-page :class="($q.screen.xs)? 'bg-white' : 'bgc-f7 pb30-991 pt100-360'">
     <q-dialog
      v-model="dialodCad"
      v-if="$q.screen.xs"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-white">
        <q-bar class="bg-dark text-white">
          <q-btn dense flat  label="Voltar" icon="arrow_back" v-close-popup>
          </q-btn>
          <q-space />
        </q-bar>

        <q-card-section class="constrain-2">
          <q-radio class="col" v-model="cadChoice" val="doc" label="Documento" />
          <q-radio class="col" v-model="cadChoice" val="pessoa" label="Pessoa" />
        </q-card-section>

        <q-card-section class="q-pb-xl constrain-2">
          <form-doc v-if="cadChoice==='doc'" @ok="reverse()"/>
          <form-people v-else @ok="reverse()"/>
        </q-card-section>
      </q-card>
    </q-dialog>
      <q-dialog
      v-else
      v-model="dialodCad"
      persistent
      >
        <q-card style="width: 790px; max-width: 80vw;">
        <q-toolbar>
          <div class="text-h5">
            Registrar
          </div>
          <q-space/>
          <q-btn class="text-white" round size="md" icon="close" v-close-popup color="primary"></q-btn>
        </q-toolbar>

        <q-card-section class="constrain-2">
          <q-radio class="col" v-model="cadChoice" val="doc" label="Documento" />
          <q-radio class="col" v-model="cadChoice" val="pessoa" label="Pessoa" />
        </q-card-section>

        <q-card-section class="q-pb-xl constrain-2">
          <form-doc v-if="cadChoice==='doc'" @ok="reverse()"/>
          <form-people v-else @ok="reverse()"/>
        </q-card-section>
        </q-card>
      </q-dialog>
  <section v-if="!$q.screen.xs" class="row justify-center home-one home1-overlay home1_bgi1">
		<div class="container">
			<div class="row posr justify-center">
				<div class="col-lg-12">
					<div class="home_content">
						<div class="home-text text-center">
							<h2 class="fz55">AngoBuscas plataforma</h2>
							<p class="fz18 color-white">Encontre documentos e pessoas que foram cadastrados na plataforma</p>
						</div>
						<div class="home_adv_srch_opt">
							<ul class="nav nav-pills" id="pills-tab" role="tablist">
								<li class="nav-item">
									<a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Pessoas</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Documentos</a>
								</li>
							</ul>
							<div class="tab-content home1_adsrchfrm" id="pills-tabContent" style="width:1150px">
								<div class="row justify-around">
									<q-input class="col-5" dense :autofocus="true" outlined placeholder="Buscar por...">
										<template v-slot:prepend>
										  <q-icon name="search" size="xs"/>
										</template>
									</q-input>	
									<q-select class="col-3" dense outlined :options="[]">
										<template v-slot:prepend>
										  <q-icon name="category" size="xs"/>
										</template>
									</q-select>
									<q-select class="col-2" dense outlined v-model="modelProvince" :options="provinces">
										<template v-slot:prepend>
										  <q-icon name="location_on" size="xs"/>
										</template>
									</q-select>
									<q-btn class="col-1" label="Buscar" color="primary"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  
   <q-header class="bg-white" v-else bordered>
      <q-toolbar class="bg-white text-dark">
        <q-btn flat round dense icon="menu" class="q-mr-xs" />
        <q-toolbar-title class="text-grand-hotel text-right"><strong>AngoBuscas</strong></q-toolbar-title>
      </q-toolbar>
            <q-toolbar class="bg-white text-dark">
        	<q-input class="full-width" dense  placeholder="Buscar por..."/>
        <q-space />
        <q-btn flat round dense icon="search" class="q-mr-xs" />
      </q-toolbar>
   </q-header>
    <section>
        <items-lost
          :infos="data"
          :type="(model === 'docs') ? 'Documento' : 'Pessoa' "
          :total="total"
        />
        <q-pagination
          v-if="maxPages > 1"
          class="row justify-center"
          v-model="current"
          :max="maxPages"
          direction-links
          rounded
          color="primary"
          active-color="primary"
        />
    </section>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab padding="sm" icon="add" color="primary" @click="dialodCad=true">
               <q-tooltip>
                 Registrar
               </q-tooltip>
            </q-btn>
      </q-page-sticky>
  </q-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    'items-lost': require('components/LostItem.vue').default,
    'form-doc': require('components/registerDocument.vue').default,
    'form-people': require('components/registerPeople.vue').default
  },
  data () {
    return {
      slide: 1,
      autoplay: true,
      current: 1,
      maxPages: 2,
      pesquisa: '',
      maximizedToggle: true,
      model: 'per',
      dialodCad: false,
      cadChoice: 'doc',
      provinceModel: 'Luanda',
      data: [],
      total: 0
    }
  },
  computed: {
    modelProvince: {
      get () {
        return this.$store.state.provinces.selectedProvince
      },
      set (val) {
        this.$store.commit('provinces/SELECT_PROVINCE', val)
      }
    },
    ...mapState('provinces', ['provinces', 'selectedProvince']),
    ...mapMutations('provinces', ['SELECT_PROVINCE']),
    placeholder () {
      return (this.model === 'per') ? 'Buscar pessoas por: nome, idade, sexo...' : 'Buscar documentos por: nome, categoria...'
    }
  },
  methods: {
    async getDocs () {
      const response = await this.$axios.put(`${process.env.API}document/search?page=${this.current}&limit=5`, { search: this.pesquisa })
      this.data = response.data
      this.getCount()
    },
    async getCount () {
      const endpoint = (this.model === 'docs') ? 'document' : 'people'
      const response = await this.$axios.put(`${process.env.API}${endpoint}/count`, { search: this.pesquisa })
      this.total = response.data
      this.maxPages = parseInt(Math.ceil(this.total / 5))
    },
    async getPeoples () {
      const response = await this.$axios.put(`${process.env.API}people/search?page=${this.current}&limit=5`, { search: this.pesquisa })
      this.data = response.data
      this.getCount()
    },
    reverse () {
      if (this.cadChoice === 'doc') {
        this.cadChoice = 'pessoa'
      } else if (this.cadChoice === 'pessoa') {
        this.cadChoice = 'doc'
      }
    }
  },
  mounted () {
    this.getPeoples()
  },
  watch: {
    pesquisa () {
      if (this.model === 'docs') {
        this.getDocs()
      } else {
        this.getPeoples()
      }
    },
    model (newValue) {
      if (newValue === 'docs') {
        this.getDocs()
      } else {
        this.getPeoples()
      }
      console.log(this.total)
    },
    current () {
      if (this.model === 'docs') {
        this.getDocs()
      } else {
        this.getPeoples()
      }
    }
  }
}
</script>
