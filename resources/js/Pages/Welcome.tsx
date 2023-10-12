import React from "react";
import imgBackground from "../../css/img/bg-guestLayout.jpg";
import Guest from "@/Layouts/GuestLayout";
import HomeText from "./HomeText";
import { BoxLogin } from "@/Layouts/BoxLogin";
import { Head, router } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { ToastMessages } from "@/Components/ToastMessages";

export default function Welcome(props) {
    const { user, appName } = props;
    const [toastMessages, setToastMessages] = useState({
        show: false,
        message: "This account will be deleted after 24 hs",
        icon: "uiw:warning",
        iconColor: "text-greenPrimary",
        duration: 5000,
    });
    const [showAboutMe, setShowAboutMe] = useState(false);
    const ref = useRef(null);
    const loginRef = useRef(null);

    const handleGenerateValues = () => {
        return router.get(route("user.generate"));
    };

    const scrollSection = () => {
        ref?.current.scrollIntoView({ behavior: "smooth" });
    };

    const handleClickScroll = () => {
        setShowAboutMe(!showAboutMe);
        setTimeout(scrollSection, 100);
    };

    useEffect(() => {
        if (user) {
            setToastMessages((toastMessages) => ({
                ...toastMessages,
                show: true,
            }));
        }
    }, [user]);

    return (
        <Guest>
            <Head title="Welcome back" />
            <div
                ref={loginRef}
                style={{
                    backgroundImage: `url(${imgBackground})`,
                    backgroundBlendMode: "darken",
                    backgroundColor: "rgba(0,0,0,0.25)",
                }}
                className={`flex  flex-col justify-between h-screen items-center p-0 w-full bg-center bg-no-repeat bg-cover`}
            >
                <div className="text-slate-200 w-full h-full flex flex-col justify-between md:my-8">
                    <div className="mt-12">
                        <h1 className="titleMusify text-7xl md:text-9xl">
                            {appName.toUpperCase()}
                        </h1>
                        <h2 className="text-center text-3xl font-extrabold">
                            Welcome back!
                        </h2>
                    </div>
                    <div className="flex flex-col items-center gap-8">
                        <BoxLogin
                            user={user}
                            handleGenerateValues={handleGenerateValues}
                        />

                        <div
                            onClick={handleClickScroll}
                            className={`${
                                !showAboutMe ? "opacity-100" : "opacity-0"
                            } flex flex-col items-center cursor-pointer transition-opacity duration-300 ease-in-out`}
                        >
                            <p className="underline underline-offset-2 font-medium">
                                About this project
                            </p>
                            <Icon
                                icon="tabler:chevron-down"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ToastMessages
                toastMessages={toastMessages}
                setToastMessages={setToastMessages}
            />
            <HomeText
                loginRef={loginRef}
                ref={ref}
                appName={appName}
                showAboutMe={showAboutMe}
                setShowAboutMe={setShowAboutMe}
            />
        </Guest>
    );
}
