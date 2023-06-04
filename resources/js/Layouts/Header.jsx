import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "@inertiajs/react";
import SearchForm from "@/Components/SearchForm";
import { router } from "@inertiajs/react";

export default function Header({
    sidebarCollapsed,
    setsidebarCollapsed,
    auth,
    trigger,
}) {
    const userName = auth.user.name;
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchValue, setSearchValue] = useState(null);

    const url = new URL(window.location);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOnChangeInput = (e) => {
        setSearchValue(e.target.value);
        url.searchParams.set("searchValue", e.target.value);
        window.history.pushState(null, "", url.toString());
    };

    const onSubmit = (e) => {
        e.preventDefault();
        router.get(route("search.store"), { searchValue });
    };

    const renderSearchBar = () => (
        <div className="flex justify-center items-center w-full md:w-auto">
            <SearchForm
                fullWidth={true}
                variant="outlined"
                wrapperclass="rounded-3xl focus:border-none w-full lg:w-96"
                handleChange={handleOnChangeInput}
                size="small"
                onSubmit={onSubmit}
            />
        </div>
    );

    const profileMenu = () => (
        <div className="">
            <IconButton
                size="large"
                edge="end"
                aria-label="mi cuenta"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className="!p-0 !pr-2"
            >
                <Icon
                    icon="ic:round-arrow-drop-down"
                    width="3rem"
                    height="3rem"
                    className="text-greenPrimary hover:text-greenSecondary cursor-pointer "
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
                    horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    className: "bg-blackSecondary text-whitePrimary",
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Link
                        href={route("dashboard")}
                        className="flex items-center w-full font-bold"
                    >
                        Home
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} divider>
                    <Link
                        href={route("profile.edit")}
                        className="flex items-center w-full font-bold"
                    >
                        Profile
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                        href={route("logout")}
                        className="flex items-center w-full font-bold"
                    >
                        Close Session
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );

    return (
        <Box>
            <AppBar
                position="static"
                sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
                <Toolbar className="lg:!px-16 flex justify-between md:justify-between text-slate-700">
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

                    {renderSearchBar()}

                    <div className="!bg-blackPrimary rounded-3xl my-3 px-1 md:flex md:flex-row items-center text-slate-200 hidden">
                        <div
                            style={{
                                backgroundImage: `url(${auth.user.image})`,
                                borderRadius: "50%",
                            }}
                            className="h-11 w-11 p-1 bg-center bg-no-repeat bg-cover"
                        />

                        <h5 className="font-bold cursor-default px-4">
                            {userName}
                        </h5>
                        {profileMenu()}
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
