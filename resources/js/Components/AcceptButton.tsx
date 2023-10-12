export default function AcceptButton({
    type = "submit",
    className = "",
    processing,
    children,
    onClick,
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `inline-flex items-center px-4 py-2 bg-greenPrimary border border-transparent rounded-md font-bold text-xs text-blackPrimary  uppercase tracking-widest hover:bg-greenSecondary focus:outline-none focus:ring-2 focus:ring-greenSecondary focus:ring-offset-2 transition ease-in-out duration-150 ${
                    processing && "opacity-25"
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
