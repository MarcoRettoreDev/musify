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
    const muteIconRef = useRef(null);
    var raf = null;
    var seeking = false;
    const [volumeValue, setVolumeValue] = React.useState(60);
    let currentTrackPlaying = state.allTracks.find(
        (track) => track.id === state.currentTrack
    )?.audio;

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
            let nextTrack = state.allTracks.find(
                (track) => track.id === state.currentTrack + 1
            );

            // Donde va el 1, podríamos poner un math random con máximo el número de tracks que hay en la base de datos
            setState({
                ...state,
                currentTrack: nextTrack != undefined || null ? nextTrack.id : 1,
                playing: true,
                ended: false,
            });
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

            muteIconRef.current.addEventListener("click", () => {
                if (playerRef.current.muted) {
                    playerRef.current.muted = false;
                    changeVolume(volumeValue);
                } else {
                    playerRef.current.muted = true;
                    changeVolume(0);
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

    return (
        <div ref={playerContainerRef} id="playerContainer">
            <audio
                ref={playerRef}
                preload="metadata"
                src={currentTrackPlaying}
            />
            <p>Audio player</p>
            <span ref={currentTimeRef} className="time">
                0:00
            </span>

            <input
                id="seek-slider"
                type="range"
                ref={seekSliderRef}
                onChange={(e) => {
                    seekSliderRef.current.value = e.target.value;

                    // if (state.playing) {
                    //     requestAnimationFrame(whilePlaying);
                    // }
                }}
            />

            <span ref={durationRef} className="time">
                0:00
            </span>
            <input
                type="range"
                ref={volumeSliderRef}
                onInput={(e) => {
                    changeVolume(e.target.value);
                    setVolumeValue(e.target.value);
                }}
                max="100"
                value={volumeValue}
            />
            <button ref={muteIconRef}>Mute</button>
            {state.playing ? (
                <button
                    ref={pauseIconRef}
                    onClick={() => {
                        setState({ ...state, playing: !state.playing });
                        playerRef.current.pause();
                        cancelAnimationFrame(raf);
                    }}
                >
                    Pause
                </button>
            ) : (
                <button
                    ref={playIconRef}
                    onClick={() => {
                        setState({ ...state, playing: !state.playing });
                        playerRef.current.play();
                        requestAnimationFrame(whilePlaying);
                    }}
                >
                    Play
                </button>
            )}
        </div>
    );
};

{
    /* //  <div className="w-full absolute" style={{ zIndex: 9999 }}>
//             <audio ref={playerRef} controls>
//                 <source src={currentTrackPlaying} type="audio/mp3" />
//                 Your browser does not support the audio element.
//             </audio>
//         </div> */
}
