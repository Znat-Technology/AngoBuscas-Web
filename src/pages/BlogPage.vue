<template>
  <q-page class="q-pa-md bgc-f7">
    			<div class="row">
				<div class="col-xl-6">
					<div class="breadcrumb_content style2">
						<h2 class="breadcrumb_title">Blog AngoBuscas</h2>
						<ol class="breadcrumb">
						    <li class="breadcrumb-item active text-thm" aria-current="page">Noticias de ultima hora</li>
						</ol>
					</div>
				</div>
			</div>
  <div class="blog_post_container bgc-f7">
		<div class="container">
			<div class="row">
				<div v-for="i in 10" :key="i" class="col-md-8">
					<div class="main_blog_post_content">
						<div class="for_blog feat_property">
							<div class="thumb" style="height:450px">
								<q-img class="img-whp" style="height:100%" src="~assets/171561267_354880465945723_6265764709980630919_n.jpg" alt="7.jpg"/>
								<div class="blog_tag">Tecnologia</div>
							</div>
							<div class="details">
								<div class="tc_content">
									<h4 class="mb15">Redfin Ranks the Most Competitive Neighborhoods of 2020</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh
									facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue.</p>
								</div>
								<div class="fp_footer">
									<ul class="fp_meta float-left mb0">
										<li class="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png"></a></li>
										<li class="list-inline-item"><a href="#">Ali Tufan</a></li>
										<li class="list-inline-item"><a href="#"><span class="flaticon-calendar pr10"></span> January 16, 2020</a></li>
									</ul>
									<a class="fp_pdate float-right text-thm" href="#">Ler mais <span class="flaticon-next"></span></a>
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

}
</script>

<style>

</style>
