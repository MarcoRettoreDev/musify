export default function PrimaryButton({
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
                ` w-full text-center px-4 py-2 bg-slate-600 bg-opacity-40 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gradientButton hover:text-blackSecondary hover:font-bold transition ease-out duration-50 ${
                    processing && "opacity-25"
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
