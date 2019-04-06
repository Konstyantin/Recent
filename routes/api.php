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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::put('register', 'UserController@register');
Route::post('login', 'UserController@authenticate');

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::get('user', 'UserController@getAuthenticatedUser');

    Route::prefix('services')->group(function () {
        Route::get('/', 'ServiceController@index')->name('service.index');
        Route::get('/{id}', 'ServiceController@show')->where('id', '[0-9]+')->name('service.show');
        Route::post('/', 'ServiceController@store')->name('service.store');
        Route::put('/{id}', 'ServiceController@update')->where('id', '[0-9]+')->name('service.update');
        Route::delete('/', 'ServiceController@delete')->where('id', '[0-9]+')->name('service.delete');
    });

    Route::prefix('services/benefits')->group(function () {
        Route::get('/', 'ServiceBenefitsController@index')->name('service.benefits.index');
        Route::get('/{id}', 'ServiceBenefitsController@show')->where('id', '[0-9]+')->name('service.benefits.show');
        Route::post('/', 'ServiceBenefitsController@store')->name('service.benefits.store');
        Route::put('/{id}', 'ServiceBenefitsController@update')->where('id', '[0-9]+')->name('service.benefits.update');
        Route::delete('/{id}', 'ServiceBenefitsController@delete')->where('id', '[0-9]+')->name('service.benefits.delete');
    });
});