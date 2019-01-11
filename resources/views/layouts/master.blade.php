<!DOCTYPE html>
<html> 
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>@yield('title') | Datalogic System Corp.</title>
	
	<!-- global css -->
	<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="/css/growl.css">
	<link rel="stylesheet" type="text/css" href="/css/pace.css">
	<link rel="stylesheet" type="text/css" href="/css/app.css">
	<link rel="stylesheet" href="/css/font-awesome.css">

	<style>
		
	</style>
	
	
	<!-- custom css -->
	@yield('custom_css')
</head>
<body id="main"> 
	@include('layouts.nav')   
	<main style="margin-top: 4.2rem; background: #f4f6f8" >
	 @yield('content')
	</main>    
	@include('layouts.footer')

	<!-- global js -->
	<script src="/js/jquery-3.3.1.min.js"></script> 
	<script src="/js/popper.min.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<script src="/js/pace.min.js"></script>
	<script src="/js/growl.js"></script>
	<script src="/js/app.js"></script>
	<!-- custom css -->
	@yield('custom_js')
	
</body>
</html>