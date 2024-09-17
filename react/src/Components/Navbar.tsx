import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'react-feather';

export default function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const { pathname } = location;

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <>
            <div className="z-20 w-full sticky top-0 p-2 pb-1 backdrop-blur-xl">
                <nav className="flex items-center w-full bg-ihccBlack rounded-xl p-2 z-20">
                    <div className="text-ihccWhite h-10 text-3xl pl-2 flex content-center items-center">
                        IHCC CSDC
                    </div>
                    <div
                        className="text-ihccYellow rounded-full p-2 bg-ihccWhite ml-auto border-ihccRed border-2 cursor-pointer"
                        onClick={toggleSidebar}
                    >
                        <Menu />
                    </div>
                </nav>
            </div>

            {/* Sidebar */}
            <div
                className={`z-20 fixed rounded-[22px] top-4 right-4 min-h-16 bg-ihccWhite text-ihccRed border-2 border-ihccYellow transition-opacity duration-300 ease-in-out shadow-2xl ${
                    isSidebarOpen ? 'opacity-100' : 'opacity-0'
                } ${isSidebarOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
                <div className="relative p-2">
                    <button
                        className="absolute top-0 right-0 text-ihccRed p-2"
                        onClick={closeSidebar}
                    >
                        <X />
                    </button>
                    <div className="flex flex-col text-2xl p-2 mt-8 text-left h-full">
                        <Link
                            className={`py-1 hover:underline ${
                                pathname === '/home' ? 'underline' : ''
                            }`}
                            to="/home"
                        >
                            Homepage
                        </Link>
                        <Link
                            className={`py-1 hover:underline ${
                                pathname === '/bytejam/welcome' ? 'underline' : ''
                            }`}
                            to="/bytejam/welcome"
                        >
                            ByteJam 2024
                        </Link>
                        <Link
                            className={`py-1 hover:underline ${
                                pathname === '/about' ? 'underline' : ''
                            }`}
                            to="/about"
                        >
                            Club Info
                        </Link>
                        <div className="flex flex-col mt-auto pt-5">
                            <Link
                                className={`py-1 hover:underline ${
                                    pathname === '/profile' ? 'underline' : ''
                                }`}
                                to="/profile"
                            >
                                Profile
                            </Link>
                            <form action="/logout" method="POST">
                                <button type="submit" className="py-1 hover:underline">
                                    Log Out
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Outlet equivalent for Inertia */}
            <div id="main-content">
                {/* Inertia will dynamically replace the content here based on the route */}
            </div>
        </>
    );
}
