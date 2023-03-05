<?php

namespace Database\Seeders;

use App\Models\BaseModel;
use App\Models\Track;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class TrackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Track::create([
            'title' => 'No goodbye',
            'slug' => 'no-goodbye',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 5,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/No-Goodbye-Extended-Version.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => 'Feed your head',
            'slug' => 'feed-your-head',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 5,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Feed-Your-Head-Robin-Schulz-Remix.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => 'Netzwerk (falls like rain)',
            'slug' => 'netzwerk',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 2,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Netzwerk-Falls-Like-Rain.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => 'Sternenkinder',
            'slug' => 'sternekinder',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 2,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Sternekinder.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => 'Friends',
            'slug' => 'friends',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Friends.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => 'Something we all adore',
            'slug' => 'something-we-all-adore',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Something-We-All-Adore.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => 'The way back',
            'slug' => 'the-way-back',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/The-way-back.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => 'Never sleep again',
            'slug' => 'never-sleep-again',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Never-Sleep-Again.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => 'Hypnotize',
            'slug' => 'hypnotize',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Hypnotize.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);


        Track::create([
            'title' => "Somebody's story",
            'slug' => 'somebodys-story',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Somebodys-Story.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);


        Track::create([
            'title' => "Around",
            'slug' => 'around',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Around-Solomun.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "After rain comes sun",
            'slug' => 'after-rain-comes-sun',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 3,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/After-Rain-Comes-Sun.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Return to oz",
            'slug' => 'return-to-oz',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 4,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Return-To-Oz.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "White walls",
            'slug' => 'white-walls',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 4,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/White-Walls.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Under dark",
            'slug' => 'under-dark',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 4,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Under-Dark.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Father ocean (Ben Böhmer remix)",
            'slug' => 'father ocean',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 4,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Father-Ocean-Ben-Böhmer-Remix.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Running",
            'slug' => 'running',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 4,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Running.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Swallow (live edit)",
            'slug' => 'swallow',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 4,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Swallow.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Sky and sand",
            'slug' => 'sky-and-sand',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 5,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Sky-and-Sand.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Dockyard",
            'slug' => 'dockyard',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 5,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Dockyard.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Invisible (Paul Kalkbrenner remix)",
            'slug' => 'invisible',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 5,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Invisible-Paul-Kalkbrenner-Remix.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Aaron",
            'slug' => 'aaron',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 5,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Aaron.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Altes kamuffel",
            'slug' => 'altes-kamuffel',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 5,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Altes-Kamuffel.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Losing it (radio edit)",
            'slug' => 'losing-it',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 6,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Losing-it-Radio-edit.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Stop it",
            'slug' => 'stop-it',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 6,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Stop-It.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Freaks",
            'slug' => 'freaks',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 6,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Freaks.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Ya kidding (Eli Brown remix)",
            'slug' => 'ya-kidding',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 6,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Ya-Kidding-Eli-Brown-Remix.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "It's a killa",
            'slug' => 'its-a-killa',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 6,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Its-a-killa.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Wanna go dancin",
            'slug' => 'wanna-go-dancin',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 6,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Wanna-Go-Dancin.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Aiguilhe",
            'slug' => 'aiguilhe',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 7,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Aiguilhe.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Swaying",
            'slug' => 'swaying',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 7,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Swaying.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Routine",
            'slug' => 'start-the-engine',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 7,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Routine.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Unexpected",
            'slug' => 'unexpected',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 7,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Unexpected.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Take your time",
            'slug' => 'take-your-time',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 7,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Take-your-time.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Strobe",
            'slug' => 'strobe',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 8,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Strobe.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "I remember",
            'slug' => 'i-remember',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 8,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/I-Remember.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);


        Track::create([
            'title' => "Alive",
            'slug' => 'alive',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 8,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Alive.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);


        Track::create([
            'title' => "Escape",
            'slug' => 'escape',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 8,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Escape.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);


        Track::create([
            'title' => "Monophobia",
            'slug' => 'monophobia',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 8,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Monophobia.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "My heart has teeth",
            'slug' => 'my-heart-has-teeth',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 8,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/My-Heart-Has-Teeth.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Not exactly",
            'slug' => 'not-exactly',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 8,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Not-Exactly.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Horizon",
            'slug' => 'horizon',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Horizon.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Flame",
            'slug' => 'flame',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Flame.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Closer feat. WhoMadeWho",
            'slug' => 'closer',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Closer-feat-WhoMadeWho.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Our space",
            'slug' => 'our-space',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Our-Space.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Papillon",
            'slug' => 'papillon',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Papillon.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Tibet",
            'slug' => 'tibet',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Tibet.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);


        Track::create([
            'title' => "It's ours",
            'slug' => 'its-ours',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Its-Ours.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Dreamcatcher",
            'slug' => 'dreamcatcher',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Dreamcatcher.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Atlas",
            'slug' => 'atlas',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 9,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Atlas.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Nova two",
            'slug' => 'nova-two',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 10,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Nova-Two.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => "Dark song",
            'slug' => 'dark-song',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 10,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Dark-Song.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => 'Time',
            'slug' => 'time',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 10,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Time.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => 'Hold me to the light',
            'slug' => 'hold-me-to-the-light',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 10,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Hold-Me-To-The-Light.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => 'Innerbloom',
            'slug' => 'innerbloom',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 11,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Innerbloom.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => 'Underwater',
            'slug' => 'underwater',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 11,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Underwater.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);

        Track::create([
            'title' => 'Treat you better',
            'slug' => 'treat-you-better',
            'duration' => Carbon::parse('00:03:30'),
            'release' => Carbon::parse('2021-02-23'),
            'artist_id' => 11,
            'album_id' => 1,
        ])->addMedia(public_path('temp/audio/Treat-You-Better.mp3'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AUDIO);
    }
}
