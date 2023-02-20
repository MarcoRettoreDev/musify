import PrimaryButton from "@/Components/PrimaryButton";
import { BoxLogin } from "@/Layouts/BoxLogin";
import { Link, Head, router } from "@inertiajs/react";
import React from "react";
// import route from "vendor/tightenco/ziggy/src/js";

export default function Welcome(props) {
    const { user } = props;

    const handleGenerateValues = () => {
        return router.get(route("user.generate"));
    };
    return (
        <React.Fragment>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-slate-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-sm text-gray-700 dark:text-gray-500 underline"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div className="text-slate-200">
                    <div className="flex justify-between items-center mb-5">
                        <h1>Generate your own access</h1>
                        <PrimaryButton
                            className="ml-4"
                            onClick={handleGenerateValues}
                        >
                            Generate
                        </PrimaryButton>
                    </div>
                    <BoxLogin user={user} />
                </div>
            </div>
        </React.Fragment>
    );
}
