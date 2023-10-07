import { ErrorText } from "@/Components/ErrorText";
import { ImageUpload } from "@/Components/ImageUpload";

export const ArtistForm = ({
    handleChange,
    handleFileUpload,
    imageData,
    errors,
}) => {
    return (
        <div className="cardTemplate">
            <div className="lg:col-span-12">
                <p className="altText">
                    Here you can fill information about the artist of the track
                    if it isn't allready in the list
                </p>
            </div>
            <div className="lg:mt-5 lg:col-span-12 ">
                <div className="space-y-6 lg:px-4 pt-5 lg:py-5 sm:p-6 rounded-md">
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 space-y-4">
                        <div className="">
                            <label htmlFor="artistName" className="labelClass ">
                                Artist name
                            </label>
                            <input
                                type="text"
                                name="artistName"
                                id="artistName"
                                className="inputClass"
                                onChange={handleChange}
                            />
                            <ErrorText text={errors?.artistName} />
                        </div>

                        <div className="">
                            <label
                                htmlFor="artistBirthDate"
                                className="labelClass "
                            >
                                Artist birthdate
                            </label>
                            <input
                                type="date"
                                name="artistBirthDate"
                                id="artistBirthDate"
                                className="inputClass"
                                onChange={handleChange}
                            />
                            <ErrorText text={errors?.artistBirthDate} />
                        </div>

                        <div className="">
                            <label
                                htmlFor="artistNacionality"
                                className="labelClass "
                            >
                                Nacionality
                            </label>
                            <select
                                id="artistNacionality"
                                name="artistNacionality"
                                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-blackPrimary shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={handleChange}
                            >
                                <option value={1}>United States</option>
                                <option value={1}>Canada</option>
                                <option value={1}>Mexico</option>
                            </select>
                            <ErrorText text={errors?.artistNacionality} />
                        </div>
                        <div className="lg:col-span-3">
                            <label htmlFor="artistBio" className="labelClass ">
                                Biography
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="artistBio"
                                    name="artistBio"
                                    rows="3"
                                    cols="12"
                                    className="mt-1 block w-full rounded-md text-gray-900 shadow-xl border !border-greyLight"
                                    onChange={handleChange}
                                />
                            </div>
                            <p className="altText">
                                Brief description of artist's bio
                            </p>
                            <ErrorText text={errors?.artistBio} />
                        </div>
                    </div>
                    <ImageUpload
                        errors={errors}
                        bgWhite={true}
                        imageData={imageData}
                        name="artistImage"
                        handleChange={handleFileUpload}
                    />
                </div>
            </div>
        </div>
    );
};
