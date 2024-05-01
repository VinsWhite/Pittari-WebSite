<?php

namespace App\Http\Controllers;

use App\Models\Post_reply;
use App\Http\Requests\StorePost_replyRequest;
use App\Http\Requests\UpdatePost_replyRequest;
use Illuminate\Support\Facades\Auth;

class PostReplyController extends Controller
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
    public function store(StorePost_replyRequest $request)
    {
        $user = Auth::user();
        
        $reply = new Post_reply();
        $reply ->context = $request->context;
        $reply ->post_id = $request->post_id;
        $reply->user()->associate($user);

        $reply->save();

        return response()->json($reply, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post_reply $post_reply)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post_reply $post_reply)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePost_replyRequest $request, Post_reply $post_reply)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post_reply $post_reply)
    {
        $user_role = Auth::user()->role;

        if (Auth::id() !== $post_reply->user_id && $user_role !== 'admin') {
            // se l'utente non è l'autore della risposta del post e non è un amministratore, restituisce un errore
            return response()->json(['message' => 'Non sei autorizzato a eliminare questo post.'], 403);
        }

        $post_reply->delete();
        return response()->json(['message' => 'Il post è stato eliminato con successo.']);
    }
}
