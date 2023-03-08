<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Models\Track;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lastFiveTracksFromDifferentArtist = Track::latest()->take(25)->get()->unique('artist_id');

        $tracks = [];
        foreach ($lastFiveTracksFromDifferentArtist as $track) {
            $track->image = $track->getImages();
            $track->artist = $track->artist()->first()->name;
            $tracks[] = $track;
        }

        $allTracks = Track::all();

        foreach ($allTracks as $track) {
            $track->image = $track->getImages();
            $track->artist = $track->artist()->first()->name;
            $track->audio = $track->getAudio();
        }

        return Inertia::render('Dashboard', [
            'tracks' => $tracks,
            'allTracks' => $allTracks,
        ]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
