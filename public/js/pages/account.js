$(document).ready(function(){ 

    if(!isLogin()){ 
        window.location.href = url+"page-not-accessible";
    }
 
 	// getSalesHistory();
 	getSalesHist();
 	nextPageBtn();
 	previousPageBtn()
});



function getSalesHistory(){
	
	postRequestWithHeader('order/sales_history',{token:readCookie('token')},function(response){
		if(response.success == false){
			showSuccess(response.message);
			$('#tbl_body').empty();
			$('#tbl_body').text('Nothing to show.');
			return;
		} 
		var orders = response.data;
		console.log(orders);
		var sales_order = orders.data;
		sales_order.forEach((item)=>{
			
			var status = '';
			var item_stat = item.STATUS; 
			if(item_stat == null || item_stat.trim() == ''){
				status = 'Pending';
			}else if(item_stat == 'A' || item_stat == 'a'){
				status = 'Approved';
			}else if(item_stat == 'C' || item_stat == 'c'){
				status = 'Cancelled';
			}else if (item_stat == 'S' || item_stat == 's'){
				status = 'Served / Completed';
			}else if (item_stat == 'I' || item_stat == 'i'){
				status = 'Invoiced / Delivered';
			}else{
				status = 'undefined status';
			}

			$('#tbl_body').append(
				'<tr>'+
			      '<th scope="row"><a href="/sales_order?id='+item.ORDNUM+'" style="text-decoration:none; color:green;">'+item.ORDNUM+'</a></th>'+
			      '<td style="text-align:right; padding-right:25px;">'+item.NETAMOUNT+'</td>'+
			      '<td>'+item.CREATED_AT+'</td>'+
			      '<td>'+status+'</td>'+
			    '</tr>'
			);
			
		});
	});
}


//pagination================================
var current_page = null;
var prev_page_url = null;
var next_page_url = null;
var current_data = null;

function getSalesHist(){

	if (current_page == null) {
        current_page = 1;
    }

	postRequestWithHeader('order/sales_history' + "?page=" +current_page, {/*token:readCookie('token')*/},function(response){
		if(response.success == false){
			showSuccess(response.message);
			$('#tbl_body').empty();
			$('#tbl_body').text('Nothing to show.');
			return;
		} 

		var orders = response.data;
		var sales_order = orders.data;

		if (orders.next_page_url == null) {
		    $('#next_page').addClass('disabled');
		    $('#next_page').prop("disabled", true);

		} else {
		    $('#next_page').removeClass('disabled');
		    $('#next_page').removeAttr("disabled");
		}

		if (orders.prev_page_url == null) {
		    $('#prev_page').addClass('disabled');
		    $('#prev_page').prop("disabled", true);
		} else {
		    $('#prev_page').removeClass('disabled');
		    $('#prev_page').removeAttr("disabled");
		}

		$('#tbl_body').empty();

		/* display the orders*/
		sales_order.forEach((item)=>{
			
			var status = '';
			var item_stat = item.STATUS; 
			if(item_stat == null || item_stat.trim() == ''){
				status = 'Pending';
			}else if(item_stat == 'A' || item_stat == 'a'){
				status = 'Approved';
			}else if(item_stat == 'C' || item_stat == 'c'){
				status = 'Cancelled';
			}else if (item_stat == 'S' || item_stat == 's'){
				status = 'Served / Completed';
			}else if (item_stat == 'I' || item_stat == 'i'){
				status = 'Invoiced / Delivered';
			}else{
				status = 'undefined status';
			}

			$('#tbl_body').append(
				'<tr>'+
			      '<th scope="row"><a href="/sales_order?id='+item.ORDNUM+'" style="text-decoration:none; color:green;">'+item.ORDNUM+'</a></th>'+
			      '<td style="text-align:right; padding-right:25px;">'+item.NETAMOUNT+'</td>'+
			      '<td>'+item.CREATED_AT+'</td>'+
			      '<td>'+status+'</td>'+
			    '</tr>'
			);
			
		});
	});
}


function nextPageBtn(){
	$('#next_page').on('click', function(){
		current_page += 1;
		getSalesHist(); 
		console.log('current ', current_page);
	});	
}
function previousPageBtn(){
	$('#prev_page').on('click', function(){
		current_page -= 1;
		getSalesHist(); 
		console.log('current ', current_page);
	});	
}