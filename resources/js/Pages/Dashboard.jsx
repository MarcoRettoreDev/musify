// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { LastAdded } from "@/Pages/LastAdded";
import { Head, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ShowArtist } from "./Artist/ShowArtist";
import { MyContentCreate } from "./MyContent/MyContentCreate";
import { ShowPlaylist } from "./Playlist/ShowPlaylist";
import { useEffect } from "react";
import EditProfile from "./Profile/Edit";
import ShowSearch from "./Search/ShowSearch";

function Dashboard(propsFromLayout) {
    const { props, state, setState } = propsFromLayout;

    const { ziggy } = usePage().props;

    const location = window.location.href;

    const pathname = route().current();

    const renderShowPlaylist = () => (
        <ShowPlaylist
            playlist={props.playlist}
            setState={setState}
            state={state}
            allPlaylist={props.data.allPlaylist}
        />
    );

    useEffect(() => {
        renderShowPlaylist();
    }, [props.playlist]);

    return (
        <>
            <Head title="Dashboard" />
            {props.created && (
                <MyContentCreate
                    allAlbums={props.allAlbums}
                    allArtists={props.allArtist}
                    allTracks={props.allTracks}
                />
            )}

            {props.searched && (
                <ShowSearch
                    allArtists={props.data.allArtist}
                    tracks={props.searchTracks}
                    artists={props.searchArtists}
                    state={state}
                    setState={setState}
                    allplaylist={props.data.allPlaylist}
                />
            )}

            {pathname?.includes("artist.show") && (
                <ShowArtist
                    state={state}
                    setState={setState}
                    artist={props.artist}
                    allplaylist={props.data.allPlaylist}
                />
            )}

            {pathname?.includes("dashboard") && !props.created && (
                <LastAdded
                    allTracks={props.allTracks}
                    itemsToRender={props.tracks}
                    state={state}
                    setState={setState}
                />
            )}

            {pathname?.includes("playlist.show") && renderShowPlaylist()}

            {pathname?.includes("profile.edit") && (
                <EditProfile user={props.user} />
            )}
        </>
    );
}

Dashboard.layout = (page) => (
    <AuthenticatedLayout
        children={page}
        auth={page.props.auth}
        errors={page.props.errors}
        appName={page.props.appName}
    />
);

export default Dashboard;
