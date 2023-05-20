<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePlaylistRequest;
use App\Http\Requests\UpdatePlaylistRequest;
use App\Models\Playlist;
use App\Models\Track;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PlaylistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePlaylistRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePlaylistRequest $request)
    {
        $data = $request->validated();

        $playlist = Playlist::create([
            'name' => $data['name'],
            'user_id' => auth()->user()->id,
            'expires_at' => now()->addDays(2),
        ]);

        if (isset($data['description'])) {
            $playlist->update(['description' => $data['description']]);
        }

        if (isset($data['image'])) {
            $playlist->addImage($playlist, $data['image']);
        }

        return back()->with('message', 'Playlist created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Playlist  $playlist
     * @return \Illuminate\Http\Response
     */
    public function show(Playlist $playlist)
    {
        $playlist->load('tracks');

        $playlist->image = $playlist->getImages();

        return Inertia::render('Dashboard', [
            'playlist' => $playlist,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Playlist  $playlist
     * @return \Illuminate\Http\Response
     */
    public function edit(Playlist $playlist)
    {
        //
    }


    /**
     * Attach a track to a playlist
     *
     * @param  \App\Models\Playlist  $playlist
     * @return \Illuminate\Http\Response
     */
    public function addTrack(Playlist $playlist, Track $track)
    {
        if ($playlist->tracks()->where('track_id', $track->id)->exists()) {
            return back()->with('message', 'Track already exists in playlist');
        } else {
            $playlist->tracks()->attach($track->id);
        }

        // return a message without view
        return back()->with('message', 'Track added successfully');
    }

    /**
     * Remove a track to a playlist
     *
     * @param  \App\Models\Playlist  $playlist
     * @return \Illuminate\Http\Response
     */
    public function removeTrack(Playlist $playlist, Track $track)
    {
        $playlist->tracks()->detach($track->id);

        // return a message without view
        return back()->with('message', 'Track removed successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePlaylistRequest  $request
     * @param  \App\Models\Playlist  $playlist
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePlaylistRequest $request, Playlist $playlist)
    {
        $data = $request->validated();

        $playlist->update($data);

        if (isset($data['image'])) {
            $playlist->addImage($playlist, $data['image']);
        }

        // Ordenamos los nuevos recorridos
        $playlist->syncPlaylistTrack($data['tracks']);

        return Redirect::route('dashboard')->with('message', 'Playlist updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Playlist  $playlist
     * @return \Illuminate\Http\Response
     */
    public function destroy(Playlist $playlist)
    {

        $playlist->delete();

        return Redirect::route('dashboard')->with('message', 'Playlist deleted');
    }
}
