@extends('layouts.master')

@section('title', 'Shop')

@section('custom_css')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.css">
<link rel="stylesheet" type="text/css" href="http://malihu.github.io/custom-scrollbar/jquery.mCustomScrollbar.min.css">
<link rel="stylesheet" type="text/css" href="/css/pages/shop.css">
<link rel="stylesheet" href="/css/plugin/sweetalert2.min.css">
<style>
.divider {
  width: 2px;
  height: 21px;
  background: slategray;
  display: inline-block;
  position: relative;
  top: 6px;
  margin: 0 0.5rem;
}
/* add css for margin fix -- this will not be needed after beta */
.card-deck .card {
 margin-left: 15px;
 margin-right: 15px;
}

.card-deck .card:not(:last-child) {
 margin-right: 15px;
}

.card-deck .card:not(:first-child) {
 margin-left: 15px;
} 

/* ---------product items----------- */
.products .card .card-text{
  font-size: .8em;
}

.product-item .card-footer{
  padding-right: .5rem;
  padding-left: .5rem; 
}

.products.card-deck 
{
  flex-direction: column !important;
} 

.products.card-deck .card-body{
  padding-left: .5rem;
  padding-right: .5rem;
}
/* -------------------- */
/* ----MEDIA QUERIES--- */
/* -------------------- */



@media (min-width:576px) {
  .products.card-deck{
   flex-direction: row !important;

 }

 .products.card-deck > .card
 {
  width: 33% !important;
  flex-wrap: wrap;
  flex: initial;

}

}  

@media (min-width:768px) {

  .products.card-deck > .card
  {
    width: 25% !important;
    flex-wrap: wrap;
    flex: initial;

  }
} 


@media (min-width:1200px) {
  .products.card-deck > .card
  {
    width: 17% !important;
    flex-wrap: wrap;
    flex: initial; 
  }
}

</style>
@endsection


@section('content')
<!-- <div class="jumbotron">
    <h2 class="display-5 text-center">Shop</h2>
  </div> -->
  <div class="container-fluid">
    {{-- <div class="row"> 
      <div class="col-md-12 col-lg-12">

      </div>
    </div>  --}}

    {{-- === --}}
    <div class="row">  
      <div class="col-md-9"  style=""> 
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-3 mb-2"> 
          <!-- Navbar brand -->
          <span class="navbar-brand">Categories:</span>

          <!-- Collapse button -->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Collapsible content -->
          <div class="navbar-collapse collapse" id="basicExampleNav" style="">

            <!-- Links -->
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <select name="" id="category" class="form-control">
                  <option value="0">All</option>
                  <option value="1">Food</option>
                </select>
              </li>
            </ul>
            <!-- Links -->
            <div class="form-inline my-2">
              <div class="input-group ">
                <input type="text" class="form-control" id="txt_productname" placeholder="Product Name" aria-describedby="basic-addon2">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" id="btn_go">Go!</button>
                </div>
              </div>
            </div>
          </div>
          <!-- Collapsible content -->
        </nav>
        
        <div class="btn-toolbar justify-content-between mt-3" role="toolbar" aria-label="Toolbar with button groups">
          <span class="p-2" style="font-size: 90%">
            Showing <span id="total_res"></span> Results
            <span class="divider"></span> Page <span id="current_page"></span> of <span id="last_page"></span>
          </span>
          <div class="btn-group btn-group-sm pagination_master" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary" id="btn_prev" aria-label="Previous button">Prev</button>
            <button type="button" class="btn btn-secondary" id="btn_first">first</button>

            <button type="button" class="btn btn-secondary" id="btn_last">last</button>
            <button type="button" class="btn btn-secondary" id="btn_next" aria-label="Next button">Next</button>
          </div>

        </div> 
        

        <!-- <div class="row" id="shop_items" style="padding-bottom: 15px;">
        </div>  -->

        <div class="card-deck d-flex flex-row justify-content-center products mt-3" id="shop_items">
        </div>


      </div> 

   <div class="col-md-3 py-3 mt-3" style="box-shadow: 0 3px 5px rgba(0, 0, 0, .25); ">
       <div style="position: fixed;  padding-top: 5px; ">
         <h5>Cart list</h5>
         <hr>
         <div id="without_data" style="text-align: center; display: none;">
           <h6>Nothing to display..</h6>
         </div>
         <div id="with_data" style=" display: none;">
           <div class="cart" style="position: relative; max-height: 300px; "> 
             <table class="table table-sm table table-striped"> 
               <tbody id="cart-content">
                 <tr>
                   <th scope="row" width="5%">1</th>
                   <td width="80%">Mark</td>
                   <td class="text-right" width="15%">0.00</td> 
                 </tr> 
               </tbody>
             </table> 
           </div> 
           <div id="total_amount" class="text-right" style="padding: 5px 15px 5px 0px;">
           </div>
           <div id="actions"  >
             <div class="btn-group btn-group-sm" style="float:right; margin-right: 10px;" role="group" aria-label="Basic example">
               <button type="button" class="btn btn-light" id="btn_cart_clear">Clear</button>
               <button type="button" class="btn btn-light" id="btn_cart_checkout">Checkout</button> 
             </div>
           </div> 
         </div>
         
       </div>
       
     </div>
      <!-- <div class="col-md-3 ">
        <div style="background: red; position:fixed;" class="h-100" >
          <h4>sdajhaksdhfg</h4>
        </div>
      </div> -->
      {{-- === --}}
    </div>




    @endsection


    @section('custom_js')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js"></script>
    <script src="http://malihu.github.io/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="/js/plugin/sweetalert2.min.js"></script>
    <script src="/js/pages/shop.js"></script>
    <script> 
  //$('#main-nav').addClass('fixed-top');
</script>
@endsection
