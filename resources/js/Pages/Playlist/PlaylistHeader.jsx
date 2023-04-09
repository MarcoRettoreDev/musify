import { Icon } from "@iconify/react";
import PlaylistImage from "../../../css/icons/defaultPlaylist.svg";
import { useState } from "react";

export const PlaylistHeader = ({
    data,
    imgURL,
    songsQuantity,
    duration,
    handleChange,
}) => {
    const [editMode, setEditMode] = useState(false);

    return (
        <div className="flex space-x-4">
            <div
                style={{
                    backgroundImage: `url(${
                        imgURL.length === 0 ? PlaylistImage : imgURL
                    })`,
                }}
                className="w-48 h-40 bg-center bg-cover"
            />
            <div className="flex flex-col justify-evenly w-full">
                <div className="flex justify-between items-center">
                    {editMode ? (
                        <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            className="border-none text-whitePrimary text-4xl bg-transparent focus:outline-none"
                            value={data.name}
                        />
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
                    <input
                        onChange={handleChange}
                        type="text"
                        name="description"
                        className="border-none text-whitePrimary  bg-transparent focus:outline-none"
                        value={data.description}
                    />
                ) : (
                    <p>{data.description}</p>
                )}
                <p>{songsQuantity} songs</p>
                <p>{duration}</p>
            </div>
        </div>
    );
};
