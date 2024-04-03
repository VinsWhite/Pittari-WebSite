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
        //
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
        $postUser = $post->load('user');

        // ma non dobbiamo dimenticare di caricare anche gli utenti che hanno risposto
        $postAndUserReplies = $postUser->load('postReplies.user');

        return response()->json($postAndUserReplies);
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
        //
    }
}
