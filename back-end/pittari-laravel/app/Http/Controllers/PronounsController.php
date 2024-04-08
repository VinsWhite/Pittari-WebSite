<?php

namespace App\Http\Controllers;

use App\Models\Pronouns;
use Illuminate\Http\Request;

class PronounsController extends Controller
{
    public function index()
    {
        $pronouns = Pronouns::all();
        return response()->json($pronouns);
    }
}
