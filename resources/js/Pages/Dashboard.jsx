import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { LastAdded } from "@/Components/LastAdded";
import { Head, useRemember } from "@inertiajs/react";

export default function Dashboard({
    allTracks,
    tracks,
    auth,
    errors,
    appName,
}) {
    const [state, setState] = useRemember(
        {
            allTracks: allTracks,
            currentTrack: null,
            duration: null,
            playing: false,
            ended: false,
        },
        "userState"
    );

    return (
        <AuthenticatedLayout auth={auth} errors={errors} appName={appName}>
            <Head title="Dashboard" />

            <h1 className="text-whitePrimary font-bold text-4xl mb-8">
                Recently added
            </h1>
            <LastAdded
                allTracks={allTracks}
                itemsToRender={tracks}
                state={state}
                setState={setState}
            />
        </AuthenticatedLayout>
    );
}
