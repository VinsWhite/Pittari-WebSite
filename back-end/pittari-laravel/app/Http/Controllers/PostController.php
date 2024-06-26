<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $allPosts = Post::with('user', 'postReplies')->get();
        return response()->json($allPosts);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        $user = Auth::user();

        $post = new Post();
        $post->title = $request->title;
        $post->context = $request->context;
        $post->user_id = $user->id;
        $post->topic_id = $request->topic_id;
        // salvo il nuovo post nel database
        $post->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        // qui carichiamo i post con lo user del post
        $postWithUser = $post->load('user');

        // carichiamo le risposte ordinate dalla più recente alla meno recente
        $postAndReplies = $postWithUser->load(['postReplies' => function ($query) {
            $query->orderByDesc('created_at');
        }, 'postReplies.user']);

        return response()->json($postAndReplies);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {

        $user_role = Auth::user()->role;

        if (Auth::id() !== $post->user_id && $user_role !== 'admin') {
            // se l'utente non è l'autore del post e non è un amministratore, restituisce un errore
            return response()->json(['message' => 'Non sei autorizzato a eliminare questo post.'], 403);
        }

        $post->delete();
        return response()->json(['message' => 'Il post è stato eliminato con successo.']);
    }
}
