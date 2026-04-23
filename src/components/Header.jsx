"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"
import { navItems } from "../utils/lib";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Mail";
import { 
  Menu as MenuIcon, 
  X as CloseIcon 
} from "lucide-react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const subject = encodeURIComponent("Consulta Web");
  const body = encodeURIComponent(
    "Hola Digital Vector,\n\nQuisiera recibir más información sobre sus servicios.\n\nGracias."
  );

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=digitalvectorservices@gmail.com&su=${subject}&body=${body}`;

    const socialLinks = [
    {
      href: "https://www.linkedin.com/company/digital-vector-services/",
      icon: <LinkedInIcon fontSize="medium" color="inherit" />,
      label: "LinkedIn"
    },
    {
      href: gmailLink,
      icon: <Email fontSize="medium" color="inherit" />,
      label: "Email"
    }
  ];

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

          <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-5">
              {socialLinks.map((link) => (
               <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          {/* <button className="hidden lg:block bg-primary hover:bg-primary/80 px-7 py-3 rounded-xl font-semibold text-white cursor-pointer">
            Solicitar propuesta
          </button> */}

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
                  ? "bg-green-900/40 px-5 py-3 rounded-lg capitalize"
                  : "px-5 py-3 hover:text-white capitalize"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="flex items-center gap-6 px-5 mt-4 pt-4 border-t border-white/5">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          
        </div>
    )}
    </header>
  );
};