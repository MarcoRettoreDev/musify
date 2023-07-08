export default function Guest(props) {
    const { children } = props;
    return (
        <div
            className={`min-h-screen flex flex-col sm:justify-center items-center`}
        >
            {children}
        </div>
    );
}
