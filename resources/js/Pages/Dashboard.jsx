import { MainCard } from "@/Components/MainCard";
import { RecentlyPlayed } from "@/Components/RecentlyPlayed";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            appName={props.appName}
        >
            <Head title="Dashboard" />

            <MainCard title="Dashboard" release="This is the dashboard page" />
            <RecentlyPlayed itemsToRender={null} />
        </AuthenticatedLayout>
    );
}
