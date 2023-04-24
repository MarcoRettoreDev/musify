import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

export const LastAddedCard = ({
    imageSRC,
    direction,
    variants,
    paginate,
    artistId,
    artist,
    release,
    title,
    nextArtistId,
    prevArtistId,
    setCurrentArtist,
    setState,
    page,
    id,
}) => {
    return (
        <motion.div
            key={page}
            style={{
                backgroundImage: `url(${imageSRC})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
                height: "50vh",
            }}
            className="relative rounded-2xl xl:w-full 2xl:w-4/5 mx-auto"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={2}
            onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                    setCurrentArtist(nextArtistId);
                } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                    setCurrentArtist(prevArtistId);
                }
            }}
        >
            <div className="flex justify-between text-whitePrimary absolute 2xl:top-[65%] lg:top-[55%] px-8 w-full">
                <div className="pl-8 pr-12 py-6 rounded-lg">
                    <h1 className="font-bold text-5xl mb-3">{title}</h1>
                    <p className="font-semibold text-3xl">
                        {
                            <Link
                                href={route("artist.show", artistId)}
                                className="hover:underline"
                            >
                                {artist}
                            </Link>
                        }
                    </p>
                    <p className="text-xl">Drop on {release.split("T")[0]}</p>
                </div>
                <div
                    className="my-auto"
                    onClick={() => {
                        setState((state) => ({
                            ...state,
                            currentTrack: id,
                            playing: true,
                            firstTimePlaying: true,
                        }));
                    }}
                >
                    <Icon
                        className="text-whitePrimary bg-blackSecondary hover:text-greenPrimary hover:cursor-pointer bg-opacity-30 hover:bg-opacity-80 rounded-full"
                        width="5rem"
                        height="5rem"
                        icon="ic:round-play-arrow"
                    />
                </div>
            </div>
            <div className="absolute w-full flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                <div className="p-1 ml-3 rounded-lg bg-blackSecondary bg-opacity-30 hover:bg-opacity-80 hover:text-greenPrimary text-whitePrimary">
                    <Icon
                        onClick={() => {
                            paginate(-1);
                            setCurrentArtist(prevArtistId); // pre artist id
                        }}
                        width={"2rem"}
                        height={"2rem"}
                        icon="material-symbols:arrow-back-ios-new-rounded"
                    />
                </div>

                <div className="p-1 mr-3 rounded-lg bg-blackSecondary bg-opacity-30 hover:bg-opacity-80 hover:text-greenPrimary text-whitePrimary">
                    <Icon
                        onClick={() => {
                            paginate(1);
                            setCurrentArtist(nextArtistId); // post artist id
                        }}
                        width={"2rem"}
                        height={"2rem"}
                        icon="material-symbols:arrow-forward-ios-rounded"
                    />
                </div>
            </div>
        </motion.div>
    );
};
