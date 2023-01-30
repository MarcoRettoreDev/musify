<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => "Test User",
            'email' => "test@email.com",
            'password' => bcrypt('123456'),
            'email_verified_at' => now()
        ]);
    }
}
