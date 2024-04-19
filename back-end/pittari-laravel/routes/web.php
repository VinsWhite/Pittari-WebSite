<?php

use App\Http\Controllers\AllArguments;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ExampleController;
use App\Http\Controllers\FruitController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\GameScoreController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostReplyController;
use App\Http\Controllers\PronounsController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Http;
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

/* SEZIONE ARTICOLI */
Route::get('/articles', [ArticleController::class, 'index']);
Route::get('/articles/{article}', [ArticleController::class, 'show']);
Route::post('/articles', [ArticleController::class, 'store']);
Route::delete('/deleteArticle/{article}', [ArticleController::class, 'destroy']);

/* SEZIONE FORUM */
Route::get('/topics', [TopicController::class, 'index'])->middleware('auth');
Route::get('/topics/{topic}', [TopicController::class, 'show'])->middleware('auth');
Route::get('/allPosts', [PostController::class, 'index'])->middleware('auth');
Route::post('/post', [PostController::class, 'store'])->middleware('auth');
Route::get('/post/{post}', [PostController::class, 'show'])->middleware('auth');
Route::delete('/deletePost/{post}', [PostController::class, 'destroy'])->middleware('auth');
Route::post('/reply', [PostReplyController::class, 'store'])->middleware('auth');

/* SEZIONE IMPARA */
Route::get('/allGames', [GameController::class, 'index'])->middleware('auth');
Route::get('/fruits', [FruitController::class, 'index'])->middleware('auth');
Route::get('/pronouns', [PronounsController::class, 'index'])->middleware('auth');
Route::get('/allArguments', [AllArguments::class, 'index'])->middleware('auth');
Route::get('/examples', [ExampleController::class, 'index'])->middleware('auth');
Route::get('/gameScores', [GameScoreController::class, 'index'])->middleware('auth');
Route::get('/allScores', [GameScoreController::class, 'allScores'])->middleware('auth');

/* OPERAZIONI DI AUTENTICAZIONE */
Route::post('/register', [RegisteredUserController::class, 'store'])->name('register');
Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/changepassword', [NewPasswordController::class, 'store']);
Route::post('/passwordReset', [PasswordResetLinkController::class, 'store']);
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);
Route::delete('/deleteUser', [UserController::class, 'destroy']);

Route::get('/dashboard', function(){
    return 'ciao';
});

/* API DI JISHO */
Route::get('/jishoApi/{keyword}', function ($keyword) {
    $apiUrl = 'https://jisho.org/api/v1/search/words';

    $response = Http::get($apiUrl, [
        'keyword' => $keyword,
    ]);

    return $response->json();
});

/* API DI TATOEBA */
Route::get('/tatoebaApi', function () {
    $page = request('page', 1); 

    $response = Http::get('https://tatoeba.org/it/api_v0/search', [
        'from' => 'jpn',
        'trans_filter' => 'limit',
        'trans_to' => 'ita',
        'to' => 'ita',
        'page' => $page,
    ]);

    return response()->json($response->json());
});





require __DIR__.'/auth.php';
