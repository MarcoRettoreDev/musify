<?php

namespace Database\Seeders;

use App\Models\BaseModel;
use App\Models\Artist;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArtistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Artist::create([  // 1
            'name' => 'Boris Brejcha',
            'bio' => 'Boris Brejcha is a German DJ and record producer. He describes his music style as "high-tech minimal." His style has been compared with DJ Umek, and Solomun. Brejcha frequently wears a joker mask based on a Carnival of Venice design.',
            'country' => 'Germany',
            'birthdate' => Carbon::createFromDate(1981, 10, 26)->toDateTimeString(),
            'slug' => 'boris-brejcha',
        ])->addMedia(public_path('temp/image/Boris-Brejcha-avatar.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AVATAR);

        Artist::create([ // 2
            'name' => 'Klangkarussell',
            'bio' => 'Klangkarussell is an Austrian electronic music duo formed in 2011. The two members of the group are Tobias Rieser and Adrian Held. Their biggest hit to date is "Sonnentanz", which reached the top 10 in six countries.',
            'country' => 'Austria',
            'birthdate' => Carbon::createFromDate(2011, 01, 01)->toDateTimeString(),
            'slug' => 'klangkarussell',
        ])->addMedia(public_path('temp/image/Klangkarussell-avatar.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AVATAR);

        Artist::create([ // 3
            'name' => 'Solomun',
            'bio' => 'Mladen Solomun, better known under his stage name Solomun, is a Bosnian-German DJ. He is a four-time DJ Awards winner for Best Producer, Best DJ and Best Melodic House DJ.',
            'country' => 'Germany',
            'birthdate' => Carbon::createFromDate(1975, 12, 27)->toDateTimeString(),
            'slug' => 'solomun',
        ])->addMedia(public_path('temp/image/Solomun-avatar.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AVATAR);

        Artist::create([ // 4
            'name' => 'Monolink',
            'bio' => 'Monolink is the stage name of Steffen Linck, a German Liveact, singer-songwriter and electronic dance music producer who specializes in ambient, techno, electronica and house genres.',
            'country' => 'Germany',
            'birthdate' => Carbon::createFromDate(1989, 06, 06)->toDateTimeString(),
            'slug' => 'monolink',
        ])->addMedia(public_path('temp/image/Monolink-avatar.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AVATAR);

        Artist::create([ // 5
            'name' => 'Paul Kalkbrenner',
            'bio' => 'Paul Kalkbrenner is a German musician, producer of electronic music and actor. Because he breaks down his tracks into elements that are reassembled onstage, Kalkbrenner is considered a live act, as opposed to a DJ.',
            'country' => 'Germany',
            'birthdate' => Carbon::createFromDate(1977, 06, 11)->toDateTimeString(),
            'slug' => 'paul-kalkbrenner',
        ])->addMedia(public_path('temp/image/Paul-Kalkbrenner-avatar.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AVATAR);

        Artist::create([ // 6
            'name' => 'Fisher',
            'bio' => "Paul Nicholas Fisher, known by the stage name Fisher is an Australian music producer. He was nominated for the 2018 ARIA Award for Best Dance Release as well as the Best Dance Recording category at the 61st Annual Grammy Awards for his solo single 'Losing It'.",
            'country' => 'Australia',
            'birthdate' => Carbon::createFromDate(1986, 11, 05)->toDateTimeString(),
            'slug' => 'fisher',
        ])->addMedia(public_path('temp/image/Fisher-avatar.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AVATAR);

        Artist::create([ // 7
            'name' => 'Joris Delacroix',
            'bio' => 'What does it mean to put a lot of efforts into electronic music when you are twenty in 2010? It does not merely come down to produce rowdy beats that will make jump and dance fluorescent-hat-wearing kids. Joris Delacroix is twenty-three and has an impressive maturity.',
            'country' => 'France',
            'birthdate' => Carbon::createFromDate(1987, 04, 22)->toDateTimeString(),
            'slug' => 'joris-delacroix',
        ])->addMedia(public_path('temp/image/Joris-Delacroix-avatar.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AVATAR);


        Artist::create([ // 8
            'name' => 'Deadmau5',
            'bio' => 'Joel Thomas Zimmerman, known professionally as Deadmau5, is a Canadian electronic music producer and DJ. He mainly produces progressive house music, though he also produces and DJs other genres of electronic music, including techno under the alias Testpilot.',
            'country' => 'Canada',
            'birthdate' => Carbon::createFromDate(1981, 01, 05)->toDateTimeString(),
            'slug' => 'deadmau5',
        ])->addMedia(public_path('temp/image/Deadmau5-avatar.jpg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AVATAR);

        Artist::create([ // 9
            'name' => 'Artbat',
            'bio' => 'Artbat was formed by two experienced deejays and producers from Kiev - Artur and Batish. Their portfolio builds upon a series of about 10 successful releases that charted globally and conquered numerous dancefloors all over the world.',
            'country' => 'Ukraine',
            'birthdate' => Carbon::createFromDate(2014, 01, 01)->toDateTimeString(),
            'slug' => 'artbat',
        ])->addMedia(public_path('temp/image/Artbat-avatar.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AVATAR);


        Artist::create([ // 10
            'name' => 'Tale of us',
            'bio' => 'Tale of Us is an Italian music production and DJ duo consisting of Carmine Conte and Matteo Milleri. They are based in Berlin, Germany.',
            'country' => 'Germany',
            'birthdate' => Carbon::createFromDate(2009, 01, 01)->toDateTimeString(),
            'slug' => 'tale-of-us',
        ])->addMedia(public_path('temp/image/tale-of-us-avatar.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AVATAR);

        Artist::create([ // 11
            'name' => 'Rufus du sol',
            'bio' => 'Rüfüs Du Sol, stylised as RÜFÜS DU SOL and formerly known as simply Rüfüs from 2010 to 2018, is an Australian alternative dance group from Sydney, that consists of Tyrone Lindqvist, Jon George and James Hunt.',
            'country' => 'Australia',
            'birthdate' => Carbon::createFromDate(2010, 01, 01)->toDateTimeString(),
            'slug' => 'rufus-du-sol',
        ])->addMedia(public_path('temp/image/Rufus-du-sol-avatar.jpeg'))
            ->toMediaCollection(BaseModel::MEDIA_COLLECTION_AVATAR);
    }
}
