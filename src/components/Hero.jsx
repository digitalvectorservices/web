"use client";
import { useState, useEffect } from "react";
import hero1 from "../assets/images/hero1.jpeg";
import hero2 from "../assets/images/ourStory.jpeg";
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";
import avatar3 from "../assets/images/avatar3.png";

const slides = [
  {
    image: hero1,
    title: "Tu Marca en el Centro de la Escena",
    description:
      "Diseñamos tu identidad visual y gestionamos tus redes sociales con estrategia profesional. Creamos una imagen sólida y coherente que atrae clientes y posiciona tu nombre en el mercado.",
  },
  {
    image: hero2,
    title: "Tu Próximo Local es Digital",
    description:
      "Desarrollamos sitios web y tiendas online diseñadas para convertir visitas en ventas. Creamos una plataforma rápida, moderna y profesional que trabaja por tu negocio las 24 horas.",
  }
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

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

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden">

      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Capa de superposición (Overlay) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 md:px-16">
        <div className="max-w-md sm:max-w-lg md:max-w-xl text-white text-center md:text-left flex flex-col items-center md:items-start">

          {/* Título */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight tracking-tight">
            {slide.title}
          </h1>

          {/* Descripción */}
          <p className="mt-6 lg:flex text-gray-300 text-base sm:text-lg hidden">
            {slide.description}
          </p>

          {/* Llamadas a la acción (CTA) */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">

            {/* Primario */}
            <button className="cursor-pointer bg-[var(--color-primary)] text-white px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl font-medium hover:brightness-110 transition">
              Empezar ahora →
            </button>

            {/* Secundario */}
            {/* <button className="cursor-pointer px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl font-medium text-white border border-white/30 hover:bg-white/10 transition">
              Saber más →
            </button> */}

          </div>

          {/* Valoración / Social Proof */}
          <div className="mt-8 lg:flex items-center gap-4 justify-center md:justify-start hidden ">
            <div className="flex -space-x-3">
              <img src={avatar1} className="w-8 h-8 rounded-full border border-black" alt="Avatar 1" />
              <img src={avatar2} className="w-8 h-8 rounded-full border border-black" alt="Avatar 2" />
              <img src={avatar3} className="w-8 h-8 rounded-full border border-black" alt="Avatar 3" />
            </div>

            <div>
              <p className="text-sm text-gray-300">
                Nuestros clientes, nuestra mejor referencia
              </p>
              <p className="text-sm text-white">★★★★★ 4.9</p>
            </div>
          </div>

        </div>
      </div>

      {/* Flecha Izquierda */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full"
      >
        ‹
      </button>

      {/* Flecha Derecha */}
      <button
        onClick={next}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full"
      >
        ›
      </button>

      {/* Puntos de navegación (Dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current
                ? "bg-[var(--color-primary)] scale-110"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
};