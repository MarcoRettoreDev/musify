import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";

export default function SidebarLink({
    handleClick,
    routeLink,
    event,
    parameters,
    pathName,
    label,
    icon,
    sidebarCollapsed,
}) {
    const { ziggy } = usePage().props;
    const pathname = route().current(); // Muestra el nombre de la ruta actual

    const locationName = ziggy.location; // Muestra la url de la página actual

    return (
        <React.Fragment>
            <div
                className={`group block truncate transition duration-150`}
                onClick={(e) => {
                    e.preventDefault();
                    handleClick(event);
                }}
            >
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        {icon && (
                            <Icon
                                icon={icon}
                                className={`w-6 h-6 text-greenPrimary`}
                            />
                        )}
                        <Link
                            href={routeLink && route(routeLink, parameters)}
                            className={`group block text-slate-500 transition duration-150 truncate`}
                        >
                            <span
                                className={`ml-2 text-slate-200 ${
                                    routeLink === "playlist.show"
                                        ? "font-normal"
                                        : "font-bold"
                                } hover:!text-greenSecondary ${
                                    pathname?.includes(`${pathName}`) |
                                        (routeLink === "playlist.show" &&
                                            locationName.includes(pathName)) &&
                                    "!text-greenSecondary font-bold "
                                }`}
                            >
                                {label}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
