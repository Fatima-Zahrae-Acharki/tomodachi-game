<?php

use App\Http\Controllers\PlayersessionController;
use App\Models\Playersession;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register', 'App\Http\Controllers\PlayerController@register');

Route::get('test', 'App\Http\Controllers\PlayerController@test');

Route::post('/addPlayer', [PlayersessionController::class ,'addPlayer']);
Route::get('/show', [PlayersessionController::class ,'show']);

Route::get('edit/{id}', [PlayersessionController::class, 'edit']); 
Route::put('/update/{id}', [PlayersessionController::class, 'update']);

Route::delete('/delete/{id}', [PlayersessionController::class, 'delete']);
