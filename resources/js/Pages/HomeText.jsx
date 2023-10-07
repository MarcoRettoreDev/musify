import imgBackground from "../../css/img/dj-Music-BG.jpg";
import { forwardRef } from "react";
import { Icon } from "@iconify/react";

function HomeText({ showAboutMe, setShowAboutMe, appName, loginRef }, ref) {
    const handleClickScroll = () => {
        loginRef?.current.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => setShowAboutMe(!showAboutMe), 500);
    };
    return (
        <div
            style={{
                backgroundImage: `url(${imgBackground})`,
                backgroundColor: "rgba(0,0,0,0.7)",
                backgroundBlendMode: "darken",
            }}
            ref={ref}
            className={`${
                showAboutMe ? "flex" : "hidden"
            } min-h-screen space-y-4 flex flex-col items-center text-greyLight p-0 2xl:px-20 bg-center bg-no-repeat bg-cover`}
        >
            <div
                onClick={handleClickScroll}
                className="flex flex-col items-center cursor-pointer"
            >
                <Icon icon="tabler:chevron-up" width={24} height={24} />
                <p className="underline underline-offset-2 font-medium ">
                    Go back
                </p>
            </div>
            <h1 className="titleMusify text-7xl md:text-8xl">
                {appName.toUpperCase()}
            </h1>
            <div className="p-4 flex flex-col gap-2 md:gap-12 justify-evenly">
                <div>
                    <h2 className="text-white mb-2 md:mb-4">Discover me!</h2>
                    <p>
                        Here you can see what i love to do and work on, this
                        project made only for demonstration purposes and fun
                        myself. You can generate an account to test the app
                        clicking on the <strong>GENERATE</strong> button.
                    </p>
                </div>
                <div>
                    <h2 className="text-white mb-2 md:mb-4">About me</h2>
                    <p>
                        Hello there, my name is Marco i'm a 28 years old
                        Fullstack web/mobile developer working from Argentina. I
                        love to develop products and help people throught
                        technology, started beeing a self-taught developer and
                        also decided to study at the university i'm currently at
                        thrid year of the Bachelor's degree in Computer Systems.
                        <br />
                        Feel free to contact me if you have any question or want
                        to collaborate with me.
                    </p>
                </div>

                <div>
                    <h2 className="text-white mb-2 md:mb-4">Contact me</h2>
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/marco-antonio-rettore-mattes/"
                                target="_blank"
                                className="inline-flex items-center space-x-2"
                            >
                                <Icon icon="mdi:linkedin" width={20} />
                                <span className="font-bold"> Linkedin</span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="mailto:marcorettoremattes@gmail.com"
                                target="_blank"
                                className="inline-flex items-center space-x-2"
                                style={{ marginLeft: "1px" }}
                            >
                                <Icon icon="simple-icons:gmail" width={18} />
                                <span className="font-bold">Mail</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://mrdev.works/"
                                target="_blank"
                                className="inline-flex items-center space-x-2"
                            >
                                <Icon icon="mdi:web" width={20} />
                                <span className="font-bold">Web portfolio</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/MarcoRettoreDev"
                                target="_blank"
                                className="inline-flex items-center space-x-2"
                            >
                                <Icon icon="mdi:github" width={20} />
                                <span className="font-bold">GitHub</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default forwardRef(HomeText);
