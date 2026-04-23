import React from 'react';
import { MapPin } from 'lucide-react';
import { navItems } from '../utils/lib';
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { TermsAndConditions } from "../pages/TermsAndConditions";
import { legalItems } from '../utils/legalitems';

export const Footer = () => {
  const legalLinks = ['Privacy Policy', 'Terms & Conditions'];

  return (
    <footer className="bg-black text-white pt-16 pb-10 px-6 relative overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Contenedor Principal: 3 Columnas en Mobile (apiladas), 1 Fila en Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 mb-12">

          {/* Columna 1: Navegación Principal */}
          <nav className="flex flex-col md:flex-row items-center md:items-start flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 order-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className={`text-sm font-medium capitalize transition-colors hover:text-primary ${item.label === 'home' ? 'text-primary' : 'text-white'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Columna 2: Enlaces Legales (Siempre al centro) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-y-3 md:gap-x-8 order-2">
            {legalItems.map((link) => (
              <a
                key={link.label}
                href={link.path}
                className="text-sm font-medium text-white hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Columna 3: Ubicación (Centro en mobile, derecha en desktop) */}
          <div className="flex items-center justify-center lg:justify-end gap-2 text-sm text-gray-300 order-3">
            <MapPin size={16} className="text-primary shrink-0" />
            <span className="text-center lg:text-right">
              Ciudad Autónoma de Buenos Aires, 1428, Argentina
            </span>
          </div>
        </div>

        {/* Línea Divisora */}
        <div className="w-full h-[1px] bg-white/10 mb-8"></div>

        {/* Fila Inferior: Copyright y Botón */}
        <div className="flex flex-col items-center justify-center relative">
          <p className="text-xs md:text-sm text-gray-500 text-center">
            Copyright © 2026 - Digital Vector Services
          </p>
        </div>
      </div>
    </footer>
  );
};

