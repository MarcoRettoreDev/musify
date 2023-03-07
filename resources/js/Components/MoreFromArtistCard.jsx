import { Link } from "@inertiajs/react";
import React from "react";

export const MoreFromArtistCard = ({ trackID, title, imgURL }) => {
    return (
        <Link
            href={route("play", trackID)}
            className="flex-1 carousel-item relative"
        >
            <div
                className="w-80 h-64 rounded-3xl flex flex-1 items-end mr-8"
                style={{
                    backgroundImage: `url(${imgURL})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <span className="text-lg px-5 py-4 text-whitePrimary w-full bg-blackSecondary bg-opacity-40">
                    {title}
                </span>
            </div>
        </Link>
    );
};
