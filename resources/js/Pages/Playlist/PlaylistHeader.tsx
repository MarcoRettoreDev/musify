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
    editMode,
    setEditMode,
}) => {
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
                                className="border-none text-whitePrimary bg-transparent focus:outline-none !bg-blackSecondary rounded-md"
                                value={data.name}
                            />
                        </div>
                    ) : (
                        <h2 className="text-whitePrimary">{data.name}</h2>
                    )}
                    {!editMode && (
                        <Icon
                            onClick={() => setEditMode(!editMode)}
                            className="cursor-pointer hover:text-greenPrimary"
                            width="2rem"
                            icon="ic:baseline-mode-edit-outline"
                        />
                    )}
                </div>

                {editMode ? (
                    <div className="flex flex-col lg:items-center lg:space-x-4">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            onChange={handleChange}
                            type="text"
                            name="description"
                            className="w-full lg:w-3/5 border-none text-whitePrimary bg-transparent focus:outline-none !bg-blackSecondary rounded-md "
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
