"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg"

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-50 px-6 lg:px-16 py-6 lg:py-8">
      <div className="flex items-center gap-10">

        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-36 h-36" />
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-lg text-gray-300 uppercase">
          <span className="bg-green-900/40 px-5 py-2 rounded-lg text-white">
            HOME
          </span>
          <span className="hover:text-white cursor-pointer">SERVICIOS</span>
          <span className="hover:text-white cursor-pointer">¿QUIENES SOMOS?</span>
          <span className="hover:text-white cursor-pointer">Contacto</span>
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
          <span className="bg-green-900/40 px-5 py-3 rounded-lg">HOME</span>
          <span>SERVICES</span>
          <span>ABOUT</span>
          <span>NEWS</span>
          <span>CONTACT</span>

          <button className="mt-4 bg-green-500 px-6 py-3 rounded-xl font-semibold">
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
};