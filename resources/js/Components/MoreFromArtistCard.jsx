import React from "react";

export const MoreFromArtistCard = ({ title, imgURL }) => {
    return (
        <React.Fragment>
            <div
                className="w-80 h-64 rounded-3xl flex-1 flex items-end"
                style={{
                    backgroundImage: `url(${imgURL})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <span className="text-3xl px-5 py-4 text-whitePrimary w-full bg-blackSecondary bg-opacity-40">
                    {title}
                </span>
            </div>
        </React.Fragment>
    );
};
