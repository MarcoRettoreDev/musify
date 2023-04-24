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
import { RadioSelect } from "@/Components/RadioSelect";

export default function Header({
    sidebarCollapsed,
    setsidebarCollapsed,
    auth,
    trigger,
    allArtist,
    allTracks,
    state,
    setState,
}) {
    const userName = auth.user.name;
    const [anchorEl, setAnchorEl] = useState(null);
    const [radioValue, setRadioValue] = useState("tracks");

    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAutoCompleteChange = (value) => {
        if (value) {
            if (value.hasOwnProperty("bio")) {
                trigger.current.click();
                router.visit(route("artist.show", value.id));
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
                fullWidth={true}
                variant="outlined"
                wrapperclass="bg-whitePrimary text-blackSecondary rounded focus:border-none w-full lg:w-96"
                handleChange={handleAutoCompleteChange}
                options={radioValue === "tracks" ? allTracks : allArtist}
                value=""
                size="small"
            />
        </div>
    );

    const renderAddPlaylistMenu = () => (
        <div className="flex text-slate-700">
            <IconButton
                size="large"
                edge="end"
                aria-label="mi cuenta"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
            >
                <Icon
                    icon="mingcute:settings-2-line"
                    width="2rem"
                    height="2rem"
                    className="text-greenPrimary hover:text-greenSecondary cursor-pointer ml-3"
                />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleClose()}>
                    <RadioSelect
                        formLabel="Search on"
                        options={[
                            { value: "tracks", label: "Tracks" },
                            {
                                value: "artists",
                                label: "Artists",
                            },
                        ]}
                        radioValue={radioValue}
                        handleChange={handleRadioChange}
                    />
                </MenuItem>
            </Menu>
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

                    <div className="md:flex space-x-4 md:flex-row items-center flex-grow text-slate-200 hidden">
                        <img
                            src={auth.user.image}
                            className="rounded-full w-12"
                            alt=""
                        />
                        <h1 className="font-bold text-xl cursor-default">
                            {userName}
                        </h1>
                    </div>
                    {renderSearchBar()}
                    {renderAddPlaylistMenu()}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
