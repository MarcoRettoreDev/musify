export const InputText = ({
    handleChange,
    name,
    label,
    inputClass,
    labelClass,
    placeholder,
    errors,
}) => {
    return (
        <>
            {errors && (
                <p className="text-xs text-red-500 absolute top-[37%] right-[33%] z-40 ">
                    {errors}
                </p>
            )}

            {label && (
                <label htmlFor={name} className={labelClass}>
                    {label}
                </label>
            )}
            <input
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
