// import Hero from "./webSections/hero";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "../../assets/images/logo-dark.png";

const NavBar = () => {
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setValue("#quick-chat");
  };
  return (
    <>
      <nav className="bg-white shadow-xl w-full fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4   gap-40 ">
          <a href="#" className="text-xl font-bold">
            <img src={logo} alt="logo" className="w-32 " />
          </a>
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul
            className={cn(
              "md:flex md:space-x-6 md:static absolute left-0 right-0 bg-white md:bg-transparent top-16 md:top-auto p-4 md:p-0 transition-transform transform md:translate-x-0 duration-500 ease-in-out",
              isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            )}
          >
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 px-2 hover:text-primary hover:bg-lite "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 md:py-0 px-2 hover:text-primary hover:bg-lite"
              >
                Services
              </a>
            </li>
            {/* <li>
              <a
                href="#price"
                className="block py-2 md:py-0 px-2 hover:text-primary hover:bg-lite"
              >
                Price
              </a>
            </li> */}
            <li>
              <a
                href="#contact"
                className="block py-2 md:py-0 px-2 hover:text-primary hover:bg-lite"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#quick_chat"
                className="block py-2 md:py-0 px-4 hover:text-primary hover:bg-lite "
              >
                Chat
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
