export const RecentlyPlayedCard = ({ title, imgURL }) => {
    return (
        <div className="flex">
            <img src={imgURL} alt="" />
            <h6>{title}</h6>
        </div>
    );
};
