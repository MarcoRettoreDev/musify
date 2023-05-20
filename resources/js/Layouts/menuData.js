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
        label: "New playlist",
        icon: "material-symbols:library-add-outline-rounded",
        pathName: null,
        routeLink: "",
        event: "openModalPlaylist",
    },
    {
        label: "About me",
        icon: "solar:info-square-bold",
        pathName: null,
        routeLink: "",
    },
];
