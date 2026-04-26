import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Support from "../assets/images/support.webp";
import { useNavigate } from 'react-router-dom';

export const SupportSection = () => {
  const navigate = useNavigate();
  const points = [
    "Gestión integral y actualizaciones periódicas de tu plataforma",
    "Respuesta rápida ante cualquier necesidad o cambio en tu estrategia",
    "Optimización constante basada en resultados y nuevas tendencias"
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Usamos la misma lógica de AnimatedCard para el borde */}
        <div className="relative p-[1.5px] rounded-[32px] overflow-hidden">
          {/* Track estático */}
          <div className="absolute inset-0 rounded-[32px] border border-white/5 z-0"></div>
          
          {/* Borde animado (Snake) */}
          <div className="absolute inset-[-1000%] animate-border-snake z-0
            bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,theme(colors.primary)_360deg)]"
          />

          {/* Contenedor de contenido principal */}
          <div className="relative bg-[#0b0d0b] rounded-[30px] z-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              
              {/* Lado izquierdo: Contenido */}
              <div className="p-10 lg:p-16 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Acompañamiento Estratégico <br /> para tu Crecimiento
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                    Mantenemos tu plataforma web y redes sociales siempre activas y actualizadas. 
                    Un equipo dedicado a la evolución de tu marca para que tu única preocupación sea atender a tus nuevos clientes.
                  </p>
                </div>

                {/* Lista de puntos */}
                <ul className="space-y-4">
                  {points.map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                      <CheckCircle2 size={20} className="text-white shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>

                {/* Botón */}
                <button className="cursor-pointer bg-primary hover:brightness-110 text-black font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-all active:scale-95 shadow-[0_10px_20px_-10px_rgba(theme(colors.primary),0.5)]"
                onClick={() => {
                  navigate('/services'); 
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                >
                  Ver planes incluidos <ArrowRight size={18} strokeWidth={3} />
                </button>
              </div>

              {/* Lado derecho: Imagen con máscara */}
              <div className="relative h-full min-h-[400px] lg:min-h-full overflow-hidden">
                {/* Resplandor de fondo detrás de la persona */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[120px] rounded-full"></div>
                
                <img 
                  src={Support} 
                  alt="Especialista de Soporte" 
                  className="relative z-10 w-full h-full object-cover object-center lg:scale-110"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};