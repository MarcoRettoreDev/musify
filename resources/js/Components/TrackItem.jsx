import { ListItem } from "@mui/material";

export const TrackItem = ({ i, title, artist, duration, img, release }) => {
    const formatDuration = (duration) => {
        const temp = duration.split("T")[1].split(".")[0];
        if (temp[0] === "0") return temp.slice(1, 5);
        return temp.slice(0, 5);
    };
    return (
        <ListItem className="!flex space-x-4 cursor-pointer font-medium !p-0">
            <div
                style={{ backgroundImage: `url(${img})` }}
                className="h-8 aspect-square lg:h-12 lg:w-14 bg-contain bg-center bg-no-repeat rounded"
            />
            <div className="w-full flex justify-between items-center">
                <p className="lg:w-[40%] break-normal w-1/2 ">{title}</p>
                <div className="flex w-[50%] justify-between items-center">
                    <p className="w-1/2 break-normal lg:w-[33%] text-center">
                        {artist}
                    </p>
                    <p className="hidden w-[33%] lg:block text-center">
                        {formatDuration(duration)}
                    </p>
                    <p className="hidden w-[33%] lg:block text-center">
                        {release.split("T")[0]}
                    </p>
                </div>
            </div>
        </ListItem>
    );
};
