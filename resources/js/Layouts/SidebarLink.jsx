import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";

export default function SidebarLink({
    handleClick,
    open,
    data,
    routeLink,
    parameters,
    pathName,
    label,
    icon,
}) {
    const { ziggy } = usePage().props;
    const pathname = route().current(); // Muestra el nombre de la ruta actual
    const locationName = ziggy.location; // Muestra la url de la página actual

    return (
        <React.Fragment>
            <a
                href="#0"
                className={`group block truncate transition duration-150 mb-8 `}
                onClick={(e) => {
                    e.preventDefault();
                    console.log("click", label);
                    // handleClick();
                }}
            >
                <div className="flex items-center justify-between w-full    ">
                    <div className="flex items-center">
                        <Icon
                            icon={icon}
                            className={`w-6 h-6 text-greenPrimary`}
                        />
                        <Link
                            href={routeLink && route(routeLink, parameters)}
                            className={`group block text-slate-500 transition duration-150 truncate`}
                        >
                            <span
                                className={`ml-2 text-slate-200 font-semibold hover:!text-green-900 ${
                                    locationName.includes(`${pathName}`) &&
                                    "!text-greenSecondary font-bold "
                                }`}
                            >
                                {label}
                            </span>
                        </Link>
                    </div>
                    {/* <div className="flex shrink-0 ml-2">
                        <Icon
                            icon="ic:twotone-keyboard-arrow-down"
                            className={`w-4 h-4 ml-1 fill-current text-slate-400 ${
                                open && "rotate-180"
                            }`}
                        />
                    </div> */}
                </div>
            </a>
            {/* <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                    {childrens.map((child, i) => {
                        if (userPermission.includes(child.permission))
                            return (
                                <li
                                    className={` last:mb-0  ${
                                        i % 2 == 1 ? "mb-3" : "mb-1"
                                    }`}
                                    key={child.pathName}
                                >
                                    <Link
                                        href={route(
                                            child.pathName,
                                            child.parameters
                                        )}
                                        className={`group block text-slate-500 transition duration-150 truncate`}
                                    >
                                        <span
                                            // Vamos a comprobar si el módulo tiene parametros, entonces debe coincidir con el
                                            // nombre de la página actual, y tambíen su pathName debe incluirse en el pathname actual
                                            className={`group-hover:font-bold text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${
                                                (child.parameters?.module
                                                    ? locationName.includes(
                                                          child.parameters
                                                              ?.module
                                                      )
                                                    : true) &&
                                                pathname.includes(
                                                    child.pathName
                                                ) &&
                                                "font-bold text-slate-700"
                                            }`}
                                        >
                                            {child.label}
                                        </span>
                                    </Link>
                                </li>
                            );
                    })}
                </ul>
            </div> */}
        </React.Fragment>
    );
}
