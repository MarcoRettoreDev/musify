import { Player } from "@/Components/Player";
import Dashboard from "@/Pages/Dashboard";
import { useRemember } from "@inertiajs/react";
import { useRef, useState } from "react";
import Header from "./Header";
import { RightMenu } from "./RightMenu";
import Sidebar from "./Sidebar";

export default function AuthenticatedLayout({ appName, auth, children }) {
    console.log(
        "🚀 ~ file: AuthenticatedLayout.jsx:10 ~ AuthenticatedLayout ~ children:",
        children.props
    );
    const [state, setState] = useRemember(
        {
            allTracks: children.props.allTracks,
            currentTrack: null,
            duration: null,
            playing: false,
            ended: false,
            firstTimePlaying: false,
            shuffle: false,
            repeat: false,
        },
        "userState"
    );
    const trigger = useRef(null);

    let screenWidth = screen.width; // Screen width

    const [sidebarCollapsed, setsidebarCollapsed] = useState(
        screenWidth >= 1024 ? true : false
    );

    return (
        <div className="flex h-screen overflow-hidden bg-body ">
            <Sidebar
                sidebarCollapsed={sidebarCollapsed}
                setsidebarCollapsed={setsidebarCollapsed}
                appName={appName}
                trigger={trigger}
            />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header
                    trigger={trigger}
                    screenWidth={screenWidth}
                    sidebarCollapsed={sidebarCollapsed}
                    setsidebarCollapsed={setsidebarCollapsed}
                    appName={appName}
                    auth={auth}
                />

                <main className="bg-blackPrimary">
                    <div className="px-16 sm:px-6 lg:px-16 lg:pb-28 lg:pt-8 w-full max-w-9xl mx-auto ">
                        {/* {children} */}
                        <Dashboard
                            props={children.props}
                            state={state}
                            setState={setState}
                        />
                    </div>
                </main>
            </div>

            {state.firstTimePlaying && (
                <Player state={state} setState={setState} />
            )}

            <RightMenu />
        </div>
    );
}
