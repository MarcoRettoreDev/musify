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
        Playlist::find(1)->tracks()->sync([1 => ['order' => 1], 2 => ['order' => 2], 3 => ['order' => 3], 4 => ['order' => 4], 5 => ['order' => 5]]);
    }
}
