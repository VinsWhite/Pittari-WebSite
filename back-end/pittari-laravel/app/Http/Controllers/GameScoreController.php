<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\Game_score;
use App\Http\Requests\StoreGame_scoreRequest;
use App\Http\Requests\UpdateGame_scoreRequest;
use App\Models\User;
use Illuminate\Http\Client\Request;
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
    public function store(Request $request)
    {
        // Convalida i dati della richiesta
        $validatedData = $request->validate([
            'scores' => 'required|integer|min:0', 
            'game_name' => 'required|string', 
        ]);

        // Ottieni l'ID del gioco dal nome
        $gameName = $request->input('game_name');
        $game = Game::where('name', $gameName)->first();

        // Verifica se il gioco esiste
        if (!$game) {
            return response()->json(['message' => 'Il gioco specificato non esiste'], 404);
        }

        // Ottieni l'ID dell'utente autenticato
        $user_id = Auth::user()->id;

        // Crea un nuovo punteggio
        $gameScore = new Game_score();
        $gameScore->scores = $validatedData['scores'];
        $gameScore->user_id = $user_id;
        $gameScore->game_id = $game->id;
        $gameScore->save();

        return response()->json($gameScore, 201);
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
    public function update(Request $request, $id)
    {

        // Trova il punteggio da aggiornare
        $gameScore = Game_score::findOrFail($id);

        // Incrementa il punteggio
        $gameScore->scores += $request->input('scores');
        $gameScore->save();

        return response()->json($gameScore, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Game_score $game_score)
    {
        //
    }
}
