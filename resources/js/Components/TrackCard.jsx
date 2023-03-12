export const TrackCard = ({ track }) => {
    const { album_id, avatar, id, duration, release, title } = track;
    return (
        <div className="flex flex-1">
            <div
                className="h-20 w-1/5 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${avatar})` }}
            ></div>
            <div className="ml-4">
                <h6 className="text-xl">{title}</h6>
                <p>
                    <strong>Duration:</strong> {duration.slice(11, 16)}
                </p>
                <p>
                    <strong>Release:</strong> {release.slice(0, 10)}
                </p>
            </div>
        </div>
    );
};
