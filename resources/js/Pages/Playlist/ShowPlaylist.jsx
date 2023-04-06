import { PlaylistHeader } from "./PlaylistHeader";

export const ShowPlaylist = ({ playlist }) => {
    console.log(playlist);

    return (
        <div>
            <PlaylistHeader
                imgURL={playlist.image}
                name={playlist.name}
                description={playlist.description}
                songsQuantity={playlist.tracks.length}
            />
        </div>
    );
};
