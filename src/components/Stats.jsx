"use client";
import { useEffect, useState } from "react";

const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const Stats = () => {
  return (
    <section className="w-full bg-black text-white px-6 md:px-16 py-16 md:py-20">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 items-center text-center md:text-left">

        {/* Título */}
        <div className="sm:col-span-2 md:col-span-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight tracking-tight">
            Cambiando <br /> Ideas con Impacto
          </h2>
        </div>

        {/* Estadística 1 */}
        <div>
          <p className="text-6xl sm:text-7xl md:text-[96px] font-medium tracking-tighter leading-none text-[var(--color-primary)]">
            <Counter end={17} suffix="+" />
          </p>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Proyectos exitosos
          </p>
        </div>

        {/* Estadística 2 */}
        <div>
          <p className="text-6xl sm:text-7xl md:text-[96px] font-medium tracking-tighter leading-none text-[var(--color-primary)]">
            <Counter end={60} suffix="%" />
          </p>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Lanzamientos más rápidos
          </p>
        </div>

        {/* Estadística 3 */}
        <div>
          <p className="text-6xl sm:text-7xl md:text-[96px] font-medium tracking-tighter leading-none text-[var(--color-primary)]">
            <Counter end={120} suffix="%" />
          </p>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Aumento promedio del ROI
          </p>
        </div>

      </div>
    </section>
  );
};