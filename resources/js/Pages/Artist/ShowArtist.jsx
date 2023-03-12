import { TrackCard } from "@/Components/TrackCard";
import React from "react";

export const ShowArtist = ({ artist, state, setState }) => {
    return (
        <>
            <div className="grid grid-cols-2 mb-24">
                <div
                    style={{ backgroundImage: `url(${artist.image})` }}
                    className="w-full  bg-no-repeat bg-cover bg-center rounded-lg"
                />

                <div className="px-6 lg:px-8">
                    <div className="mx-auto py-8">
                        <div className="">
                            <h1 className="text-4xl font-bold text-whitePrimary sm:text-6xl">
                                {artist.name}
                            </h1>
                            <p className="my-6 text-xl  text-whiteLight">
                                {artist.bio}
                            </p>
                        </div>

                        <div className="text-whiteLight text-xl">
                            <p className="mb-2">
                                <strong>Country:</strong> {artist.country}
                            </p>
                            <p>
                                <strong>Active from:</strong>{" "}
                                {artist.birthdate.slice(0, 10)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl text-whitePrimary mb-4">Tracks</h2>
            <div className="grid grid-cols-3 gap-8 mb-4">
                {artist.tracks.map((track) => (
                    <div
                        key={track.id}
                        onClick={() =>
                            setState({
                                ...state,
                                currentTrack: track.id,
                                playing: true,
                                firstTimePlaying: true,
                            })
                        }
                    >
                        <TrackCard track={track} />
                    </div>
                ))}
            </div>
        </>
    );
};
