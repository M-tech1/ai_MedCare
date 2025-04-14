import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { X, Menu } from "lucide-react";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  to: string;
}

interface SideNavProps {
  items: NavItem[];
}

export function SideNav({ items }: SideNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col h-screen bg-gray-900 justify-between">
        {/* <button
          className="p-2 bg-gray-800 text-white rounded-md md:hidden flex "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}

        {/* <div className="text-center text-white mt-5"> AiMedcare</div> */}

        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:w-56 `}
        >
          <div>
            <nav className="flex flex-col p-4 space-y-4 ">
              {items.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-4 py-2 flex items-center rounded space-x-2 hover:text-gray-300 w-full h-14 ${
                      isActive ? "bg-primary text-white" : "text-white "
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
        {/* className=" text-center flex flex-row justify-center items-center gap-2 my-5  " */}

        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:w-56 text-center items-center flex flex-row justify-center my-3 hover:cursor-pointer `}
        >
          <BiLogOutCircle size={30} className="text-red-500 mx-2" />
          <span className="text-sm capitalize text-white">logout</span>
        </div>
      </div>
    </>
  );
}
