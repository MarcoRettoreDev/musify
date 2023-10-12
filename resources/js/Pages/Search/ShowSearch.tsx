import React from "react";
import { ShowArtist } from "../Artist/ShowArtist";
import { NoResults } from "./NoResults";
import { TrackCard } from "@/Components/TrackCard";
import { useEffect } from "react";

const ShowSearch = ({
    searchValue,
    tracks,
    artists,
    state,
    setState,
    allplaylist,
    allArtists,
}) => {
    const url = new URL(window.location);

    useEffect(() => {
        url.searchParams.set("searchValue", searchValue);
        window.history.pushState(null, "", url.toString());
    }, [searchValue]);

    if (tracks.length === 0 && artists.length === 0)
        return <NoResults allArtists={allArtists} />;

    return (
        <div className="">
            {artists.length > 0 && (
                <div className="mb-20">
                    <h1 className="mb-4">Artist</h1>
                    <div className="flex flex-col space-y-8">
                        {artists.map((artist) => (
                            <ShowArtist
                                key={artist.id}
                                artist={artist}
                                state={state}
                                setState={setState}
                                allplaylist={allplaylist}
                            />
                        ))}
                    </div>
                </div>
            )}

            {tracks.length > 0 && (
                <>
                    <h1 className="mb-6">Tracks</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4">
                        {tracks.map((track) => (
                            <TrackCard
                                key={track.id}
                                track={track}
                                allPlaylist={allplaylist}
                                state={state}
                                setState={setState}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ShowSearch;
