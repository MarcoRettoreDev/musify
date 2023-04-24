import React from "react";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { MoreFromArtistCard } from "../Components/MoreFromArtistCard";
import { Carousell } from "@/Components/Carousell";

export const LastAdded = ({ allTracks, itemsToRender, state, setState }) => {
    const [currentArtist, setCurrentArtist] = useState(
        itemsToRender[0].artist_id
    );

    let renderArtist = allTracks.filter((track) => {
        return track.artist_id === currentArtist;
    });

    let artistName = itemsToRender.find(
        (artist) => artist.artist_id === currentArtist
    ).artist;

    return (
        <React.Fragment>
            <h1 className="text-whitePrimary font-bold text-4xl mb-8">
                Recently added
            </h1>

            <div className="mb-12">
                <Carousell
                    currentArtist={currentArtist}
                    setCurrentArtist={setCurrentArtist}
                    setState={setState}
                    data={itemsToRender}
                />
            </div>

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-slate-200 text-xl font-bold">
                    Tracks from&nbsp;
                    {
                        <Link
                            href={route("artist.show", currentArtist)}
                            className="hover:underline"
                        >
                            {artistName}
                        </Link>
                    }
                </h2>
                <Link href={route("artist.show", currentArtist)}>
                    <h4 className="px-4 py-2 text-lg font-bold border border-greenPrimary border-opacity-60 hover:bg-greenPrimary hover:text-whitePrimary text-greenPrimary rounded-3xl">
                        See more
                    </h4>
                </Link>
            </div>

            {/* <div className="flex gap-6 w-full"> */}
            <div className="carousel carousel-center rounded-3xl flex w-full mx-auto mb-12">
                {renderArtist.map((track, i) => {
                    if (i <= 8) {
                        return (
                            <MoreFromArtistCard
                                key={track.id}
                                title={track.title}
                                imgURL={track.image}
                                trackID={track.id}
                                setState={setState}
                                state={state}
                            />
                        );
                    }
                })}
            </div>
        </React.Fragment>
    );
};
