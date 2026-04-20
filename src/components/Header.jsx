"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"
import { navItems } from "../utils/lib";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-50 px-6 lg:px-16 py-3 lg:py-6">
      <div className="flex items-center gap-10">

        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-14 md:h-18 w-auto object-contain"/>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-lg text-gray-300 uppercase">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-green-900/40 px-5 py-2 rounded-lg text-white"
                  : "hover:text-white py-2 px-5"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">

          <button className="hidden lg:block bg-primary hover:bg-primary/80 px-7 py-3 rounded-xl font-semibold text-white cursor-pointer">
            Solicitar propuesta
          </button>

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-6 flex flex-col gap-4 bg-black/80 backdrop-blur-md p-6 rounded-2xl text-white lg:hidden">
          
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)} // closes menu on click
              className={({ isActive }) =>
                isActive
                  ? "bg-green-900/40 px-5 py-3 rounded-lg"
                  : "px-5 py-3 hover:text-white"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button className="mt-4 bg-primary px-6 py-3 rounded-xl font-semibold">
            Get in Touch
          </button>
          
        </div>
    )}
    </header>
  );
};