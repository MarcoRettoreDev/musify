import { Icon } from "@iconify/react";
import React from "react";
import { useRef, useEffect } from "react";

export const Player = ({ state, setState }) => {
    const playerRef = useRef(null);
    const playerContainerRef = useRef(null);
    const playIconRef = useRef(null);
    const pauseIconRef = useRef(null);
    const currentTimeRef = useRef(null);
    const durationRef = useRef(null);
    const seekSliderRef = useRef(null);
    const volumeSliderRef = useRef(null);

    const [volumeIconControl, setVolumeIconControl] = React.useState(null);

    var raf = null;
    var seeking = false;

    let bigIconStyle = "3rem";
    let smallIconStyle = "1.5rem";

    let currentTrackPlaying = state.allTracks.find(
        (track) => track.id === state.currentTrack
    );

    useEffect(() => {
        if (currentTrackPlaying && playerRef.current) {
            playerRef.current.load();
            playerRef.current.play();
        }
    }, [currentTrackPlaying]);

    useEffect(() => {
        if (playerRef.current && state.playing) {
            playerRef.current.addEventListener("ended", () => {
                setState({
                    ...state,
                    ended: true,
                });
            });
        }
        if (state.ended) {
            if (state.currentTrack < state.allTracks.length) {
                setState({
                    ...state,
                    currentTrack: state.shuffle
                        ? getRandomInt(1, state.allTracks.length + 1)
                        : state.currentTrack + 1,
                    playing: true,
                    ended: false,
                    shuffle: state.shuffle ? true : false,
                });
            } else {
                setState({
                    ...state,
                    currentTrack: 1,
                    playing: true,
                    ended: false,
                    shuffle: state.shuffle ? true : false,
                });
            }
        }
    }, [state.ended, state.playing]);

    useEffect(() => {
        if (playerRef.current.readyState > 0) {
            displayDuration();
            setSliderMax();
            displayBufferedAmount();
        } else {
            // When the audio element loads the metadata, set the duration time
            playerRef.current.addEventListener("loadedmetadata", () => {
                displayDuration();
                setSliderMax();
                displayBufferedAmount();
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

            playerRef.current.addEventListener(
                "progress",
                displayBufferedAmount
            );
        }
    }, [playerRef.current]);

    useEffect(() => {
        renderVolumeIcon();
        if (volumeIconControl === null) {
            setVolumeIconControl(50);
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

    const displayBufferedAmount = () => {
        const bufferedAmount = Math.floor(
            playerRef.current.buffered.end(
                playerRef.current.buffered.length - 1
            )
        );
        playerContainerRef.current.style.setProperty(
            "--buffered-width",
            `${(bufferedAmount / seekSliderRef.current.max) * 100}%`
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
    };

    const setSliderMax = () => {
        seekSliderRef.current.max = Math.floor(playerRef.current.duration);
    };

    const nextTrack = () => {
        if (state.currentTrack < state.allTracks.length) {
            setState({
                ...state,
                currentTrack: state.shuffle
                    ? getRandomInt(1, state.allTracks.length + 1)
                    : state.currentTrack + 1,
                playing: true,
            });
        } else {
            setState({
                ...state,
                currentTrack: 1,
                playing: true,
            });
        }
    };

    const previousTrack = () => {
        if (state.currentTrack > 1) {
            setState({
                ...state,
                currentTrack: state.shuffle
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
    };

    const renderVolumeIcon = () => {
        if (playerRef.current) {
            if (volumeIconControl === 0) {
                return (
                    <Icon
                        onClick={() => mutePlayer()}
                        width={smallIconStyle}
                        height={smallIconStyle}
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
                        width={smallIconStyle}
                        height={smallIconStyle}
                        icon="bi:volume-down-fill"
                        className="cursor-pointer hover:text-greySecondary"
                    />
                );
            } else {
                return (
                    <Icon
                        onClick={() => mutePlayer()}
                        width={smallIconStyle}
                        height={smallIconStyle}
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
        } else {
            playerRef.current.muted = true;
            setVolumeIconControl(0);
        }
    };

    function getRandomInt(min = 1, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div
            ref={playerContainerRef}
            id="playerContainer"
            className="bg-blackSecondary absolute flex w-screen right-0 bottom-0 justify-between items-center h-28 px-6"
        >
            <div className="flex cursor-default">
                <img
                    src={currentTrackPlaying?.avatar}
                    alt=""
                    className="h-20"
                />
                <div className="flex flex-col justify-center ml-4">
                    <h5 className="text-2xl">{currentTrackPlaying?.title}</h5>
                    <h6>{currentTrackPlaying?.artist}</h6>
                </div>
            </div>

            <div
                id="innerPlayerContainer"
                className="flex w-8/12 justify-between"
            >
                <div id="playerControls" className="flex flex-col ">
                    <div
                        id="iconsSection"
                        className="flex justify-around items-center max-w-[70%] w-full mb-2 mx-auto"
                    >
                        <Icon
                            width={smallIconStyle}
                            height={smallIconStyle}
                            icon="ph:shuffle-fill"
                            onClick={() =>
                                setState({ ...state, shuffle: !state.shuffle })
                            }
                            className={
                                state.shuffle
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
                                setState({ ...state, repeat: !state.repeat })
                            }
                            className={
                                state.repeat
                                    ? "text-greenPrimary cursor-pointer"
                                    : "cursor-pointer hover:text-greySecondary"
                            }
                        />
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
                                (seekSliderRef.current.value = e.target.value)
                            }
                            className="w-96"
                        />

                        <span ref={durationRef} className="ml-2">
                            0:00
                        </span>
                    </div>
                </div>

                <div className="flex items-center">
                    {renderVolumeIcon()}

                    <input
                        type="range"
                        ref={volumeSliderRef}
                        onInput={(e) => {
                            changeVolume(e.target.value);
                            volumeSliderRef.current.value = e.target.value;
                            setVolumeIconControl(e.target.value);
                        }}
                        max="100"
                    />
                </div>
                {/* <button
                    onClick={() =>
                        setState({
                            ...state,
                            playing: !state.playing,
                            firstTimePlaying: false,
                        })
                    }
                >
                    Reset playing
                </button> */}
            </div>
        </div>
    );
};
