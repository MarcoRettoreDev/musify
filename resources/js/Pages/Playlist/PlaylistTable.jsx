import { sortableContainer, sortableElement } from "react-sortable-hoc";
import { ListItem } from "@mui/material";
import { arrayMoveImmutable } from "array-move";
import { useState } from "react";
import { useEffect } from "react";
import { Icon } from "@iconify/react";

export const PlaylistTable = ({ tracks, handleChange, setState, state }) => {
    const [trackItems, setTrackItems] = useState(tracks);

    const formatDuration = (duration) => {
        const temp = duration.split("T")[1].split(".")[0];
        if (temp[0] === "0") return temp.slice(1, 5);
        return temp.slice(0, 5);
    };

    const handleCLick = (value) => {
        console.log(value);
    };

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setTrackItems(arrayMoveImmutable(trackItems, oldIndex, newIndex));
    };

    const SortableContainer = sortableContainer(({ children }) => {
        return <ul>{children}</ul>;
    });

    const SortableItem = sortableElement(({ value, i }) => {
        return (
            <div className="flex flex-row align-center">
                <ListItem
                    key={value.id}
                    role="listitem"
                    className="!flex space-x-4 cursor-pointer hover:bg-greyPrimary rounded"
                >
                    <p>{i}</p>
                    <img src={value.avatar} className="h-10 w-10" alt="img" />
                    <div className="w-full flex justify-between items-center">
                        <p className="w-[40%]">{value.title}</p>
                        <div className="flex w-[50%] justify-between">
                            <p className="w-[33%] text-center">
                                {value.artist}
                            </p>
                            <p className="w-[33%] text-center">
                                {formatDuration(value.duration)}
                            </p>
                            <p className="w-[33%] text-center">
                                {value.release.split("T")[0]}
                            </p>
                        </div>
                    </div>
                </ListItem>
            </div>
        );
    });

    const customList = (items) => (
        <SortableContainer items={items} onSortEnd={onSortEnd}>
            {items.map((value, index) => {
                return (
                    <SortableItem
                        key={value.id}
                        index={index}
                        i={index + 1}
                        value={value}
                        role="listitem"
                    />
                );
            })}
            <ListItem />
        </SortableContainer>
    );

    useEffect(() => {
        handleChange(trackItems);
    }, [trackItems]);

    return (
        <div className="mt-6">
            <div className="px-4 py-2 mb-2 flex w-full border-b border-b-slate-100 border-opacity-10 cursor-default">
                <p className="w-[5%] text-left">#</p>
                <p className="w-[35%] text-left">Title</p>
                <p className="w-[30%] text-right pr-12 2xl:pr-28">Artist</p>
                <div className="w-[15%] text-center flex">
                    <Icon
                        icon="ic:sharp-access-time"
                        className="mx-auto my-auto"
                    />
                </div>
                <p className="w-[15%] text-center">Release</p>
            </div>
            {customList(trackItems)}
        </div>
    );
};
