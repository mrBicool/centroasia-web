$(document).ready(function(){ 

    if(!isLogin()){ 
        window.location.href = url+"page-not-accessible";
    }
 	
 	getSalesOrderDetailesHistory();
});

function getSalesOrderDetailesHistory(){
	console.log(window.location.search);
	var urlParams = new URLSearchParams(window.location.search);
	console.log(urlParams.has('id')); // true
	console.log(urlParams.get('id')); // "edit"
	//==============================================================
	if(!urlParams.has('id')){
		window.location.href = url+"page-not-accessible";
		return;
	}
	
	var so_id = urlParams.get('id');
	$('#so_id').text(so_id);
	getSalesOrderDetailsHistory(so_id);
}

function getSalesOrderDetailsHistory(so_id){
	postRequestWithHeader('order/sales_order_details',{/*token:readCookie('token'),*/sales_order_id:so_id},function(response){
		console.log(response);
		if(response.success == false){
			showSuccess(response.message);
			$('#tbl_body').empty();
			$('#tbl_body').text('Nothing to show.');
			return;
		} 
		//console.log(response);
		$('#mop').html('<strong>Mode of Payment : </strong> '+response.mop);
		var so_details = response.data;
		so_details.forEach((item)=>{ 
			$('#tbl_body').append(
				'<tr>'+
			      '<th scope="row">'+item.PARTNUM+'</a></th>'+
			      '<td>'+item.DESCRIPTION+'</td>'+
			      '<td style="text-align:right; padding-right:10px;">'+item.UNITPRICE+'</td>'+
			      '<td style="text-align:center; ">'+item.ORDQTY+'</td>'+
			      '<td style="text-align:right; padding-right:10px;">'+parseFloat(item.NETPRICE).toFixed(2)+'</td>'+
			    '</tr>'
			);
			
		});
	});
}
