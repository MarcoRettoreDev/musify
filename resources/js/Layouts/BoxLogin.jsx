import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React from "react";

export const BoxLogin = ({ user }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: user?.name,
        email: user?.email,
        password: user?.viewPassword,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    const handleOnChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        setData({ ...data, [name]: val });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full bg-slate-100 px-6 py-6 rounded md:w-96 sm:w-full"
        >
            <div>
                <InputLabel forInput="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    isFocused={true}
                    handleChange={handleOnChange}
                />

                <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel forInput="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="current-password"
                    handleChange={handleOnChange}
                />

                <InputError message={errors.password} className="mt-2" />
            </div>

            {/* <div className="block mt-4">
                <label className="flex items-center">
                    <Checkbox
                        name="remember"
                        value={data.remember}
                        handleChange={handleOnChange}
                    />
                    <span className="ml-2 text-sm text-gray-600">
                        Remember me
                    </span>
                </label>
            </div> */}

            <div className="flex items-center justify-between mt-6">
                <PrimaryButton
                    className="ml-4"
                    processing={processing}
                    onClick={() => {
                        setData({
                            name: "",
                            email: "",
                            password: "",
                        });
                    }}
                    type="button"
                >
                    Reset
                </PrimaryButton>
                <PrimaryButton className="ml-4" processing={processing}>
                    Log in
                </PrimaryButton>
            </div>
        </form>
    );
};
