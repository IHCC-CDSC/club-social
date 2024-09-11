import React, { useState } from 'react';
import { FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { IconEyeOff, IconEye } from '@tabler/icons-react';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Register your account
            </h2>

            <form onSubmit={submit} className="sm:mx-auto sm:w-full sm:max-w-md p-5 rounded-xl border-2 border-ihccRed bg-ihccWhite">
                <div>
                    <InputLabel htmlFor="name" value="Name" className="block text-sm font-medium leading-6 text-gray-900" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-2 block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-ihccYellow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ihccRed sm:text-sm sm:leading-6"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" className="block text-sm font-medium leading-6 text-gray-900" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-2 block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-ihccYellow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ihccRed sm:text-sm sm:leading-6"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4 relative">
                    <InputLabel htmlFor="password" value="Password" className="block text-sm font-medium leading-6 text-gray-900" />

                    <TextInput
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={data.password}
                        className="mt-2 block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-ihccYellow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ihccRed sm:text-sm sm:leading-6"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <IconEyeOff size={28} className="mt-8" />
                        ) : (
                            <IconEye size={28} className="mt-8" />
                        )}
                    </button>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 relative">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="block text-sm font-medium leading-6 text-gray-900" />

                    <TextInput
                        id="password_confirmation"
                        type={showPassword ? 'text' : 'password'}
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-2 block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-ihccYellow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ihccRed sm:text-sm sm:leading-6"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <IconEyeOff size={28} className="mt-8" />
                        ) : (
                            <IconEye size={28} className="mt-8" />
                        )}
                    </button>

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ihccRedDark"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4 flex w-full justify-center rounded-lg bg-ihccRed px-3 py-1.5 text-sm font-semibold leading-6 text-ihccWhite shadow-sm hover:bg-ihccRedDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ihccRedDark" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
