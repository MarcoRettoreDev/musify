import React from "react";
import { usePage } from "@inertiajs/react";

import SidebarLinkGroup from "./SidebarLinkGroup";
import SidebarLink from "./SidebarLink";
import { sideBarLinks } from "./menuData";

export default function Menu({
    sidebarCollapsed,
    setsidebarCollapsed,
    playlistModal,
    setPlaylistModal,
    setState,
    allPlaylist,
}) {
    const { auth } = usePage().props;
    const { ziggy } = usePage().props;

    const pathname = route().current();
    const locationName = ziggy.location;

    const renderLinks = () => (
        <SidebarLinkGroup
            setState={setState}
            activecondition={false}
            sidebarCollapsed={sidebarCollapsed}
            setsidebarCollapsed={setsidebarCollapsed}
            playlistModal={playlistModal}
            setPlaylistModal={setPlaylistModal}
            spacing={true}
        >
            {(handleClick, open) =>
                sideBarLinks.map((link) => (
                    <SidebarLink
                        key={link.label}
                        routeLink={link.routeLink}
                        pathName={link.pathName}
                        label={link.label}
                        icon={link.icon}
                        event={link.event}
                        handleClick={handleClick}
                    />
                ))
            }
        </SidebarLinkGroup>
    );

    const renderUserPlaylist = () => (
        <SidebarLinkGroup
            setState={setState}
            activecondition={false}
            sidebarCollapsed={sidebarCollapsed}
            setsidebarCollapsed={setsidebarCollapsed}
            playlistModal={playlistModal}
            setPlaylistModal={setPlaylistModal}
            spacing={false}
        >
            {(handleClick, open) =>
                allPlaylist?.map((playlist) => (
                    <SidebarLink
                        key={playlist.id}
                        routeLink={"playlist.show"}
                        pathName={playlist.id}
                        label={playlist.name}
                        icon={null}
                        event={"playlist"}
                        handleClick={handleClick}
                        parameters={{ id: playlist.id }}
                        sidebarCollapsed={sidebarCollapsed}
                    />
                ))
            }
        </SidebarLinkGroup>
    );

    return (
        <div className="h-full space-y-8 bg-inherit ">
            <div className="h-full flex flex-col ">
                <ul className="mb-3">{renderLinks()}</ul>
                {allPlaylist.length > 0 && !sidebarCollapsed && (
                    <h4 className="font-bold">Playlists</h4>
                )}
                <ul>{renderUserPlaylist()}</ul>
            </div>
        </div>
    );
}
