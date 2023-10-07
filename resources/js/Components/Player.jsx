import React from "react";
import { Icon } from "@iconify/react";
import { Link, router } from "@inertiajs/react";
import { useRef, useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { IconButton } from "@mui/material";

export const Player = ({ allPlaylist, state, setState }) => {
    const playerRef = useRef(null);
    const playerContainerRef = useRef(null);
    const playIconRef = useRef(null);
    const pauseIconRef = useRef(null);
    const currentTimeRef = useRef(null);
    const durationRef = useRef(null);
    const seekSliderRef = useRef(null);
    const volumeSliderRef = useRef(null);

    const [volumeIconControl, setVolumeIconControl] = useState(null);
    const [playerShuffle, setPlayerShuffle] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    var raf = null;
    var seeking = false;

    let bigIconStyle = "3rem";
    let mediumIconStyle = "2.2rem";
    let smallIconStyle = "1.5rem";

    let currentTrackPlaying = state.allTracks.find(
        (track) => track.id === state.currentTrack
    );

    useEffect(() => {
        if (currentTrackPlaying && playerRef.current) {
            playerRef.current.load();
            playerRef.current.play();
            requestAnimationFrame(whilePlaying);
            displayVolumeBeforeWidth();
        }
    }, [currentTrackPlaying]);

    useEffect(() => {
        if (playerRef.current && state.playing) {
            playerRef.current.addEventListener("ended", () => {
                setState({
                    ...state,
                    ended: true,
                    history: [...state.history, state.currentTrack],
                    currentPlaylist: state.queued.length === 0 && null,
                });
            });
        }
        if (state.ended) {
            if (state.currentTrack < state.allTracks.length) {
                setState({
                    ...state,
                    currentTrack: playerShuffle
                        ? getRandomInt(1, state.allTracks.length + 1)
                        : state.currentTrack + 1,
                    playing: true,
                    ended: false,
                });
            } else {
                setState({
                    ...state,
                    currentTrack: 1,
                    playing: true,
                    ended: false,
                });
            }
        }
        if (state.playing === false) {
            playerRef.current.pause();
            cancelAnimationFrame(raf);
        } else {
            playerRef.current.play();
            requestAnimationFrame(whilePlaying);
        }
    }, [state.ended, state.playing]);

    useEffect(() => {
        if (playerRef.current.readyState > 0) {
            displayDuration();
            setSliderMax();
        } else {
            // When the audio element loads the metadata, set the duration time
            playerRef.current.addEventListener("loadedmetadata", () => {
                displayDuration();
                setSliderMax();
            });

            playerRef.current.addEventListener("timeupdate", () => {
                if (!seeking) {
                    seekSliderRef.current.value = Math.floor(
                        playerRef.current.currentTime
                    );
                    currentTimeRef.current.textContent = formatTime(
                        playerRef.current.currentTime
                    );
                }
            });

            // Listen the seek slider input changed by the user
            seekSliderRef.current.addEventListener("input", () => {
                if (state.playing) {
                    cancelAnimationFrame(raf);
                }
                seeking = true;

                currentTimeRef.current.textContent = formatTime(
                    seekSliderRef.current.value
                );
            });

            seekSliderRef.current.addEventListener("change", () => {
                playerRef.current.currentTime = seekSliderRef.current.value;

                if (state.playing) {
                    requestAnimationFrame(whilePlaying);
                }
                seeking = false;
            });
        }
    }, [playerRef.current]);

    useEffect(() => {
        renderVolumeIcon();
        if (volumeIconControl === null) {
            setVolumeIconControl(50);
            volumeSliderRef.current.value = 50;
            playerRef.current.volume = 0.5;
        }
    }, [volumeIconControl]);

    const whilePlaying = () => {
        seekSliderRef.current.value = Math.floor(seekSliderRef.current.value);
        currentTimeRef.current.textContent = formatTime(
            seekSliderRef.current.value
        );
        playerContainerRef.current.style.setProperty(
            "--seek-before-width",
            `${
                (seekSliderRef.current.value / seekSliderRef.current.max) * 100
            }%`
        );

        raf = requestAnimationFrame(whilePlaying);
    };

    // Format the time in seconds to min:sec
    const formatTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutes}:${formattedSeconds}`;
    };

    const displayVolumeBeforeWidth = () => {
        playerContainerRef.current.style.setProperty(
            "--volume-before-width",
            (volumeSliderRef.current.value / volumeSliderRef.current.max) *
                100 +
                "%"
        );
    };

    const displayDuration = () => {
        durationRef.current.textContent = formatTime(
            playerRef.current.duration
        );
    };

    const changeVolume = (volume) => {
        playerRef.current.volume = volume / 100;
        volumeSliderRef.current.value = volume;
        if (playerRef.current.muted) {
            playerRef.current.muted = false;
        }
    };

    const setSliderMax = () => {
        seekSliderRef.current.max = Math.floor(playerRef.current.duration);
    };

    const nextTrack = () => {
        // Si hay canciones en la cola
        if (state.queued.length > 0) {
            // Verificamos si la canción actual está en la lista de canciones
            if (state.queued.some((x) => x.id === state.currentTrack)) {
                // Si está, obtenemos la siguiente canción de la lista

                const currentTrackIndex = state.queued.findIndex(
                    (x) => x.id === state.currentTrack
                );

                const nextTrackFromQueue = state.queued[currentTrackIndex + 1];

                setState((state) => ({
                    ...state,
                    currentTrack: nextTrackFromQueue.id,
                    playing: true,
                    queued: state.queued.slice(0, currentTrackIndex),
                    history: [...state.history, state.currentTrack],
                    currentPlaylist: state.queued.length === 0 && null,
                }));
            } else {
                setState({
                    ...state,
                    queued: state.queued.slice(1),
                    currentTrack: state.queued[0].id,
                    playing: true,
                });
            }
        }
        // Si no hay canciones en la cola
        else {
            // Si la canción actual no es la última de la lista
            if (state.currentTrack < state.allTracks.length) {
                let random = getRandomInt(1, state.allTracks.length + 1);
                setState({
                    ...state,
                    currentTrack: playerShuffle
                        ? random
                        : state.currentTrack + 1,
                    playing: true,
                    history: [...state.history, state.currentTrack],
                    currentPlaylist: state.queued.length === 0 && null,
                });
            }
            // Peor de los casos: volvemos a la primera canción
            else {
                setState({
                    ...state,
                    currentTrack: state.allTracks[0].id,
                    playing: true,
                });
            }
        }
    };

    const previousTrack = () => {
        if (state.history.length > 0) {
            if (playerRef.current.currentTime > 5) {
                playerRef.current.currentTime = 0;
            } else {
                setState({
                    ...state,
                    history: state.history.slice(0, -1),
                    currentTrack: state.history[state.history.length - 1],
                    playing: true,
                });
            }
        } else {
            if (playerRef.current.currentTime > 5) {
                playerRef.current.currentTime = 0;
            } else if (state.currentTrack > 1) {
                setState({
                    ...state,
                    currentTrack: playerShuffle
                        ? getRandomInt(1, state.allTracks.length + 1)
                        : state.currentTrack - 1,
                    playing: true,
                });
            } else {
                setState({
                    ...state,
                    currentTrack: state.allTracks.length,
                    playing: true,
                });
            }
        }
    };

    const renderVolumeIcon = () => {
        if (playerRef.current) {
            if (volumeIconControl === 0) {
                return (
                    <Icon
                        onClick={() => mutePlayer()}
                        width={mediumIconStyle}
                        height={mediumIconStyle}
                        icon="bi:volume-mute-fill"
                        className="cursor-pointer  hover:text-greySecondary"
                    />
                );
            } else if (
                playerRef.current.volume > 0 &&
                playerRef.current.volume <= 0.5 &&
                !playerRef.current.muted
            ) {
                return (
                    <Icon
                        onClick={() => mutePlayer()}
                        width={mediumIconStyle}
                        height={mediumIconStyle}
                        icon="bi:volume-down-fill"
                        className="cursor-pointer hover:text-greySecondary"
                    />
                );
            } else {
                return (
                    <Icon
                        onClick={() => mutePlayer()}
                        width={mediumIconStyle}
                        height={mediumIconStyle}
                        icon="bi:volume-up-fill"
                        className="cursor-pointer hover:text-greySecondary"
                    />
                );
            }
        }
    };

    const mutePlayer = () => {
        if (playerRef.current.muted) {
            playerRef.current.muted = false;
            setVolumeIconControl(playerRef.current.volume * 100);
            playerContainerRef.current.style.setProperty(
                "--volume-before-width",
                (volumeSliderRef.current.value / volumeSliderRef.current.max) *
                    100 +
                    "%"
            );
        } else {
            playerRef.current.muted = true;
            setVolumeIconControl(0);
            playerContainerRef.current.style.setProperty(
                "--volume-before-width",
                (volumeSliderRef.current.value / volumeSliderRef.current.max) *
                    0 +
                    "%"
            );
        }
    };

    function getRandomInt(min = 1, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const addTrackToPlaylist = (playlistId, trackId) => {
        const track = state.allTracks.find((track) => track.id === trackId);
        const playlist = allPlaylist.find(
            (playlist) => playlist.id === playlistId
        );
        const newPlaylist = {
            ...playlist,
            tracks: [...playlist.tracks, track],
        };
        const newPlaylists = allPlaylist.map((playlist) =>
            playlist.id === playlistId ? newPlaylist : playlist
        );

        setState({
            ...state,
            allPlaylist: newPlaylists,
        });

        router.post(
            route("playlist.addTrack", { playlist: playlistId, track: trackId })
        );
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                                addTrackToPlaylist(
                                    playlist.id,
                                    state.currentTrack
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
                    ))}
            </Menu>
        </div>
    );

    return (
        <div
            ref={playerContainerRef}
            id="playerContainer"
            className="bg-blackPrimary absolute flex flex-col w-screen right-0 bottom-0 lg-py-8 lg:px-6 lg:space-x-5"
        >
            <div className="flex items-center gap-4 px-2">
                <h3 className="">{currentTrackPlaying?.title}</h3>
                <Link
                    onClick={() =>
                        setState((state) => ({
                            ...state,
                            queueOpen: false,
                        }))
                    }
                    className="hover:underline"
                    href={route("artist.show", currentTrackPlaying?.artist_id)}
                >
                    <h5>{currentTrackPlaying?.artist}</h5>
                </Link>
            </div>

            <div className="flex justify-between items-center">
                <div className="hidden lg:flex cursor-default items-center ">
                    <div
                        className="lg:h-20 lg:w-20 bg-no-repeat bg-contain bg-center rounded-md"
                        style={{
                            backgroundImage: `url(${currentTrackPlaying?.avatar})`,
                        }}
                    />
                    <div className="flex flex-col justify-center ml-4">
                        <h5 className="text-2xl">
                            {currentTrackPlaying?.title}
                        </h5>
                        <Link
                            onClick={() =>
                                setState((state) => ({
                                    ...state,
                                    queueOpen: false,
                                }))
                            }
                            className="hover:underline"
                            href={route(
                                "artist.show",
                                currentTrackPlaying?.artist_id
                            )}
                        >
                            <h6>{currentTrackPlaying?.artist}</h6>
                        </Link>
                    </div>

                    {renderAddPlaylistMenu()}
                </div>

                <div
                    id="innerPlayerContainer"
                    className="flex w-full lg:w-8/12 justify-between items-center px-4 lg:px-0"
                >
                    <div id="playerControls" className="flex flex-col w-full">
                        <div className="flex">
                            <div className="flex lg:hidden cursor-default items-center ">
                                <div
                                    className="h-12 aspect-square lg:h-20 lg:w-20 bg-no-repeat bg-contain bg-center rounded-md"
                                    style={{
                                        backgroundImage: `url(${currentTrackPlaying?.avatar})`,
                                    }}
                                />
                            </div>

                            <div
                                id="iconsSection"
                                className="flex justify-around items-center max-w-[70%] w-full mb-2 mx-auto"
                            >
                                <Icon
                                    width={smallIconStyle}
                                    height={smallIconStyle}
                                    icon="ph:shuffle-fill"
                                    onClick={() =>
                                        setPlayerShuffle(!playerShuffle)
                                    }
                                    className={
                                        playerShuffle
                                            ? "text-greenPrimary cursor-pointer"
                                            : "cursor-pointer hover:text-greySecondary"
                                    }
                                />
                                <Icon
                                    width={smallIconStyle}
                                    height={smallIconStyle}
                                    icon="tabler:player-skip-back-filled"
                                    onClick={previousTrack}
                                    className="cursor-pointer hover:text-greySecondary"
                                />

                                {state.playing ? (
                                    <Icon
                                        className="cursor-pointer hover:text-greySecondary"
                                        width={bigIconStyle}
                                        height={bigIconStyle}
                                        icon="material-symbols:pause-circle-rounded"
                                        ref={pauseIconRef}
                                        onClick={() => {
                                            setState({
                                                ...state,
                                                playing: !state.playing,
                                            });
                                            playerRef.current.pause();
                                            cancelAnimationFrame(raf);
                                        }}
                                    />
                                ) : (
                                    <Icon
                                        className="cursor-pointer hover:text-greySecondary"
                                        width={bigIconStyle}
                                        height={bigIconStyle}
                                        ref={playIconRef}
                                        onClick={() => {
                                            setState({
                                                ...state,
                                                playing: !state.playing,
                                                firstTimePlaying: true,
                                            });
                                            playerRef.current.play();
                                            requestAnimationFrame(whilePlaying);
                                        }}
                                        icon="material-symbols:play-circle-rounded"
                                    />
                                )}

                                <Icon
                                    width={smallIconStyle}
                                    height={smallIconStyle}
                                    icon="tabler:player-skip-forward-filled"
                                    onClick={nextTrack}
                                    className="cursor-pointer hover:text-greySecondary"
                                />
                                <Icon
                                    width={smallIconStyle}
                                    height={smallIconStyle}
                                    icon="ph:repeat"
                                    onClick={() =>
                                        setState({
                                            ...state,
                                            repeat: !state.repeat,
                                        })
                                    }
                                    className={
                                        state.repeat
                                            ? "text-greenPrimary cursor-pointer"
                                            : "cursor-pointer hover:text-greySecondary"
                                    }
                                />
                            </div>
                            <div className="lg:hidden">
                                {renderAddPlaylistMenu()}
                            </div>
                        </div>
                        <div id="seekSection" className="flex">
                            <audio
                                ref={playerRef}
                                preload="metadata"
                                src={currentTrackPlaying?.audio}
                                loop={state.repeat ? true : false}
                            />

                            <span ref={currentTimeRef} className="mr-2">
                                0:00
                            </span>

                            <input
                                id="seek-slider"
                                type="range"
                                ref={seekSliderRef}
                                onChange={(e) =>
                                    (seekSliderRef.current.value =
                                        e.target.value)
                                }
                                className="lg:w-96 w-full"
                            />

                            <span ref={durationRef} className="ml-2">
                                0:00
                            </span>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-4">
                        <Icon
                            width={mediumIconStyle}
                            height={mediumIconStyle}
                            icon="ph:queue-fill"
                            className={`cursor-pointer hover:text-greySecondary ${
                                state.queueOpen && "!text-greenPrimary"
                            }`}
                            onClick={() =>
                                setState({
                                    ...state,
                                    queueOpen: !state.queueOpen,
                                })
                            }
                        />
                        {renderVolumeIcon()}

                        <input
                            id="volume-slider"
                            type="range"
                            ref={volumeSliderRef}
                            onInput={(e) => {
                                changeVolume(e.target.value);
                                volumeSliderRef.current.value = e.target.value;
                                setVolumeIconControl(e.target.value);
                                displayVolumeBeforeWidth();
                            }}
                            max="100"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
