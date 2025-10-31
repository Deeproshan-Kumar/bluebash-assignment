import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);
  const handleMenu = () => setActive(!active);

  return (
    <header className="shadow-sm z-20">
      <div className="relative h-[80px] flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          React MF
          <small className="block text-gray-500 font-normal text-xs">
            React Micro Frontend - Vite Module Federation
          </small>
        </Link>

        <ul
          className={`fixed top-0 left-0 transition-all duration-300 z-50 ${
            active ? "max-md:translate-x-0" : "max-md:-translate-x-full"
          } bg-blue-900 w-full h-screen p-5 flex flex-col justify-center items-center gap-5 md:static md:h-auto md:w-auto md:bg-white md:flex-row md:gap-10 md:p-0`}
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "font-medium text-md lg:text-[16px] text-white md:text-blue-600"
                : "font-medium text-md lg:text-[16px] text-gray-200 hover:text-blue-600 md:text-gray-500"
            }
            onClick={() => setActive(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-md lg:text-[16px] text-white md:text-blue-600"
                : "font-medium text-md lg:text-[16px] text-gray-200 hover:text-blue-600 md:text-gray-500"
            }
            onClick={() => setActive(false)}
          >
            Chat
          </NavLink>

          <NavLink
            to="/email"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-md lg:text-[16px] text-white md:text-blue-600"
                : "font-medium text-md lg:text-[16px] text-gray-200 hover:text-blue-600 md:text-gray-500"
            }
            onClick={() => setActive(false)}
          >
            Email
          </NavLink>

          <NavLink
            to="/learn"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-md lg:text-[16px] text-white md:text-blue-600"
                : "font-medium text-md lg:text-[16px] text-gray-200 hover:text-blue-600 md:text-gray-500"
            }
            onClick={() => setActive(false)}
          >
            Learn
          </NavLink>
        </ul>

        <button
          className={`absolute right-3 z-50 md:hidden ${
            active ? "text-white" : ""
          }`}
          onClick={handleMenu}
        >
          {active ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
