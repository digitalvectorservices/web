import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Upbutton = () => {
  // Esta es la función que se ejecuta al hacer clic
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScrollToTop}
      // Asegúrate de que 'bg-primary' exista en tu tailwind.config o cámbialo a 'bg-blue-500'
      className="fixed bottom-6 left-6 bg-primary p-3 rounded-lg text-black hover:brightness-110 transition-all shadow-2xl active:scale-95 z-"
      aria-label="Subir al inicio"
    >
      <ArrowUp size={20} strokeWidth={3} />
    </button>
  );
};