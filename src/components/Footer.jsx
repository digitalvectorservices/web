import React from 'react';
import { MapPin, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const navLinks = ['Home', 'Services', 'About', 'News', 'Contact'];
  const legalLinks = ['Privacy Policy', 'Terms & Conditions'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-10 px-6 relative overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Contenedor Principal: 3 Columnas en Mobile (apiladas), 1 Fila en Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 mb-12">
          
          {/* Columna 1: Navegación Principal */}
          <nav className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 order-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  link === 'Home' ? 'text-primary' : 'text-white'
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Columna 2: Enlaces Legales (Siempre al centro) */}
          <div className="flex justify-center gap-8 order-2">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-white hover:text-primary transition-colors whitespace-nowrap"
              >
                {link}
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
            Copyright © 2026 - WordPress Theme by CreativeThemes
          </p>

          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 lg:absolute lg:bottom-0 lg:right-0 bg-primary p-3 rounded-lg text-black hover:brightness-110 transition-all shadow-2xl active:scale-95 z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
    </footer>
  );
};

