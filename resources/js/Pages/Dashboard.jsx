import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { RecentlyPlayed } from "@/Components/RecentlyPlayed";
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

            <h1 className="text-whitePrimary text-5xl mb-12">Recently added</h1>
            <RecentlyPlayed allTracks={allTracks} itemsToRender={tracks} />
        </AuthenticatedLayout>
    );
}
