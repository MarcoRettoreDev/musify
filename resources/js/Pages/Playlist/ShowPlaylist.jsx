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
        if (state.currentPlaylist !== playlist.id) {
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
                data={data}
                handleChange={handleChange}
                imgURL={playlist.image}
                name={playlist.name}
                description={playlist.description}
                songsQuantity={playlist.tracks.length}
            />

            <div className="flex items-center justify-between space-x-6 my-5">
                <Icon
                    onClick={playPlaylist}
                    className="text-greenPrimary hover:text-greenSecondary cursor-pointer"
                    width="4rem"
                    icon="material-symbols:play-circle-rounded"
                />

                <div className="flex space-x-4">
                    <AcceptButton
                        onClick={formSubmit}
                        className=""
                        processing={processing}
                        children="save"
                    />
                    <Icon
                        onClick={formCancel}
                        width="2rem"
                        className="text-red-800 cursor-pointer"
                        icon="material-symbols:delete-outline"
                    />
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
