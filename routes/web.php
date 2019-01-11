<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/shop',					function(){ return view('shop'); });
Route::get('/franchise',			function(){ return view('franchise'); });
Route::get('/about-us',				function(){ return view('about-us'); });
Route::get('/our-brand',			function(){ return view('our-brand'); });
Route::get('/contact-us',			function(){ return view('contact-us'); });
Route::get('/account',				function(){ return view('account'); });
Route::get('/sales_order',			function(){ return view('sales_order'); });
Route::get('/cart',					function(){ return view('cart'); });
Route::get('/checkout',				function(){ return view('checkout'); });

//page error
Route::get('/page-not-accessible',	function(){ return view('error.not_accessible'); });