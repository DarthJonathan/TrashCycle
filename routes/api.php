<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'ApiController@login');
Route::post('/logout', 'ApiController@logout');

Route::get('/trash_input', 'ApiController@scanBarcode');

Route::get('/vouchers','ApiController@vouchers');
Route::get('/points', 'ApiController@points');

Route::middleware('auth:api')->group(function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/user/points', 'ApiController@GetUserPoints');
});
