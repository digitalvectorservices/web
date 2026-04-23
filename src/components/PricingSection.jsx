import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PricingCard } from './PricingCard';
import data from '../data/plans.json';

export const PricingSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sectores = data.sectores;

  // 🔥 Obtener sector desde URL
  const sectorFromUrl = searchParams.get('sector');

  // 🔥 Validar sector (fallback al primero)
  const selectedSector = useMemo(() => {
    const found = sectores.find(s => s.slug === sectorFromUrl);
    return found ? found.slug : sectores[0].slug;
  }, [sectorFromUrl, sectores]);

  const currentSector = sectores.find(s => s.slug === selectedSector);

  // 🔥 Cambiar URL al seleccionar
  const handleChange = (e) => {
    setSearchParams({ sector: e.target.value });
  };

  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Elige tu Plan
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Selecciona el plan que mejor se adapte a tu negocio.
          </p>
        </div>

        {/* Dropdown */}
        <div className="flex justify-center mb-12">
          <select
            value={selectedSector}
            onChange={handleChange}
            className="bg-neutral-900 text-white border border-neutral-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
            {sectores.map((sector, index) => (
              <option key={index} value={sector.slug}>
                {sector.sector}
              </option>
            ))}
          </select>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentSector.planes.map((plan, index) => (
            <PricingCard
              key={index}
              // Pasamos el plan original pero formateamos el precio al vuelo
              plan={{
                ...plan,
                price: plan.price.toLocaleString('es-AR')
              }}
              sectionPlans={currentSector.planes}
              sector={currentSector.sector}
            />
          ))}
        </div>

      </div>
    </section>
  );
};