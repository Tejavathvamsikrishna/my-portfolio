import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white px-8 md:px-24 py-5 flex justify-between items-center relative z-50">
      <div className="flex items-center gap-2">
        <h1 className="text-lg md:text-xl font-semibold tracking-wide hover:text-[#D3E97A] transition">
          <NavLink to="/">ROBERT GARCIA</NavLink>
        </h1>
      </div>

      <ul className="hidden md:flex gap-10 text-gray-300 text-sm font-semibold">
        <li>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `transition-colors cursor-pointer ${
                isActive
                  ? "text-[#D3E97A] underline underline-offset-4 decoration-2"
                  : "hover:text-[#D3E97A]"
              }`
            }
          >
            Work
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors cursor-pointer ${
                isActive
                  ? "text-[#D3E97A] underline underline-offset-4 decoration-2"
                  : "hover:text-[#D3E97A]"
              }`
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors cursor-pointer ${
                isActive
                  ? "text-[#D3E97A] underline underline-offset-4 decoration-2"
                  : "hover:text-[#D3E97A]"
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {" "}
        {menuOpen ? <X size={26} /> : <Menu size={26} />}{" "}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-8 md:hidden text-gray-300 text-sm font-semibold">
          <NavLink
            to="/work"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `transition-colors ${
                isActive ? "text-[#D3E97A]" : "hover:text-[#D3E97A]"
              }`
            }
          >
            Work
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `transition-colors ${
                isActive ? "text-[#D3E97A]" : "hover:text-[#D3E97A]"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `transition-colors ${
                isActive ? "text-[#D3E97A]" : "hover:text-[#D3E97A]"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
