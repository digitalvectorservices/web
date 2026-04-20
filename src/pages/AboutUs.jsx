import React from "react";
import { OurStory } from "../components/OurStory";
import { SmallFeature } from "../components/SmallFeature";
import { Smartphone, Laptop, CreditCard } from 'lucide-react';

const FSection = [
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Innovative mobile apps carefully tailored to your special needs."
  },
  {
    icon: Laptop,
    title: "Integration With Devices",
    description: "Seamless device integration designed to simplify your experience."
  },
  {
    icon: CreditCard,
    title: "Billing Systems",
    description: "Smart billing systems built to simplify financial management."
  }
];

export const AboutUs = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Contenedor tipo Caja (Box-shaped) */}
      <div className="max-w-7xl mx-auto font-sans">
        
        <OurStory />
        
        <div className="mt-20 lg:col-span-7 flex flex-col justify-start gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Discover All The Powerful <br /> Codespot Features
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Unlock powerful features designed to streamline workflows, 
              enhance collaboration, spark innovation, and help your ideas reach the world faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FSection.map((f, i) => (
              <SmallFeature key={i} feature={f} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};