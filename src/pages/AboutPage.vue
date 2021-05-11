<template>
  <q-page class="bgc-f7">
      	<!-- Inner Page Breadcrumb -->
          <section class="inner_page_breadcrumb home1_bgi1">
            <div class="container">
              <div class="row">
                <div class="col-xl-6">
                  <div class="breadcrumb_content">
                      <div class="home-text text-center">
                        <h2 class="fz55">AngoBuscas plataforma</h2>
                        <p class="fz18 color-dark">Encontre documentos e pessoas que foram cadastrados na plataforma</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="contact_localtion q-ma-md form_grid">
                     <q-banner  rounded>
              <p class="text-dark" style="text-align: justify" v-for="i in 4" :key="i">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. Maecenas mattis enim at arcu feugiat, sit amet blandit nisl iaculis. Donec lacus odio, malesuada eu libero sit amet, congue aliquam leo. In hac habitasse platea dictumst.
              </p>
               <ul>
                 <li v-for="i in 4" :key="i">
                   Lorem ipsum dolor
                 </li>
               </ul>
               <div class="float-right q-mr-xl q-mb-sm">
                 Links para as plataformas:
               </div>
              <template v-slot:action>
                <q-btn flat color="dark" no-caps label="Android" />
                <q-btn flat color="dark" no-caps label="IOS" />
                <q-btn flat color="dark" no-caps label="Desktop" />

              </template>
            </q-banner>
          </div>
    
          	<!-- Our Contact -->
	<div class="our-contact pb0 bgc-f7">
		<div class="container">
			<div class="row justify-around q-gutter-md">
				<div class="col-md-7 col-xl-8">
					<div class="form_grid">
						<h4 class="mb5">Send Us An Email</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. Maecenas mattis enim at arcu feugiat, sit amet blandit nisl iaculis. Donec lacus odio, malesuada eu libero sit amet, congue aliquam leo. In hac habitasse platea dictumst.</p>
			            <form class="contact_form" id="contact_form" name="contact_form" action="#" method="post" novalidate="novalidate">
							<div class="row">
				                <div class="col-md-6">
				                    <div class="form-group">
										<input id="form_name" name="form_name"  required="required" type="text" placeholder="Name"/>
									</div>
				                </div>
				                <div class="col-md-6">
				                    <div class="form-group">
				                    	<input id="form_email" name="form_email" class="form-control required email" required="required" type="email" placeholder="Email">
				                    </div>
				                </div>
				                <div class="col-md-6">
				                    <div class="form-group">
				                    	<input id="form_phone" name="form_phone" class="form-control required phone" required="required" type="phone" placeholder="Phone">
				                    </div>
				                </div>
				                <div class="col-md-6">
				                    <div class="form-group">
					                    <input id="form_subject" name="form_subject" class="form-control required" required="required" type="text" placeholder="Subject">
									</div>
				                </div>
				                <div class="col-sm-12">
		                            <div class="form-group">
		                                <textarea id="form_message" name="form_message" class="form-control required" rows="8" required="required" placeholder="Your Message"></textarea>
		                            </div>
				                    <div class="form-group mb0">
					                    <button type="button" class="btn btn-md btn-thm">Send Message</button>
				                    </div>
				                </div>
			                </div>
			            </form>
					</div>
				</div>
				<div class="col-md-4 col-xl-4 q-mb-md">
					<div class="contact_localtion">
						<h4>Contact Us</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. habitasse platea dictumst.</p>
						<div class="content_list">
							<h5>Address</h5>
							<p>2301 Ravenswood Rd Madison, <br>WI 53711</p>
						</div>
						<div class="content_list">
							<h5>Phone</h5>
							<p>(315) 905-2321</p>
						</div>
						<div class="content_list">
							<h5>Mail</h5>
							<p>info@findhouse.com</p>
						</div>
						<div class="content_list">
							<h5>Skype</h5>
							<p>findhouse.com</p>
						</div>
						<h5>Follow Us</h5>
						<ul class="contact_form_social_area">
							<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
							<li class="list-inline-item"><a href="#"><i class="fa fa-google"></i></a></li>
							<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
						</ul>
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
