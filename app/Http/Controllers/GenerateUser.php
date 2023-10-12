<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Faker\Generator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class GenerateUser extends Controller
{
    public function generate()
    {
        $faker = \Faker\Factory::create();
        $data = [
            'name' => $faker->name,
            'email' => $faker->email,
            'password' => $faker->password,
        ];

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        $user->viewPassword = $data['password'];

        return Inertia::render('Welcome', [
            'user' => $user,
        ]);
    }
}
