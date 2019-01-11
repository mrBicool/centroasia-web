$(document).ready(function(){ 

    if(!isLogin()){ 
        window.location.href = url+"page-not-accessible";
    }
 
 	getCart();
 	getDeliveryAddress();
 	getPersonalDetails();
 	getMop();

 	checkOut();
 	cancel();
});

//GLOBAL shit
var cart_list = [];
var cart_list_ctr = 0;
var over_all_total = 0;

function getCart(){
	postRequestWithHeader('cart/get_cart',{/*token:readCookie('token')*/},function(response){
		//console.log(response);
		if(response.success == false){
			showSuccess(response.message); 
			return;
		}
 		
 		var items = response.data.items; 
 		var total_amount = response.data.total_amount;
 		var ctr = 1;
		items.forEach((item)=>{
			var id 			=item.product_id;
			var desc 		=item.description;
			var qty			=item.qty;
			var price 		=item.price;
			var amount 		=item.amount; 
			var surcharge 	=item.surcharge;
			
			var unit_price 	= parseFloat(price)+parseFloat(surcharge);

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
		cartDisplayer(); 
	});
}

function getDeliveryAddress(){
	postRequestWithHeader('user/get_delivery_address',{/*token:readCookie('token')*/},function(response){
				if(response.success==false){
					$('#delivery_address').text('Nothing to display.');
					return;
				}
				//showSuccess(response.message);
				$('#delivery_address').text(response.data);
	});
}

function getPersonalDetails(){
	postRequestWithHeader('user/get_personal_details',{/*token:readCookie('token')*/},function(response){
				if(response.success==false){
					$('#personal_details').text('Nothing to display.');
					return;
				}
				//showSuccess(response.message);
				$('#personal_details').text(response.data);
	});
}

function getMop(){
	postRequestWithHeader('mode_of_payment/index',{/*token:readCookie('token')*/},function(response){
		if(response.success==false){
			// $('#personal_details').text('Nothing to display.');
			return;
		}

		var mops = response.data;
		 $('#mops').empty();
		$.each(mops, function( index, value ) {
			if(index == 0){
				$('#mops').append(
					'<div class="custom-control custom-radio custom-control-inline">'+
					  '<input type="radio" class="mop" id="customRadioInline'+index+'" name="mop" value="'+value.id+'" class="custom-control-input" checked>'+
					  '<label class="custom-control-label" for="customRadioInline'+index+'">'+value.title+'</label>'+
					'</div>'
				);
			}else{
				$('#mops').append(
					'<div class="custom-control custom-radio custom-control-inline">'+
					  '<input type="radio" class="mop" id="customRadioInline'+index+'" name="mop" value="'+value.id+'" class="custom-control-input">'+
					  '<label class="custom-control-label" for="customRadioInline'+index+'">'+value.title+'</label>'+
					'</div>'
				);
			}
		  
		});
		//showSuccess(response.message);
		//$('#personal_details').text(response.data);
	});
}

function cartDisplayer(){ 
	$('#tbl_body').empty();
	if(cart_list.length == 0){
		$('#remove-cart').hide();
		$('#checkout').hide();
		$('#total_amount_displayer').empty(); 
		$('#total_amount_displayer').removeClass("text-right"); 
		$('#total_amount_displayer').addClass("text-center"); 
		$('#total_amount_displayer').text('Nothing to display');
	}else{
		for (i = 0; i < cart_list.length; i++) { 
			var amount = cart_list[i].amount; 
			var price = cart_list[i].price;
			$('#tbl_body').append(
				'<tr>'+
			      '<th scope="row">'+(i+1)+'</th>'+
			      '<td>'+cart_list[i].desctiption+'</td>'+
			      '<td>'+addComma( price.toFixed(2) )+'</td>'+
			      '<td>'+ cart_list[i].qty +'</td>'+
			      '<td>'+addComma( amount.toFixed(2) )+'</td>'+
			   '</tr>'
			); 
		}
		$('#total_amount').text( addComma( over_all_total.toFixed(2) ) ); 
	}
}

function checkOut(){
	$('#checkout').on('click',function(){

		var mop = document.getElementsByName('mop');
		for(var i = 0; i < mop.length; i++){
		    if(mop[i].checked){
		        mop = mop[i].value;
		    }
		}
		// console.log(mop);
		// return;
		$.confirm({
		    title: 'Confirmation!',
		    content: "You are about to checkout your order, do you want to continue?" ,
		    type: 'blue',
		    typeAnimated: true,
		    buttons: {
		        tryAgain: {
		            text: 'Confirm',
		            btnClass: 'btn-blue',
		            action: function(){

		            	postRequestWithHeader('order/add_sales_order',{/*token:readCookie('token'),*/mop_id:mop},function(response){
		            		if(response.success==false){
		            			showWarning(response.message);
		            			return;
		            		}
		            		showSuccess(response.message); 
		            		setTimeout(function(){
		            			window.location.href = url+"account";
		            		},1000);
		            	});

		            }
		        },
		        close: function () {
		        }
		    }
		});

		// if (confirm('Checkout confirmation, do you want to continue?')) { 
		// 	postRequest('order/add_sales_order',{token:readCookie('token'),mop_id:mop},function(response){
		// 		if(response.success==false){
		// 			showWarning(response.message);
		// 			return;
		// 		}
		// 		showSuccess(response.message); 
		// 		setTimeout(function(){
		// 			window.location.href = url+"account";
		// 		},1000);
		// 	});
		// }

	});
}

function cancel(){
	$('#cancel').on('click',function(){
		redirectTo("")
	});
}

// function mopOnChange(){
// 	$('.mop').on('click',function(){
// 		var mop = document.getElementsByName('mop');

// 	});
// }