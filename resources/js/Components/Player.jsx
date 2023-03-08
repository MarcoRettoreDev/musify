import React from "react";
import { useRef, useEffect } from "react";

export const Player = ({ state, setState }) => {
    const playerRef = useRef(null);
    let currentTrackPlaying = state.allTracks.find(
        (track) => track.id === state.currentTrack
    )?.audio;

    console.log(
        "🚀 ~ file: Player.jsx:4 ~ Player ~ currentTrackPlaying:",
        currentTrackPlaying
    );
    useEffect(() => {
        if (currentTrackPlaying) {
            playerRef.current.load();
            playerRef.current.play();
        }
    }, [currentTrackPlaying]);

    console.log(
        "###################",
        state.allTracks.find((track) => track.id === state.currentTrack + 1)
    );

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

    return (
        <div className="w-full absolute" style={{ zIndex: 9999 }}>
            <audio ref={playerRef} controls>
                <source src={currentTrackPlaying} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};
