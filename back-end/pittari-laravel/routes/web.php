<?php

use App\Http\Controllers\AllArguments;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\FruitController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostReplyController;
use App\Http\Controllers\PronounsController;
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
Route::get('/articles/{article}', [ArticleController::class, 'show']);
Route::get('/topics', [TopicController::class, 'index'])->middleware('auth');
Route::get('/topics/{topic}', [TopicController::class, 'show'])->middleware('auth');
Route::get('/allPosts', [PostController::class, 'index']);
Route::post('/post', [PostController::class, 'store']);
Route::get('/post/{post}', [PostController::class, 'show']);
Route::post('/reply', [PostReplyController::class, 'store']);
Route::get('/allGames', [GameController::class, 'index']);
Route::get('/fruits', [FruitController::class, 'index']);
Route::get('/pronouns', [PronounsController::class, 'index']);
Route::get('/allArguments', [AllArguments::class, 'index']);
Route::post('/register', [RegisteredUserController::class, 'store'])->name('register');
Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/passwordReset', [PasswordResetLinkController::class, 'store']);
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);

Route::get('/dashboard', function(){
    return 'ciao';
});


require __DIR__.'/auth.php';
