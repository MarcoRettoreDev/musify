import { useForm } from "@inertiajs/react";
import AcceptButton from "./AcceptButton";
import { BoxImgUpload } from "./BoxImgUpload";
import { CloseIcon } from "./CloseIcon";
import { InputText } from "./InputText";
import { TextArea } from "./TextArea";
import { BackDropModal } from "./BackDropModal";

const PlaylistModal = ({ playlistModal, setPlaylistModal }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
        image: "",
    });

    const handleChangeImage = (e) => {
        setData(e.target.name, e.target.files[0]);
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        post(route("playlist.store", data));
    };

    return (
        <BackDropModal>
            <div className="playlistModal">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="subtitle font-bold">Edit details</h3>
                        <CloseIcon
                            className="cursor-pointer hover:opacity-70"
                            handleClick={() => setPlaylistModal(!playlistModal)}
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <BoxImgUpload
                            name="image"
                            imageData={data.image}
                            handleChange={handleChangeImage}
                            errors={errors?.image}
                        />
                        <div className="col-span-2 space-y-3">
                            <InputText
                                name="name"
                                value={data.name}
                                handleChange={handleChange}
                                inputClass="w-full rounded-lg border-none bg-greyDark text-whitePrimary relative"
                                placeholder="Playlist name"
                                errors={errors?.name}
                            />
                            <TextArea
                                handleChange={handleChange}
                                name="description"
                                placeholder="Optional description"
                                inputClass="w-full h-28 rounded-lg border-none bg-greyDark text-whitePrimary"
                            />
                        </div>
                    </div>
                    <div className="flex w-full justify-end">
                        <AcceptButton
                            onClick={() => {
                                handleSubmit();
                                // acá podríamos cerrar el modal
                            }}
                            children="Done"
                            type="submit"
                            processing={processing}
                        />
                    </div>
                </form>
            </div>
        </BackDropModal>
    );
};

export default PlaylistModal;
