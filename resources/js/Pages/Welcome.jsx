import PrimaryButton from "@/Components/PrimaryButton";
import { BoxLogin } from "@/Layouts/BoxLogin";
import Guest from "@/Layouts/GuestLayout";
import { Head, router } from "@inertiajs/react";
import React from "react";
import { HomeText } from "./HomeText";

export default function Welcome(props) {
    const { user, appName } = props;

    const handleGenerateValues = () => {
        return router.get(route("user.generate"));
    };

    return (
        <Guest>
            <Head title="Welcome back" />
            <div className="flex items-top md:justify-around justify-center min-h-screen items-center sm:p-20 md:p-10 p-0 w-full bg-black bg-opacity-50 ">
                <div className="text-slate-200 !opacity-100 w-full md:w-1/2 space-y-4 m-8">
                    <div className="flex justify-center font-bold items-center mb-5">
                        <h1 className="text-3xl">Welcome back!</h1>
                    </div>
                    <BoxLogin
                        user={user}
                        handleGenerateValues={handleGenerateValues}
                    />
                </div>
                <div className="hidden md:block w-1/2 !opacity-100">
                    <HomeText appName={appName} />
                </div>
            </div>
        </Guest>
    );
}
