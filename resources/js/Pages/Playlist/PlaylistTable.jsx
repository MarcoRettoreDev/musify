import { arrayMoveImmutable } from "array-move";
import { useState } from "react";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { SortableItem } from "@/Components/DraggableList/SortableItem";
import { SortableContainer } from "@/Components/DraggableList/SortableContainer";

export const PlaylistTable = ({
    playlistID,
    tracks,
    handleChange,
    setState,
    state,
    allPlaylist,
}) => {
    const [trackItems, setTrackItems] = useState(tracks);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setTrackItems(arrayMoveImmutable(trackItems, oldIndex, newIndex));
    };

    const customList = (items) => (
        <SortableContainer items={items} onSortEnd={onSortEnd}>
            {items.map((value, index) => {
                return (
                    <SortableItem
                        allPlaylist={allPlaylist}
                        state={state}
                        setState={setState}
                        key={value.id}
                        index={index}
                        i={index + 1}
                        value={value}
                        role="listitem"
                        playlistID={playlistID}
                    />
                );
            })}
        </SortableContainer>
    );

    useEffect(() => {
        handleChange(trackItems);
    }, [trackItems]);

    useEffect(() => {
        setTrackItems(tracks);
    }, [tracks]);

    return (
        <div className="mt-6">
            <div className="px-4 py-2 mb-2 flex w-full border-b border-b-slate-100 border-opacity-10 cursor-default">
                <p className="w-[5%] text-left">#</p>
                <p className="w-[25%] text-center">Title</p>
                <p className="w-[39%] text-right pr-12 2xl:pr-28">Artist</p>
                <div className="w-[9%] text-center flex">
                    <Icon
                        icon="ic:sharp-access-time"
                        className="mx-auto my-auto"
                    />
                </div>
                <p className="w-[19%] text-center">Release</p>
            </div>
            {customList(trackItems)}
        </div>
    );
};
