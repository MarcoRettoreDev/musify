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

    console.log(appName);

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

                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
            <RightMenu />
        </div>
    );
}
