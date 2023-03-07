import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { LastAdded } from "@/Components/LastAdded";
import { Head } from "@inertiajs/react";

export default function Dashboard({
    allTracks,
    tracks,
    auth,
    errors,
    appName,
}) {
    return (
        <AuthenticatedLayout auth={auth} errors={errors} appName={appName}>
            <Head title="Dashboard" />

            <h1 className="text-whitePrimary font-bold text-4xl mb-8">
                Recently added
            </h1>
            <LastAdded allTracks={allTracks} itemsToRender={tracks} />
        </AuthenticatedLayout>
    );
}
