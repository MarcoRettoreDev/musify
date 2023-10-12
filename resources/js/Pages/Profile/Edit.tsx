import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

export default function EditProfile({ user }) {
    return (
        <div className="pt-6">
            <div className="max-w-7xl mx-auto space-y-6">
                <div className=" bg-blackPrimary">
                    <UpdateProfileInformationForm user={user} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className=" bg-blackPrimary">
                        <UpdatePasswordForm />
                    </div>

                    <div className=" bg-blackPrimary">
                        <DeleteUserForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
