import { useEffect, useMemo } from 'react';
import { ErrorText } from './ErrorText';
import { Badge } from './Badge';

export const ImageUpload = ({
  name,
  handleChange,
  label = 'Cover photo',
  imageData,
  errors,
}) => {
  const handlePreviewUrl = imageData => {
    if (imageData?.type == 'image/jpeg' || imageData?.type == 'image/png') {
      const blob = URL.createObjectURL(imageData);
      return blob;
    } else {
      return imageData;
    }
  };

  const imageURL = useMemo(() => handlePreviewUrl(imageData), [imageData]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
      <div className="col-6">
        <label className={`labelClass `}>{label}</label>
        <ErrorText text={errors?.[name]} />
        <div
          className={`mt-2 flex justify-center rounded-md border-2 border-dashed  ${
            errors?.[name] ? 'border-red-700' : 'border-gray-300'
          } px-6 pt-5 pb-6`}
        >
          <div className="space-y-1 text-center ">
            <label
              htmlFor={name}
              className={`labelClass  hover:cursor-pointer`}
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
                className={`flex flex-col gap-2 lg:gap-0 lg:flex-row items-center text-sm text-greySecondary `}
              >
                <Badge text="Upload a file" />
                <input
                  id={name}
                  name={name}
                  type="file"
                  onChange={handleChange}
                  className="sr-only"
                  accept="image/png, image/jpeg"
                />
                <p className="pl-1 text-greySecondary">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </label>
          </div>
        </div>
      </div>
      <div className="col-6 md:flex items-center">
        <div
          className="w-full aspect-square max-w-[10rem] bg-center bg-cover bg-no-repeat mx-auto mt-auto"
          style={{
            backgroundImage: `url(${imageURL})`,
            borderRadius: '50%',
          }}
        />
      </div>
    </div>
  );
};
