// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { LastAdded } from "@/Pages/LastAdded";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ShowArtist } from "./Artist/ShowArtist";
import { MyContentCreate } from "./MyContent/MyContentCreate";

function Dashboard(propsFromLayout) {
    const { props, state, setState } = propsFromLayout;

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

            {props.artist && (
                <ShowArtist
                    state={state}
                    setState={setState}
                    artist={props.artist}
                />
            )}

            {props.tracks && (
                <LastAdded
                    allTracks={props.allTracks}
                    itemsToRender={props.tracks}
                    state={state}
                    setState={setState}
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
