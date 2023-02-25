import { Link } from "@inertiajs/react";

export const MainCard = ({ title, release }) => {
    return (
        <Link href={"#"}>
            <div className="img">
                <h3>{title}</h3>
                <h6>{release}</h6>
                <div></div>
            </div>
        </Link>
    );
};
