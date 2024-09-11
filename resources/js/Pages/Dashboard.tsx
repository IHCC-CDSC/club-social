import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

import DefaultCard from "@/Components/DefaultCard";
import Announcements from "@/Components/Announcements";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Homepage</h2>}
        >
            <Head title="Home" />
            <div className="flex flex-col items-center w-full">
                <DefaultCard>
                    <Announcements />
                </DefaultCard>
            </div>
        </AuthenticatedLayout>
    );
}
