import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white px-5 sm:px-10 md:px-20 lg:px-24 py-4 sm:py-5 flex justify-between items-center relative z-50 shadow-md">
      {/* ===== Logo / Name ===== */}
      <div className="flex items-center gap-2">
        <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-wide hover:text-[#D3E97A] transition">
          <NavLink to="/">ROBERT GARCIA</NavLink>
        </h1>
      </div>

      {/* ===== Desktop Menu ===== */}
      <ul className="hidden md:flex gap-6 lg:gap-10 text-gray-300 text-sm md:text-base font-semibold">
        {["work", "about", "contact"].map((route, i) => (
          <li key={i}>
            <NavLink
              to={`/${route}`}
              className={({ isActive }) =>
                `transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "text-[#D3E97A] underline underline-offset-4 decoration-2"
                    : "hover:text-[#D3E97A]"
                }`
              }
            >
              {route.charAt(0).toUpperCase() + route.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* ===== Mobile Menu Button ===== */}
      <button
        className="md:hidden text-white transition hover:opacity-80"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* ===== Mobile Menu Dropdown ===== */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-8 md:hidden text-gray-300 text-sm font-semibold shadow-lg border-t border-gray-800 animate-slideDown">
          {["work", "about", "contact"].map((route, i) => (
            <NavLink
              key={i}
              to={`/${route}`}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive ? "text-[#D3E97A]" : "hover:text-[#D3E97A]"
                }`
              }
            >
              {route.charAt(0).toUpperCase() + route.slice(1)}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
