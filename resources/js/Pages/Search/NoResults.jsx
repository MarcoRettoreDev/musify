import { Link } from "@inertiajs/react";
import errorIMG from "../../../css/icons/404_Error_2.svg";

export const NoResults = ({ allArtists }) => {
    return (
        <div className="grid grid-cols-2">
            <div className="grid-cols-6 space-y-4">
                <h1>Sorry we didn't found any results</h1>
                <h4>Try with some of our content: </h4>
                <div className="flex flex-col space-y-2">
                    {allArtists.map((artist) => (
                        <Link
                            href={route("artist.show", artist.id)}
                            className="hover:text-greySecondary"
                        >
                            <div key={artist.id}>
                                <h3>{artist.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="grid-cols-6">
                <img src={errorIMG} alt="" className="w-3/4 mx-auto" />
            </div>
        </div>
    );
};
