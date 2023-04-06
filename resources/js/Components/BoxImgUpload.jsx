import { useEffect } from "react";

export const BoxImgUpload = (props) => {
    const { name, handleChange, imageData, errors } = props;
    const handlePreviewUrl = (imageData) => {
        if (imageData?.type == "image/jpeg" || imageData?.type == "image/png") {
            const blob = URL.createObjectURL(imageData);
            return blob;
        }
    };

    useEffect(() => {
        handlePreviewUrl();
    }, [imageData]);

    return (
        <div>
            <div
                className={`text-center h-full bg-blackPrimary  rounded-lg flex items-center justify-center ${
                    errors && !imageData
                        ? "border border-red-600"
                        : "border-none"
                }`}
            >
                <label
                    htmlFor={name}
                    className={`relative cursor-pointer focus-within:outline-none focus-within:ring-2`}
                >
                    {!imageData && (
                        <svg
                            className={`mx-auto h-14 w-14 ${
                                errors && !imageData
                                    ? "text-red-600"
                                    : "text-gray-400"
                            }`}
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}

                    {errors && !imageData && (
                        <p className="text-xs text-red-600">{errors}</p>
                    )}

                    <input
                        id={name}
                        name={name}
                        type="file"
                        onChange={handleChange}
                        className="sr-only"
                        accept="image/png, image/jpeg"
                    />

                    <img
                        style={{ display: imageData?.type ? "block" : "none" }}
                        src={handlePreviewUrl(imageData)}
                        alt="preview"
                        className="h-full w-full object-contain"
                    />
                </label>
            </div>
        </div>
    );
};
