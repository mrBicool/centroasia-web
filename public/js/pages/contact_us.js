$(document).ready(function(){

	$('#btn_submit').on('click',function(){
		var first_name 		= $('#first_name').val();
		var last_name 		= $('#last_name').val();
		var email_address 	= $('#email_address').val();
		var contact_number 	= $('#contact_number').val();
		var subject 		= $('#subject').val();
		var message 		= $('#message').val();

		if(first_name == ''){
			showWarning('First name is required.');

			return;
		}

		if(last_name == ''){
			showWarning('Last name is required.');

			return;
		}

		if(email_address == ''){
			showWarning('Email address is required.');
			return;
		}

		if (validateEmail(email_address) == false) {
			showWarning('Please provide a valid email address');
			return;
		}

		
		if(contact_number == ''){
			showWarning('Contact number is required.');
			return;
		}

		if (validateMobile(contact_number) == false) {
			showWarning("Please provide a valid contact number");
			return; 
		}

		if(subject == ''){
			showWarning('Subject is required.');
			return;
		}

		if(message == ''){
			showWarning('Message is required.');
			return;
		}

		//POST
		var data = {
			first_name 		: first_name,
			last_name 		: last_name,
			email_address 	: email_address,
			contact_number 	: contact_number,
			subject 		: subject,
			message 		: message
		};

		postRequest('mail/contact_inquiry',data,function(data){

			if(data.success == false){
				showWarning(data.message);
			}

			showSuccess(data.message);
			setTimeout(function () {
				// location.reload();
			}, 500);

		});
		//END

	});

});