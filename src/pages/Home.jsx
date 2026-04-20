import React from "react";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { FeaturesSection } from "../components/FeaturesSection";
import { ServicesGrid } from "../components/ServicesGrid";
import { SupportSection } from "../components/SupportSection";

export const Home = () => {
  return (
    <div className="bg-black text-white font-sans">
      <Hero />
      <Stats/>
      <FeaturesSection/>
      <ServicesGrid/>
      <SupportSection/>
    </div>
  );
}