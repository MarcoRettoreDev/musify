import React, { useState } from "react";

function SidebarLinkGroup({
    children,
    activecondition,
    sidebarCollapsed,
    setsidebarCollapsed,
    setState,
    playlistModal,
    setPlaylistModal,
    spacing,
}) {
    const [open, setOpen] = useState(activecondition);

    const handleClick = (event) => {
        if (event === "openModalPlaylist") {
            setPlaylistModal(!playlistModal);
        }

        setState((state) => ({
            ...state,
            queueOpen: false,
        }));
        setsidebarCollapsed(!sidebarCollapsed);
    };

    return (
        <li
            className={`px-3 py-2  rounded-sm mb-0.5 last:mb-0 ${
                activecondition && "bg-slate-200"
            } ${spacing ? "space-y-6" : "space-y-3"}`}
        >
            {children(handleClick, open)}
        </li>
    );
}

export default SidebarLinkGroup;
