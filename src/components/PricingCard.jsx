import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { goToWhatsapp } from '../utils/whatsapp';

export const PricingCard = ({ plan, sectionPlans, sector }) => {
  const currentIndex = sectionPlans.findIndex((p) => p.name === plan.name);
  const delay = `${currentIndex * 1.5}s`;

  const allFeatures = [...new Set(sectionPlans.flatMap((p) => p.features))];

  const includedFeatures = new Set(
    sectionPlans.slice(0, currentIndex + 1).flatMap((p) => p.features)
  );

  return (
    <div className="relative p-[1.5px] rounded-[32px] overflow-hidden h-full">
      <div className="absolute inset-0 rounded-[32px] border border-white/5 z-0"></div>

      <div
        className="absolute inset-[-1000%] animate-border-snake z-0
        bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,theme(colors.primary)_360deg)]"
        style={{ animationDelay: delay }}
      />

      <div className="relative bg-[#0b0d0b] rounded-[30px] p-8 flex flex-col h-full z-10">
        
        {/* GRUPO SUPERIOR: Título, Descripción y Precio */}
        {/* Usamos un min-h general más pequeño para asegurar alineación del botón sin exceso de espacio */}
        <div className="flex flex-col min-h-[220px]"> 
          <div className="mb-4">
            <h3 className="text-white text-xl font-bold">{plan.name}</h3>
            <p className="text-gray-400 text-[11px] mt-2 leading-relaxed">
              {plan.description}
            </p>
          </div>
          
          <div className="mt-auto mb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">${plan.price}</span>
              {plan.mensual && <span className="text-gray-500 text-sm">/mes</span>}
            </div> 
            <div className="h-8"> {/* Altura fija pequeña para los textos de facturación */}
              {plan.mensual ? (
                <p className="text-gray-500 text-[10px] mt-1 leading-tight">
                  Facturado mensualmente. Cancelá cuando quieras.
                </p>
              ) : (
                <p className="text-gray-500 text-[10px] mt-1">Pago único</p>
              )}
            </div>
          </div>
        </div>

        {/* BOTÓN: Siempre quedará a la misma altura por el min-h del grupo superior */}
        <button 
          className="cursor-pointer w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 bg-primary text-black transition-all hover:brightness-110 active:scale-95 mb-8"
          onClick={() => goToWhatsapp(sector, plan.name)}
        >
          Saber más <ArrowRight size={16} strokeWidth={3} />
        </button>

        {/* FEATURES: El espacio sobrante se va para acá */}
        <ul className="space-y-3">
          {allFeatures.map((feature, idx) => {
            const isIncluded = includedFeatures.has(feature);
            return (
              <li
                key={idx}
                className={`flex items-center gap-3 text-[12px] ${
                  isIncluded ? 'text-white' : 'text-white opacity-30'
                }`}
              >
                {isIncluded ? (
                  <CheckCircle2 size={14} className="text-primary shrink-0" />
                ) : (
                  <XCircle size={14} className="text-gray-600 shrink-0" />
                )}
                <span className="leading-tight">{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};