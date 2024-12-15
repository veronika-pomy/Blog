<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test','App\Http\Controllers\TestController@controllerMethod');

// TODO: need to secure route
Route::any('{slug}', function () {
    return view('welcome');
});