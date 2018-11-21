<?php

use Illuminate\Support\Facades\Route;

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




Route::namespace('Panel')->prefix('panell')->group(function(){
    Route::get('/','PanelController@index')->name('dashboard');
    Route::resource('members','MembersController');
    Route::get('/show-cards','MembersController@showCards')->name('cards.index');
    Route::get('/show-card/{member}','MembersController@showCard')->name('cards.show');
    Route::get('/excel','ExcelController@showMembersInExcel')->name('excel.all');
    Route::get('/excel/import','ExcelController@importMembersFromExcelForm')->name('excel.import');
    Route::post('/excel/import','ExcelController@importMembersFromExcel')->name('excel.import.store');
    Route::resource('options','OptionsController')->only(['index','update']);
    Route::resource('users','UsersController');
});














Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');