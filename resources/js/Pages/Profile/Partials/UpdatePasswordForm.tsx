import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdatePasswordForm({ className }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();

  const { data, setData, errors, put, reset, processing, recentlySuccessful } =
    useForm({
      current_password: '',
      password: '',
      password_confirmation: '',
    });

  const updatePassword = e => {
    e.preventDefault();

    put(route('password.update'), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: () => {
        if (errors.password) {
          reset('password', 'password_confirmation');
          passwordInput.current.focus();
        }

        if (errors.current_password) {
          reset('current_password');
          currentPasswordInput.current.focus();
        }
      },
    });
  };

  return (
    <section className={className}>
      <header>
        <h2 className="text-xl font-medium text-whitePrimary">
          Update Password
        </h2>

        <p className="mt-1 text-sm text-greySecondary">
          Ensure your account is using a long, random password to stay secure.
        </p>
      </header>

      <form onSubmit={updatePassword} className="mt-6 space-y-6">
        <div>
          <InputLabel
            for="current_password"
            value="Current Password"
            className={'text-whitePrimary'}
          />

          <TextInput
            id="current_password"
            ref={currentPasswordInput}
            value={data.current_password}
            handleChange={e => setData('current_password', e.target.value)}
            type="password"
            className="mt-1 block text-blackPrimary md:w-3/4 w-full"
            autoComplete="current-password"
          />

          <InputError message={errors.current_password} className="mt-2" />
        </div>

        <div>
          <InputLabel
            for="password"
            value="New Password"
            className={'text-whitePrimary'}
          />

          <TextInput
            id="password"
            ref={passwordInput}
            value={data.password}
            handleChange={e => setData('password', e.target.value)}
            type="password"
            className="mt-1 block text-blackPrimary md:w-3/4 w-full"
            autoComplete="new-password"
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div>
          <InputLabel
            for="password_confirmation"
            value="Confirm Password"
            className={'text-whitePrimary'}
          />

          <TextInput
            id="password_confirmation"
            value={data.password_confirmation}
            handleChange={e => setData('password_confirmation', e.target.value)}
            type="password"
            className="mt-1 block text-blackPrimary md:w-3/4 w-full"
            autoComplete="new-password"
          />

          <InputError message={errors.password_confirmation} className="mt-2" />
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
}
