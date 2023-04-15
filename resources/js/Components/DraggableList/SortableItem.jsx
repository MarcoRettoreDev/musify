import { sortableElement } from "react-sortable-hoc";
import { Checkbox, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Icon } from "@iconify/react";
import { TrackItem } from "../TrackItem";

const formatDuration = (duration) => {
    const temp = duration.split("T")[1].split(".")[0];
    if (temp[0] === "0") return temp.slice(1, 5);
    return temp.slice(0, 5);
};

export const SortableItem = sortableElement(
    ({ value, i, state, setState, playlistID }) => {
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
                    <TrackItem
                        title={value.title}
                        artist={value.artist}
                        duration={value.duration}
                        release={value.release}
                        img={value.thumb}
                    />
                </ListItem>
            </div>
        );
    }
);
