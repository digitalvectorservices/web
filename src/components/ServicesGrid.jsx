import React from 'react';
import { Cpu, ShieldCheck, Maximize, MessageSquare, ArrowRight, Palette, Zap, Share2, Trophy } from 'lucide-react';
import { Feature } from './Feature';

const features = [
  {
    title: "Diseño con Intención",
    description: "Interfaces limpias y minimalistas que priorizan la estética profesional, eliminando ruidos visuales para que tu trabajo sea el protagonista absoluto.",
    icon: <Palette size={20} />,
  },
  {
    title: "Conversión Directa",
    description: "Estrategias de contacto integradas, desde botones de WhatsApp estratégicos hasta sistemas de reservas, diseñados para transformar visitantes en clientes.",
    icon: <Zap size={20} />,
  },
  {
    title: "Ecosistema Digital",
    description: "Sincronización perfecta entre tu sitio web y tus redes sociales, manteniendo una identidad visual coherente y una narrativa de marca unificada.",
    icon: <Share2 size={20} />,
  },
  {
    title: "Optimización de Autoridad",
    description: "Estructuras SEO y contenido estratégico que no solo mejoran tu visibilidad, sino que te posicionan como un referente experto en tu sector.",
    icon: <Trophy size={20} />,
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
