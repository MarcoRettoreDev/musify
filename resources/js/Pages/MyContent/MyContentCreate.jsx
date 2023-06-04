import AcceptButton from "@/Components/AcceptButton";
import { ErrorText } from "@/Components/ErrorText";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
import { AlbumForm } from "./AlbumForm";
import { ArtistForm } from "./ArtistForm";
import { TrackForm } from "./TrackForm";

export const MyContentCreate = ({ allArtists, allAlbums, allGenres }) => {
    const { data, setData, post, processing, errors } = useForm({
        trackTitle: undefined,
        trackRelease: undefined,
        trackImage: [],
        trackAudio: [],
        artistName: undefined,
        artistBio: undefined,
        artistImage: [],
        artistBirthDate: undefined,
        artistNacionality: undefined,
        artistId: null,
        albumName: undefined,
        albumRelease: undefined,
        albumImage: [],
        albumId: null,
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleFileUpload = (e) => {
        setData({ ...data, [e.target.name]: e.target.files[0] });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        post(route("mycontent.store", data));
    };

    const renderArtistSection = () => {
        if (data.artistId !== undefined || typeof data.artistId === "string") {
            return (
                <div className="col-span-12 mt-4 cardTemplate">
                    <label
                        htmlFor="artistId"
                        className="labelClass text-whitePrimary"
                    >
                        All artist
                    </label>
                    <select
                        id="artistId"
                        name="artistId"
                        className="mt-2 block w-auto rounded-md border-0 bg-white py-1.5 text-blackPrimary shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) =>
                            setData({ ...data, artistId: e.target.value })
                        }
                        defaultValue={undefined}
                    >
                        <option value={undefined}>Select an artist</option>
                        {allArtists.map((artist) => (
                            <option key={artist.id} value={Number(artist.id)}>
                                {artist.name}
                            </option>
                        ))}
                    </select>
                    <ErrorText text={errors?.artistId} />

                    <div
                        className="buttonBasic "
                        onClick={() =>
                            setData({ ...data, artistId: undefined })
                        }
                    >
                        Add new artist
                    </div>
                </div>
            );
        } else
            return (
                <ArtistForm
                    errors={errors}
                    imageData={data.artistImage}
                    handleChange={handleChange}
                    handleFileUpload={handleFileUpload}
                />
            );
    };

    const renderAlbumSection = () => {
        if (data.albumId !== undefined) {
            return (
                <div className="col-span-12 mt-4 cardTemplate">
                    <label
                        htmlFor="albumId"
                        className="labelClass text-whitePrimary"
                    >
                        All albums
                    </label>
                    <select
                        id="albumId"
                        name="albumId"
                        className="mt-2 block w-auto rounded-md border-0 bg-white py-1.5 text-blackPrimary shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) =>
                            setData({ ...data, albumId: e.target.value })
                        }
                        selected="selected"
                        defaultValue={undefined}
                    >
                        <option value={undefined}>Select an album</option>
                        {allAlbums.map((album) => (
                            <option key={album.id} value={album.id}>
                                {album.title}
                            </option>
                        ))}
                    </select>
                    <ErrorText text={errors?.albumId} />

                    <div
                        className="buttonBasic hover:text-greenSecondary hover:border-greenSecondary"
                        onClick={() =>
                            setData({
                                ...data,
                                albumId: undefined,
                            })
                        }
                    >
                        Add new album
                    </div>
                </div>
            );
        } else
            return (
                <AlbumForm
                    errors={errors}
                    imageData={data.albumImage}
                    handleChange={handleChange}
                    handleFileUpload={handleFileUpload}
                />
            );
    };

    useEffect(() => {
        renderAlbumSection();
        renderArtistSection();
    }, [data.artistId, data.albumId]);

    return (
        <form className="mb-5">
            <h1 className="text-whitePrimary text-3xl">Upload new content</h1>
            <div className="mt-10">
                <TrackForm
                    imageData={data.trackImage}
                    handleChange={handleChange}
                    handleFileUpload={handleFileUpload}
                    audioData={data.trackAudio}
                    errors={errors}
                />
            </div>
            <div className="mt-10">
                <h3 className="subtitle mb-4">Artist</h3>
                {renderArtistSection()}
            </div>

            <div className="mt-10">
                <h3 className="subtitle mb-4">Album</h3>
                {renderAlbumSection()}
            </div>
            <div className="flex">
                <AcceptButton
                    onClick={formSubmit}
                    className="mt-10 ml-auto"
                    processing={processing}
                    children="Upload"
                />
            </div>
        </form>
    );
};
