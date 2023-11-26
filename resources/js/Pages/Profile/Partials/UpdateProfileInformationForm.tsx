import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { ImageUpload } from '@/Components/ImageUpload';
import { FC } from 'react';

const UpdateProfileInformation: FC = ({ user }) => {
  const { data, setData, post, errors, processing, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
      image: user.image,
    });

  const handleChangeImage = e => {
    setData('image', e.target.files[0]);
  };

  const submit = e => {
    e.preventDefault();
    post(route('profile.update', data));
  };

  return (
    <section className="text-whitePrimary">
      <header>
        <h2 className="text-lg font-medium ">Profile Information</h2>

        <p className="mt-1 text-sm text-greySecondary">
          Update your account's profile information and email address.
        </p>
      </header>

      <form onSubmit={submit} className="mt-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 space-y-6">
          <div className="space-y-6">
            <div>
              <InputLabel
                for="name"
                value="Name"
                className="text-whitePrimary "
              />

              <TextInput
                id="name"
                className="mt-1 block text-blackPrimary md:w-3/4 w-full"
                value={data.name}
                handleChange={e => setData('name', e.target.value)}
                required
                isFocused
                autoComplete="name"
              />

              <InputError className="mt-2" message={errors.name} />
            </div>
            <div>
              <InputLabel
                for="email"
                value="Email"
                className="text-whitePrimary"
              />

              <TextInput
                id="email"
                type="email"
                className="mt-1 block text-blackPrimary md:w-3/4 w-full"
                value={data.email}
                handleChange={e => setData('email', e.target.value)}
                required
                autoComplete="email"
              />

              <InputError className="mt-2" message={errors.email} />
            </div>
          </div>
          <ImageUpload
            name={'image'}
            label="Profile picture"
            handleChange={handleChangeImage}
            imageData={data.image}
          />
        </div>

        <div className="flex items-center gap-4">
          <PrimaryButton
            processing={processing}
            className="bg-greenPrimary font-bold hover:bg-greenSecondary ml-auto"
          >
            Save
          </PrimaryButton>

          <Transition
            show={recentlySuccessful}
            enterFrom="opacity-0"
            leaveTo="opacity-0"
            className="transition ease-in-out"
          >
            <p className="text-sm text-greenSecondary font-bold">Saved.</p>
          </Transition>
        </div>
      </form>
    </section>
  );
};

export default UpdateProfileInformation;
