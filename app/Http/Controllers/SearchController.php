<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Models\Track;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function store(Request $request)
    {
        $search = ucfirst(strtolower($request->get('searchValue')));

        $searchTracks = DB::table('tracks')->where('title', 'LIKE', '%' . $search . '%')->get(); // Search by title
        $searchArtists = DB::table('artists')->where('name', 'LIKE', '%' . $search . '%')->get(); // Search by artist

        if (isset($searchArtists)) {
            $searchArtists = Artist::hydrate($searchArtists->toArray());
            foreach ($searchArtists as $artist) {
                $artist->load('tracks');
            }
        };

        if (isset($searchTracks)) {
            $searchTracks = Track::hydrate($searchTracks->toArray());
        };


        return Inertia::render('Dashboard',  [
            'searchTracks' => $searchTracks,
            'searchArtists' => $searchArtists,
            'searched' => true,
            'searchValue' => $request->get('searchValue')
        ]);
    }
}
