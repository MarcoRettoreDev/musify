import { Icon } from "@iconify/react";
import PlaylistImage from "../../../css/icons/defaultPlaylist.svg";
import { useState } from "react";
import { BoxImgUpload } from "@/Components/BoxImgUpload";

export const PlaylistHeader = ({
    data,
    songsQuantity,
    duration,
    handleChange,
    handleChangeImage,
    errors,
}) => {
    const [editMode, setEditMode] = useState(false);
    return (
        <div className="flex space-x-4">
            <BoxImgUpload
                name="image"
                imageData={data.image}
                handleChange={handleChangeImage}
                errors={errors?.image}
            />
            <div className="flex flex-col justify-evenly w-full">
                <div className="flex justify-between items-center">
                    {editMode ? (
                        <div className="flex items-center space-x-4">
                            <label htmlFor="name">Name:</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="name"
                                className="border-none text-whitePrimary text-4xl bg-transparent focus:outline-none !bg-blackSecondary rounded-md"
                                value={data.name}
                            />
                        </div>
                    ) : (
                        <h1 className="text-4xl text-whitePrimary">
                            {data.name}
                        </h1>
                    )}
                    {editMode ? (
                        <Icon
                            onClick={() => setEditMode(!editMode)}
                            width="2rem"
                            className="cursor-pointer text-greenPrimary hover:text-greenSecondary"
                            icon="fluent:checkbox-checked-20-filled"
                        />
                    ) : (
                        <Icon
                            onClick={() => setEditMode(!editMode)}
                            className="cursor-pointer hover:text-greenPrimary"
                            width="2rem"
                            icon="ic:baseline-mode-edit-outline"
                        />
                    )}
                </div>

                {editMode ? (
                    <div className="flex items-center space-x-4">
                        <label htmlFor="description">Description:</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="description"
                            className="border-none text-whitePrimary bg-transparent focus:outline-none !bg-blackSecondary rounded-md w-3/5"
                            value={data.description}
                        />
                    </div>
                ) : (
                    <p>{data.description}</p>
                )}
                <p>{songsQuantity} songs</p>
                <p>{duration}</p>
            </div>
        </div>
    );
};
