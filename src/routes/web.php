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
Route::get('signup', 'Auth\RegisterController@showRegistrationForm')->name('signup.get');
Route::post('signup', 'Auth\RegisterController@register')->name('signup.post');

// 認証
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login')->name('login.post');
Route::get('logout', 'Auth\LoginController@logout')->name('logout.get');

//Todo機能
Route::get('/todos', 'TodosController@index')->name('todos.index');
Route::get('/todos/create', 'TodosController@showCreateForm')->name('todos.create');
Route::post('/todos/create', 'TodosController@create');
Route::get('/todos/edit/{todo_id}', 'TodosController@showEditForm')->name('todos.edit');
Route::post('/todos/edit/{todo_id}', 'TodosController@edit');
Route::post('/todos/delete/{todo_id}', 'TodosController@destroy')->name('todos.delete');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
