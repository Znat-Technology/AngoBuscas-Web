<template>
  <q-page class="constrain">
        <div class="our-agent-single bgc-f7 pb30-991">
            <q-carousel
            height="600px"
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinite
            >
            <q-carousel-slide v-for="(img, index) in data.images" :key="index" :name="index+1" :img-src="`http://localhost:3000/${img}`" />
        </q-carousel>
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-lg-8 mt50">
					<div class="row">
						<div class="col-lg-12 q-mb-md">
							<div class="listing_single_description style2">
								<h4 class="mb30">Descriçao</h4>
						    	<p class="mb25">Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.</p>
								<div class="collapse" id="collapseExample">
								</div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="additional_details">
								<div class="row">
									<div class="col-lg-12">
										<h4 class="mb15"></h4>
									</div>
									<div class="col-md-12 col-lg-6 col-xl-4">
										<ul class="list-inline-item">
											<li><p>Nome:</p></li>
											<li><p>Categoria:</p></li>
											<li><p> Sexo:</p></li>
											<li><p> Idade:</p></li>
											<li><p> Localizacao:</p></li>
										</ul>
										<ul class="list-inline-item">
											<li><p><span>{{ data.name }}</span></p></li>
											<li><p><span>{{ data.category }}</span></p></li>
											<li><p><span>Masculino</span></p></li>
											<li><p><span>{{ data.age }}</span></p></li>
											<li><p>
                                                <span>
                                                   <q-btn 
                                                      label="Lar do Zola, Luanda"
                                                      icon="location_on"
                                                      flat
                                                      no-caps
                                                    >
                                                      <q-tooltip>
                                                          Clicar para ver a localizaçao no map
                                                      </q-tooltip>
                                                   </q-btn>
                                                 </span>
                                                    </p>
                                                </li>
										</ul>
									</div>
								</div>
							</div>
						</div>
                        </div>
                        </div>
                        </div>
                </div>
	</div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      slide: 1,
      data: window.info
    }
  }
}
</script>

<style>

</style>
