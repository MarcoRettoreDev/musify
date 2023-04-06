export const TextArea = ({
    handleChange,
    name,
    label,
    inputClass,
    labelClass,
    placeholder,
}) => {
    return (
        <>
            {label && (
                <label htmlFor={name} className={labelClass}>
                    {label}
                </label>
            )}
            <textarea
                placeholder={placeholder}
                type="text"
                name={name}
                id={name}
                className={inputClass}
                onChange={handleChange}
            />
        </>
    );
};
