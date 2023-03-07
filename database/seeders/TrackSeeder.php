<?php

namespace Database\Seeders;

use App\Models\BaseModel;
use App\Models\Track;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use wapmorgan\Mp3Info\Mp3Info;

class TrackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $audioPath = public_path('temp/audio/Gravity-feat-Laura-Korinth.mp3');
        $audio = new Mp3Info($audioPath);

        Track::create([
            'title' => 'Gravity (feat. Laura Korinth)',
            'slug' => 'gravity',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 1,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(1)->addMedia(public_path('temp/image/gravity-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Captain-Nemo.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'Captain nemo',
            'slug' => 'captain-nemo',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 1,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(2)->addMedia(public_path('temp/image/Captain-nemo-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);


        $audioPath = public_path('temp/audio/Purple-Noise.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'Purple noise',
            'slug' => 'purple-noise',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 1,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(3)->addMedia(public_path('temp/image/purple-noise-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);


        $audioPath = public_path('temp/audio/To-The-Moon-And-Back.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'To the moon and back',
            'slug' => 'to-the-moon-and-back',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 1,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(4)->addMedia(public_path('temp/image/to-the-moon-and-back-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/No-Goodbye-Extended-Version.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'No goodbye',
            'slug' => 'no-goodbye',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 5,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(5)->addMedia(public_path('temp/image/no-goodbye-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Feed-Your-Head-Robin-Schulz-Remix.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'Feed your head',
            'slug' => 'feed-your-head',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 5,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(6)->addMedia(public_path('temp/image/Feed-your-head-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Netzwerk-Falls-Like-Rain.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'Netzwerk (falls like rain)',
            'slug' => 'netzwerk',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 2,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(7)->addMedia(public_path('temp/image/Netzwerk-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Sternekinder.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'Sternenkinder',
            'slug' => 'sternekinder',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 2,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(8)->addMedia(public_path('temp/image/Sternekinder-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Friends.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'Friends',
            'slug' => 'friends',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(9)->addMedia(public_path('temp/image/Friends-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);


        $audioPath = public_path('temp/audio/Something-We-All-Adore.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'Something we all adore',
            'slug' => 'something-we-all-adore',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(10)->addMedia(public_path('temp/image/Something-we-all-adore-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/The-way-back.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'The way back',
            'slug' => 'the-way-back',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(11)->addMedia(public_path('temp/image/The-way-back-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Never-Sleep-Again.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'Never sleep again',
            'slug' => 'never-sleep-again',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(12)->addMedia(public_path('temp/image/never-sleep-again-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Hypnotize.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'Hypnotize',
            'slug' => 'hypnotize',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(13)->addMedia(public_path('temp/image/hypnotize-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Somebodys-Story.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Somebody's story",
            'slug' => 'somebodys-story',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(14)->addMedia(public_path('temp/image/somebodys-story-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Around-Solomun.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Around",
            'slug' => 'around',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(15)->addMedia(public_path('temp/image/around-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/After-Rain-Comes-Sun.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "After rain comes sun",
            'slug' => 'after-rain-comes-sun',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(16)->addMedia(public_path('temp/image/after-rain-comes-sun-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Return-To-Oz.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Return to oz",
            'slug' => 'return-to-oz',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 4,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(17)->addMedia(public_path('temp/image/return-to-oz-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/White-Walls.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "White walls",
            'slug' => 'white-walls',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 4,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(18)->addMedia(public_path('temp/image/white-walls-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Under-Dark.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Under dark",
            'slug' => 'under-dark',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 4,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(19)->addMedia(public_path('temp/image/under-dark-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Father-Ocean-Ben-Böhmer-Remix.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Father ocean (Ben Böhmer remix)",
            'slug' => 'father ocean',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 4,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(20)->addMedia(public_path('temp/image/father-ocean-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Running.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Running",
            'slug' => 'running',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 4,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(21)->addMedia(public_path('temp/image/running-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Swallow.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Swallow (live edit)",
            'slug' => 'swallow',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 4,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(22)->addMedia(public_path('temp/image/Swallow-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Sky-and-Sand.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Sky and sand",
            'slug' => 'sky-and-sand',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 5,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(23)->addMedia(public_path('temp/image/sky-and-sand-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Dockyard.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Dockyard",
            'slug' => 'dockyard',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 5,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(24)->addMedia(public_path('temp/image/Dockyard-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Invisible-Paul-Kalkbrenner-Remix.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Invisible (Paul Kalkbrenner remix)",
            'slug' => 'invisible',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 5,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(25)->addMedia(public_path('temp/image/invisible-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);


        $audioPath = public_path('temp/audio/Aaron.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Aaron",
            'slug' => 'aaron',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 5,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(26)->addMedia(public_path('temp/image/aaron-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Altes-Kamuffel.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Altes kamuffel",
            'slug' => 'altes-kamuffel',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 5,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(27)->addMedia(public_path('temp/image/Altes-kamuffel-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Losing-it-Radio-edit.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Losing it (radio edit)",
            'slug' => 'losing-it',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 6,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(28)->addMedia(public_path('temp/image/losing-it-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Stop-It.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Stop it",
            'slug' => 'stop-it',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 6,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(29)->addMedia(public_path('temp/image/stop-it-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);


        $audioPath = public_path('temp/audio/Freaks.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Freaks",
            'slug' => 'freaks',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 6,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(30)->addMedia(public_path('temp/image/Freaks-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);


        $audioPath = public_path('temp/audio/Ya-Kidding-Eli-Brown-Remix.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Ya kidding (Eli Brown remix)",
            'slug' => 'ya-kidding',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 6,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(31)->addMedia(public_path('temp/image/Ya-kidding-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Its-a-killa.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "It's a killa",
            'slug' => 'its-a-killa',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 6,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(32)->addMedia(public_path('temp/image/its-a-killa-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Wanna-Go-Dancin.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Wanna go dancin",
            'slug' => 'wanna-go-dancin',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 6,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(33)->addMedia(public_path('temp/image/wanna-go-dancing-portrait.png'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Aiguilhe.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Aiguilhe",
            'slug' => 'aiguilhe',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 7,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(34)->addMedia(public_path('temp/image/aiguilhe-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Swaying.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Swaying",
            'slug' => 'swaying',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 7,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(35)->addMedia(public_path('temp/image/Swaying-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Routine.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Routine",
            'slug' => 'routine',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 7,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(36)->addMedia(public_path('temp/image/Routine-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Unexpected.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Unexpected",
            'slug' => 'unexpected',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 7,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(37)->addMedia(public_path('temp/image/Unexpected-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Take-your-time.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Take your time",
            'slug' => 'take-your-time',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 7,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(38)->addMedia(public_path('temp/image/Take-your-time-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Strobe.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Strobe",
            'slug' => 'strobe',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 8,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(39)->addMedia(public_path('temp/image/strobe-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/I-Remember.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "I remember",
            'slug' => 'i-remember',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 8,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(40)->addMedia(public_path('temp/image/i-remember-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Alive.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Alive",
            'slug' => 'alive',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 8,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(41)->addMedia(public_path('temp/image/Alive-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Escape.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Escape",
            'slug' => 'escape',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 8,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(42)->addMedia(public_path('temp/image/escape-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Monophobia.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Monophobia",
            'slug' => 'monophobia',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 8,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(43)->addMedia(public_path('temp/image/monophobia-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/My-Heart-Has-Teeth.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "My heart has teeth",
            'slug' => 'my-heart-has-teeth',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 8,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(44)->addMedia(public_path('temp/image/my-heart-has-teeth-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Not-Exactly.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Not exactly",
            'slug' => 'not-exactly',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 8,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(45)->addMedia(public_path('temp/image/not-exactly-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);


        $audioPath = public_path('temp/audio/Horizon.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Horizon",
            'slug' => 'horizon',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(46)->addMedia(public_path('temp/image/horizon-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Flame.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Flame",
            'slug' => 'flame',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(47)->addMedia(public_path('temp/image/flame-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);


        $audioPath = public_path('temp/audio/Closer-feat-WhoMadeWho.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Closer feat. WhoMadeWho",
            'slug' => 'closer',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(48)->addMedia(public_path('temp/image/closer-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Our-Space.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Our space",
            'slug' => 'our-space',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(49)->addMedia(public_path('temp/image/Our-space-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Papillon.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Papillon",
            'slug' => 'papillon',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(50)->addMedia(public_path('temp/image/Papillon-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);


        $audioPath = public_path('temp/audio/Tibet.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Tibet",
            'slug' => 'tibet',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(51)->addMedia(public_path('temp/image/tibet-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Its-Ours.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "It's ours",
            'slug' => 'its-ours',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(52)->addMedia(public_path('temp/image/its-ours-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Dreamcatcher.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Dreamcatcher",
            'slug' => 'dreamcatcher',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(53)->addMedia(public_path('temp/image/dreamcatcher-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Atlas.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Atlas",
            'slug' => 'atlas',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(54)->addMedia(public_path('temp/image/atlas-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Nova-Two.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Nova two",
            'slug' => 'nova-two',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 10,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(55)->addMedia(public_path('temp/image/nova-two-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Dark-Song.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => "Dark song",
            'slug' => 'dark-song',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 10,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(56)->addMedia(public_path('temp/image/dark-song-portrait.png'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);

        $audioPath = public_path('temp/audio/Time.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'Time',
            'slug' => 'time',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 10,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(57)->addMedia(public_path('temp/image/time-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);


        $audioPath = public_path('temp/audio/Hold-Me-To-The-Light.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'Hold me to the light',
            'slug' => 'hold-me-to-the-light',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 10,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(58)->addMedia(public_path('temp/image/hold-me-to-the-light-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);


        $audioPath = public_path('temp/audio/Innerbloom.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'Innerbloom',
            'slug' => 'innerbloom',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 11,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(59)->addMedia(public_path('temp/image/Innerbloom-portrait.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);


        $audioPath = public_path('temp/audio/Underwater.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'Underwater',
            'slug' => 'underwater',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 11,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(60)->addMedia(public_path('temp/image/underwater-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);


        $audioPath = public_path('temp/audio/Treat-You-Better.mp3');
        $audio = new Mp3Info($audioPath);
        Track::create([
            'title' => 'Treat you better',
            'slug' => 'treat-you-better',
            'duration' => '00:' . floor($audio->duration / 60) . ':' . floor($audio->duration % 60),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 11,
            'album_id' => 1,
        ])->addMedia($audioPath)
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
        Track::find(61)->addMedia(public_path('temp/image/treat-you-better-portrait.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_IMAGE);
    }
}
