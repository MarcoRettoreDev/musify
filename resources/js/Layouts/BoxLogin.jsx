import { EventualText } from "@/Components/EventualText";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React from "react";

export const BoxLogin = ({ user, handleGenerateValues }) => {
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
        <div className="w-full max-w-md mx-auto space-y-4">
            <form
                onSubmit={handleSubmit}
                className="w-full bg-slate-600 bg-opacity-40 px-6 py-6 rounded "
            >
                <div>
                    {data.name && (
                        <EventualText
                            text="This account will be deleted after 24 hs"
                            durationInMs={7000}
                        />
                    )}
                </div>
                <div>
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full border-none text-blackPrimary bg-greyLight"
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
                        className="mt-1 block w-full border-none text-blackPrimary bg-greyLight"
                        autoComplete="current-password"
                        handleChange={handleOnChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>
            </form>
            <div className="flex items-center justify-around">
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
                <PrimaryButton className="ml-4" onClick={handleGenerateValues}>
                    Generate
                </PrimaryButton>
            </div>

            <button
                onClick={handleSubmit}
                disabled={processing}
                type="submit"
                className="flex justify-center mx-auto w-3/4 text-center px-4 py-2 rounded-md cursor-pointer hover:opacity-90 transition ease-in-out duration-250 text-blackSecondary font-bold bg-slate-600 bg-opacity-40 bg-gradientButton"
            >
                Login
            </button>
        </div>
    );
};
