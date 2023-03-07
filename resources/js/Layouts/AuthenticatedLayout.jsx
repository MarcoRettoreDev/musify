import { useRef, useState } from "react";

import Header from "./Header";
import { RightMenu } from "./RightMenu";
import Sidebar from "./Sidebar";

export default function Authenticated({ appName, auth, children }) {
    const trigger = useRef(null);

    let screenWidth = screen.width; // Screen width

    const [sidebarCollapsed, setsidebarCollapsed] = useState(
        screenWidth >= 1024 ? true : false
    );

    return (
        <div className="flex h-screen overflow-hidden bg-body">
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

                <main className="bg-blackPrimary h-full">
                    <div className="px-16 sm:px-6 lg:px-16 lg:py-16 w-full max-w-9xl mx-auto h-full">
                        {children}
                    </div>
                </main>
            </div>
            <RightMenu />
        </div>
    );
}
