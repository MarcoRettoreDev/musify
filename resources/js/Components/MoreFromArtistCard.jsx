export const MoreFromArtistCard = ({ title, imgURL }) => {
    console.log(
        "🚀 ~ file: MoreFromArtistCard.jsx:2 ~ MoreFromArtistCard ~ imgURL:",
        imgURL
    );
    return (
        <div className="flex">
            <img src={imgURL} alt="" />
            <h6>{title}</h6>
        </div>
    );
};
