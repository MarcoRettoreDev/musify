<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTracksRequest;
use App\Http\Requests\UpdateTracksRequest;
use App\Models\Tracks;

class TrackController extends Controller
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTracksRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTracksRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tracks  $tracks
     * @return \Illuminate\Http\Response
     */
    public function show(Tracks $tracks)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tracks  $tracks
     * @return \Illuminate\Http\Response
     */
    public function edit(Tracks $tracks)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTracksRequest  $request
     * @param  \App\Models\Tracks  $tracks
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTracksRequest $request, Tracks $tracks)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tracks  $tracks
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tracks $tracks)
    {
        //
    }
}
