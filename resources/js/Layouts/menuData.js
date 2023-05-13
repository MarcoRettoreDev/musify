export const sideBarLinks = [
    {
        label: "Home",
        icon: "ic:round-home",
        pathName: "dashboard",
        routeLink: "dashboard",
    },
    {
        label: "My content",
        icon: "ic:outline-file-upload",
        pathName: "mycontent.create",
        routeLink: "mycontent.create",
    },
    {
        label: "Create playlist",
        icon: "mdi:cards-heart",
        pathName: null,
        routeLink: "",
        event: "openModalPlaylist",
    },
    {
        label: "Downloads",
        icon: "ion:download",
        pathName: null,
        routeLink: "",
    },
    {
        label: "Settings",
        icon: "material-symbols:settings-rounded",
        pathName: null,
        routeLink: "",
    },
    {
        label: "About me",
        icon: "solar:info-square-bold",
        pathName: null,
        routeLink: "",
    },
];
