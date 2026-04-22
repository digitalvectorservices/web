import React from "react";
import { OurStory } from "../components/OurStory";
import { SmallFeature } from "../components/SmallFeature";
// Iconos actualizados para un perfil más técnico/vectorial
import { Code2, Zap, Layers } from 'lucide-react';

const FSection = [
  {
    icon: Code2,
    title: "Ingeniería de Vanguardia",
    description: "Desarrollamos con el stack más moderno (React + Vite) para crear soluciones que no solo funcionan, sino que definen el estándar de tu industria."
  },
  {
    icon: Layers,
    title: "Ecosistemas Integrados",
    description: "Conectamos interfaces dinámicas con arquitecturas sólidas, asegurando que cada capa de tu negocio digital trabaje en total sincronía y seguridad."
  },
  {
    icon: Zap,
    title: "Velocidad de Ejecución",
    description: "Maximizamos el rendimiento técnico para acelerar tu llegada al mercado, convirtiendo la velocidad de carga en una ventaja competitiva real."
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