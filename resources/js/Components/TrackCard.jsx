import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export const TrackCard = ({ track, allPlaylist, state, setState }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const verifyIfTrackIsInPlaylist = (playlistId, trackId) => {
        const playlist = allPlaylist.find(
            (playlist) => playlist.id === playlistId
        );
        const track = playlist.tracks.find((track) => track.id === trackId);
        if (track) {
            return true;
        } else {
            return false;
        }
    };

    const addTrackToPlaylist = (playlistId, trackId) => {
        const track = state.allTracks.find((track) => track.id === trackId);
        const playlist = allPlaylist.find(
            (playlist) => playlist.id === playlistId
        );
        const newPlaylist = {
            ...playlist,
            tracks: !playlist.tracks.includes(track) && [
                ...playlist.tracks,
                track,
            ],
        };

        const newPlaylists = allPlaylist.map((playlist) =>
            playlist.id === playlistId ? newPlaylist : playlist
        );

        setState({
            ...state,
            allPlaylist: newPlaylists,
        });

        router.post(
            route("playlist.addTrack", {
                playlist: playlistId,
                track: trackId,
            })
        );
    };

    const addTrackToQueue = (trackId) => {
        const track = state.allTracks.find((track) => track.id === trackId);
        setState({
            ...state,
            queued: [...state.queued, track],
        });
    };

    const verifyIfTrackIsInQueue = (trackId) => {
        return state.queued.some((track) => track.id === trackId);
    };

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
                    icon={`ri:heart-add-line`}
                    width="1.5rem"
                    className="text-whiteLight hover:!text-greenSecondary"
                />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    className: "bg-blackSecondary text-whitePrimary",
                }}
            >
                {allPlaylist.length > 0 &&
                    allPlaylist.map((playlist) => (
                        <MenuItem
                            onClick={() => {
                                handleClose();
                                addTrackToPlaylist(playlist.id, track.id);
                            }}
                            key={playlist.id}
                            disabled={verifyIfTrackIsInPlaylist(
                                playlist.id,
                                track.id
                            )}
                        >
                            {playlist.name}
                        </MenuItem>
                    ))}

                <MenuItem
                    onClick={() => {
                        handleClose();
                        addTrackToQueue(track.id);
                    }}
                    disabled={verifyIfTrackIsInQueue(track.id)}
                >
                    Add to queue
                </MenuItem>
            </Menu>
        </div>
    );

    const { album_id, avatar, id, duration, release, title } = track;
    return (
        <div className="flex bg-blackSecondary rounded-lg" key={track.id}>
            <div
                className="min-h-full w-1/3 bg-cover bg-no-repeat bg-center rounded-l-md "
                style={{ backgroundImage: `url(${avatar})` }}
            />
            <div
                className="w-2/3 pl-2 py-2 flex flex-col justify-evenly  cursor-pointer"
                onClick={() =>
                    setState({
                        ...state,
                        currentTrack: track.id,
                        playing: true,
                        firstTimePlaying: true,
                    })
                }
            >
                <div className="flex justify-between items-center">
                    <h6 className="text-xl font-bold">{title}</h6>
                </div>
                <div className="flex flex-col justify-evenly">
                    <p className="">
                        <strong>Duration:</strong> {duration.slice(11, 16)}
                    </p>
                    <p>
                        <strong>Release:</strong> {release.slice(0, 10)}
                    </p>
                </div>
            </div>
            <div className="pr-2">{renderAddPlaylistMenu()}</div>
        </div>
    );
};
