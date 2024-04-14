<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\JsonResponse;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log; // Importa la classe Log

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): JsonResponse
    {
        Log::info('Attempting login...', ['email' => $request->email]); // Logga il tentativo di login
        
        $request->authenticate();

        $user = $request->user();
        $token = $request->user()->createToken('auth_token')->plainTextToken;

        Log::info('Login successful', ['email' => $user->email]); // Logga il login riuscito
        
        return response()->json([
            'token' => $token,
            'userData' => [
                'name' => $user->name,
                'surname' => $user->surname,
                'email' => $user->email,
                'role' => $user->role, 
            ]
        ], 200);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Log::info('Logging out user...');
        
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        Log::info('Logout successful');
        
        return response()->noContent();
    }
}
