import React from "react";
import { ShowArtist } from "../Artist/ShowArtist";
import { NoResults } from "./NoResults";
import { TrackCard } from "@/Components/TrackCard";

const ShowSearch = ({
    tracks,
    artists,
    state,
    setState,
    allplaylist,
    allArtists,
}) => {
    console.log("🚀 ~ file: ShowSearch.jsx:4 ~ ShowSearch ~ tracks:", tracks);
    console.log("🚀 ~ file: ShowSearch.jsx:4 ~ ShowSearch ~ artist:", artists);

    if (tracks.length === 0 && artists.length === 0)
        return <NoResults allArtists={allArtists} />;

    return (
        <div>
            {artists.length > 0 && (
                <>
                    <h1 className="mb-4">Artist</h1>
                    {artists.map((artist) => (
                        <ShowArtist
                            key={artist.id}
                            artist={artist}
                            state={state}
                            setState={setState}
                            allplaylist={allplaylist}
                        />
                    ))}
                </>
            )}

            {tracks.length > 0 && (
                <>
                    <h1 className="mb-4">Tracks</h1>
                    <div className="grid grid-cols-3 gap-8 mb-4">
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
