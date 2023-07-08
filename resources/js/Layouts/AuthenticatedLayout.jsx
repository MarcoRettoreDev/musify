import { Player } from "@/Components/Player";
import Dashboard from "@/Pages/Dashboard";
import { router, useRemember } from "@inertiajs/react";
import { useRef, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import PlaylistModal from "@/Components/PlaylistModal";
import { ToastMessages } from "@/Components/ToastMessages";
import { useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { ShowQueued } from "@/Components/ShowQueued";

export default function AuthenticatedLayout(props) {
    const { appName, auth, children } = props;

    const [state, setState] = useRemember(
        {
            allTracks: children.props.data.allTracks,
            allArtist: children.props.data.allArtist,
            allPlaylist: children.props.data.allPlaylist,
            currentTrack: null,
            currentPlaylist: null,
            queued: [],
            history: [],
            playing: false,
            ended: false,
            firstTimePlaying: false,
            repeat: false,
            queueOpen: false,
        },
        "userState"
    );

    const { flash } = usePage().props; // Flash messages from controler using handleInertiaResquest

    let screenWidth = screen.width; // Screen width

    const [playlistModal, setPlaylistModal] = useState(false);

    const [toastMessages, setToastMessages] = useState({
        icon: "",
        message: "",
        iconColor: "",
        show: false,
        duration: 3000,
    });

    const [sidebarCollapsed, setsidebarCollapsed] = useState(
        screenWidth >= 1024 ? true : false
    );

    const trigger = useRef(null);

    const renderModal = () => (
        <PlaylistModal
            allArtist={state.allArtist}
            playlistModal={playlistModal}
            setPlaylistModal={setPlaylistModal}
        />
    );

    useEffect(() => {
        if (flash.message?.includes("Playlist created")) {
            setState({
                ...state,
                allPlaylist: children.props.allPlaylist,
            });
            setPlaylistModal(false);
            setToastMessages({
                iconColor: "text-greenSuccess",
                icon: "material-symbols:check-circle-outline",
                message: flash.message,
                show: true,
                duration: 3000,
            });
        }
        if (flash.message?.includes("Track added")) {
            setToastMessages({
                iconColor: "text-greenSuccess",
                icon: "material-symbols:check-circle-outline",
                message: flash.message,
                show: true,
                duration: 3000,
            });
        }
    }, [flash]);

    useEffect(() => {
        if (playlistModal) {
            renderModal();
        }
    }, [playlistModal]);

    useEffect(() => {}, [toastMessages]);

    return (
        <div className="flex h-screen overflow-hidden bg-body">
            <Sidebar
                sidebarCollapsed={sidebarCollapsed}
                setsidebarCollapsed={setsidebarCollapsed}
                appName={appName}
                trigger={trigger}
                playlistModal={playlistModal}
                setPlaylistModal={setPlaylistModal}
                setState={setState}
                allPlaylist={children.props.data.allPlaylist}
            />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden h-full backgroundContent ">
                <Header
                    trigger={trigger}
                    sidebarCollapsed={sidebarCollapsed}
                    setsidebarCollapsed={setsidebarCollapsed}
                    appName={appName}
                    auth={auth}
                    allArtist={state.allArtist}
                    allTracks={state.allTracks}
                    state={state}
                    setState={setState}
                />

                <main className="">
                    <div
                        className={`px-16 sm:px-6 ${
                            state.firstTimePlaying ? "lg:pb-28" : "lg:pb-14"
                        }  lg:pt-3 w-full max-w-9xl mx-auto `}
                    >
                        {/* {children} */}
                        {playlistModal && renderModal()}

                        {state.queueOpen ? (
                            <ShowQueued state={state} setState={setState} />
                        ) : (
                            <Dashboard
                                props={children.props}
                                state={state}
                                setState={setState}
                            />
                        )}
                    </div>
                </main>
            </div>

            {state.firstTimePlaying && (
                <Player
                    allPlaylist={children.props.data.allPlaylist}
                    state={state}
                    setState={setState}
                />
            )}
            <ToastMessages
                toastMessages={toastMessages}
                setToastMessages={setToastMessages}
            />
        </div>
    );
}
