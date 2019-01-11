@extends('layouts.master')

@section('title', 'Checkout')

@section('custom_css')
    <!-- place your custom css here -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.css">
@endsection


@section('content')
<div class="container" style="padding: 25px;">
<!-- YOUR PAGE CONTENT HERE -->
	<div class="row">
		<div class="col col-md-7">

			<nav aria-label="breadcrumb" style="font-size: .75em;">
			  <ol class="breadcrumb">
			    <li class="breadcrumb-item"><a href="/">Home</a></li>
			    <li class="breadcrumb-item"><a href="/cart">Cart</a></li>
			    <li class="breadcrumb-item active" aria-current="page">Order Summary</li>
			  </ol>
			</nav>
			
			<div class="table-responsive">
				<table class="table table-sm">
				  <thead>
				    <tr>
				      <th scope="col" width="30">#</th>
				      <th scope="col">Product</th>
				      <th scope="col" width="100">Unit Price</th>
				      <th scope="col" width="75">Qty</th>
				      <th scope="col" width="150">Amount</th>
				    </tr>
				  </thead>
				  <tbody id="tbl_body">  
				    <!-- <tr>
				      <th scope="row">3</th>
				      <td>..</td>
				      <td>..</td>
				      <td>..</td>
				      <td>..</td>
				    </tr> -->
				  </tbody>
				</table>  
			</div>

			<div class="row">
				<div class="col text-right" id="total_amount_displayer">
					Total Amount in Peso : <strong id="total_amount"></strong>
				</div>
			</div>
			<br>
			<div class="row">
				<div class="col">
					<div class="btn-group btn-group-sm" role="group" aria-label="Basic example" style="float: right;">
						<button type="button" class="btn btn-primary" id="cancel">Cancel</button>
					  	<button type="button" class="btn btn-primary" id="checkout">Confirm Checkout</button> 
					</div>
				</div>
			</div>
			<br>
		</div>
		<div class="col col-md-5">
			<div class="card">
			  <div class="card-header">
			    MODE OF PAYMENT
			  </div>
			  <div class="card-body">
			    <div class="" style="font-size: .8em" id="mops">
    				{{-- <img src="assets/placeholder/payment.png" class="img img-fluid pb-3" height="100px" width="100px" >
    				<p class="h5">Pay by Cash on Delivery</p>
    				<p class="">Pay upon the arrival of goods on your doorstep</p>  --}}

    				
    				{{-- <div class="custom-control custom-radio custom-control-inline">
    				  <input type="radio" class="mop" id="customRadioInline1" name="mop" value="1" class="custom-control-input" checked>
    				  <label class="custom-control-label" for="customRadioInline1">COD</label>
    				</div>
    				<div class="custom-control custom-radio custom-control-inline">
    				  <input type="radio" class="mop" id="customRadioInline2" name="mop" value="2" class="custom-control-input">
    				  <label class="custom-control-label" for="customRadioInline2">Bank to Bank</label>
    				</div>
    				<div class="custom-control custom-radio custom-control-inline">
    				  <input type="radio" class="mop" id="customRadioInline3" name="mop" value="3" class="custom-control-input">
    				  <label class="custom-control-label" for="customRadioInline3">Mastercard</label>
    				</div>
    				<div class="custom-control custom-radio custom-control-inline">
    				  <input type="radio" class="mop" id="customRadioInline4" name="mop" value="4" class="custom-control-input">
    				  <label class="custom-control-label" for="customRadioInline4">Paypal</label>
    				</div> --}}
    			</div>
			  </div>
			</div>
			<br>
			<div class="card">
			  <div class="card-header">
			    DELIVERY DETAILS
			  </div>
			  <div class="card-body">
			    <div style="font-size: 1.25rem;">
    	    	  <div class="form-group">
    			    <!-- <label for="exampleInputEmail1">Email address</label> -->
    			    <small id="emailHelp" class="form-text text-muted">Delivery address.</small>
    			    <p id="delivery_address"></p> 
    			  </div>
			    </div>
		    	   
			   
			  </div>
			</div>
			<br>
			<div class="card">
			  <div class="card-header">
			    PERSONAL DETAILS
			  </div>
			  <div class="card-body">
			    <div style="font-size: 1.25rem;">
			      <p id="personal_details"></p> 
			    </div>
			  </div>
			</div> 
		</div>
	</div>

<!-- END YOUR PAGE CONTENT HERE -->
</div>
@endsection


@section('custom_js')
   <!-- place your custom js here -->
   	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js"></script>
	<script src="/js/pages/checkout.js"></script>
@endsection
