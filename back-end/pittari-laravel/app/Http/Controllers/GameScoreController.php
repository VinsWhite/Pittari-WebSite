<?php

namespace App\Http\Controllers;

use App\Models\Game_score;
use App\Http\Requests\StoreGame_scoreRequest;
use App\Http\Requests\UpdateGame_scoreRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class GameScoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $game_scores = Game_score::with('game')->where('user_id', $user->id)->get();

        return response()->json($game_scores);
    }

    public function allScores()
    {
        $user_role = Auth::user()->role;

        if ($user_role === 'admin') {
        $game_scores = Game_score::with(['game', 'user'])->get();
        } else {
            return response()->json(['message' => 'Non sei un admin! Non autorizzato'], 403);
        }

        return response()->json($game_scores);
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
    public function store(StoreGame_scoreRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Game_score $game_score)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Game_score $game_score)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGame_scoreRequest $request, Game_score $game_score)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Game_score $game_score)
    {
        //
    }
}
