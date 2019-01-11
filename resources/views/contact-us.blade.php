@extends('layouts.master')

@section('title', 'Contact us')

@section('custom_css')
<!-- <link rel="stylesheet" type="text/css" href="/css/app.css"> -->


<style>
.md-form {
	position: relative;
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
}
.md-form label {
	position: absolute;
	top: .65rem;
	left: 0;
	-webkit-transition: .2s ease-out;
	-o-transition: .2s ease-out;
	transition: .2s ease-out;
	cursor: text;
	color: #757575;
}

.md-form label.active{
	transform: translateY(-140%);
	font-size: .8rem;
}

.md-form input[type=date], 
.md-form input[type=datetime-local], 
.md-form input[type=email], 
.md-form input[type=number], 
.md-form input[type=password], 
.md-form input[type=search-md], 
.md-form input[type=search], 
.md-form input[type=tel], 
.md-form input[type=text], 
.md-form input[type=time],
.md-form input[type=url], 
.md-form textarea.md-textarea{
	transition: border-color 
	.15s ease-in-out,
	box-shadow .15s ease-in-out
	,-webkit-box-shadow .15s ease-in-out;
	outline: 0;
	box-shadow: none;
	border: none;
	border-bottom: 1px solid #ced4da;		
	border-radius: 0;
	box-sizing: content-box;
	background-color: transparent;
}

</style>
@endsection


@section('content')
<section class="d-flex align-items-center py-5">	
	<div class="container  " style="z-index: 3;">
		<h2 class="text-center">Contact <span class="text-green"><strong>Us </strong></span></h2>
		<p class="my-3 text-center">
			For all inquiries, contact us via the form below.
		</p>
		<div class="row py-5">
			<div class="col-md-6  px-3">
				<div class="card text-light h-100">
				  <h3 class="card-header display-5 bg-primary py-5">Write to us</h3>
				  <div class="card-body">
				    <div action="" class=" pt-3">
						<div class="row form-group">
							<div class="col-md-6">
								<input type="text" name="fName" class="form-control transparent-bg fa-red-br rounded-0" placeholder="First Name" id="first_name">
							</div>
							<div class="col-md-6">
								<input type="text" name="lName" class="form-control transparent-bg fa-red-br rounded-0" placeholder="Last Name" id="last_name">
							</div>
						</div>
						<div class="row form-group">
							<div class="col-md-6">
								<input type="text" name="email" class="form-control transparent-bg fa-red-br rounded-0" placeholder="E-mail Address" id="email_address">
							</div>
							<div class="col-md-6">
								<input type="text" name="cnum" class="form-control transparent-bg fa-red-br rounded-0" placeholder="Contact Number" id="contact_number">
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<input type="text" name="subject" class="form-control transparent-bg fa-red-br rounded-0" placeholder="Subject" id="subject">
							</div>
						</div>
						<div class="row form-group">
							<div class="col-md-12">
								<textarea class="form-control transparent-bg fa-red-br rounded-0" rows="3" id="message" placeholder="Message"></textarea>
							</div>
						</div>
						<div class="row form-group d-flex justify-content-center">
							<button class="btn btn-outline-secondary rounded-0  px-5" id="btn_submit">SUBMIT</button>
						</div>		
						
	 						<!-- <div class="col-md-6">
								<div class="md-form" style="width: 20rem;">
			                        <input type="text" id="exampleForm1" class="form-control">
			                        <label for="exampleForm1" class="">Material input</label>
			                    </div>
							</div> -->

					</div>
				  </div>
				</div>
				
		</div>
		<div class="col-md-6">
			<div class="embed-responsive embed-responsive-16by9 angle--both-left-right">
				<iframe class="frame border-bottom " src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15443.606936112003!2d121.094945!3d14.6046733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7673dc7221127dd2!2sCentro+Asia+Distribution+Inc.!5e0!3m2!1sen!2sph!4v1546913771687" allowfullscreen></iframe>
			</div>
<!-- 			<div class="row text-center py-3" style="font-size: 1rem">

				<div class="col-md-4 ">
					<div class="fa-stack fa-2x text-green mb-3">
						<i class="fa fa-circle fa-stack-2x"></i>
						<i class="fa fa-map-marker fa-stack-1x fa-inverse"></i>
					</div>
					<p>12th Floor Asian Star Building,
						Asean Drive, Filinvest City, 
						Alabang, Muntinlupa City, 
					Philippines</p>

				</div>
				<div class="col-md-4 ">
					<div class="fa-stack fa-2x text-green mb-3">
						<i class="fa fa-circle fa-stack-2x"></i>
						<i class="fa fa-phone fa-stack-1x fa-inverse"></i>
					</div>
					<p>(02)8-464646</p>

				</div>
				<div class="col-md-4">
					<div class="fa-stack fa-2x text-green mb-3">
						<i class="fa fa-circle fa-stack-2x"></i>
						<i class="fa fa-globe fa-stack-1x fa-inverse"></i>
					</div>
					<p>info@foodasia.com.ph</p>
					<p>FoodAsia group</p>
				</div>
			</div> -->
						
			<div class="row align-items-center mt-4 ">
				<div class="col-md-2">
					<div class="fa-stack fa-2x text-green" style="font-size: 150%;">
						<i class="fa fa-circle fa-stack-2x"></i>
						<i class="fa fa-map-marker fa-stack-1x fa-inverse"></i>
					</div>
				</div>
				<div class="col-md-10 border-bottom">
					<p>
						Manila Mahogany Compound F. Mariano Ave. Bo. Manggahan
						Pasig 1611
					</p>
				</div>
			</div>
			
			<div class="row align-items-center">
				<div class="col-md-2">
					<div class="fa-stack fa-2x text-green " style="font-size: 150%;">
						<i class="fa fa-circle fa-stack-2x"></i>
						<i class="fa fa-phone fa-stack-1x fa-inverse"></i>
					</div>
				</div>
				<div class="col-md-10 border-bottom">
					<p>
						7486619
					</p> 
				</div>
			</div>
			
		
			<div class="row align-items-center ">
				<div class="col-md-2">
					<div class="fa-stack fa-2x text-green " style="font-size: 150%;">
						<i class="fa fa-circle fa-stack-2x"></i>
						<i class="fa fa-globe fa-stack-1x fa-inverse"></i>
					</div>
				</div>
				<div class="col-md-10 border-bottom">
					<p>www.example.com</p>  
				</div>
			</div>
			

		</div>
	</div>
</div>
</section>
@endsection


@section('custom_js')
<script src="/js/pages/contact_us.js"></script>
<script src="">


</script>
@endsection
