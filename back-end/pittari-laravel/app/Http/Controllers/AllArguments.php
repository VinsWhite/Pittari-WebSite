<?php

namespace App\Http\Controllers;

use App\Models\Fruit;
use App\Models\Pronouns;
use Illuminate\Http\Request;

class AllArguments extends Controller
{
    public function index()
    {
        $fruits = Fruit::all();
        $pronouns = Pronouns::all();
        
        $data = [
            'fruits' => $fruits,
            'pronouns' => $pronouns
        ];

        return response()->json($data);
    }
}
