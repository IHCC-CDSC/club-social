import { FormEventHandler } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Log In to your account
            </h2>

            {status && <div className="mb-4 font-medium text-sm text-ihccYellow">{status}</div>}

            <form onSubmit={submit} className="sm:mx-auto sm:w-full sm:max-w-md p-5 rounded-xl border-2 border-ihccRed bg-ihccWhite">
                <div>
                    <InputLabel htmlFor="email" value="Email" className="block text-sm font-medium leading-6 text-gray-900" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-2 block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-ihccYellow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ihccRed sm:text-sm sm:leading-6"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" className="block text-sm font-medium leading-6 text-gray-900" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-2 block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-ihccYellow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ihccRed sm:text-sm sm:leading-6"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ihccRedDark"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4 flex w-full justify-center rounded-lg bg-ihccRed px-3 py-1.5 text-sm font-semibold leading-6 text-ihccWhite shadow-sm hover:bg-ihccRedDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ihccYellow" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
