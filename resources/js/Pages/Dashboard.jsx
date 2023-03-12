// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { LastAdded } from "@/Pages/LastAdded";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ShowArtist } from "./Artist/ShowArtist";

function Dashboard(propsFromLayout) {
    const { props, state, setState } = propsFromLayout;

    console.log(props);

    return (
        <>
            <Head title="Dashboard" />

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
