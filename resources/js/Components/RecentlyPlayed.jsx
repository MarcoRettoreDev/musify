import { Icon } from "@iconify/react";
import React from "react";
import { useState } from "react";
import { MoreFromArtistCard } from "./MoreFromArtistCard";

export const RecentlyPlayed = ({ allTracks, itemsToRender }) => {
    const [currentArtist, setCurrentArtist] = useState(
        itemsToRender[0].artist_id
    );

    return (
        <React.Fragment>
            <div className="carousel carousel-center rounded-3xl w-full mx-auto max-h-[60vh] mb-12">
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
                                height: "60vh",
                                width: "100%",
                            }}
                        >
                            <div className="flex justify-between text-whitePrimary absolute top-[68%] px-16 w-full">
                                <div className="px-8 py-6 rounded-lg">
                                    <h1 className="font-bold text-6xl mb-3">
                                        {item.title}
                                    </h1>
                                    <p className="font-semibold text-4xl">
                                        {item.artist}
                                    </p>
                                    <p className="text-xl">
                                        Drop on {item.release.split("T")[0]}
                                    </p>
                                </div>
                                <Icon
                                    className="text-whitePrimary bg-blackSecondary opacity-70 my-auto rounded-full"
                                    width="5rem"
                                    height="5rem"
                                    icon="ic:round-play-arrow"
                                />
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
                                    className="btn bg-blackSecondary bg-opacity-60 hover:bg-transparent hover:text-blackSecondary text-whitePrimary ml-3"
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
                                    className="btn  bg-blackSecondary bg-opacity-60 hover:bg-transparent hover:text-blackSecondary text-whitePrimary mr-3"
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

            <h2 className="text-slate-200 text-4xl font-bold mb-6">
                More from this artist
            </h2>

            <div className="flex gap-6 w-full">
                {allTracks.map((track, i) => {
                    if (track.artist_id === currentArtist) {
                        return (
                            <MoreFromArtistCard
                                key={track.id}
                                title={track.title}
                                imgURL={track.image}
                            />
                        );
                    }
                })}
            </div>
        </React.Fragment>
    );
};
