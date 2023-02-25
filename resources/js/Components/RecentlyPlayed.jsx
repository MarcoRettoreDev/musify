import React from "react";
import { RecentlyPlayedCard } from "./RecentlyPlayedCard";

export const RecentlyPlayed = ({ itemsToRender }) => {
    return (
        <React.Fragment>
            <div className="flex">
                <h3>Recently Played</h3>
                <button>See more</button>
            </div>
            {/* itemsToRender map here */}
            <RecentlyPlayedCard
                title="The Weeknd - Blinding Lights"
                release="2020"
            />
        </React.Fragment>
    );
};
