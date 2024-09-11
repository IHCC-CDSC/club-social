import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center sm:pt-0 bg-gradient-to-bl from-zinc-300 to-zinc-700">
            <div className="w-full sm:max-w-md overflow-hidden sm:rounded-xl">
                {children}
            </div>
        </div>
    );
}
