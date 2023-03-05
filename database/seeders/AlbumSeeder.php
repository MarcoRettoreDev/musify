<?php

namespace Database\Seeders;

use App\Models\Album;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AlbumSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Album::create([
            'title' => 'Single',
            'release' => Carbon::createFromDate(2023, 01, 01)->toDateTimeString(),
            'duration' => Carbon::parse('2023-01-01')->addHours(1),
            'slug' => "single",
        ]);
    }
}
