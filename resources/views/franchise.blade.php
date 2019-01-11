@extends('layouts.master')

@section('title', 'Franchise')

@section('custom_css')
    <!-- <link rel="stylesheet" type="text/css" href="/css/app.css"> -->
@endsection


@section('content')
<div class="container">
<!-- YOUR PAGE CONTENT HERE -->
    
    <div class="content" style="padding:25px;">
    	<h2>Franchise Inquiry</h2>
    	<div class="" style=" "> 
					<div class="row form-group"> 
						<div class="col-md-6">
							<input type="text" name="propLoc" class="form-control transparent-bg fa-red-br rounded-0" placeholder="Proposed Location" id="proposed_location">
						</div>
					</div>
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
							<input type="email" name="email" class="form-control transparent-bg fa-red-br rounded-0" placeholder="E-mail Address" id="email_address" required="">
						</div>
						<div class="col-md-6">
							<input type="text" name="cnum" class="form-control transparent-bg fa-red-br rounded-0" placeholder="Contact Number" id="contact_number">
						</div>
					</div>

					<div class="row form-group">
						<div class="col-md-12">
							<input type="text" name="homeAdd" class="form-control transparent-bg fa-red-br rounded-0" placeholder="Home Address" id="home_address">
						</div>
					</div>

					<div class="row form-group">
						<div class="col-md-12">
							<textarea class="form-control transparent-bg fa-red-br rounded-0" rows="5" name="remarks" id="remarks" placeholder="Remarks"></textarea>
						</div>
					</div>
					<div class="row form-group d-flex justify-content-center">
						<button id="btn_submit" class="btn btn-primary  rounded-0 text-lightbigtext-5 px-5">SUBMIT</button>
						<!-- <a href="#"  class="btn fa-red-bg rounded-0 text-light glasket bigtext-5 px-5" >SUBMIT</a> -->
					</div>
				</div>
    </div>
</div>
@endsection


@section('custom_js')
    <script src="/js/pages/franchise.js"></script>
@endsection
