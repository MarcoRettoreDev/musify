import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function EditProfile({ user }) {
  return (
    <div className="pt-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-blackPrimary p-1 rounded-lg lg:p-2">
          <UpdateProfileInformationForm user={user} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" bg-blackPrimary p-1 rounded-lg lg:p-2">
            <UpdatePasswordForm />
          </div>

          <div className=" bg-blackPrimary p-1 rounded-lg lg:p-2 h-fit">
            <DeleteUserForm />
          </div>
        </div>
      </div>
    </div>
  );
}
