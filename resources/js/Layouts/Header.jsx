import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link, usePage } from "@inertiajs/react";
import { InputAdornment, TextField } from "@mui/material";
import AutocompleteCustom from "@/Components/AutocompleteCustom";
import { set } from "lodash";
import { useRef } from "react";
import { router } from "@inertiajs/react";

export default function Header({
    sidebarCollapsed,
    setsidebarCollapsed,
    auth,
    trigger,
    optionsElements,
    state,
    setState,
}) {
    const userName = auth.user.name;
    const [anchorEl, setAnchorEl] = useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAutoCompleteChange = (value) => {
        if (value) {
            if (value.type === "artist") {
                trigger.current.click();
                router.visit(route("artist.show", value.value));
            } else {
                setState({
                    ...state,
                    currentTrack: value.id,
                    playing: true,
                    firstTimePlaying: true,
                });
            }
        }
    };

    const renderSearchBar = () => (
        <div className="flex justify-center items-center text-slate-900 w-full md:w-auto">
            <AutocompleteCustom
                name="track_id"
                fullWidth={true}
                variant="outlined"
                wrapperclass="bg-whitePrimary text-blackSecondary rounded focus:border-none w-full lg:w-96"
                handleChange={handleAutoCompleteChange}
                options={optionsElements}
                value=""
                size="small"
            />

            <Icon
                icon="mingcute:settings-2-line"
                width="2rem"
                height="2rem"
                className="text-greenPrimary hover:text-greenSecondary cursor-pointer ml-3"
            />
        </div>
    );

    return (
        <Box>
            <AppBar
                position="static"
                sx={{ backgroundColor: "#15191d", boxShadow: "none" }}
            >
                <Toolbar className="lg:!px-2 flex justify-between md:justify-around text-slate-700">
                    <div className="lg:hidden ">
                        <IconButton
                            ref={trigger}
                            classes="lg:hidden"
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            aria-controls="sidebar"
                            sx={{ mr: 2 }}
                            aria-expanded={sidebarCollapsed}
                            onClick={() =>
                                setsidebarCollapsed(!sidebarCollapsed)
                            }
                        >
                            <Icon icon="ic:baseline-menu" />
                        </IconButton>
                    </div>

                    <div className="flex-grow text-slate-200 hidden md:block">
                        <h1 className="font-bold text-xl">{userName}</h1>
                    </div>
                    {renderSearchBar()}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
