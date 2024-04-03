<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TopicController;
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
    return ['Laravel' => app()->version()];
});

Route::get('/articles', [ArticleController::class, 'index']);
Route::get('/topics', [TopicController::class, 'index'])->middleware('auth');
Route::get('/topics/{topic}', [TopicController::class, 'show'])->middleware('auth');
Route::post('/post', [PostController::class, 'store']);
Route::get('/post/{post}', [PostController::class, 'show'])->middleware('auth');
Route::post('/register', [RegisteredUserController::class, 'store'])->name('register');
Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);

Route::get('/dashboard', function(){
    return 'ciao';
});


require __DIR__.'/auth.php';
