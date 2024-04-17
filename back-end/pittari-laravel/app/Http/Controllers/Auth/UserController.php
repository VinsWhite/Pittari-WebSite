<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function destroy(Request $request, User $user)
    {
        // validazione dei dati
        $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);

        // ci assicuriamo che l'utente che sta facendo la richiesta è lo stesso dell'utente da cancellare
        if ($user->id !== $request->user_id) {
            return response()->json(['error' => 'Non hai i permessi per eliminare questo utente'], 403);
        }

        // elimina l'utente
        $user->delete();

        return response()->json(['message' => 'Utente eliminato con successo'], 200);
    }
}

