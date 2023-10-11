import { router, useForm } from "@inertiajs/react";
import { PlaylistHeader } from "./PlaylistHeader";
import { PlaylistTable } from "./PlaylistTable";
import { Icon } from "@iconify/react";
import AcceptButton from "@/Components/AcceptButton";
import { ModalConfirm } from "@/Components/ModalConfirm";
import { useState } from "react";
import { useEffect } from "react";

export const ShowPlaylist = (props) => {
    const { playlist, setState, state, allPlaylist } = props;
    const { data, setData, post, processing, errors } = useForm({
        name: playlist.name ?? "",
        image: playlist.image ?? "",
        description: playlist.description ?? "",
        tracks: playlist.tracks ?? [],
    });

    const [editMode, setEditMode] = useState(false);

    const [confirmDelete, setConfirmDelete] = useState({
        modal: false,
        confirmation: null,
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeImage = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.files[0],
        }));
    };

    const handleSortChange = (items) => {
        setData({ ...data, tracks: items });
    };

    const formSubmit = () => {
        post(route("playlist.update", playlist.id));
    };

    const formCancel = () => {
        setConfirmDelete({
            modal: true,
            confirmation: null,
        });
    };

    const playPlaylist = () => {
        // Si la playlist ya está siendo playeada, se debe resumir donde quedó, sinó. Se debe empezar desde el principio
        if (state.currentPlaylist === playlist.id) {
            setState((state) => ({
                ...state,
                queued: data.tracks.filter(
                    (track) => track.id !== data.tracks[0].id
                ),
                firstTimePlaying: true,
                playing: true,
            }));
        } else {
            setState((state) => ({
                ...state,
                queued: data.tracks.filter(
                    (track) => track.id !== data.tracks[0].id
                ),
                currentTrack: data.tracks[0].id,
                currentPlaylist: playlist.id,
                firstTimePlaying: true,
                playing: true,
            }));
        }
    };

    useEffect(() => {
        if (confirmDelete.confirmation) {
            router.delete(route("playlist.delete", playlist.id));
        }
    }, [confirmDelete]);

    useEffect(() => {
        setData({
            name: playlist.name ?? "",
            image: playlist.image ?? "",
            description: playlist.description ?? "",
            tracks: playlist.tracks ?? [],
        });
    }, [playlist]);

    return (
        <div className="h-full">
            <ModalConfirm
                show={confirmDelete.modal}
                callBack={setConfirmDelete}
                message={"Are you sure to delete this?"}
                title={data.name}
            />

            <PlaylistHeader
                handleChangeImage={handleChangeImage}
                errors={errors}
                data={data}
                handleChange={handleChange}
                name={playlist.name}
                description={playlist.description}
                songsQuantity={playlist.tracks.length}
                editMode={editMode}
                setEditMode={setEditMode}
            />

            <div className="flex items-center justify-between space-x-6 my-5">
                {state.currentPlaylist === playlist.id && state.playing ? (
                    <Icon
                        onClick={() =>
                            setState((state) => ({
                                ...state,
                                playing: false,
                            }))
                        }
                        className="text-greenPrimary hover:text-greenSecondary cursor-pointer"
                        width="4rem"
                        icon="material-symbols:pause-circle-rounded"
                    />
                ) : (
                    <Icon
                        onClick={playPlaylist}
                        className="text-greenPrimary hover:text-greenSecondary cursor-pointer"
                        width="4rem"
                        icon="material-symbols:play-circle-rounded"
                    />
                )}

                <div className="flex space-x-4">
                    {editMode ? (
                        <AcceptButton
                            onClick={formSubmit}
                            className=""
                            processing={processing}
                            children="save"
                        />
                    ) : (
                        <Icon
                            onClick={formCancel}
                            width="2rem"
                            className="text-red-800 cursor-pointer"
                            icon="material-symbols:delete-outline"
                        />
                    )}
                </div>
            </div>

            <PlaylistTable
                allPlaylist={allPlaylist}
                playlistID={playlist.id}
                tracks={data.tracks}
                handleChange={handleSortChange}
                setState={setState}
                state={state}
            />
        </div>
    );
};
