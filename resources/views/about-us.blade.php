@extends('layouts.master')

@section('title', 'About us')

@section('custom_css')
    <link rel="stylesheet" type="text/css" href="/css/app.css">
    <link rel="stylesheet" type="text/css" href="/css/pages/about.css">
<!--     <link rel="stylesheet" type="text/css" href="/css/plugin/slick.css"/>
	<link rel="stylesheet" type="text/css" href="/css/plugin/slick-theme.css"/> -->

@endsection


@section('content')
	
	<section style="min-height: 100vh; " class="d-flex align-items-center py-5">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-7 px-5">
					<img src="assets/placeholder/front.jpg" alt="" class="img-fluid">
				</div>
				<div class="col-md-5 align-self-center pr-5">
					<h2>Who we are</h2>
					<div class="hr-primary"></div>
					<p class="">Datalogic Systems Corporation was established in 2004 and has grown to be a multi-brand, large-sized company that interests in Food Manufacturing, Retail, Food Service, and Franchising.</p>
				</div>	
			</div>

		</div>
	</section>
	<section class="d-flex py-5">	
		<div class="container align-self-center text-center" style="z-index: 3;">
			<h2>Our <span class="text-green"><strong>Major Brands </strong></span></h2>
			<p>
				All of which have made their mark in the local food scene and soon will be expanding regionally throughout Southeast Asia.
			</p>
			<!-- insert Slider -->	
			<!-- <div class="bg-primary">
				<div class="responsive-slick">
				  <div class="card" style="width: 18rem;">
				    <img class="card-img-top" src="" alt="Card image cap">
				    <div class="card-body">
				      <h5 class="card-title">Card title</h5>
				      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				      <a href="#" class="btn btn-primary">Go somewhere</a>
				    </div>
				  </div>
				  <div class="card" style="width: 18rem;">
				    <img class="card-img-top" src="" alt="Card image cap">
				    <div class="card-body">
				      <h5 class="card-title">Card title</h5>
				      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				      <a href="#" class="btn btn-primary">Go somewhere</a>
				    </div>
				  </div>
				  <div class="card" style="width: 18rem;">
				    <img class="card-img-top" src="" alt="Card image cap">
				    <div class="card-body">
				      <h5 class="card-title">Card title</h5>
				      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				      <a href="#" class="btn btn-primary">Go somewhere</a>
				    </div>
				  </div>
				  <div class="card" style="width: 18rem;">
				    <img class="card-img-top" src="" alt="Card image cap">
				    <div class="card-body">
				      <h5 class="card-title">Card title</h5>
				      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				      <a href="#" class="btn btn-primary">Go somewhere</a>
				    </div>
				  </div>
				  <div class="card" style="width: 18rem;">
				    <img class="card-img-top" src="" alt="Card image cap">
				    <div class="card-body">
				      <h5 class="card-title">Card title</h5>
				      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				      <a href="#" class="btn btn-primary">Go somewhere</a>
				    </div>
				  </div>
				</div>
			</div> -->
			
						
		</div>
	</section>
	<section style="min-height: 100vh; " class="d-flex align-items-center py-5">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-5 align-self-center pl-5 pr-4">
					<h2>Career and Opportunities</h2>
					<div class="hr-primary"></div>
					<p class="">
						
						<span class="text-green"><strong>Datalogic Systems Corporation Group</strong></span> provides employment and career opportunities to over 400 full-time employees and is a proud partner of trade and industry to farmers of Philippine products, due to the Farm-To-Table approach of our brands.
					</p>
				</div>
				<div class="col-md-7 px-5">
					<img src="assets/placeholder/career.png" alt="" class="img-fluid">
				</div>	
			</div>

		</div>
	</section>

	<section class="" style="">
		<div class="jumbotron">
			<div class="container">
				<blockquote class="display-5 text-center cust-quote">
					We are a company who stands for something, and we stand for being Filipino.
				</blockquote>
			</div>
		</div>
	</section>
	<section class="d-flex" style="
		background: url('assets/placeholder/callback contact.jpg') no-repeat center center ; background-size: cover; ; min-height: 50vh;">
			<div class="container align-self-center text-center" style="z-index: 3; ">
				<p class="display-5" style="font-weight: bolder;">Want to </p>
				<button class="btn btn-outline-secondary mt-4">Start now</button>
			</div>
		</div>
	</section>
	
@endsection


@section('custom_js')

    <!-- <script src="/js/plugin/slick.js"></script>
    <script>
    	$('.responsive-slick').slick({
	    	slidesToShow: 3,
	        slidesToScroll: 1,
	        autoplay: true,
	        autoplaySpeed: 2000
    	})
    </script> -->
    
@endsection
