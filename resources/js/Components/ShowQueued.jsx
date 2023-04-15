import { AnimatePresence, motion } from "framer-motion";
import { TrackItem } from "./TrackItem";
import { Link } from "@inertiajs/react";
import { SortableItem } from "@/Components/DraggableList/SortableItem";
import { arrayMoveImmutable } from "array-move";
import { SortableContainer } from "./DraggableList/SortableContainer";

export const ShowQueued = ({ state, setState }) => {
    const playlistName =
        state.allPlaylist.find(
            (playlist) => playlist.id === state.currentPlaylist
        )?.name ?? "No playlist selected";

    let currentTrackPlaying = state.allTracks.find(
        (track) => track.id === state.currentTrack
    );

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setState((state) => ({
            ...state,
            queued: arrayMoveImmutable(state.queued, oldIndex, newIndex),
        }));
    };

    const customList = (items) => (
        <SortableContainer items={items} onSortEnd={onSortEnd}>
            {items.map((value, index) => {
                return (
                    <SortableItem
                        state={state}
                        setState={setState}
                        key={value.id}
                        index={index}
                        i={index + 1}
                        value={value}
                        role="listitem"
                        playlistID={state.currentPlaylist}
                    />
                );
            })}
        </SortableContainer>
    );

    return (
        <AnimatePresence>
            {state.queueOpen && (
                <motion.div
                    initial={{
                        y: 1000,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    exit={{
                        y: 1000,
                        opacity: 0,
                    }}
                    transition={{ duration: 0.1 }}
                    className="space-y-4"
                >
                    <h1 className="text-whitePrimary font-bold text-2xl">
                        Queue
                    </h1>

                    <h3 className="text-lg font-semibold">Now playing</h3>
                    <ul className="!flex px-4 items-center space-x-4 cursor-pointer hover:bg-greyPrimary rounded">
                        <TrackItem
                            i={1}
                            id={currentTrackPlaying.id}
                            title={currentTrackPlaying.title}
                            artist={currentTrackPlaying.artist}
                            duration={currentTrackPlaying.duration}
                            release={currentTrackPlaying.release}
                            img={currentTrackPlaying.thumb}
                        />
                    </ul>

                    {state.currentPlaylist && state.queued.length > 0 ? (
                        <h3 className="text-lg font-semibold">
                            Next from:&nbsp;
                            <Link
                                className="text-whitePrimary hover:!underline"
                                href={route(
                                    "playlist.show",
                                    state.currentPlaylist
                                )}
                            >
                                {playlistName}
                            </Link>
                        </h3>
                    ) : (
                        <h3 className="text-lg font-semibold">Queued</h3>
                    )}

                    <div>{customList(state.queued)}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
