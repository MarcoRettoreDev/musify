import { sortableContainer, sortableElement } from "react-sortable-hoc";
import { Checkbox, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { arrayMoveImmutable } from "array-move";
import { useState } from "react";
import { useEffect } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import { TrackItem } from "@/Components/TrackItem";

const formatDuration = (duration) => {
    const temp = duration.split("T")[1].split(".")[0];
    if (temp[0] === "0") return temp.slice(1, 5);
    return temp.slice(0, 5);
};

export const PlaylistTable = ({
    playlistID,
    tracks,
    handleChange,
    setState,
    state,
}) => {
    const [trackItems, setTrackItems] = useState(tracks);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setTrackItems(arrayMoveImmutable(trackItems, oldIndex, newIndex));
    };

    const handleCLickTest = (value) => () => {
        if (state.currentTrack === value.id && state.playing) {
            setState((state) => ({
                ...state,
                playing: !state.playing,
            }));
        } else {
            setState((state) => ({
                ...state,
                currentTrack: value.id,
                playing: true,
                firstTimePlaying: true,
                currentPlaylist: playlistID,
            }));
        }
    };

    const SortableItem = sortableElement(({ value, i }) => {
        return (
            <div className="flex flex-row align-center">
                <ListItem
                    key={value.id}
                    role="listitem"
                    onClick={handleCLickTest(value)}
                    className="!flex space-x-4 cursor-pointer hover:bg-greyPrimary rounded "
                >
                    <ListItemIcon>
                        <ListItemText
                            primary={i}
                            style={{
                                margin: "auto 0",
                                display: "flex",
                                justifyContent: "space-between",
                                color: "#e2e8f0",
                            }}
                        />
                        <Checkbox
                            sx={{
                                color: "transparent",
                                backgroundColor: "transparent",
                                "&:hover": {
                                    color: "#15803d",
                                },
                            }}
                            tabIndex={-1}
                            disableRipple
                            indeterminate
                            indeterminateIcon={
                                state.currentTrack === value.id &&
                                state.playing ? (
                                    <Icon
                                        width={"2rem"}
                                        height={"2rem"}
                                        icon="material-symbols:pause-circle-rounded"
                                        className="text-greenPrimary"
                                    />
                                ) : (
                                    <Icon
                                        width={"2rem"}
                                        height={"2rem"}
                                        icon="material-symbols:play-circle-rounded"
                                        className={`${
                                            state.currentTrack === value.id
                                                ? "text-greenPrimary"
                                                : "text-blackPrimary"
                                        }`}
                                    />
                                )
                            }
                        />
                    </ListItemIcon>
                    <div className="w-full">
                        <div className="w-full flex justify-between items-center">
                            <div
                                style={{
                                    backgroundImage: `url(${value.thumb})`,
                                }}
                                className="h-12 w-14 bg-contain bg-center bg-no-repeat rounded"
                            />
                            <p className="w-[40%] ">{value.title}</p>
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
                    </div>
                </ListItem>
            </div>
        );
    });

    const SortableContainer = sortableContainer(({ children }) => {
        return <ul>{children}</ul>;
    });

    const customList = (items) => (
        <SortableContainer items={items} onSortEnd={onSortEnd}>
            {items.map((value, index) => {
                return (
                    <SortableItem
                        state={state}
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
                <p className="w-[25%] text-center">Title</p>
                <p className="w-[40%] text-right pr-12 2xl:pr-28">Artist</p>
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
