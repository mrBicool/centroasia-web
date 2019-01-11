$(document).ready(function(){ 

    if(!isLogin()){ 
        window.location.href = url+"page-not-accessible"
    }

    $(".cart").mCustomScrollbar();
   

 	getProducts('',1,20);
	btn_go();

	btn_first();
 	btn_prev();
 	btn_next();
 	btn_last();
 	displayCategory();
 	displayProductByCat();
 	
 	getCart();
 	removeCart();
 	btnCheckout();
});

//START OF GETTING PRODUCTS
//pagination---------
var last_product_name 	='';
var total				=0;
var first_page 			=0;
var per_page 			=20;
var current_page 		=1;
var last_page 			=0; 
var total_page 			=0;
//end of pagination-- 

function getProducts(product_name,_current_page,_per_page, category_id){
	var data = {
		// token 		: readCookie('token'),
		description : product_name,
		current_page: _current_page,
		per_page 	: _per_page,
		category_id : category_id
	};  
	postRequestWithHeader('products',data,function(response){
		if(response.success == false){
			showWarning(response.message);
			return;
		}

		//console.log(response); 
		displayProducts(response.data,response.base_url,response.default_img,response.surcharge);

		last_product_name = product_name;
		total 			= response.total_count;
		first_page 		= response.first;
		last_page 		= response.last;
		total_page 		= response.total_page;
		current_page	= parseInt(response.current_page);
		//console.log("last  page : " + last_page);

		displayCurrentPageResult(current_page, last_page);
		displayTotalItems(total);
	});
}
//END OF GETTING PRODUCTS

var cart_list = [];
var cart_list_ctr = 0;
var over_all_total = 0; 

function getCart(){
	cart_list = [];
	over_all_total = 0; 
	postRequestWithHeader('cart/get_cart',{},function(response){
		//console.log(response); 
		if(response.success == false){
			showSuccess(response.message); 
			return;
		}
 		
 		var items = response.data.items; 
 		var total_amount = response.data.total_amount;
 		var ctr = 1;
 		if(items.length == 0){
 			$('#without_data').css('display','block');
 			$('#with_data').css('display','none');
 		}else{
 			$('#without_data').css('display','none');
 			$('#with_data').css('display','block');
 		} 
 		console.log(items.length);

		items.forEach((item)=>{
			var id 			=item.product_id;
			var desc 		=item.description;
			var qty			=item.qty;
			var price 		=parseFloat(item.price);
			var amount 		=item.amount; 
			var surcharge 	=item.surcharge;

			var unit_price 	= parseFloat(price) + parseFloat(surcharge);

			var new_obj = {  
				'product_id' 		: id,
				'desctiption' 		: desc,
				'price'				: unit_price, 
				'qty'				: qty,
				'amount'			: amount
			};

			over_all_total+=amount; 
			cart_list.push(new_obj); 
			cart_list_ctr++;

			ctr++;
		});

		//console.log('cart_list');
		//console.log(cart_list);
		//console.log('total: ' + over_all_total); 
		cartDisplayer(); 
	});
} 

function cartDisplayer(){
	$('#cart-content').empty();
	console.log('cart-content has been cleared');
	if(cart_list.length == 0){
		// $('#remove-cart').hide();
		// $('#checkout').hide();
		// $('#total_amount_displayer').empty(); 
		// $('#total_amount_displayer').removeClass("text-right");
		// $('#total_amount_displayer').addClass("text-center");
		// $('#total_amount_displayer').text('Nothing to display');
	}else{
		for (i = 0; i < cart_list.length; i++) { 
			var unit_price = parseFloat(cart_list[i].price);
			$('#cart-content').append(
				// '<tr>'+
			 //      '<th scope="row">'+(i+1)+'</th>'+
			 //      '<td>'+cart_list[i].desctiption+'</td>'+
			 //      '<td class=""><input id="'+cart_list[i].product_id+'" class="form-control text-center product_qty" value="'+cart_list[i].qty+'"></input></td>'+
			 //      '<td class="text-right">'+addComma( unit_price )+'</td>'+
			 //      '<td class="text-right">'+addComma( cart_list[i].amount.toFixed(2) )+'</td>'+
			 //   '</tr>'
			 	'<tr>'+
			      '<th scope="row" width="5%">'+(i+1)+'</th>'+
			      '<td width="80%">'+cart_list[i].desctiption+'<div style="color:red">Price: '+addComma( unit_price.toFixed(2) )+' <strong>x '+cart_list[i].qty+'</strong></div> </td>'+
			      '<td class="text-right" width="15%">'+
			      	'<strong>'+addComma(cart_list[i].amount.toFixed(2))+'</strong>'+
			      	'<div> <a href="#" id="'+cart_list[i].product_id+'" class="btn-item-remove"><span class="badge badge-danger">remove</span></a> </div>'+
			      '</td> '+
			    '</tr>'
			); 
			cartItemRemover(cart_list[i].product_id);
		}
		//$('#cart-content').append('<td colspan="3" class="text-right">Total : <strong>'+addComma( over_all_total.toFixed(2) )+'</strong></td>');
		$('#total_amount').html('Total : <strong>'+ addComma( over_all_total.toFixed(2) ) + '</strong>');
		// changeQty();
		// onQtyKeyUp();
	}
}

function cartItemRemover(id){
	$('#'+id+'.btn-item-remove').on('click',function(){
		console.log(this.id);
		var p_id = this.id;
		$.confirm({
		    title: 'Confirmation!',
		    content: 'This item will be remove in your cart, do you want to continue?',
		    type: 'orange',
		    typeAnimated: true,
		    buttons: {
		        tryAgain: {
		            text: 'Confirm',
		            btnClass: 'btn-warning',
		            action: function(){
		            	console.log('you choose to remove'); 
		            	var data = { /*token:readCookie('token'),*/ product_id:p_id};
		            	//var prod_id = id;
		            	postRequestWithHeader('cart/remove_item_from_cart',data,function(response){
		            		if (response.success == false) {
		            			showWarning('Failed to remove item from your cart');
		            		} 
		            		getCart();
		            		//console.log(response);
		            		//removeItemFromCart(prod_id);
		            		//cart_counter--;
		            		//updateCartItems(cart_counter);
		            		
		            	}); 
		            }
		        },
		        close: function () {
		        }
		    }
		});
	});
}

function removeCart(){
	$('#btn_cart_clear').on('click',function(){

		$.confirm({
		    title: 'Confirmation!',
		    content: "Your cart will be empty, do you want to continue?" ,
		    type: 'blue',
		    typeAnimated: true,
		    buttons: {
		        tryAgain: {
		            text: 'Confirm',
		            btnClass: 'btn-blue',
		            action: function(){

		            	postRequestWithHeader('cart/delete_cart',{/*token:readCookie('token')*/},function(response){
        					if(response.success == false){
        						showWarning(response.message);
        					}
        					showSuccess(response.message); 

        					//cart_list = [];
        					//over_all_total=0;
        					//cartDisplayer(); 
        				  	//cart_counter=0;
        				  	//updateCartItems(cart_counter);
        				  	getCart();
        				});

		            }
		        },
		        close: function () {
		        }
		    }
		});
		//if (confirm('Your cart will be empty, do you want to continue?')) {

			// postRequest('cart/delete_cart',{token:readCookie('token')},function(response){
			// 	if(response.success == false){
			// 		showWarning(response.message);
			// 	}
			// 	showSuccess(response.message); 

			// 	cart_list = [];
			// 	over_all_total=0;
			// 	cartDisplayer(); 
			//   	cart_counter=0;
			//   	updateCartItems(cart_counter);
			// });

		//}

	});
}

function btnCheckout(){
	$('#btn_cart_checkout').on('click',function(){
		console.log('as');
		window.location = '/checkout';
		// $.confirm({
		//     title: 'Confirmation!',
		//     content: "Your cart will be empty, do you want to continue?" ,
		//     type: 'blue',
		//     typeAnimated: true,
		//     buttons: {
		//         tryAgain: {
		//             text: 'Confirm',
		//             btnClass: 'btn-blue',
		//             action: function(){

		//             }
		//         },
		//         close: function () {
		//         }
		//     }
		// });
	});
}

function displayProducts(items,base_url,default_img,surcharge){ 
	 
 	$('#shop_items').empty();
	items.forEach((item)=>{  

		var img_path = "";
		if(item.IMG_PATH == null || item.IMG_PATH == ''){
			img_path = base_url + default_img;
		}else{
			//img_path = base_url + item.IMG_PATH;
			img_path = base_url + '/storage/products/' + item.IMG_PATH;
		}

		var unit_price = parseFloat(item.UNITPRICE) + parseFloat(surcharge);
			// $('#shop_items').append(''+ 
	  //           '<div class="col-sm-6 item">'+
	  //               '<div class="col-item">'+
	  //                   '<div class="photo">'+
	  //                       '<img src="'+img_path+'" class="img-responsive" alt="a" />'+
	  //                   '</div>'+
	  //                   '<div class="info">'+
	  //                       '<div class="row">'+
	  //                       	'<div class="col-md-12 product_name">'+item.DESCRIPTION+'</div>'+
	  //                           '<div class="price col-md-12">'+ 
	  //                               '<h6 class="price-text-color">'+
	  //                                   'Price '+unit_price.toFixed(2)+'</h6>'+
	  //                           '</div> '+
	  //                       '</div>'+
	  //                       '<div class="separator">'+
	  //                       '</div></br>'+
	  //                       '<div class="row">'+
	  //                       	'<div class="col-md-4 col-sm-4">'+
	  //                       		//add_to_cart
	  //                       		'<button style="width:35px;" class="btn btn-block btn-primary btn-sm add-to-cart" id="'+item.PRODCODE+'" data-toggle="tooltip" data-placement="top" title="Add to cart">'+
	  //                       			' <i class="fa fa-shopping-cart"></i> '+
	  //                       		'</button>'+
	  //                       	'</div>'+
	  //                       	'<div class="col-md-8 col-sm-8" >'+
	  //                       		//qty
   //                      		  '<div class="input-group input-group-sm">'+
	  //                               '<div class="input-group-prepend">'+
	  //                                 '<span class="input-group-text" id="basic-addon1">Qty</span>'+
	  //                               '</div>'+
	  //                               '<input width="20" id="qty_'+item.PRODCODE+'" type="text" value="1" class="form-control input-sm cart_qty" placeholder="">'+
	  //                             '</div>'+
	  //                       	'</div>'+
	  //                       '</div>'+

	  //                       '<div class="clearfix">'+
	  //                       '</div>'+
	  //                   '</div>'+
	  //               '</div>'+
	  //           '</div> '
			// );
			console.log(img_path);
			$('#shop_items').append('' +
				'<div class="card mb-2 product-item">'
				   +'<img src="'+img_path+'" class="card-img-top img-fluid"  alt="Product Image">'
				   +'<div class="card-body d-flex flex-column">'
				      +'<p class="card-text text-center">'+item.DESCRIPTION+'</p>' 
				   +'</div>'
				   +'<div class="card-footer ">'
				 	  +'<p class="card-text product-price justify-content-end">Price '+unit_price.toFixed(2)+'</p>'
				 	  +'<div class="d-flex">'
					      	+'<button class="btn btn-primary btn-sm mr-3 ml-0 add-to-cart" id="'+item.PRODCODE+'" data-toggle="tooltip" data-placement="top" title="Add to cart">'
					      		+'<i class="fa fa-shopping-cart"></i> '
					      	+'</button>'
					      +'<div class="input-group input-group-sm">'
					         +'<div class="input-group-prepend">'
					            +'<span class="input-group-text" id="basic-addon1">Qty</span>'
					         +'</div>'
				    	     +'<input width="20" id="qty_'+item.PRODCODE+'" type="text" value="1" class="form-control input-sm cart_qty" placeholder="" wtx-context="8E54477F-0FF1-43F4-85F9-473AA53BAB92">'
				     	 +'</div>'
				     +'</div>'	 
				   +'</div>'	
				+'</div>'
			);

	});
	addToCartBtnClick();
	onQtyKeyUp();
	$('[data-toggle="tooltip"]').tooltip();
}

function onQtyKeyUp(){
	$('.cart_qty').keyup(function(){
		var value = this.value;
		value = value.replace(/\D+/g, "");

		//console.log(value);
		this.value = value;
		this.focus();

	});
}

function add_to_cart_confirm_box(id,qty){
	// swal({
	//   title: 'Confirmation',
	//   text: "Adding product with quantity of "+qty,
	//   type: 'info',
	//   showCancelButton: true,
	//   confirmButtonColor: '#3085d6',
	//   cancelButtonColor: '#d33',
	//   confirmButtonText: 'Confirm'
	// }).then((result) => {
	//   if (result.value) {
	//     // swal(
	//     //   'Success!',
	//     //   'Your selected product has been added to cart.',
	//     //   'success'
	//     // ); 
	    
	//   }
	// });

	$.confirm({
	    title: 'Confirmation!',
	    content: "Adding product with quantity of "+qty,
	    type: 'blue',
	    typeAnimated: true,
	    buttons: {
	        tryAgain: {
	            text: 'Confirm',
	            btnClass: 'btn-blue',
	            action: function(){
	            	console.log('you choose to remove'); 
	            	addToCart(id,qty);
	            }
	        },
	        close: function () {
	        }
	    }
	});
}

function addToCartBtnClick(){
	$('.add-to-cart').on('click',function(){
        var id = this.id; 

        var qty = $('#qty_'+id).val();
        console.log(id,qty);
        if(qty == '' || qty == 0){ 
        	$('#qty_'+id).val('');
        	$('#qty_'+id).focus();
        	_showWarning('Qty is required and must be greater than zero');
        	return;
        }
        add_to_cart_confirm_box(id,qty);
    });
}

function addToCart(id,qty){
	var data = {
        	// token 		: readCookie('token'),
        	product_id 	: id,
        	qty 		: qty
        }
        postRequestWithHeader('cart/add_to_cart',data,function(response){
        	//console.log(response);
        	if(response.success == false){
        		showWarning(response.message);
        		//_showWarning(response.message);
        		return;
        	}
        	//showSuccess(response.message);
        	//_showSuccess(response.message);
        	//compareAddedProductToCart(id);
        	getCart();
        });
}

function btn_go(){
	$('#btn_go').on('click',function(){
		var product_name = $('#txt_productname').val();
		var category = $('#category').val();

		getProducts(product_name,1,per_page, category);
	});
}

function btn_first(){
	$('#btn_first').on('click',function(){
		var product_name = $('#txt_productname').val();
		var category = $('#category').val();
		getProducts(last_product_name,first_page,per_page, category);
	});
}

function btn_prev(){
	$('#btn_prev').on('click',function(){
		var product_name = $('#txt_productname').val();
 		var category = $('#category').val();
		var prev = current_page - 1; 
		if(prev >= first_page){ 
			getProducts(last_product_name,prev,per_page, category);
		}

	});
}

function btn_next(){
	$('#btn_next').on('click',function(){
		var product_name = $('#txt_productname').val();
		var category = $('#category').val();

		var next = current_page + 1; 
		if(next <= last_page){  
			getProducts(last_product_name,next,per_page, category);
		}

	});
}

function btn_last(){
	$('#btn_last').on('click',function(){
		var product_name = $('#txt_productname').val();
		var category = $('#category').val();

		getProducts(last_product_name,last_page,per_page, category);
	});
}

function displayCategory(){
	var selectObj =$('#category');	
	var data = {
		// token: readCookie('token')
	}
	postRequestWithHeader('product_category',data,function(response){
		if(response.success == false){
			showWarning(response.message);
			return;
		}
		// console.log(response);
		selectObj.empty();
		selectObj.append('<option value="0">ALL</option>');
		for (var i = 0; i < response.data.length; i++) {
			var category = response.data[i];
			
			selectObj.append('<option value="'+category.code+'">'+category.name+'</option>');
		}
	});
}	

function displayProductByCat(){
	$('#category').on('change', function(){
		var category = $(this).val();
		var product_name = $('#txt_productname').val();
		getProducts(product_name,1,per_page, category);
	});
}

function compareAddedProductToCart(item_id){
	var exists = false;
	for (var i = 0; i < cart_items.length ; i++) {
		console.log("prodcode:", cart_items[i].product_id, 'product_id:', item_id);
		if (cart_items[i].product_id == item_id) {
			exists = true;
		}
	}
	if (exists == false) {
		cart_items.push({
			'product_id': item_id
		});
		updateCartItems(cart_items.length);
		console.log('compared Items in cart', cart_items);
	}
}

function displayCurrentPageResult(current_page, last_page){
	$('#current_page').text(current_page);
	$('#last_page').text(last_page);
}

function displayTotalItems(total) {
	$('#total_res').text(total);	
}