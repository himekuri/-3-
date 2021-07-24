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

// スタンプ機能
Route::get('/punchin', 'StampsController@punchIn')->name('stamp/punchin');
// Route::group(['middleware' => 'auth'], function() {
//     Route::get('/punchin', 'StampsController@punchIn')->name('stamp/punchin');
// });

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
