
Pace.on("done", function(){
    
}); 
/*=======================================
=            SYSTEM URL PATH            =
=======================================*/

/*----------  ONLINE  ----------*/
//var urlAPI  =   'http://localhost:8001/api/';
//var url     =   'http://xxx';
/*----------  OFFLINE  ----------*/
// var urlAPI  =   'http://localhost:8020/api/';
var urlAPI  = "http://localhost:8020/api/";
var url     =   'http://localhost:8021/';
/*=====  End of SYSTEM URL PATH  ======*/


/*==========================================
=            Post / Get Request            =
==========================================*/

function getRequest(api_url,callback){
        $.ajax({
            crossOrigin: true,
            url: urlAPI+api_url,
            type: "GET",
            dataType: "json",
            jsonpCallback: 'callback',
            success: function(data){
                callback(data);
            },
            error: function(){
                $.growl.error({
                  title: "Page Error",
                  message: 'Something Went Wrong!'
                }); 
            }
        }); 
}

function postRequest(api_url,request,callback){ 
    $.ajax({
        url: urlAPI+api_url,
        type: "POST",
        dataType: "json",
        data : request,
        // header : getHeader(),
        success: function(data){
            callback(data);
        },
        error: function(data){
            console.log(data);
            // $.growl.error({
            //   location: "tc",
            //   title: "Page Error",
            //   message: 'Something Went Wrong!'
            // });
        }
    }); 
}

function postRequestWithHeader(api_url,request,callback){ 
	var token = readCookie('token'); 
    // alert(token);
    $.ajax({
        url: urlAPI+api_url,
        type: "POST",
        dataType: "json",
        data : request,
        headers: {token: token},
       // beforeSend: function(xhr){xhr.setRequestHeader('token', token);},
        success: function(data){
            callback(data);
        },
        error: function(data){
            console.log(data);
            // $.growl.error({
            //   location: "tc",
            //   title: "Page Error",
            //   message: 'Something Went Wrong!'
            // });
        }
    }); 
}

/*=====  End of Post / Get Request  ======*/


/*================================
=            Notifier            =
================================*/

function showSuccess($msg){
    $.growl({
      location: "br",
      title: "Message",
      message: $msg
    }); 
}

function showWarning($msg){
    $.growl.warning({
      location: "br",
      title: "Message",
      message: $msg
    }); 
}

function showError($msg){
    $.growl.warning({
      location: "br",
      title: "Message",
      message: $msg
    }); 
}

function _showSuccess($msg){
	const toast = swal.mixin({
	  toast: true,
	  position: 'top-end',
	  showConfirmButton: false,
	  timer: 3000
	});

	toast({
	  type: 'success',
	  title: $msg
	})
}

function _showWarning($msg){
	const toast = swal.mixin({
	  toast: true,
	  position: 'bottom-end',
	  showConfirmButton: false,
	  timer: 3000
	});

	toast({
	  type: 'warning',
	  title: $msg
	})
}

/*=====  End of Notifier  ======*/


/*===============================
=            Cookies            =
===============================*/

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = ""; 
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(
        name, 
        "", 
        -1
    );
}

function eraseAllCookie(){
    document.cookie.split(";").forEach(function(c) { 
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
    });
}

/*=====  End of Cookies  ======*/

/*======================================
=            Login / Logout            =
======================================*/

function isLogin(){
    if(readCookie('token')!=null){
        return true;
    }
    else{
        return false;
    }
}

function logout(){ 
    window.location.href =url;
    eraseAllCookie(); 
    showSuccess("Logged out!");
}

/*=====  End of Login / Logout  ======*/


/*=====================================
=            configuration            =
=====================================*/ 

function redirectTo(page){
    window.location.href = url+page;
}

function showShopMenu(){
    //console.log('hey');
    $('#nav-home').after(
          '<li class="nav-item" id="nav-shop">'+
            '<a class="nav-link" href="/shop">Shop</a>'+
          '</li>'
    );
}

/*=====  End of configuration  ======*/


$(document).ready(function(){ 
    $("#main").fadeIn(500);
    $('#login-alert-success').hide();
    $('#login-alert-warning').hide();
    // $('#myModal').on('shown.bs.modal', function () {
    //   $('#myInput').trigger('focus')
    // })
    
    $('.dropdown-toggle').dropdown();

    if(!isLogin()){
        console.log('Your not loggedin');
        $('#nav-shop').remove();
        $('#login').show();
        $('#logged-in').hide();
        $("#shopping_cart").hide();
    }else{
        console.log('Your now logged-in');
        showShopMenu();

        //
        $('#current_user').text(readCookie('user'));

        $('#login').hide();
        $('#logged-in').show();
        $("#shopping_cart").show();
        getCartItems();
    }

    btn_login();
    $('#btn_logout').on('click',function(){ 
        logout();
    });
});


function btn_login(){
    $('#btn_login').on('click',function(){
        $username = $('#username').val().trim();
        $password = $('#password').val().trim();

        if($username == ''){ 
            $('#login-alert-warning').text('Username is required.');
            $('#login-alert-warning').show();
            return;
        }

        if($password == ''){ 
            $('#login-alert-warning').text('Password is required.');
            $('#login-alert-warning').show();
            return;
        }


        $('#login-alert-success').hide();
        $('#login-alert-warning').hide();
        login($username,$password);
    });
}

function login(username,password){
    var data = {
        username : username,
        password : password
    };
    postRequest('user/login',data,function(data){
        if(data.success == false){
            $('#login-alert-warning').text(data.message);
            $('#login-alert-warning').show();
            return;
        }

        $('#login-alert-success').text(data.message);
        $('#login-alert-success').show();
        setTimeout(function(){ 
            console.log(data);
            createCookie('account_name', data.data.account_name, 30);
            createCookie('token', data.data.token, 30);
            createCookie('user', data.data.user, 30);
            location.reload();
        },1000);
    });
}

function logout(){
    postRequestWithHeader('user/logout',{/*token:readCookie('token')*/},function(data){
        if(data.success == false){
            showError(data.message);

            eraseAllCookie();
            setTimeout(function(){ 
                console.log(data); 
                location.reload();
            },2000);
            return;
        }
        showSuccess(data.message);
        eraseAllCookie();
        setTimeout(function(){ 
            console.log(data); 
            location.reload();
        },1000);
    });
}


function addComma(number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function validateEmail(email){
  var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(email); //  code nila james
  if(!email.match(regEx)) return false;
}
 

function validateMobile(mobileString){
  //var regEx = /^(09|\+639)\d{9}$/;  
  var regEx = /^([ 0-9\(\)\+\-]{8,})*$/;
  if (!mobileString.match(regEx)) return false      
}


// FOR CHANGING THE CART NOTIF BADGE
var cart_items=[];
var cart_counter=0;

function updateCartItems(total){
    $('#items_in_cart').text(total);
}

function getCartItems(){
    postRequestWithHeader('cart/get_cart',{/*token:readCookie('token')*/},function(response){
        if (response.success == false) {
            showSuccess(response.message); 
            return;
        }

        var items = response.data.items;
        items.forEach((item)=>{
            var id          =item.product_id;
            var desc        =item.description;
            var new_obj = {  
                'product_id'        : id
            
            };
            cart_items.push(new_obj);
            cart_counter++;
        });

        updateCartItems(cart_items.length);  
        // console.log('items in cart:', cart_items);
    });
}


