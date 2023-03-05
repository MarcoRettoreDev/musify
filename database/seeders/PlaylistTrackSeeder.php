<?php

namespace Database\Seeders;

use App\Models\Playlist;
use Illuminate\Database\Seeder;

/**
 * This seeders attach tracks to playlists
 */
class PlaylistTrackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Playlist::find(1)->tracks()->attach([1, 2, 3, 4, 5]);
    }
}
