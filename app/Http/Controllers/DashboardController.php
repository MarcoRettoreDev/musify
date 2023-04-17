<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMyContentRequest;
use App\Models\Album;
use App\Models\Artist;
use App\Models\Genre;
use App\Models\Playlist;
use App\Models\Track;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Str;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $lastFiveTracksFromDifferentArtist = Track::latest()->take(25)->get()->unique('artist_id');

        $tracks = [];

        foreach ($lastFiveTracksFromDifferentArtist as $track) {
            $tracks[] = $track;
        }

        $allTracks = Track::all();
        $allArtist = Artist::all();
        // $allPlaylist = Playlist::where('user_id', auth()->user()->id);
        $allPlaylist = User::find(auth()->user()->id)->playlists;
        $allAlbums = Album::all();

        return Inertia::render('Dashboard', [
            'tracks' => $tracks,
            'allTracks' => $allTracks,
            'allArtist' => $allArtist,
            'allAlbums' => $allAlbums,
            'allPlaylist' => $allPlaylist,
            'playlist' => $request->playlist ? $request->playlist : null,
            'created' => $request->created ? $request->created : null,
        ]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Redirect::route('dashboard', [
            'created' => true,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMyContentRequest $request)
    {
        $data = $request->validated();

        $track = Track::create([
            'title' => $data['trackTitle'],
            'release' => $data['trackRelease'],
            'slug' => Str::slug($data['trackTitle']),
            'artist_id' => $data['artistId'],
            'album_id' => $data['albumId'],
            'expires_at' => now()->addDays(2),
        ]);

        // Primero cargamos el audio, para luego obtener la duración
        $track->addAudio($data['trackAudio']);

        // Despúes de obtener la duración, actualizamos el registro
        $track->update([
            'duration' => $track->getDurationTime(),
        ]);

        if (isset($data['trackImage'])) {
            $track->addImage($track, $data['trackImage']);
        }

        if (!isset($data['albumId'])) {
            $newAlbum = Album::create([
                'name' => $data['albumName'],
                'release_date' => $data['albumRelease'],
                'image' => $data['albumImage'],
            ]);

            if (isset($data['albumImage'])) {
                $newAlbum->addImage($newAlbum, $data['albumImage']);
            }
        }

        if (!isset($data['artistId'])) {
            $newArtist = Artist::create([
                'name' => $data['artistName'],
                'image' => $data['artistImage'],
                'nacionality' => $data['artistNacionality'],
                'birth_date' => $data['artistBirthDate'],
                'bio' => $data['artistBio'],
            ]);

            if (isset($data['artistImage'])) {
                $newArtist->addImage($newArtist, $data['albumImage']);
            }
        }

        return Redirect::route('dashboard');
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
