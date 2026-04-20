import React from "react";
import { OurStory } from "../components/OurStory";
import { SmallFeature } from "../components/SmallFeature";
// Iconos actualizados para un perfil más técnico/vectorial
import { Code2, Zap, Layers } from 'lucide-react';

const FSection = [
  {
    icon: Code2, // Representa desarrollo de software sólido
    title: "Arquitectura Escalable",
    description: "Diseñamos sistemas robustos utilizando React y Vite para garantizar un rendimiento óptimo bajo cualquier carga."
  },
  {
    icon: Layers, // Representa la integración y capas de servicios
    title: "Soluciones Full-Stack",
    description: "Integramos interfaces dinámicas con arquitecturas de backend eficientes, priorizando la seguridad y la velocidad."
  },
  {
    icon: Zap, // Representa optimización y rapidez (Digital Vector)
    title: "Optimización de Rendimiento",
    description: "Refinamos cada línea de código para lograr tiempos de carga mínimos y una experiencia de usuario fluida."
  }
];

export const AboutUs = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto font-sans">
        
        <OurStory />
        
        {/* Espaciado ajustado para dar aire entre componentes */}
        <div className="mt-32 flex flex-col justify-start gap-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Impulsamos el futuro de <br /> <span className="text-primary">Digital Vector Services</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Desbloqueamos el potencial de tu negocio mediante flujos de trabajo optimizados, 
              tecnologías modernas y una ejecución técnica impecable que acelera tu llegada al mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FSection.map((f, i) => (
              <SmallFeature key={i} feature={f} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};