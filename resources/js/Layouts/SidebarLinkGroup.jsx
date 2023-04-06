import React, { useState } from "react";

function SidebarLinkGroup({
    children,
    activecondition,
    sidebarCollapsed,
    setsidebarCollapsed,
    playlistModal,
    setPlaylistModal,
}) {
    const [open, setOpen] = useState(activecondition);

    const handleClick = (event) => {
        if (event === "openModalPlaylist") {
            setPlaylistModal(!playlistModal);
        }
        // setsidebarCollapsed(!sidebarCollapsed);
    };

    return (
        <li
            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                activecondition && "bg-slate-200"
            }`}
        >
            {children(handleClick, open)}
        </li>
    );
}

export default SidebarLinkGroup;
