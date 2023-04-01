import { useEffect } from "react";

export const AudioUpload = ({
    name,
    label,
    errors,
    handleChange,
    audioData,
}) => {
    const handlePreviewUrl = (audioData) => {
        console.log(
            "🚀 ~ file: AudioUpload.jsx:11 ~ handlePreviewUrl ~ audioData:",
            audioData
        );

        if (audioData?.type == "audio/mpeg") {
            const blob = URL.createObjectURL(audioData);
            return blob;
        }
    };

    useEffect(() => {
        handlePreviewUrl();
    }, [audioData]);
    return (
        <div>
            <label className="labelClass">{label}</label>

            <div className="grid grid-cols-2">
                <div className="flex justify-center items-center">
                    <audio src={handlePreviewUrl(audioData)} controls />
                </div>
                <div className="space-y-1 text-center mt-2 rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <label
                        htmlFor={name}
                        className={` relative cursor-pointer  focus-within:outline-none focus-within:ring-2`}
                    >
                        <svg
                            className="text-gray-400 mx-auto h-12 w-12"
                            stroke="currentColor"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M230 56a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0V62h-18a6 6 0 0 1 0-12h18V32a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6ZM86 116.68V204a34.06 34.06 0 1 1-12-25.89V64a6 6 0 0 1 4.54-5.82l56-14a6 6 0 1 1 2.92 11.64L86 68.68v35.64l72.54-18.14a6 6 0 1 1 2.92 11.64ZM74 204a22 22 0 1 0-22 22a22 22 0 0 0 22-22Zm140-84v52a34.06 34.06 0 1 1-12-25.89V120a6 6 0 0 1 12 0Zm-12 52a22 22 0 1 0-22 22a22 22 0 0 0 22-22Z" />
                        </svg>

                        <input
                            id={name}
                            name={name}
                            type="file"
                            accept="audio/mpeg3"
                            onChange={handleChange}
                            className="sr-only"
                        />
                        <span
                            className="bg-white rounded-md
                         font-medium px-2"
                        >
                            Upload audio
                        </span>

                        <p className="text-xs text-gray-500">
                            MP3, WAV up to 6MB
                        </p>
                    </label>
                </div>
            </div>
        </div>
    );
};
