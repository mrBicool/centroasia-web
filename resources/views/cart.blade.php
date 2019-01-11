@extends('layouts.master')

@section('title', 'My Cart')

@section('custom_css')
    <!-- <link rel="stylesheet" type="text/css" href="/css/app.css"> --> 
@endsection


@section('content')
<div class="container">
<!-- YOUR PAGE CONTENT HERE -->
    
<div style="padding: 25px;">
	<h2>My Cart</h2>	
	<div class="table-responsive">
		<table class="table table-sm ">
		  <thead>
		    <tr>
		      <th scope="col" width="30">#</th>
		      <th scope="col">Product</th>
		      <th scope="col" width="75" class="text-center	">Qty</th>
		      <th scope="col" width="100" class="text-right">Unit Price</th>
		      
		      <th scope="col" width="100" class="text-right">Amount</th>
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
			  <button type="button" class="btn btn-success" id="remove-cart">Clear cart</button>
			  <button type="button" class="btn btn-success" id="checkout">Proceed to checkout</button>
			  <a href="/shop" class="btn btn-success">Continue Shopping</a>
			</div>
		</div>
	</div>
	
</div>

</div>
@endsection


@section('custom_js')
    <script src="/js/pages/cart.js"></script>
@endsection
