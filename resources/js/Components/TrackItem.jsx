import { ListItem } from "@mui/material";

export const TrackItem = ({ i, title, artist, duration, img, release }) => {
    const formatDuration = (duration) => {
        const temp = duration.split("T")[1].split(".")[0];
        if (temp[0] === "0") return temp.slice(1, 5);
        return temp.slice(0, 5);
    };
    return (
        <ListItem className="!flex space-x-4 cursor-pointer font-medium">
            {i && <p>{i}</p>}
            <div
                style={{ backgroundImage: `url(${img})` }}
                className="h-12 w-14 bg-contain bg-center bg-no-repeat rounded"
            />
            <div className="w-full flex justify-between items-center">
                <p className="w-[40%] ">{title}</p>
                <div className="flex w-[50%] justify-between items-center">
                    <p className="w-[33%] text-center">{artist}</p>
                    <p className="w-[33%] text-center">
                        {formatDuration(duration)}
                    </p>
                    <p className="w-[33%] text-center">
                        {release.split("T")[0]}
                    </p>
                </div>
            </div>
        </ListItem>
    );
};
