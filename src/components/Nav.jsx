import { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
import ToggleSwitch from "./ToggleSwitch";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".hamburger-icon")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="absolute mt-5 z-10 w-full py-6 sm:px-12 px-8 [@media(max-width:640px)_or_(max-height:640px)]:mt-0">
      <nav className="relative flex items-center justify-between max-container">
        <p className="text-xl font-semibold text-white font-palanquin">
          EXPLORENOVA
        </p>

        {/* Desktop nav links */}
        <ul className="absolute flex items-center justify-center gap-16 px-6 py-3 transform -translate-x-1/2 rounded-full shadow-md left-1/2 max-lg:hidden backdrop-blur-md bg-white/30">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-base font-normal leading-normal transition duration-300 ease-in-out text-white-400 hover:text-slate-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right-side elements */}
        <div className="flex flex-row-reverse gap-3 max-lg:hidden">
          <button className="px-6 py-2 text-black transition duration-300 bg-white rounded-3xl hover:bg-slate-200">
            Login
          </button>

          <div>
            <ToggleSwitch />
          </div>
        </div>

        {/* Hamburger icon for mobile */}
        <div
          className="hidden max-lg:block hamburger-icon"
          onClick={toggleMenu}
        >
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>

      {/* Mobile menu */}
<div
  ref={menuRef}
  className={`absolute bottom-0 left-0 right-0 flex items-center justify-center px-8 py-6 max-lg:block top-10 transition-all duration-300 ease-in-out ${
    isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
  }`}
>
  <div className="flex flex-col items-center gap-6 p-6 shadow-lg bg-white/90 rounded-xl">
    <ul className="flex flex-col items-center w-full">
      {navLinks.map((item) => (
        <li
          key={item.label}
          className="w-full transition-all duration-300 ease-in-out transform rounded-lg text hover:scale-105 hover:shadow-md hover:bg-slate-100"
        >
          <a
            href={item.href}
            className="block w-full px-4 py-2 text-base font-medium text-center rounded-md text-slate-700 hover:text-slate-500"
            onClick={toggleMenu}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>

    </header>
  );
};

export default Nav;
