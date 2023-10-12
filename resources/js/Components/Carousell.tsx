import React from "react";
import { AnimatePresence, wrap } from "framer-motion";
import { useState } from "react";
import { LastAddedCard } from "./LastAddedCard";

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 2000 : -2000,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 2000 : -2000,
            opacity: 0,
        };
    },
};

export const Carousell = ({
    data,
    setState,
    currentArtist,
    setCurrentArtist,
}) => {
    const [[page, direction], setPage] = useState([0, 0]);

    const currentIndex = wrap(0, data.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <AnimatePresence initial={false} custom={direction}>
            <LastAddedCard
                page={page}
                currentArtist={currentArtist}
                setCurrentArtist={setCurrentArtist}
                setState={setState}
                id={data[currentIndex].id}
                imageSRC={data[currentIndex].image}
                artistId={data[currentIndex].artist_id}
                release={data[currentIndex].release}
                title={data[currentIndex].title}
                artist={data[currentIndex].artist}
                direction={direction}
                variants={variants}
                paginate={paginate}
                prevArtistId={
                    data[
                        currentIndex === 0 ? data.length - 1 : currentIndex - 1
                    ].artist_id
                }
                nextArtistId={
                    data[
                        currentIndex === data.length - 1 ? 0 : currentIndex + 1
                    ].artist_id
                }
            />
        </AnimatePresence>
    );
};
