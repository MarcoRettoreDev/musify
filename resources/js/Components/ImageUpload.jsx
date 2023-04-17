import { useEffect } from "react";
import { ErrorText } from "./ErrorText";

export const ImageUpload = ({
    bgWhite,
    name,
    handleChange,
    label = "Cover photo",
    imageData,
    errors,
    imageClass = "h-full max-h-44 w-full object-contain ",
}) => {
    const handlePreviewUrl = (imageData) => {
        if (imageData?.type == "image/jpeg" || imageData?.type == "image/png") {
            const blob = URL.createObjectURL(imageData);
            return blob;
        } else {
            return imageData;
        }
    };

    useEffect(() => {
        handlePreviewUrl();
    }, [imageData]);

    return (
        <div className="grid grid-cols-2">
            <div className="col-6">
                <label
                    className={`block text-sm font-medium leading-6 ${
                        bgWhite ? "text-blackPrimary" : "text-whitePrimary"
                    }`}
                >
                    {label}
                </label>
                <ErrorText text={errors?.[name]} />
                <div
                    className={`mt-2 flex justify-center rounded-md border-2 border-dashed ${
                        errors?.[name] ? "border-red-700" : "border-gray-300"
                    } px-6 pt-5 pb-6`}
                >
                    <div className="space-y-1 text-center">
                        <label
                            htmlFor={name}
                            className={`relative cursor-pointer focus-within:outline-none focus-within:ring-2`}
                        >
                            <svg
                                className="mx-auto h-12 w-12 text-gray-400"
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
                            <div
                                className={`flex text-sm ${
                                    bgWhite
                                        ? "text-whitePrimary"
                                        : "text-greySecondary"
                                } `}
                            >
                                <span
                                    className={`px-2 rounded-md ${
                                        bgWhite ? "bg-black" : "bg-white"
                                    } font-medium`}
                                >
                                    Upload a file
                                </span>
                                <input
                                    id={name}
                                    name={name}
                                    type="file"
                                    onChange={handleChange}
                                    className="sr-only"
                                    accept="image/png, image/jpeg"
                                />
                                <p className="pl-1 text-greySecondary">
                                    or drag and drop
                                </p>
                            </div>
                            <p className="text-xs text-gray-500">
                                PNG, JPG up to 10MB
                            </p>
                        </label>
                    </div>
                </div>
            </div>
            <div className="col-6 ">
                <img
                    style={{ display: imageData ? "block" : "none" }}
                    src={handlePreviewUrl(imageData)}
                    alt="preview"
                    className={imageClass}
                />
            </div>
        </div>
    );
};
