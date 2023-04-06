export const PlaylistHeader = ({
    imgURL,
    name,
    description,
    songsQuantity,
    duration,
}) => {
    return (
        <div className="flex space-x-4">
            <img src={imgURL} alt="image" className="w-40 h-40 shadow-2xl" />
            <div className="flex flex-col justify-evenly">
                <h1 className="text-4xl text-whitePrimary">{name}</h1>
                <p>{description}</p>
                <p>{songsQuantity} songs</p>
                <p>{duration}</p>
            </div>
        </div>
    );
};
