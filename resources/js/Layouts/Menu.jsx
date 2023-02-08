import React from "react";
import { usePage } from "@inertiajs/react";

import SidebarLinkGroup from "./SidebarLinkGroup";
import SidebarLink from "./SidebarLink";
import { sideBarLinks } from "./menuData";

export default function Menu({ sidebarCollapsed, setsidebarCollapsed }) {
    const { auth } = usePage().props;
    const { ziggy } = usePage().props;

    const pathname = route().current();
    const locationName = ziggy.location;

    const renderLinks = () => (
        <SidebarLinkGroup
            activecondition={false}
            sidebarCollapsed={sidebarCollapsed}
            setsidebarCollapsed={setsidebarCollapsed}
        >
            {(handleClick, open) =>
                sideBarLinks.map((link) => (
                    <SidebarLink
                        key={link.label}
                        pathName={link.pathName}
                        urlPath={link.urlPath}
                        label={link.label}
                        icon={link.icon}
                        handleClick={handleClick}
                    />
                ))
            }
        </SidebarLinkGroup>
    );

    const renderLogOut = () => (
        <SidebarLinkGroup
            activecondition={false}
            sidebarCollapsed={sidebarCollapsed}
            setsidebarCollapsed={setsidebarCollapsed}
        >
            {(handleClick, open) => (
                <SidebarLink
                    pathName={"pathName"}
                    urlPath={"link.urlPath"}
                    label={"Log out"}
                    icon="mdi:logout"
                    handleClick={handleClick}
                />
            )}
        </SidebarLinkGroup>
    );
    return (
        <div className="space-y-8 bg-slate-900">
            <div className="h-full flex flex-col justify-between ">
                <ul className="mb-3">{renderLinks()}</ul>
                {renderLogOut()}
            </div>
        </div>
    );
}
