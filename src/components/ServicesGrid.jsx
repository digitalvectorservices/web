import React from 'react';
import { Cpu, ShieldCheck, Maximize, MessageSquare, ArrowRight } from 'lucide-react';
import { Feature } from './Feature';

const features = [
  {
    title: "APIs Potentes",
    description: "Construye sistemas más inteligentes utilizando APIs robustas y bien documentadas que simplifican las integraciones y aceleran los procesos de desarrollo.",
    icon: <Cpu size={20} />,
  },
  {
    title: "Seguro y Aislado",
    description: "Mantén el control total con una infraestructura aislada diseñada para proteger la información sensible y prevenir riesgos entre entornos.",
    icon: <ShieldCheck size={20} />,
  },
  {
    title: "Listo para Escalar",
    description: "Escala tus aplicaciones sin problemas con una arquitectura optimizada para la velocidad, la confiabilidad y los requisitos comerciales en constante evolución.",
    icon: <Maximize size={20} />,
  },
  {
    title: "Contexto Continuo",
    description: "Mantén una continuidad fluida con contexto en tiempo real que persiste a través de sesiones, flujos de trabajo y entornos colaborativos.",
    icon: <MessageSquare size={20} />,
  },
];

export const ServicesGrid = () => {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Feature feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
