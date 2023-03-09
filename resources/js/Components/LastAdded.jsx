import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { MoreFromArtistCard } from "./MoreFromArtistCard";
import { Player } from "./Player";

export const LastAdded = ({ allTracks, itemsToRender, state, setState }) => {
    console.log("🚀 ~ file: LastAdded.jsx:8 ~ LastAdded ~ state:", state);
    const [currentArtist, setCurrentArtist] = useState(
        itemsToRender[0].artist_id
    );

    let renderArtist = allTracks.filter((track) => {
        return track.artist_id === currentArtist;
    });

    let artistName = itemsToRender.find(
        (track) => track.artist_id === currentArtist
    ).artist;

    return (
        <React.Fragment>
            <div className="carousel carousel-center rounded-2xl w-full mx-auto max-h-[50vh] mb-12">
                {itemsToRender.map((item, i) => (
                    <React.Fragment key={item.id}>
                        <div
                            id={`${i}`}
                            className="carousel-item relative"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "top center",
                                backgroundRepeat: "no-repeat",
                                height: "50vh",
                                width: "100%",
                            }}
                        >
                            <div className="flex justify-between text-whitePrimary absolute top-[65%] px-16 w-full">
                                <div className="px-8 py-6 rounded-lg">
                                    <h1 className="font-bold text-5xl mb-3">
                                        {item.title}
                                    </h1>
                                    <p className="font-semibold text-3xl">
                                        {
                                            <Link
                                                href={route(
                                                    "artist.show",
                                                    currentArtist
                                                )}
                                                className="hover:underline"
                                            >
                                                {item.artist}
                                            </Link>
                                        }
                                    </p>
                                    <p className="text-xl">
                                        Drop on {item.release.split("T")[0]}
                                    </p>
                                </div>
                                <div
                                    className="my-auto"
                                    onClick={() => {
                                        setState({
                                            ...state,
                                            currentTrack: item.id,
                                            playing: true,
                                        });
                                    }}
                                >
                                    <Icon
                                        className="text-whitePrimary bg-blackSecondary hover:text-greenPrimary hover:cursor-pointer opacity-70 rounded-full"
                                        width="5rem"
                                        height="5rem"
                                        icon="ic:round-play-arrow"
                                    />
                                </div>
                            </div>
                            <div className="absolute w-full flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                                <a
                                    onClick={() =>
                                        setCurrentArtist(
                                            itemsToRender[
                                                i === 1 ||
                                                i === 2 ||
                                                i === 3 ||
                                                i === 4
                                                    ? i - 1
                                                    : itemsToRender.length - 1
                                            ].artist_id
                                        )
                                    }
                                    href={`#${
                                        i === 1 || i === 2 || i === 3 || i === 4
                                            ? i - 1
                                            : itemsToRender.length - 1
                                    }`}
                                    className="btn px-0 bg-blackSecondary bg-opacity-60 hover:bg-transparent hover:text-blackSecondary text-whitePrimary ml-3"
                                >
                                    <Icon
                                        width={"2rem"}
                                        height={"2rem"}
                                        icon="material-symbols:arrow-back-ios-new-rounded"
                                    />
                                </a>
                                <a
                                    onClick={() =>
                                        setCurrentArtist(
                                            itemsToRender[
                                                i === 0 ||
                                                i === 1 ||
                                                i === 2 ||
                                                i === 3
                                                    ? i + 1
                                                    : 0
                                            ].artist_id
                                        )
                                    }
                                    href={`#${
                                        i === 0 || i === 1 || i === 2 || i === 3
                                            ? i + 1
                                            : 0
                                    }`}
                                    className="btn px-0 bg-blackSecondary bg-opacity-60 hover:bg-transparent hover:text-blackSecondary text-whitePrimary mr-3"
                                >
                                    <Icon
                                        width={"2rem"}
                                        height={"2rem"}
                                        icon="material-symbols:arrow-forward-ios-rounded"
                                    />
                                </a>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
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
                    if (i <= 4) {
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

            {/* {state.playing && } */}
            <Player state={state} setState={setState} />
        </React.Fragment>
    );
};
