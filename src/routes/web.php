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

// ユーザ登録
Route::get('signup', 'Auth\RegisterController@showRegistrationForm');
Route::post('signup', 'Auth\RegisterController@register');

// 認証
Route::get('login', 'Auth\LoginController@showLoginForm');
Route::post('login', 'Auth\LoginController@login');
Route::get('logout', 'Auth\LoginController@logout');

// スタンプ機能
Route::group(['middleware' => 'auth'], function () {
    Route::post('/punchin', 'StampsController@punchIn');
});
Auth::routes();

//Todo機能
Route::get('/todos', 'TodosController@index')->name('todos.index');
Route::get('/todos/create', 'TodosController@showCreateForm')->name('todos.create');
Route::post('/todos/create', 'TodosController@create');
Route::get('/todos/edit', 'TodosController@showEditForm')->name('todos.edit');
Route::post('/todos/edit', 'TodosController@edit');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
