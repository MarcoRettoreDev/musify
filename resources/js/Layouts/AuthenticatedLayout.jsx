import { Player } from "@/Components/Player";
import Dashboard from "@/Pages/Dashboard";
import { router, useRemember } from "@inertiajs/react";
import { useRef, useState } from "react";
import Header from "./Header";
import { RightMenu } from "./RightMenu";
import Sidebar from "./Sidebar";
import PlaylistModal from "@/Components/PlaylistModal";
import { ToastMessages } from "@/Components/ToastMessages";
import { useEffect } from "react";
import { usePage } from "@inertiajs/react";

export default function AuthenticatedLayout(props) {
    console.log(
        "🚀 ~ file: AuthenticatedLayout.jsx:14 ~ AuthenticatedLayout ~ props:",
        props
    );
    const { appName, auth, children } = props;

    const [state, setState] = useRemember(
        {
            allTracks: children.props.data.allTracks,
            allArtist: children.props.data.allArtist,
            allPlaylist: children.props.data.allPlaylist,
            currentTrack: null,
            queued: [],
            playing: false,
            ended: false,
            firstTimePlaying: false,
            repeat: false,
        },
        "userState"
    );

    console.log(
        "🚀 ~ file: AuthenticatedLayout.jsx:28 ~ AuthenticatedLayout ~ state:",
        state
    );

    const { flash } = usePage().props; // Flash messages from controler using handleInertiaResquest

    let screenWidth = screen.width; // Screen width

    const [playlistModal, setPlaylistModal] = useState(false);

    const [sidebarCollapsed, setsidebarCollapsed] = useState(
        screenWidth >= 1024 ? true : false
    );
    const trigger = useRef(null);

    const optionsElements = children.props.data.allArtist.map((artist) => {
        return {
            id: artist.id,
            value: artist.id,
            label: artist.name,
            type: "artist",
        };
    });

    children.props.data.allTracks.forEach((track) => {
        optionsElements.push({
            id: track.id,
            value: track.id,
            label: track.title,
            type: "track",
        });
    });

    const renderModal = () => (
        <PlaylistModal
            allArtist={state.allArtist}
            playlist={children.props?.playlist}
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
        }
    }, [flash.message]);

    useEffect(() => {
        if (playlistModal) {
            renderModal();
        }
    }, [playlistModal]);

    return (
        <div className="flex h-screen overflow-hidden bg-body ">
            <Sidebar
                sidebarCollapsed={sidebarCollapsed}
                setsidebarCollapsed={setsidebarCollapsed}
                appName={appName}
                trigger={trigger}
                playlistModal={playlistModal}
                setPlaylistModal={setPlaylistModal}
            />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden h-full bg-blackPrimary ">
                <Header
                    trigger={trigger}
                    sidebarCollapsed={sidebarCollapsed}
                    setsidebarCollapsed={setsidebarCollapsed}
                    appName={appName}
                    auth={auth}
                    optionsElements={optionsElements}
                    state={state}
                    setState={setState}
                />

                <main className="">
                    <div className="px-16 sm:px-6 lg:px-16 lg:pb-28 lg:pt-8 w-full max-w-9xl mx-auto ">
                        {/* {children} */}
                        {playlistModal && renderModal()}

                        <Dashboard
                            props={children.props}
                            state={state}
                            setState={setState}
                        />
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

            <RightMenu allPlaylist={children.props.data.allPlaylist} />

            {children.props.flash?.message && (
                <ToastMessages
                    icon="material-symbols:check-circle-outline"
                    message={flash?.message}
                />
            )}
        </div>
    );
}
