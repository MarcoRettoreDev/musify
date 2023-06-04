import { ErrorText } from "@/Components/ErrorText";
import { ImageUpload } from "@/Components/ImageUpload";

export const AlbumForm = ({
    handleChange,
    handleFileUpload,
    imageData,
    errors,
}) => {
    return (
        <div className="space-y-6 cardTemplate">
            <div className="md:col-span-12">
                <div className="px-4 sm:px-0">
                    <p className="altText">
                        If the album isn't in the list, you can add it here.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="">
                    <label htmlFor="albumName" className="labelClass">
                        Album name
                    </label>
                    <div className="flex rounded-md shadow-sm">
                        <input
                            type="text"
                            name="albumName"
                            id="albumName"
                            className="inputClass"
                            onChange={handleChange}
                        />
                    </div>
                    <ErrorText text={errors?.albumName} />
                </div>
                <div className="">
                    <label htmlFor="albumRelease" className="labelClass">
                        Album date
                    </label>
                    <input
                        type="date"
                        name="albumRelease"
                        id="albumRelease"
                        className="inputClass"
                        onChange={handleChange}
                    />
                    <ErrorText text={errors?.albumRelease} />
                </div>
            </div>
            <ImageUpload
                errors={errors}
                name="albumImage"
                imageData={imageData}
                handleChange={handleFileUpload}
            />
        </div>
    );
};
