export const TrackCard = ({ track }) => {
    const { album_id, avatar, id, duration, release, title } = track;
    return (
        <div className="flex bg-blackSecondary rounded-lg cursor-pointer">
            <div
                className="h-24 w-1/3 bg-cover bg-center  my-auto rounded-l-md "
                style={{ backgroundImage: `url(${avatar})` }}
            ></div>
            <div className="w-2/3 px-2 py-2 flex flex-col justify-evenly ">
                <h6 className="text-xl ">{title}</h6>
                <div className="flex flex-col justify-evenly">
                    <p className="">
                        <strong>Duration:</strong> {duration.slice(11, 16)}
                    </p>
                    <p>
                        <strong>Release:</strong> {release.slice(0, 10)}
                    </p>
                </div>
            </div>
        </div>
    );
};
