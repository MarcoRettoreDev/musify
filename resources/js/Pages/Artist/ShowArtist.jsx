import { TrackCard } from "@/Components/TrackCard";
import React from "react";

export const ShowArtist = ({ artist, state, setState }) => {
    return (
        <>
            <div className="grid grid-cols-2 mb-28">
                {/* <div
                    style={{ backgroundImage: `url(${artist.image})` }}
                    className="w-[500px] absolute top-0 bottom-0 left-0 right-0 bg-no-repeat bg-cover bg-center rounded-lg"
                /> */}
                <div></div>
                <img
                    className="absolute left-44 max-w-[500px] rounded-lg w-full"
                    src={artist.image}
                    alt=""
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
            <div className="flex gap-4">
                {artist.tracks.map((track) => (
                    <div
                        className="flex-1 cursor-pointer"
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
