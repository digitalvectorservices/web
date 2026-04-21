import React from 'react';
import { Smartphone, Laptop, CreditCard, ArrowRight } from 'lucide-react';
import Feature from "../assets/images/feature.jpg";
import { AnimatedCard, SmallFeature } from './SmallFeature';

export const FeaturesSection = () => {
  const smallFeatures = [
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Apps móviles innovadoras cuidadosamente adaptadas a sus necesidades específicas."
    },
    {
      icon: Laptop,
      title: "Integración con Dispositivos",
      description: "Integración perfecta de dispositivos diseñada para simplificar su experiencia."
    },
    {
      icon: CreditCard,
      title: "Sistemas de Facturación",
      description: "Sistemas de facturación inteligentes creados para simplificar la gestión financiera."
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LADO IZQUIERDO */}
          <div className="lg:col-span-7 flex flex-col justify-start gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
                Descubre Todas las Potentes <br /> Funciones de Codespot
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Desbloquea funciones potentes diseñadas para optimizar flujos de trabajo, 
                mejorar la colaboración, impulsar la innovación y ayudar a que tus ideas lleguen al mundo más rápido.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {smallFeatures.map((f, i) => (
                <SmallFeature key={i} feature={f} index={i} />
              ))}
            </div>
          </div>

          {/* LADO DERECHO - Altura Comprimida */}
          <div className="lg:col-span-5">
            <AnimatedCard className="rounded-[32px]">
              <div className="p-8 flex flex-col items-center text-center justify-center h-full min-h-[450px] gap-6">
                
                {/* Contenedor Visual */}
                <div className="w-full aspect-square max-w-[200px] relative flex items-center justify-center">
                  {/* Resplandor de Fondo */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] opacity-40"></div>
                  
                  {/* El Círculo */}
                  <div className="w-48 h-48 rounded-full relative z-10 border border-white/10 overflow-hidden flex items-center justify-center bg-[#0b0d0b]">
                      <img 
                        src={Feature} 
                        alt="Ilustración de Función" 
                        className="w-full h-full object-cover block" 
                      />
                  </div>
                </div>
                
                {/* Contenido de Texto */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold max-w-[280px] mx-auto leading-snug">
                    Donde la Privacidad se Une con la Excelencia en Rendimiento
                  </h3>
                  <p className="text-gray-400 text-sm max-w-[280px] mx-auto">
                    Diseñado para proporcionar privacidad, confiabilidad y seguridad para las empresas modernas en cualquier lugar.
                  </p>
                  <button className="bg-primary hover:brightness-110 text-black font-black py-3 px-8 rounded-full flex items-center gap-3 mx-auto transition-all active:scale-95 shadow-[0_10px_20px_-10px_rgba(theme(colors.primary),0.5)] text-sm uppercase">
                    EMPEZAR AHORA <ArrowRight size={18} strokeWidth={3} />
                  </button>
                </div>
              </div>
            </AnimatedCard>
          </div>

        </div>
      </div>
    </section>
  );
};