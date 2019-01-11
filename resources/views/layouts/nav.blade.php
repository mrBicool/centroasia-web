<nav id="main-nav" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
	<div class="container">
		<a class="navbar-brand" href="#">
			<img src="/assets/placeholder/centroasia-sm.png" width="45px" alt="">
			<!-- <img src="/assets/placeholder/logo.png" width="150px" alt=""> -->
		</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarText">
		    <ul class="navbar-nav mr-auto" id="top-nav"> 
		      <li class="nav-item" id="nav-home">
		        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
		      </li>
		      <!-- <li class="nav-item" id="nav-franchise">
		        <a class="nav-link" href="/franchise">Franchise</a>
		      </li> -->
		      <li class="nav-item" id="nav-aboutus">
		        <a class="nav-link" href="/about-us">About us</a>
		      </li>
		      <li class="nav-item" id="nav-ourbrand">
		        <a class="nav-link" href="/our-brand">Our brand</a>
		      </li> 
		      <li class="nav-item" id="nav-contactus">
		        <a class="nav-link" href="/contact-us">Contact us</a>
		      </li>
		    </ul> 

		    <div class="form-inline">
		    		{{-- <a href="/cart" id="shopping_cart">
		    			<i class="fa fa-shopping-cart text-muted" id="i-cart"></i>
		    			<span class="badge badge-pill badge-primary badge-notify" id="items_in_cart">1</span>
		    		</a> --}}
		    			
		    		
		    	<button class="btn btn-primary cred" id="login"  data-toggle="modal" data-target="#exampleModalCenter">Login</button>
		    	<span class="dropdown" id="logged-in">
		    		<button class="btn dropdown-toggle" type="button" id="current_user" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="background: transparent;">
		    			Username
		    			<i class=""></i>
		    		</button>
		    		<div class="dropdown-menu" aria-labelledby="current_user">
		    			<!-- <a  class="dropdown-item" href="/cart">My Cart</a> -->
		    			<a  class="dropdown-item" href="/account">View Account</a>
		    			<button class="dropdown-item" type="button" id="btn_logout">Logout</button> 
		    		</div>
		    	</span>
		    </div>
		
		  </div>
	</div>
</nav>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      	<!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>	 -->
        <!-- LOGIN FORM -->
        <div style="padding: 10px 25px 25px 25px">
        	<div class="alert alert-success" role="alert" id="login-alert-success"> 
			</div>
			<div class="alert alert-warning" role="alert" id="login-alert-warning"> 
			</div>
		  <div class="form-group" id="rara">
		    <label for="exampleInputEmail1">Username</label>
		    <input type="text" class="form-control" id="username" name="username" aria-describedby="Username" placeholder="Enter username"> 
		  </div>
		  <div class="form-group mb-4">
		    <label for="exampleInputPassword1">Password</label>
		    <input type="password" class="form-control" id="password" name="password" placeholder="Password"> 
		  </div> 
		  <!-- <hr> -->
		  <div class="text-right">
		  	<button id="btn_login" class="btn btn-outline-primary ">Login</button>
		  </div>
		 
		</div>
        <!-- END LOGIN FORM -->
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
</div>