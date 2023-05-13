import imgBackground from "../../css/img/bg-guestLayout.jpg";

export default function Guest({ appName, children }) {
    return (
        <div
            style={{
                backgroundImage: `url(${imgBackground})`,
            }}
            className="min-h-screen flex flex-col sm:justify-center items-center bg-center bg-cover bg-no-repeat "
        >
            {children}
        </div>
    );
}
