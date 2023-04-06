<?php

namespace Database\Seeders;

use App\Models\BaseModel;
use App\Models\Playlist;
use Illuminate\Database\Seeder;

/*
 * Here we will storage all users playlists
*/

class PlaylistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Playlist::create([
            'name' => 'My favorite',
            'description' => 'My favorite tracks',
            'user_id' => 1,
        ])->addMedia(public_path('temp/image/hearh-white-avatar.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);
    }
}
