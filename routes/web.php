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


// Route::get('/', function () {
//     return view('welcome');
// });

Route::redirect('/', '/login');



Route::middleware('auth')->namespace('Panel')->prefix('panell')->group(function(){
    Route::get('/','PanelController@index')->name('dashboard');
    Route::get('/members/show-specific-members-cards','MembersController@showSpecificMembersCards');
    Route::resource('members','MembersController');
    Route::get('/show-cards','MembersController@showCards')->name('cards.index');
    Route::get('/show-card/{member}','MembersController@showCard')->name('cards.show');
    Route::get('/excel','ExcelController@showMembersInExcel')->name('excel.all');
    Route::get('/excel/export/monthly','ExcelController@monthlyExporttMembersFromExcel')->name('excel.export.montly');
    Route::get('/excel/import','ExcelController@importMembersFromExcelForm')->name('excel.import');
    Route::post('/excel/import','ExcelController@importMembersFromExcel')->name('excel.import.store');
    Route::put('/options/signature','OptionsController@updateSing')->name('options.update.signature');
    Route::resource('options','OptionsController')->only(['index','update']);
    Route::resource('users','UsersController');
    Route::resource('roles','RolesAndPermissionsController');
    Route::get('permissions','RolesAndPermissionsController@showPermissions')->name('permissions.index');
    Route::prefix('sms')->name('sms.')->group(function (){
        Route::post('send/singel','SmsController@sendSms')->name('send.singel');
        Route::get('form/singel/{member}','SmsController@singelForm')->name('form.singel');
        Route::get('form/multipel','SmsController@showMultipleSendForm')->name('form.multipel');
        Route::post('form/multipel','SmsController@sendMultipleMessages')->name('send.multipel');
        Route::get('/','SmsController@index')->name('index');
        Route::get('/{sms}','SmsController@show')->name('show');
        Route::delete('/{sms}','SmsController@destroy')->name('destroy');
    });
});









Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');