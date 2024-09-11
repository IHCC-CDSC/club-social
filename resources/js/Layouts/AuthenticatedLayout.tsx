import { useState, PropsWithChildren, ReactNode } from 'react';
import { User } from '@/types';

import Navbar from "@/Components/Navbar";
export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-bl bg-fixed from-zinc-300 to-zinc-700">
            <Navbar />
            <main>{children}</main>
        </div>
    );
}
