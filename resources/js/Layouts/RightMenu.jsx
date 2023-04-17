import { PlaylistItem } from "@/Components/PlaylistItem";
import React from "react";
import { useEffect } from "react";

export const RightMenu = ({ allPlaylist, setState }) => {
    const renderItems = () => {
        if (allPlaylist?.length > 0) {
            return (
                <div className="flex flex-col h-[85vh] space-y-3 overflow-auto">
                    {allPlaylist.map((playlist) => (
                        <PlaylistItem
                            setState={setState}
                            key={playlist.id}
                            id={playlist.id}
                            imgURL={playlist?.image}
                            name={playlist.name}
                        />
                    ))}
                </div>
            );
        }
    };

    useEffect(() => {
        renderItems();
    }, [allPlaylist]);

    return (
        <div className="lg:w-[16rem] hidden lg:block bg-blackSecondary p-4">
            <div className="mt-12 flex align-center pr-3 mb-2">
                <h1 className="text-xl text-whitePrimary font-bold">
                    Playlists
                </h1>
            </div>
            {renderItems()}
        </div>
    );
};
