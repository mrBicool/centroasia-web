$(document).ready(function(){

	$('#btn_submit').on('click',function(){
		//alert('test');
		
		var proposed_location 	= $('#proposed_location').val();
		var first_name 			= $('#first_name').val();
		var last_name 			= $('#last_name').val();
		var email_address 		= $('#email_address').val();
		var contact_number 		= $('#contact_number').val();
		var home_address 		= $('#home_address').val();
		var remarks 			= $('#remarks').val();

		if(proposed_location == ''){
			showWarning('Proposed Location is required');
			return;
		}

		if(first_name == ''){
			showWarning('First name is required');
			return;
		}
		
		if(last_name == ''){
			showWarning('Last name is required');
			return;
		}

		if(email_address == ''){
			showWarning('Email address is required');
			return;
		}

		if (validateEmail(email_address) == false) {
			showWarning('Please provide a valid email address');
			return;
		}

		if(contact_number == ''){
			showWarning('Contact is required');
			return;
		}

		if (validateMobile(contact_number) == false) {
			showWarning("Please provide a valid contact number");
			return;
		}


		if(home_address == ''){
			showWarning('Home address is required');
			return;
		}

		// if(remarks == ''){
		// 	showWarning('Required.','Remarks is required');
		// 	return;
		// }

		//POST 
		var data = { 
			proposed_location 	: proposed_location,
			first_name 			: first_name,
			last_name 			: last_name,
			email_address 		: email_address,
			contact_number 		: contact_number,
			home_address 		: home_address,
			remarks 			: remarks
		};
 
		postRequest("mail/franchise_inquiry",data,function(data){

			if(data.success == false){
				showWarning(data.message);
			}

			showSuccess(data.message);
			setTimeout(function () {
				location.reload();
			}, 500);


		});
		//END
	});

});

