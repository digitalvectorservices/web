import React, { useState } from 'react';
import { PricingCard } from './PricingCard';
import data from '../data/plans.json';

export const PricingSection = () => {
  const [selectedSector, setSelectedSector] = useState(data.sectores[0].sector);

  const sectores = data.sectores;
  const currentSector = sectores.find(s => s.sector === selectedSector);

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
            onChange={(e) => setSelectedSector(e.target.value)}
            className="bg-neutral-900 text-white border border-neutral-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
            {sectores.map((sector, index) => (
              <option key={index} value={sector.sector}>
                {sector.sector}
              </option>
            ))}
          </select>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentSector.planes.map((plan, index) => (
            <PricingCard key={index} plan={plan} sectionPlans={currentSector.planes} />
          ))}
        </div>

      </div>
    </section>
  );
};