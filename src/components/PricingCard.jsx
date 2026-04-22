import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export const PricingCard = ({ plan, sectionPlans }) => {
  // 🔥 Encontrar índice REAL del plan
  const currentIndex = sectionPlans.findIndex(
    (p) => p.name === plan.name
  );

  const delay = `${currentIndex * 1.5}s`;

  // 🔥 Todas las features (sin duplicados)
  const allFeatures = [
    ...new Set(sectionPlans.flatMap((p) => p.features))
  ];

  // 🔥 Features incluidas (acumuladas)
  const includedFeatures = new Set(
    sectionPlans
      .slice(0, currentIndex + 1)
      .flatMap((p) => p.features)
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
        <div className="flex justify-between items-start mb-6">
          <div className="min-h-[60px]">
            <h3 className="text-white text-xl font-bold">{plan.name}</h3>
            <p className="text-gray-400 text-[11px] mt-2 leading-relaxed">
              {plan.description}
            </p>
          </div>
        </div>

        <button className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 bg-primary text-black transition-all hover:brightness-110 active:scale-95 mb-8">
          Empezar ahora <ArrowRight size={16} strokeWidth={3} />
        </button>

        {/* FEATURES */}
        <ul className="space-y-4 flex-grow">
          {allFeatures.map((feature, idx) => {
            const isIncluded = includedFeatures.has(feature);

            return (
              <li
                key={idx}
                className={`flex items-center gap-3 text-[12px] ${
                  isIncluded
                    ? 'text-white'
                    : 'text-white opacity-60'
                }`}
              >
                {isIncluded ? (
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                ) : (
                  <XCircle size={16} className="text-gray-600 shrink-0" />
                )}

                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};