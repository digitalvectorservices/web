"use client";
import { useState, useEffect } from "react";
// Importa las versiones mobile
import hero1 from "../assets/images/hero1.webp";
import hero1m from "../assets/images/hero1m.webp"; 
import hero2 from "../assets/images/ourStory.webp";
import hero2m from "../assets/images/ourStory.webp"; 
import avatar1 from "../assets/images/Avatar1.webp";
import avatar2 from "../assets/images/Avatar2.webp";
import avatar3 from "../assets/images/Avatar3.webp";

const slides = [
  {
    desktopImage: hero1,
    mobileImage: hero1m,
    title: "tu marca en el centro de la escena",
    description:
      "Diseñamos tu identidad visual y gestionamos tus redes sociales con estrategia profesional. Creamos una imagen sólida y coherente que atrae clientes y posiciona tu nombre en el mercado.",
  },
  {
    desktopImage: hero2,
    mobileImage: hero2m,
    title: "tu próximo local es digital",
    description:
      "Desarrollamos sitios web y tiendas online diseñadas para convertir visitas en ventas. Creamos una plataforma rápida, moderna y profesional que trabaja por tu negocio las 24 horas.",
  }
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detector de tamaño de pantalla
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Ejecución inicial
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[current];
  
  // Seleccionamos la imagen basada en el estado isMobile
  const activeImage = isMobile ? slide.mobileImage : slide.desktopImage;

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden">

      {/* Fondo con transición suave al cambiar de imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105"
        style={{ backgroundImage: `url(${activeImage.src || activeImage})` }}
      />

      {/* Capa de superposición (Overlay) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 md:px-16">
        <div className="max-w-md sm:max-w-lg md:max-w-xl text-white text-center md:text-left flex flex-col items-center md:items-start">

          {/* Título en minúsculas por estilo */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight tracking-tight lowercase first-letter:uppercase">
            {slide.title}
          </h1>

          {/* Descripción */}
          <p className="mt-6 lg:flex text-gray-300 text-base sm:text-lg hidden">
            {slide.description}
          </p>

          {/* Llamadas a la acción */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="cursor-pointer bg-[var(--color-primary)] text-white px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl font-medium hover:brightness-110 transition">
              Empezar ahora →
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-8 lg:flex items-center gap-4 justify-center md:justify-start hidden">
            <div className="flex -space-x-3">
              {[avatar1, avatar2, avatar3].map((avatar, idx) => (
                <img key={idx} src={avatar} className="w-8 h-8 rounded-full border border-black" alt={`Cliente ${idx + 1}`} />
              ))}
            </div>
            <div>
              <p className="text-sm text-gray-300">Nuestros clientes, nuestra mejor referencia</p>
              <p className="text-sm text-white">★★★★★ 4.9</p>
            </div>
          </div>

        </div>
      </div>

      {/* Flechas */}
      <button onClick={prev} className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full transition">‹</button>
      <button onClick={next} className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full transition">›</button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${i === current ? "bg-[var(--color-primary)] scale-110" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
};