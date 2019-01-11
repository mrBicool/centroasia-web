@extends('layouts.master')

@section('title', 'Sales Order')

@section('custom_css')
    <!-- <link rel="stylesheet" type="text/css" href="/css/app.css"> -->
@endsection

@section('content')
<div class="container">
<!-- YOUR PAGE CONTENT HERE -->
    <div style="padding: 25px;"> 
    	<h4 style="display: inline-block;">Order-# : <label id="so_id" style="color:green; font-weight: 700;">123</label></h4> 

    	<nav aria-label="breadcrumb">
    	  <ol class="breadcrumb" style="font-size: .8em;  padding: 5px 0px 5px 10px; ">
    	    <li class="breadcrumb-item active" aria-current="page" id="mop"></li>
    	  </ol>
    	</nav> 

    	<table class="table table-sm">
		  <thead>
		    <tr>
		    	<th scope="col" width="10%">Partnumber</th>
		      	<th scope="col" width="50%">Product Name</th>
		      	<th scope="col" width="10%" style="text-align:right; padding-right:10px;">Price</th>
		      	<th scope="col" width="5%" style="text-align:center; ">Qty</th>
		      	<th scope="col" width="10%" style="text-align:right; padding-right:10px;">Amount</th>
		    </tr>
		  </thead>
		  <tbody id="tbl_body">
		     
		  </tbody>
		</table> 
		<a href="/account">Back</a>
    </div> 
</div>
@endsection

@section('custom_js')
    <script src="/js/pages/sales_order.js"></script>
@endsection