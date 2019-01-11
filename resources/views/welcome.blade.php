@extends('layouts.master')

@section('title', 'Welcome')

@section('custom_css')
    <link rel="stylesheet" type="text/css" href="/css/app.css">
    <link rel="stylesheet" href="/css/pages/home.css">
    <style>
    	.view {
    	    height: 100%;
    	    position: relative;
    	}

    	.view .mask{
    		position: absolute;
    		top: 0;
    		left: 0;
    		width: 100%;
    		background-attachment: fixed;
    		
    	}

    	.rgba-slategray{
			background: rgba(43, 43, 43, .7);
    	}
    	.rgba-gradient{
    		background: linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    	}
    </style>
@endsection


@section('content')
	<section class="">
		<div class="jumbotron rounded-0 view" style="
		background: url('assets/placeholder/82.jpg') no-repeat center center ; background-size: cover; ; min-height: 100vh;" >
			<div class="mask rgba-slategray d-flex h-100">
				<div class="container align-self-center text-center content text-light" style="">
					<h1 class="display-2">Hey There</h1>
					<h3 class="display-5">Welcome to <span style="color: lightseagreen;"><strong>Centro Asia Distribution Inc.</strong></span></h3>
				</div>
			</div>
			
		</div>
	</section>
@endsection


@section('custom_js')
    <!-- <script src="/"></script> -->
@endsection
