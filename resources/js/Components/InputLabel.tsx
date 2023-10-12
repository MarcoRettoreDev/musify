export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label
            htmlFor={forInput}
            className={`block text-sm text-white font-bold ` + className}
        >
            {value ? value : children}
        </label>
    );
}
