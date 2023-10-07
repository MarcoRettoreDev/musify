import { AudioUpload } from "@/Components/AudioUpload";
import { ErrorText } from "@/Components/ErrorText";
import { ImageUpload } from "@/Components/ImageUpload";

export const TrackForm = ({
    handleChange,
    handleFileUpload,
    imageData,
    audioData,
    errors,
}) => {
    return (
        <div className="mt-5 md:col-span-2 md:mt-0 cardTemplate">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="">
                            <label htmlFor="trackTitle" className="labelClass">
                                Track name
                            </label>
                            <div className="flex rounded-md shadow-sm">
                                <input
                                    type="text"
                                    name="trackTitle"
                                    id="trackTitle"
                                    className="inputClass"
                                    onChange={handleChange}
                                />
                            </div>
                            <ErrorText text={errors?.trackTitle} />
                        </div>
                        <div className="">
                            <label
                                htmlFor="trackRelease"
                                className="labelClass"
                            >
                                Release date
                            </label>
                            <input
                                type="date"
                                name="trackRelease"
                                id="trackRelease"
                                className="inputClass"
                                onChange={handleChange}
                            />
                            <ErrorText text={errors?.trackRelease} />
                        </div>
                    </div>
                    <ImageUpload
                        errors={errors}
                        imageData={imageData}
                        name="trackImage"
                        handleChange={handleFileUpload}
                    />

                    <AudioUpload
                        errors={errors}
                        name="trackAudio"
                        handleChange={handleFileUpload}
                        label="Upload track"
                        audioData={audioData}
                    />
                </div>
            </div>
        </div>
    );
};
