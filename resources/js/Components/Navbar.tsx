import { Link, usePage } from '@inertiajs/react'; // Import Inertia's Link and usePage hooks
import { useState } from 'react';
import { IconMenu2, IconX } from "@tabler/icons-react";
export default function BaseLayout() {
  const { url } = usePage(); // Use Inertia's usePage hook to get the current URL
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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
          <div className="text-ihccWhite h-10 text-3xl pl-2 flex content-center items-center">IHCC CSDC</div>
          <div
            className="text-ihccYellow rounded-full p-2 bg-ihccWhite ml-auto border-ihccRed border-2 cursor-pointer"
            onClick={toggleSidebar}
          >
            <IconMenu2 size={35} />
          </div>
        </nav>
      </div>

      {/* Sidebar */}
      <div
        className={`z-20 fixed rounded-[28px] top-4 right-4 min-h-16 bg-ihccWhite text-ihccRed border-2 border-ihccYellow transition-opacity duration-300 ease-in-out shadow-2xl ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0'
        } ${isSidebarOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="relative p-2">
          <button
            className="absolute top-0 right-0 text-ihccRed p-2"
            onClick={closeSidebar}
          >
            <IconX size={35} />
          </button>
          <div className="flex flex-col text-2xl p-2 mt-8 text-left h-full">
            <Link
              className={`py-1 hover:underline ${
                url === '/home' ? 'underline' : ''
              }`}
              href="/home" as="button"
            >
              Homepage
            </Link>
            <Link
              className={`py-1 hover:underline ${
                url === '/bytejam/welcome' ? 'underline' : ''
              }`}
              href="/bytejam/welcome" as="button"
            >
              ByteJam 2024
            </Link>
            <Link
              className={`py-1 hover:underline ${
                url === '/about' ? 'underline' : ''
              }`}
              href="/about" as="button"
            >
              Club Info
            </Link>
            <div className="flex flex-col mt-auto pt-5">
            <Link
              className={`py-1 hover:underline ${
                url === '/profile' ? 'underline' : ''
              }`}
              href="/profile" as="button"
            >
              Profile
            </Link>
              <Link className="py-1 hover:underline" method="post" href={route('logout')} as="button">
                Log Out
              </Link>
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
