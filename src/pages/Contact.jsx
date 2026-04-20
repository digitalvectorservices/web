import React from "react";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { FeaturesSection } from "../components/FeaturesSection";
import { ServicesGrid } from "../components/ServicesGrid";
import { SupportSection } from "../components/SupportSection";
import { PricingSection } from "../components/PricingSection";
import { ContactSection } from "../components/ContactSection";

export const Contact = () => {
  return (
    <div className="bg-black text-white font-sans">
      <ContactSection/>
    </div>
  );
}