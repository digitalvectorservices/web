import React from "react";
import { ServicesGrid } from "../components/ServicesGrid";
import { PricingSection } from "../components/PricingSection";

export const Services = () => {
  return (
    <div className="bg-black text-white font-sans">
      <ServicesGrid/>
      <PricingSection/>
    </div>
  );
}