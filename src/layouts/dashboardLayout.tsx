import { useState } from "react";
import { Outlet } from "react-router";
import { Home, Settings, Menu, X } from "lucide-react";

export function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full h-[100vh] bg-slate-400 flex flex-row">
        <aside className="bg-red-400 flex flex-row justify-start h-full w-[15rem]">
          <div className="flex">
            <button
              className="p-2 bg-gray-800 text-white rounded-md md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div
              className={`${
                isOpen ? "translate-x-0" : "-translate-x-full"
              } fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:w-64`}
            >
              <nav className="flex flex-col p-4 space-y-4">
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-gray-300"
                >
                  <Home size={20} />
                  <span>Home</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-gray-300"
                >
                  <Settings size={20} />
                  <span>Settings</span>
                </a>
              </nav>
            </div>

            <div className="flex-1 p-4">Main Content Here</div>
          </div>
        </aside>
        <div className="bg-blue-200 w-full h-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}
