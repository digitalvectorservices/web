import { CheckCircle2, ArrowRight } from 'lucide-react';

export const PricingCard = ({ plan, index }) => {
  // Calculamos un retraso basado en el índice para que las animaciones no coincidan
  const delay = `${index * 1.5}s`; 

  return (
    <div className="relative p-[1.5px] rounded-[32px] overflow-hidden h-full">
      {/* Borde Estático de fondo */}
      <div className="absolute inset-0 rounded-[32px] border border-white/5 z-0"></div>
      
      {/* Animación de Borde Snake Desincronizada */}
      <div 
        className="absolute inset-[-1000%] animate-border-snake z-0
        bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,theme(colors.primary)_360deg)]"
        style={{ animationDelay: delay }} // Aplicamos el delay dinámico
      />

      {/* Contenido de la Tarjeta */}
      <div className="relative bg-[#0b0d0b] rounded-[30px] p-8 flex flex-col h-full z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="min-h-[60px]">
            <h3 className="text-white text-xl font-bold">{plan.name}</h3>
            <p className="text-gray-400 text-[11px] mt-2 leading-relaxed">{plan.description}</p>
          </div>
          
          {/* Badge para el plan popular */}
          {plan.name === "Business" && (
            <span className="bg-primary/20 text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/30 uppercase tracking-wider shrink-0">
              Popular
            </span>
          )}
        </div>

        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">${plan.price}</span>
            <span className="text-gray-500 text-sm">/mes</span>
          </div>
          <p className="text-gray-500 text-[10px] mt-1">Facturado anualmente</p>
        </div>

        {/* Botón de acción */}
        <button className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 bg-primary text-black transition-all hover:brightness-110 active:scale-95 mb-8 shadow-[0_0_20px_rgba(theme(colors.primary),0.2)]">
          Empezar ahora <ArrowRight size={16} strokeWidth={3} />
        </button>

        {/* Lista de características */}
        <ul className="space-y-4 flex-grow">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-300 text-[12px]">
              <CheckCircle2 size={16} className="text-white shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};