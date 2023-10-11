import { sortableElement } from "react-sortable-hoc";
import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { TrackItem } from "../TrackItem";
import { useState } from "react";
import addHeartIcon from "../../../css/icons/heart-add-line.svg";
import { router } from "@inertiajs/react";

export const SortableItem = sortableElement(
    ({ value, i, state, setState, playlistID, allPlaylist }) => {
        const [anchorEl, setAnchorEl] = useState(null);

        const handleClose = () => {
            setAnchorEl(null);
        };
        const handleProfileMenuOpen = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleCLickTest = (value) => () => {
            if (state.currentTrack === value.id && state.playing) {
                setState((state) => ({
                    ...state,
                    playing: !state.playing,
                }));
            } else {
                setState((state) => ({
                    ...state,
                    currentTrack: value.id,
                    playing: true,
                    firstTimePlaying: true,
                    currentPlaylist: playlistID,
                }));
            }
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

        const verifyIfTrackIsInQueue = (trackId) => {
            return state.queued.some((track) => track.id === trackId);
        };

        const addTrackToQueue = (trackId) => {
            const track = state.allTracks.find((track) => track.id === trackId);
            setState({
                ...state,
                queued: [...state.queued, track],
            });
        };

        const removeTrackFromQueue = (trackId) =>
            setState((state) => ({
                ...state,
                queued: state.queued.filter((track) => track.id !== trackId),
            }));

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

        const removeTrackFormPlaylist = (trackId) => {
            const playlist = allPlaylist.find(
                (playlist) => playlist.id === playlistID
            );

            const newPlaylist = {
                ...playlist,
                tracks: playlist.tracks.filter((track) => track.id !== trackId),
            };

            const newPlaylists = allPlaylist.map((playlist) =>
                playlist.id === playlistID ? newPlaylist : playlist
            );

            setState({
                ...state,
                allPlaylist: newPlaylists,
            });

            router.delete(
                route("playlist.removeTrack", {
                    playlist: playlistID,
                    track: trackId,
                })
            );
        };

        return (
            <div className="flex flex-row align-center hover:bg-blackSecondary hover:bg-opacity-20 rounded ">
                <ListItem
                    key={value.id}
                    role="listitem"
                    onClick={handleCLickTest(value)}
                    className="!flex cursor-pointer  rounded !p-1 lg:"
                >
                    <ListItemIcon>
                        <Checkbox
                            sx={{
                                color: "transparent",
                                backgroundColor: "transparent",
                            }}
                            tabIndex={-1}
                            disableRipple
                            indeterminate
                            indeterminateIcon={
                                state.currentTrack === value.id &&
                                state.playing ? (
                                    <Icon
                                        width={"2rem"}
                                        height={"2rem"}
                                        icon="material-symbols:pause-circle-rounded"
                                        className="text-greenPrimary"
                                    />
                                ) : (
                                    <Icon
                                        width={"2rem"}
                                        height={"2rem"}
                                        icon="material-symbols:play-circle-rounded"
                                        className={`${
                                            state.currentTrack === value.id
                                                ? "text-greenPrimary"
                                                : "text-blackPrimary"
                                        }`}
                                    />
                                )
                            }
                        />
                    </ListItemIcon>
                    <TrackItem
                        title={value.title}
                        artist={value.artist}
                        duration={value.duration}
                        release={value.release}
                        img={value.thumb}
                    />
                </ListItem>
                <ListItem className="!w-[5%] !p-0 !m-0">
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="mi cuenta"
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        className="!w-[100%] !h-[100%] !p-0 !m-0 text bg-no-repeat bg-center bg-fill"
                        style={{
                            backgroundImage: `url(${addHeartIcon})`,
                        }}
                    />
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
                        MenuListProps={{
                            className:
                                "bg-blackSecondary hover:bg-blackSecondary hover:bg-opacity-20 text-whitePrimary",
                        }}
                    >
                        {allPlaylist.length > 0 &&
                            allPlaylist.map((playlist) => {
                                if (playlist.id !== playlistID)
                                    return (
                                        <MenuItem
                                            onClick={() => {
                                                handleClose();
                                                addTrackToPlaylist(
                                                    playlist.id,
                                                    value.id
                                                );
                                            }}
                                            key={playlist.id}
                                            disabled={verifyIfTrackIsInPlaylist(
                                                playlist.id,
                                                state.currentTrack
                                            )}
                                        >
                                            {playlist.name}
                                        </MenuItem>
                                    );
                            })}
                        {verifyIfTrackIsInQueue(value.id) ? (
                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                    removeTrackFromQueue(value.id);
                                }}
                            >
                                <span className="text-red-600 font-bold">
                                    Remove from queue
                                </span>
                            </MenuItem>
                        ) : (
                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                    addTrackToQueue(value.id);
                                }}
                            >
                                <span className="text-white font-bold">
                                    Add to queue
                                </span>
                            </MenuItem>
                        )}
                        <MenuItem
                            onClick={() => {
                                handleClose();
                                removeTrackFormPlaylist(value.id);
                            }}
                        >
                            <span className="text-red-600 font-bold">
                                Remove from playlist
                            </span>
                        </MenuItem>
                    </Menu>
                </ListItem>
            </div>
        );
    }
);
