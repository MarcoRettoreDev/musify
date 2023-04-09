// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { LastAdded } from "@/Pages/LastAdded";
import { Head, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ShowArtist } from "./Artist/ShowArtist";
import { MyContentCreate } from "./MyContent/MyContentCreate";
import { ShowPlaylist } from "./Playlist/ShowPlaylist";

function Dashboard(propsFromLayout) {
    console.log(
        "🚀 ~ file: Dashboard.jsx:10 ~ Dashboard ~ propsFromLayout:",
        propsFromLayout
    );
    const { props, state, setState } = propsFromLayout;
    const { ziggy } = usePage().props;

    const location = window.location.href;

    const pathname = route().current();

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

            {pathname.includes("artist.show") && (
                <ShowArtist
                    state={state}
                    setState={setState}
                    artist={props.artist}
                />
            )}

            {pathname.includes("dashboard") && !props.created && (
                <LastAdded
                    allTracks={props.allTracks}
                    itemsToRender={props.tracks}
                    state={state}
                    setState={setState}
                />
            )}

            {pathname.includes("playlist.show") && (
                <ShowPlaylist
                    playlist={props.playlist}
                    setState={setState}
                    state={state}
                />
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
