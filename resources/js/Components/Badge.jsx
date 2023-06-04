export const Badge = ({ text }) => {
    return (
        <span
            className={`px-2 rounded-md bg-white font-medium text-greySecondary`}
        >
            {text}
        </span>
    );
};
