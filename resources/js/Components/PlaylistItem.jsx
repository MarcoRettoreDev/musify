import { Link } from "@inertiajs/react";
import defaultPlaylistImage from "../../css/icons/defaultPlaylist.svg";

export const PlaylistItem = ({ imgURL, name, id, setState }) => {
    return (
        <Link
            href={route("playlist.show", id)}
            onClick={() =>
                setState((state) => ({
                    ...state,
                    queueOpen: false,
                }))
            }
        >
            <div className="flex items-center space-x-2 ">
                <div
                    style={{
                        backgroundImage: `url(${
                            imgURL ? imgURL : defaultPlaylistImage
                        })`,
                    }}
                    className={`h-10 w-10 bg-center bg-cover bg-no-repeat bg-blackSecondary rounded-md p-2`}
                />
                <div className="text-slate-200 font-semibold hover:!text-green-900">
                    {name}
                </div>
            </div>
        </Link>
    );
};
